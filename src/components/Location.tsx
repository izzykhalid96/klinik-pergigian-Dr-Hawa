import { motion } from 'motion/react'
import { MapPin, Clock, Phone, MessageCircle, Navigation } from 'lucide-react'

// Waze links MUST use coords (ll=lat,lon) — see Navbar.tsx note.
type Branch = {
  name: string
  addressLines: string[]
  waLink: string
  waDisplay: string
  phone?: { tel: string; display: string }
  wazeLink: string
  mapEmbed: string
}

const branches: Branch[] = [
  {
    name: 'Bandar Baru Nilai (HQ)',
    addressLines: [
      'PT 12890, First Floor, Jalan BBN 1/7B,',
      'Putra Indah, Putra Nilai,',
      '71800 Bandar Baru Nilai, Negeri Sembilan',
    ],
    waLink: 'https://wa.me/60122412034',
    waDisplay: '012-241 2034',
    phone: { tel: '+6068560600', display: '06-856 0600' },
    wazeLink: 'https://waze.com/ul?ll=2.821205,101.788947&navigate=yes',
    mapEmbed: 'https://www.google.com/maps?q=Klinik+Pergigian+DR+HAWA+Bandar+Baru+Nilai&output=embed',
  },
  {
    name: 'Seksyen 13, Shah Alam',
    addressLines: [
      '51, Ground Floor, Jalan Snuker 13/28,',
      'Tadisma Business Park, Seksyen 13,',
      '40100 Shah Alam, Selangor',
    ],
    waLink: 'https://wa.me/60128262412',
    waDisplay: '012-826 2412',
    wazeLink: 'https://waze.com/ul?ll=3.0896801,101.5455105&navigate=yes',
    mapEmbed: 'https://www.google.com/maps?q=Klinik+Pergigian+Hawa+Dental+Tadisma+Business+Park+Shah+Alam&output=embed',
  },
]

const hours = [
  { days: 'Monday – Friday', time: '10:00 AM – 7:00 PM' },
  { days: 'Saturday – Sunday', time: '10:00 AM – 6:00 PM' },
]

function isOpenNow() {
  const now = new Date()
  const day = now.getDay() // 0 = Sun, 6 = Sat
  const hour = now.getHours() + now.getMinutes() / 60
  const close = day === 0 || day === 6 ? 18 : 19
  return hour >= 10 && hour < close
}

export default function Location() {
  const open = isOpenNow()

  return (
    <section id="location" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#E23E8F] text-sm font-semibold uppercase tracking-widest">Find Us</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A1A2E] mt-3 mb-4">
            Two Branches, Same Gentle Care
          </h2>
          <p className="text-gray-500 max-w-md mx-auto mb-5">
            Visit us in Bandar Baru Nilai or Seksyen 13, Shah Alam. Both branches open daily with convenient parking.
          </p>

          {/* Open/Closed badge */}
          <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${
            open ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'
          }`}>
            <span className={`w-2 h-2 rounded-full ${open ? 'bg-green-500 animate-pulse' : 'bg-red-400'}`} />
            {open ? 'Open Now' : 'Closed Now'}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {branches.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-3xl border border-gray-100 shadow-lg shadow-[#E23E8F]/5 overflow-hidden flex flex-col"
            >
              <div className="h-[240px]">
                <iframe
                  title={`Klinik Pergigian Dr Hawa ${b.name} location`}
                  src={b.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-7 flex flex-col gap-5 flex-1">
                <h3 className="font-display text-xl font-bold text-[#1A1A2E]">{b.name}</h3>

                <div className="flex gap-3">
                  <MapPin size={20} className="text-[#E23E8F] flex-shrink-0 mt-0.5" />
                  <div className="text-gray-600 text-sm leading-relaxed">
                    {b.addressLines.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Clock size={20} className="text-[#E23E8F] flex-shrink-0 mt-0.5" />
                  <div className="space-y-1.5 flex-1">
                    {hours.map((h) => (
                      <div key={h.days} className="flex justify-between gap-6 text-sm">
                        <span className="text-gray-500">{h.days}</span>
                        <span className="font-medium text-[#1A1A2E] text-right">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone size={20} className="text-[#E23E8F] flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-600 space-x-3">
                    <a href={b.waLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#E23E8F] transition-colors">
                      WhatsApp {b.waDisplay}
                    </a>
                    {b.phone && (
                      <a href={`tel:${b.phone.tel}`} className="hover:text-[#E23E8F] transition-colors">
                        Call {b.phone.display}
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-1 mt-auto">
                  <a
                    href={b.wazeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2.5 border-2 border-[#E23E8F] text-[#E23E8F] hover:bg-[#FDF0F7] font-semibold px-5 py-3.5 rounded-full text-sm transition-colors"
                  >
                    <Navigation size={17} />
                    Waze
                  </a>
                  <a
                    href={b.waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2.5 bg-[#E23E8F] hover:bg-[#C82D79] text-white font-semibold px-5 py-3.5 rounded-full text-sm transition-colors"
                  >
                    <MessageCircle size={17} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
