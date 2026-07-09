import { motion } from 'motion/react'
import { MessageCircle, ChevronDown, ChevronLeft, ChevronRight, Tag } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import {
  promos,
  bracesFull,
  veneerFull,
  crownFull,
  whiteningFull,
  scalingFull,
  type PriceRow,
} from '../data/pricing'
import bracesBefore from '../assets/pricing/damon-braces-before.jpg'
import bracesAfter from '../assets/pricing/damon-braces-after.jpg'
import whiteningBefore from '../assets/pricing/whitening-before.jpg'
import whiteningAfter from '../assets/pricing/whitening-after.jpg'
import veneerBefore from '../assets/pricing/veneer2-before.jpg'
import veneerAfter from '../assets/pricing/veneer2-after.jpg'
import scalingBefore from '../assets/pricing/scaling2-before.jpg'
import scalingAfter from '../assets/pricing/scaling2-after.jpg'
import crownBefore from '../assets/pricing/crown-before.jpg'
import crownAfter from '../assets/pricing/crown-after.jpg'

const WA_NUMBER = '60122412034'
const waLink = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`

type CardPhotos = { before: string; after: string; alt: string }

type CardConfig = {
  key: string
  tabLabel: string
  title: string
  highlight?: string
  photos: CardPhotos
  rows: PriceRow[]
  note?: string
  waMsg: string
}

const cards: CardConfig[] = [
  {
    key: 'braces',
    tabLabel: 'Braces',
    title: 'Braces & Orthodontics',
    highlight: 'Dari RM150/bulan',
    photos: {
      before: bracesBefore,
      after: bracesAfter,
      alt: 'Braces',
    },
    rows: [
      { label: 'Conventional (pelajar RM3,999 / biasa RM4,500)', price: 'RM150/bulan' },
      { label: 'Zero Depo (RM4,500)', price: 'RM200/bulan' },
      { label: 'Damon Self-Ligating (dari RM6,900)', price: 'RM250/bulan' },
    ],
    waMsg: 'Hi, saya nak tanya pasal pakej braces.',
  },
  {
    key: 'whitening',
    tabLabel: 'Whitening',
    title: 'Teeth Whitening',
    photos: {
      before: whiteningBefore,
      after: whiteningAfter,
      alt: 'Teeth whitening',
    },
    rows: [
      { label: 'Express (1 cycle)', price: 'RM299' },
      { label: 'Premium (2 cycle)', price: 'RM450' },
      { label: 'Advance Shine (3 cycle)', price: 'RM800' },
    ],
    note: 'Couple package RM750 untuk 2 cycle. Semua pakej termasuk scaling & polishing.',
    waMsg: 'Hi, saya nak tanya pasal pakej whitening.',
  },
  {
    key: 'veneer',
    tabLabel: 'Veneer',
    title: 'Veneers',
    photos: {
      before: veneerBefore,
      after: veneerAfter,
      alt: 'Veneer',
    },
    rows: [
      { label: 'Composite', price: 'RM300 - RM350/unit' },
      { label: 'Porcelain', price: 'RM1,000 - RM1,500/unit' },
      { label: 'FRC', price: 'RM700 - RM900/unit' },
    ],
    waMsg: 'Hi, saya nak tanya pasal veneer.',
  },
  {
    key: 'crown',
    tabLabel: 'Crown',
    title: 'Zirconia Crowns & Bridges Onlay',
    photos: {
      before: crownBefore,
      after: crownAfter,
      alt: 'Crown gigi',
    },
    rows: [
      { label: 'Porcelain', price: 'RM1,200/unit' },
      { label: 'Zirconia', price: 'RM1,200/unit' },
      { label: 'E-Max', price: 'RM1,400/unit' },
      { label: 'PFM', price: 'RM800/unit' },
    ],
    waMsg: 'Hi, saya nak tanya pasal crown gigi.',
  },
  {
    key: 'scaling',
    tabLabel: 'Rawatan Asas',
    title: 'Scaling & Rawatan Asas',
    photos: {
      before: scalingBefore,
      after: scalingAfter,
      alt: 'Scaling',
    },
    rows: [
      { label: 'Scaling', price: 'Dari RM120' },
      { label: 'Consultation', price: 'RM50' },
      { label: 'Filling', price: 'RM100 - RM250' },
      { label: 'Extraction', price: 'RM100 - RM250' },
    ],
    waMsg: 'Hi, saya nak tanya pasal scaling dan rawatan asas.',
  },
]

const PANEL_WIDTH = 'w-[90%] sm:w-[85%] md:w-[74%] lg:w-[72%]'
const TRACK_PADDING = 'px-[5%] sm:px-[7.5%] md:px-[13%] lg:px-[14%]'

function TreatmentPanel({ card, panelRef }: { card: CardConfig; panelRef: (el: HTMLDivElement | null) => void }) {
  return (
    <div
      ref={panelRef}
      data-panel-key={card.key}
      className={`${PANEL_WIDTH} flex-shrink-0 snap-center rounded-3xl border border-gray-100 shadow-sm bg-white overflow-hidden flex flex-col min-h-[540px] sm:min-h-[500px]`}
    >
      <div className="flex-shrink-0">
        <div className="relative aspect-[27/10] overflow-hidden bg-[#FDF0F7]">
          <img
            src={card.photos.before}
            alt={`${card.photos.alt} sebelum`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span className="absolute bottom-2 left-2 text-[10px] font-bold uppercase tracking-wider bg-black/55 text-white px-2 py-1 rounded-full">
            Sebelum
          </span>
        </div>
        <div className="relative aspect-[27/10] overflow-hidden bg-[#FDF0F7]">
          <img
            src={card.photos.after}
            alt={`${card.photos.alt} selepas`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span className="absolute bottom-2 left-2 text-[10px] font-bold uppercase tracking-wider bg-[#E23E8F] text-white px-2 py-1 rounded-full">
            Selepas
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-7 flex flex-col gap-4 flex-1">
        <h3 className="text-lg font-bold text-[#1A1A2E]">{card.title}</h3>

        {card.highlight && (
          <div className="text-3xl font-extrabold text-[#E23E8F] leading-tight">{card.highlight}</div>
        )}

        <ul className="flex-1">
          {card.rows.map((r) => (
            <li
              key={r.label}
              className="flex items-start justify-between gap-4 text-sm py-2.5 border-b border-gray-50 last:border-0"
            >
              <span className="text-gray-600">{r.label}</span>
              <span className="font-semibold text-[#1A1A2E] text-right whitespace-nowrap">{r.price}</span>
            </li>
          ))}
        </ul>

        {card.note && <p className="text-xs text-gray-400">{card.note}</p>}

        <a
          href={waLink(card.waMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 w-full bg-[#E23E8F] hover:bg-[#C82D79] text-white font-semibold px-5 py-3.5 rounded-full text-sm transition-colors"
        >
          <MessageCircle size={17} />
          WhatsApp Kami
        </a>
      </div>
    </div>
  )
}

function PriceTable({ title, rows }: { title: string; rows: PriceRow[] }) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase tracking-widest text-[#E23E8F] mb-3">{title}</h4>
      <ul className="space-y-2">
        {rows.map((r) => (
          <li key={r.label} className="flex items-start justify-between gap-4 text-sm">
            <span className="text-gray-600">{r.label}</span>
            <span className="font-semibold text-[#1A1A2E] text-right whitespace-nowrap">{r.price}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function PriceCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const panelRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToIndex = useCallback((index: number) => {
    const panel = panelRefs.current[index]
    if (!panel) return
    panel.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const observer = new IntersectionObserver(
      (entries) => {
        let best: { index: number; ratio: number } | null = null
        entries.forEach((entry) => {
          const key = (entry.target as HTMLElement).dataset.panelKey
          const index = cards.findIndex((c) => c.key === key)
          if (index === -1) return
          if (!best || entry.intersectionRatio > best.ratio) {
            best = { index, ratio: entry.intersectionRatio }
          }
        })
        if (best && best.ratio > 0.4) {
          setActiveIndex(best.index)
        }
      },
      { root: track, threshold: [0.25, 0.5, 0.6, 0.75, 0.9] }
    )

    panelRefs.current.forEach((panel) => {
      if (panel) observer.observe(panel)
    })

    return () => observer.disconnect()
  }, [])

  const goPrev = () => scrollToIndex(Math.max(0, activeIndex - 1))
  const goNext = () => scrollToIndex(Math.min(cards.length - 1, activeIndex + 1))

  return (
    <div>
      {/* Tab pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {cards.map((c, i) => (
          <button
            key={c.key}
            type="button"
            onClick={() => scrollToIndex(i)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
              activeIndex === i
                ? 'bg-[#E23E8F] text-white border-[#E23E8F]'
                : 'bg-white text-[#1A1A2E] border-gray-200 hover:border-[#E23E8F]/50 hover:text-[#E23E8F]'
            }`}
          >
            {c.tabLabel}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="relative">
        <button
          type="button"
          aria-label="Sebelumnya"
          onClick={goPrev}
          disabled={activeIndex === 0}
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-11 h-11 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 text-[#1A1A2E] hover:text-[#E23E8F] disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          aria-label="Seterusnya"
          onClick={goNext}
          disabled={activeIndex === cards.length - 1}
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-11 h-11 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 text-[#1A1A2E] hover:text-[#E23E8F] disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
        >
          <ChevronRight size={20} />
        </button>

        <div
          ref={trackRef}
          className={`carousel-track flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide ${TRACK_PADDING} pb-2`}
        >
          {cards.map((c, i) => (
            <TreatmentPanel
              key={c.key}
              card={c}
              panelRef={(el) => {
                panelRefs.current[i] = el
              }}
            />
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {cards.map((c, i) => (
          <button
            key={c.key}
            type="button"
            aria-label={`Pergi ke ${c.tabLabel}`}
            onClick={() => scrollToIndex(i)}
            className={`h-2 rounded-full transition-all ${
              activeIndex === i ? 'w-6 bg-[#E23E8F]' : 'w-2 bg-gray-200 hover:bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Promo ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-[#E23E8F] text-white px-6 py-5 sm:px-8 sm:py-6 mb-14 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 justify-center text-center shadow-lg shadow-[#E23E8F]/20"
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-white/15 px-3 py-1.5 rounded-full flex-shrink-0">
            <Tag size={14} />
            Promo Terhad
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/25" />
          {promos.map((p) => (
            <div key={p.title} className="text-sm">
              <span className="font-bold">{p.title}</span>{' '}
              <span className="font-extrabold">{p.price}</span>
              <span className="text-white/80"> · {p.note}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-[#E23E8F] text-sm font-semibold uppercase tracking-widest">Senarai Harga</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A1A2E] mt-3 mb-4">
            Harga Telus,{' '}
            <span className="text-[#E23E8F]">Tiada Kejutan</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Setiap rawatan datang dengan harga jelas dari awal. Bandingkan pilihan anda, dan WhatsApp kami bila-bila masa untuk tanya lanjut.
          </p>
        </motion.div>

        <PriceCarousel />

        {/* Full price list */}
        <motion.details
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group mt-14 rounded-3xl border border-gray-100 open:shadow-lg transition-shadow"
        >
          <summary className="cursor-pointer list-none flex items-center justify-between gap-4 px-6 sm:px-8 py-5 font-display font-bold text-[#1A1A2E] text-lg select-none">
            Lihat Semua Harga
            <ChevronDown size={20} className="text-[#E23E8F] group-open:rotate-180 transition-transform flex-shrink-0" />
          </summary>
          <div className="px-6 sm:px-8 pb-8 pt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
            <PriceTable title="Braces" rows={bracesFull} />
            <PriceTable title="Veneer" rows={veneerFull} />
            <PriceTable title="Crown" rows={crownFull} />
            <PriceTable title="Whitening" rows={whiteningFull} />
            <PriceTable title="Scaling & Rawatan Asas" rows={scalingFull} />
          </div>
        </motion.details>

        <p className="text-center text-xs text-gray-400 mt-8">
          Harga adalah anggaran. Harga muktamad selepas konsultasi.
        </p>
      </div>
    </section>
  )
}
