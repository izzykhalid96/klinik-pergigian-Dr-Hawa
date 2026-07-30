import { useState } from 'react'
import { motion } from 'motion/react'
import { Star, ExternalLink } from 'lucide-react'
import { reviews, type Review } from '../data/reviews'
import { nilai, shahAlam, overallRating } from '../data/stats'

const GOOGLE_MAPS_LINK = 'https://maps.google.com/?cid=17167441807107617655'

function ReviewCard({ review, delay }: { review: Review; delay: number }) {
  const [expanded, setExpanded] = useState(false)
  const isLong = review.text.length > 160
  const displayText = !expanded && isLong ? review.text.slice(0, 160) + '…' : review.text

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_10px_40px_-10px_rgba(226,62,143,0.08)] hover:shadow-[0_20px_40px_-10px_rgba(226,62,143,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4">
        &ldquo;{displayText}&rdquo;
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="ml-1 text-[#E23E8F] font-semibold text-xs hover:underline"
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </p>
      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-50">
        <div className="w-9 h-9 rounded-full bg-[#E23E8F] text-white text-xs font-bold items-center justify-center flex-shrink-0 flex">
          {review.name.charAt(0).toUpperCase()}
        </div>
        <span className="text-sm font-semibold text-[#1A1A2E]">{review.name}</span>
      </div>
    </motion.div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#FDF0F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#E23E8F] text-sm font-semibold uppercase tracking-widest">Patient Reviews</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A1A2E] mt-3 mb-4">
            What Our Patients Say
          </h2>

          {/* Aggregate badge */}
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-6 py-4 shadow-sm border border-[#E23E8F]/10 mb-5">
            <div className="text-4xl font-extrabold text-[#1A1A2E]">{overallRating}</div>
            <div className="text-left">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {nilai.reviews} Google reviews in Nilai · {shahAlam.rating} from {shahAlam.reviews} in Shah Alam
              </div>
            </div>
          </div>

          <div>
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#E23E8F] text-sm font-semibold hover:underline"
            >
              <ExternalLink size={14} />
              Read all reviews on Google
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <ReviewCard key={r.name} review={r} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
