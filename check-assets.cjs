// Pre-push guard: every asset referenced from src/ or index.html must exist on
// disk AND be tracked by git. Untracked assets pass locally and 404 on Vercel.
const fs = require('fs')
const path = require('path')
const cp = require('child_process')

const tracked = new Set(cp.execSync('git ls-files', { encoding: 'utf8' }).split(/\r?\n/).filter(Boolean))
const refs = new Set()
const EXT = /\.(png|jpe?g|svg|webp|ico|gif|avif)$/i

const walk = (d) =>
  fs.readdirSync(d, { withFileTypes: true }).forEach((e) => {
    const p = path.posix.join(d, e.name)
    if (e.isDirectory()) return walk(p)
    if (!/\.(tsx?|css|html)$/.test(e.name)) return
    const t = fs.readFileSync(p, 'utf8')
    for (const m of t.matchAll(/['"`]([^'"`\n]+?\.(?:png|jpe?g|svg|webp|ico|gif|avif))['"`]/gi)) {
      refs.add(p + ' -> ' + m[1])
    }
  })

walk('src')
const idx = fs.readFileSync('index.html', 'utf8')
for (const m of idx.matchAll(/(?:src|href)="([^"]+?\.(?:png|jpe?g|svg|webp|ico|gif|avif))"/gi)) {
  refs.add('index.html -> ' + m[1])
}

let bad = 0
for (const r of refs) {
  const [from, spec] = r.split(' -> ')
  if (/^https?:/.test(spec) || !EXT.test(spec)) continue
  const f = spec.startsWith('/') ? 'public' + spec : path.posix.join(path.posix.dirname(from), spec)
  const exists = fs.existsSync(f)
  const isTracked = tracked.has(f)
  if (!exists || !isTracked) {
    bad++
    console.log(`${exists ? '' : 'MISSING '}${isTracked ? '' : 'UNTRACKED '}${f}   (from ${from})`)
  }
}
console.log(bad ? `\n${bad} problem(s)` : 'all referenced assets exist and are tracked')
process.exit(bad ? 1 : 0)
