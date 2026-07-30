import { motion, AnimatePresence } from 'motion/react'
import { MessageCircle, ChevronDown, Star, MapPin, Clock } from 'lucide-react'
import { useEffect, useState } from 'react'
import { reviews } from '../data/reviews'
import { combinedReviews, overallRating } from '../data/stats'
// Real premises photos, owner-uploaded to the clinic's Google Business Profile.
// MAB/KKM rules forbid AI-generated patients, staff or premises, so these must
// stay real — do not swap in stock or generated imagery.
import storefrontPhoto from '../assets/clinic-storefront.jpg'
import receptionPhoto from '../assets/clinic-reception.jpg'
import waitingAreaPhoto from '../assets/clinic-waiting-area.jpg'

const WA_LINK = 'https://wa.me/60122412034'

const vp = { once: true, amount: 0.1 }

// Doubled so the marquee can loop seamlessly (translateX -50%).
const marqueeReviews = [...reviews, ...reviews]

// These are tall phone photos. They live in a fixed 4:3 frame rather than as a
// full-bleed background, because a portrait source in a landscape hero crops
// away roughly two thirds of the image.
const CLINIC_PHOTOS = [
  { src: storefrontPhoto, alt: 'Pintu masuk Klinik Pergigian Dr Hawa, Bandar Baru Nilai' },
  { src: receptionPhoto, alt: 'Kaunter penerimaan Klinik Pergigian Dr Hawa' },
  { src: waitingAreaPhoto, alt: 'Ruang menunggu Klinik Pergigian Dr Hawa' },
]
const BASE = '#42112D' // deep berry — drives the overlay, matches the pink brand

/** Rotating framed photo of the clinic. Shared by the mobile block and the desktop card. */
function ClinicPhotoFrame({ className = '' }: { className?: string }) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % CLINIC_PHOTOS.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className={`relative aspect-[3/2] lg:aspect-[16/10] overflow-hidden bg-[#2E0C1F] ${className}`}>
      <AnimatePresence mode="sync">
        <motion.img
          key={index}
          src={CLINIC_PHOTOS[index].src}
          alt={CLINIC_PHOTOS[index].alt}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.06 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1 }, scale: { duration: 5, ease: 'linear' } }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>
  )
}

export default function Hero() {
  const backdrop = `radial-gradient(120% 90% at 78% 18%, #6B1D48 0%, ${BASE} 55%, #300B20 100%)`

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-10 overflow-hidden"
      style={{ background: backdrop }}
    >

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
              dentistry. Rated {overallRating} stars by {combinedReviews} patients
              across our Nilai and Shah Alam branches.
            </motion.p>

            {/* Mobile only — the desktop card carries this same photo frame. */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="lg:hidden mb-10"
            >
              <ClinicPhotoFrame className="rounded-3xl border border-white/15 shadow-xl" />
            </motion.div>

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
                { stat: `${overallRating}★`, label: 'Google Rated' },
                { stat: `${combinedReviews}`, label: 'Patient Reviews' },
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
            <div className="relative rounded-3xl bg-white shadow-xl shadow-[#E23E8F]/10 border border-[#E23E8F]/10 overflow-hidden">
              <div className="absolute top-4 right-4 z-10 bg-[#E23E8F] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg">
                Zero Deposit Braces
              </div>

              <ClinicPhotoFrame />

              {/* Rating block */}
              <div className="text-center px-8 pt-5 pb-5 border-b border-gray-100">
                <div className="text-4xl font-extrabold text-[#1A1A2E]">{overallRating}</div>
                <div className="flex items-center justify-center gap-1 mt-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-sm text-gray-500 mt-1.5">
                  Rated by {combinedReviews} patients across both branches
                </div>
              </div>

              {/* Quick info */}
              <div className="space-y-3.5 px-8 pt-5">
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
                className="mx-8 mt-5 mb-6 flex items-center justify-center gap-2 bg-[#E23E8F] hover:bg-[#C82D79] text-white font-semibold py-3.5 rounded-full text-sm transition-colors"
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
