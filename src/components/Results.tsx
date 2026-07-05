import { motion } from 'motion/react'
import { MessageCircle } from 'lucide-react'
import bracesImg from '../assets/results-braces.png'
import whiteningImg from '../assets/results-whitening.png'
import veneerImg from '../assets/results-veneer.png'
import scalingImg from '../assets/results-scaling.png'

const WA_LINK = 'https://wa.me/60122412034'

// Real before/after photos supplied by the clinic (already branded by them).
const results = [
  { img: bracesImg, label: 'Braces in Progress' },
  { img: whiteningImg, label: 'Teeth Whitening' },
  { img: veneerImg, label: 'Zirconia Veneers' },
  { img: scalingImg, label: 'Deep Scaling' },
]

export default function Results() {
  return (
    <section id="results" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#E23E8F] text-sm font-semibold uppercase tracking-widest">Real Results</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A1A2E] mt-3 mb-4">
            Before & After,{' '}
            <span className="text-[#E23E8F]">Real Patients</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            No stock photos here. These are actual transformations from our own treatment rooms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((r, i) => (
            <motion.figure
              key={r.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="m-0 rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-[#E23E8F]/10 hover:-translate-y-1 transition-all duration-200 bg-white"
            >
              <img
                src={r.img}
                alt={`${r.label} before and after at Klinik Pergigian Dr Hawa`}
                loading="lazy"
                className="w-full h-auto block"
              />
              <figcaption className="text-sm font-semibold text-[#1A1A2E] text-center py-3.5">
                {r.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#E23E8F] hover:bg-[#C82D79] text-white font-semibold px-7 py-4 rounded-full text-base transition-all duration-200 shadow-lg shadow-[#E23E8F]/25 hover:-translate-y-0.5"
          >
            <MessageCircle size={20} />
            Ask About Your Smile
          </a>
        </motion.div>
      </div>
    </section>
  )
}
