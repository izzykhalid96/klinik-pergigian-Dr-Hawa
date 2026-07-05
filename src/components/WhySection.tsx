import { motion } from 'motion/react'
import { UserCheck, Baby, Tag, Sofa } from 'lucide-react'

const reasons = [
  {
    icon: UserCheck,
    title: 'Gentle, Informative Doctors',
    desc: 'Our doctors explain every step clearly and never rush. Patients describe them as soft, gentle and easy to understand, visit after visit.',
  },
  {
    icon: Tag,
    title: 'Affordable, Honest Pricing',
    desc: 'Zero deposit braces, clear quotes before treatment begins, and prices patients call affordable in their own reviews.',
  },
  {
    icon: Sofa,
    title: 'Clean, Cozy & Calming',
    desc: 'A clinic patients describe as clean, cozy and relaxing, with convenient parking at both branches.',
  },
  {
    icon: Baby,
    title: 'Family & Kids Friendly',
    desc: 'Extra time and extra patience for nervous patients and little ones, so every visit stays calm and stress-free.',
  },
]

export default function WhySection() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-[#FDF0F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#E23E8F] text-sm font-semibold uppercase tracking-widest">Why Choose Us</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A1A2E] mt-3 mb-4">
            Why Patients Keep{' '}
            <span className="text-[#E23E8F]">Coming Back</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A 4.9 rating from over 400 patients is built on the small things we get right, every single visit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-7 shadow-[0_10px_40px_-10px_rgba(226,62,143,0.08)] hover:shadow-[0_20px_40px_-10px_rgba(226,62,143,0.12)] hover:-translate-y-1 transition-all duration-300 border border-[#E23E8F]/8"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FDF0F7] flex items-center justify-center flex-shrink-0">
                  <r.icon size={20} className="text-[#E23E8F]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1A1A2E] mb-2">{r.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
