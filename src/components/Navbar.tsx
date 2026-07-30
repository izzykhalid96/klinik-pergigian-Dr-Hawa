import { useState, useEffect } from 'react'
import { Menu, X, Navigation } from 'lucide-react'
import Logo from './Logo'

const WA_LINK = 'https://wa.me/60122412034'
// Waze MUST use coords (ll=lat,lon), NOT ?q=name — q only opens the app without a
// destination. Coords from Google Maps page HTML (!3d<lat>!4d<lon>).
// Navbar Waze points at the Nilai HQ; both branches have their own Waze buttons
// in Location.tsx.
const WAZE_LINK = 'https://waze.com/ul?ll=2.821205,101.788947&navigate=yes'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Find Us', href: '#location' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <Logo />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-gray-600 hover:text-[#E23E8F] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <a
            href={WAZE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 border border-[#E23E8F] text-[#E23E8F] hover:bg-[#FDF0F7] text-sm font-semibold px-4 py-2.5 rounded-full transition-colors"
          >
            <Navigation size={16} />
            Waze
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-[#E23E8F] hover:bg-[#C82D79] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Book via WhatsApp
          </a>

          <button
            className="md:hidden p-2 text-[#E23E8F]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-[#E23E8F] py-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WAZE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full text-center border border-[#E23E8F] text-[#E23E8F] text-sm font-semibold px-5 py-3 rounded-full mt-2"
          >
            <Navigation size={16} />
            Get Directions on Waze
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-[#E23E8F] text-white text-sm font-semibold px-5 py-3 rounded-full"
          >
            Book via WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
