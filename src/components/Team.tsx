import { motion } from 'motion/react'
import { MessageCircle, Star, ShieldCheck, HeartHandshake } from 'lucide-react'

const WA_LINK = 'https://wa.me/60122412034'

export default function Team() {
  return (
    <section id="team" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — branded proof panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl bg-gradient-to-br from-[#E23E8F] to-[#C82D79] p-10 text-white shadow-xl shadow-[#E23E8F]/20 overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-white text-white" />
                ))}
              </div>
              <div className="text-6xl font-extrabold leading-none mb-2">4.9</div>
              <div className="text-white/80 text-sm mb-8">From 329 verified Google reviews at our Nilai HQ, plus 5.0 from 81 reviews in Shah Alam</div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={20} className="text-white/90" />
                  <span className="text-sm font-medium">Trusted by patients in Nilai & Shah Alam</span>
                </div>
                <div className="flex items-center gap-3">
                  <HeartHandshake size={20} className="text-white/90" />
                  <span className="text-sm font-medium">Gentle, judgement-free dental care</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
            <div className="absolute -top-12 -left-8 w-32 h-32 rounded-full bg-white/5" />
          </motion.div>

          {/* Right — copy */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-[#E23E8F] text-sm font-semibold uppercase tracking-widest">Meet the Team</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A1A2E] mt-3 mb-5 leading-tight">
              The Gentle Hands{' '}
              <span className="text-[#E23E8F]">Behind Your Smile</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Klinik Pergigian Dr Hawa, we believe a dental visit should feel calm,
              not scary. Our doctors take the time to explain every step in plain
              language and check that you are comfortable before anything begins,
              whether it is a routine scaling or a full smile makeover.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Patients mention our doctors by name in their reviews for being soft,
              gentle and detailed. That is the standard at both our Nilai and
              Shah Alam branches, for every patient, at every visit.
            </p>

            <div className="inline-flex items-center gap-3 bg-[#FDF0F7] border border-[#E23E8F]/20 rounded-2xl px-5 py-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#E23E8F] flex items-center justify-center text-white font-bold text-sm">
                Dr
              </div>
              <div>
                <div className="font-bold text-[#1A1A2E] text-sm">The Dr Hawa Dental Team</div>
                <div className="text-xs text-[#E23E8F] font-medium">Nilai · Shah Alam</div>
              </div>
            </div>

            <div className="block">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#E23E8F] hover:bg-[#C82D79] text-white font-semibold px-6 py-3.5 rounded-full transition-colors text-sm"
            >
              <MessageCircle size={18} />
              Ask Us Anything
            </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
