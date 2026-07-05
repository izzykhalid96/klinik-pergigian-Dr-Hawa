import { motion } from 'motion/react'
import { Smile, Sparkles, Shield, Zap, Stethoscope, Star } from 'lucide-react'

const services = [
  {
    icon: Smile,
    name: 'Braces & Orthodontics',
    desc: 'Start your braces journey with ZERO deposit. Guided from first consult to your final straight smile, with easy monthly payments.',
  },
  {
    icon: Shield,
    name: 'Zirconia Crowns & Bridges',
    desc: 'Strong, natural-looking zirconia crowns and bridges that restore damaged teeth and bring back your full bite.',
  },
  {
    icon: Sparkles,
    name: 'Teeth Whitening',
    desc: 'Professional whitening for a noticeably brighter smile in a single visit. See our real patient results below.',
  },
  {
    icon: Star,
    name: 'Veneers',
    desc: 'Thin, custom-made zirconia veneers that fix chips, gaps and stains for a picture-ready smile.',
  },
  {
    icon: Zap,
    name: 'Scaling & Polishing',
    desc: 'Gentle deep cleans that remove years of plaque and tartar. Patients tell us it did not hurt at all.',
  },
  {
    icon: Stethoscope,
    name: 'Checkups, Fillings & Extractions',
    desc: 'Everyday dental care for the whole family, explained clearly in plain language before anything begins.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#E23E8F] text-sm font-semibold uppercase tracking-widest">What We Offer</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A1A2E] mt-3 mb-4">
            Complete Dental Care,{' '}
            <span className="text-[#E23E8F]">Under One Roof</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From zero-deposit braces to gentle scaling, every treatment is explained clearly and priced honestly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group border border-gray-100 rounded-3xl p-8 hover:border-[#E23E8F]/30 hover:shadow-lg hover:shadow-[#E23E8F]/8 hover:-translate-y-1 transition-all duration-200 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FDF0F7] flex items-center justify-center mb-4 group-hover:bg-[#E23E8F] transition-colors duration-200">
                <s.icon size={22} className="text-[#E23E8F] group-hover:text-white transition-colors duration-200" />
              </div>
              <h3 className="text-lg font-bold text-[#1A1A2E] mb-2">{s.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
