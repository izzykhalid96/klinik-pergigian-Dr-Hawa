import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { MessageCircle, ChevronUp } from 'lucide-react'

const WA_LINK = 'https://wa.me/60122412034'

export default function FloatingWhatsApp() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-500 hover:text-[#E23E8F] hover:border-[#E23E8F] transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20b458] shadow-lg shadow-[#25D366]/40 flex items-center justify-center transition-all duration-200 hover:scale-105"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <MessageCircle size={26} className="text-white relative z-10" />
      </a>
    </div>
  )
}
