import { motion, AnimatePresence } from 'motion/react'
import { MessageCircle, ChevronDown, Star, MapPin, Clock } from 'lucide-react'
import { useEffect, useState } from 'react'
import { reviews } from '../data/reviews'
import heroPhoto from '../assets/hero.png'
import checkupPhoto from '../assets/checkup-in-progress.png'
import waitingRoomPhoto from '../assets/interior-waiting-room.png'

const WA_LINK = 'https://wa.me/60122412034'

const vp = { once: true, amount: 0.1 }

// Doubled so the marquee can loop seamlessly (translateX -50%).
const marqueeReviews = [...reviews, ...reviews]

const HERO_IMAGES = [heroPhoto, checkupPhoto, waitingRoomPhoto]
const BASE = '#42112D' // deep berry — drives the overlay, matches the pink brand

export default function Hero() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % HERO_IMAGES.length), 5000)
    return () => clearInterval(id)
  }, [])

  const desktopGradient = `linear-gradient(105deg, ${BASE}F0 0%, ${BASE}D9 38%, ${BASE}4D 72%, ${BASE}8C 100%)`
  const mobileGradient = `linear-gradient(180deg, ${BASE}F0 0%, ${BASE}8C 48%, ${BASE}E6 100%)`

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-10 overflow-hidden"
      style={{ backgroundColor: BASE }}
    >
      <AnimatePresence mode="sync">
        <motion.img
          key={index}
          src={HERO_IMAGES[index]}
          alt="Klinik Pergigian Dr Hawa dental clinic"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.08 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1 }, scale: { duration: 5, ease: 'linear' } }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 sm:hidden" style={{ background: mobileGradient }} />
      <div className="absolute inset-0 hidden sm:block" style={{ background: desktopGradient }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#A9E3E2] animate-pulse" />
              4.9★ Rated · Nilai & Shah Alam
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              Your Smile Expert,{' '}
              <span className="text-[#A9E3E2]">Gentle Every Step</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/80 leading-relaxed mb-10 max-w-lg"
            >
              Braces with zero deposit, whitening, crowns and gentle everyday
              dentistry. Rated 4.9 stars by more than 400 patients across our
              Nilai and Shah Alam branches.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#E23E8F] hover:bg-[#C82D79] text-white font-semibold px-7 py-4 rounded-full text-base transition-all duration-200 shadow-lg shadow-[#E23E8F]/25 hover:-translate-y-0.5"
              >
                <MessageCircle size={20} />
                Book an Appointment
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-7 py-4 rounded-full text-base transition-colors"
              >
                Our Services
                <ChevronDown size={18} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={vp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-8"
            >
              {[
                { stat: '4.9★', label: 'Google Rated' },
                { stat: '410+', label: 'Patient Reviews' },
                { stat: '2', label: 'Branches to Serve You' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-2xl font-extrabold text-[#A9E3E2]">{item.stat}</div>
                  <div className="text-sm text-white/60 mt-0.5">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — social proof card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hidden lg:block"
          >
            <div className="relative rounded-3xl bg-white shadow-xl shadow-[#E23E8F]/10 border border-[#E23E8F]/10 p-8">
              <div className="absolute -top-4 -right-4 bg-[#E23E8F] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg">
                Zero Deposit Braces
              </div>

              {/* Rating block */}
              <div className="text-center pb-7 border-b border-gray-100">
                <div className="text-5xl font-extrabold text-[#1A1A2E]">4.9</div>
                <div className="flex items-center justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-sm text-gray-500 mt-2">Rated by 329 patients on Google</div>
              </div>

              {/* Quick info */}
              <div className="space-y-4 pt-7">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FDF0F7] flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-[#E23E8F]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#1A1A2E]">Bandar Baru Nilai</div>
                    <div className="text-xs text-gray-500">PT 12890, Jalan BBN 1/7B, Putra Indah</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FDF0F7] flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-[#E23E8F]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#1A1A2E]">Seksyen 13, Shah Alam</div>
                    <div className="text-xs text-gray-500">51, Jalan Snuker 13/28, Tadisma Business Park</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FDF0F7] flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-[#E23E8F]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#1A1A2E]">Open Daily</div>
                    <div className="text-xs text-gray-500">Mon to Fri 10am to 7pm · Sat & Sun 10am to 6pm</div>
                  </div>
                </div>
              </div>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex items-center justify-center gap-2 w-full bg-[#E23E8F] hover:bg-[#C82D79] text-white font-semibold py-3.5 rounded-full text-sm transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp Us to Book
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Testimonial marquee — auto-scroll, pause on hover */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="marquee-pause relative mt-8 w-full overflow-hidden"
      >
        {/* edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#42112D] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#42112D] to-transparent" />

        <div className="flex gap-4 animate-marquee py-2">
          {marqueeReviews.map((r, i) => (
            <div
              key={i}
              className="w-[300px] flex-shrink-0 bg-white rounded-2xl border border-gray-100 shadow-sm p-5"
            >
              <div className="flex items-center gap-1 mb-2.5">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={12} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-3 line-clamp-3">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#E23E8F] text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0">
                  {r.name.charAt(0).toUpperCase()}
                </div>
                <span className="text-xs font-semibold text-[#1A1A2E] truncate">{r.name}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
