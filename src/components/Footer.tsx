import { MessageCircle, MapPin } from 'lucide-react'
import type { ReactNode } from 'react'
import Logo from './Logo'

const WA_NILAI = 'https://wa.me/60122412034'
const WA_SHAH_ALAM = 'https://wa.me/60128262412'
const GOOGLE_MAPS_LINK = 'https://maps.google.com/?cid=17167441807107617655'
const PORTFOLIO_LINK = 'https://mr-ndigital-portfolio.vercel.app/'

// Brand icons (lucide has no Facebook/Instagram/TikTok in this version, so inline SVG).
const ICONS: Record<string, ReactNode> = {
  Facebook: (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7h2.3l.4-2.9h-2.7V9.3c0-.8.3-1.4 1.5-1.4h1.3V5.3C16.8 5.2 15.9 5.1 15 5.1c-2 0-3.4 1.2-3.4 3.5v2.5H9V14h2.6v7h1.9z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  TikTok: (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-2.59-2.59c.27 0 .53.04.78.12v-3.15a5.76 5.76 0 0 0-.78-.05 5.74 5.74 0 1 0 5.74 5.74V9.01a7.35 7.35 0 0 0 4.29 1.37V7.29a4.28 4.28 0 0 1-3.29-1.47z" />
    </svg>
  ),
}

const SOCIALS: { label: string; href: string }[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/drhawadental/' },
  { label: 'Instagram', href: 'https://www.instagram.com/drhawadental/' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@drhawadental' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#1A1A2E] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <Logo light />
            <p className="text-gray-400 text-sm leading-relaxed max-w-[240px] mt-4">
              Your smile expert. Gentle, affordable dental care in Bandar Baru Nilai and Seksyen 13, Shah Alam.
            </p>
            {SOCIALS.length > 0 && (
              <div className="flex items-center gap-3 mt-5">
                {SOCIALS.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E23E8F] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                  >
                    {ICONS[label]}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Services', href: '#services' },
                { label: 'Results', href: '#results' },
                { label: 'Reviews', href: '#reviews' },
                { label: 'Find Us', href: '#location' },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={WA_NILAI}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-white text-sm transition-colors"
                >
                  <MessageCircle size={15} />
                  Nilai · 012-241 2034
                </a>
              </li>
              <li>
                <a
                  href={WA_SHAH_ALAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-white text-sm transition-colors"
                >
                  <MessageCircle size={15} />
                  Shah Alam · 012-826 2412
                </a>
              </li>
              <li>
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-white text-sm transition-colors"
                >
                  <MapPin size={15} />
                  Find us on Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>© {year} Klinik Pergigian Dr Hawa. All rights reserved.</span>
          <a
            href={PORTFOLIO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Powered by MRNDigital
          </a>
        </div>
      </div>
    </footer>
  )
}
