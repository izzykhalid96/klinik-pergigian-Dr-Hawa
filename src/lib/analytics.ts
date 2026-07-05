// Lightweight GA4 analytics with automatic conversion tracking.
//
// Setup: create a GA4 property at https://analytics.google.com, copy the
// measurement ID (G-XXXXXXXXXX), and set VITE_GA_ID in the Vercel project
// environment variables. Without the ID this module is a no-op, so local
// dev stays clean.
//
// Conversions tracked (via one delegated click listener — no per-component
// wiring needed):
//   whatsapp_click   — any link to wa.me / api.whatsapp.com
//   call_click       — any tel: link
//   directions_click — any Waze / Google Maps link
// Each event carries a `location` param: the id of the nearest <section>,
// so reports show which part of the page converts.

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

const GA_ID = import.meta.env.VITE_GA_ID as string | undefined

function initGtag(id: string) {
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', id)
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params)
  }
}

function eventForHref(href: string): string | null {
  if (/wa\.me|api\.whatsapp\.com/.test(href)) return 'whatsapp_click'
  if (href.startsWith('tel:')) return 'call_click'
  if (/waze\.com|google\.[a-z.]+\/maps|maps\.app\.goo\.gl/.test(href)) return 'directions_click'
  return null
}

function onDocumentClick(e: MouseEvent) {
  const link = (e.target as HTMLElement).closest?.('a[href]') as HTMLAnchorElement | null
  if (!link) return
  const eventName = eventForHref(link.getAttribute('href') || '')
  if (!eventName) return
  const section = link.closest('section[id], footer, nav')
  const location = section?.id || section?.tagName.toLowerCase() || 'page'
  trackEvent(eventName, { location })
}

export function initAnalytics() {
  if (!GA_ID) return
  initGtag(GA_ID)
  document.addEventListener('click', onDocumentClick, { capture: true })
}
