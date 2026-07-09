import { motion } from 'motion/react'
import { MessageCircle, ChevronDown, Tag } from 'lucide-react'
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
  title: string
  highlight?: string
  photos?: CardPhotos
  rows: PriceRow[]
  note?: string
  waMsg: string
  span?: string
}

const cards: CardConfig[] = [
  {
    key: 'braces',
    title: 'Braces & Orthodontics',
    highlight: 'Dari RM150/bulan',
    photos: {
      before: bracesBefore,
      after: bracesAfter,
      alt: 'Braces in progress',
    },
    rows: [
      { label: 'Conventional (pelajar RM3,999 / biasa RM4,500)', price: 'RM150/bulan' },
      { label: 'Zero Depo (RM4,500)', price: 'RM200/bulan' },
      { label: 'Damon Self-Ligating (dari RM6,900)', price: 'RM250/bulan' },
    ],
    waMsg: 'Hi, saya nak tanya pasal pakej braces.',
    span: 'sm:col-span-2 lg:col-span-2',
  },
  {
    key: 'whitening',
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
    title: 'Veneers',
    photos: {
      before: veneerBefore,
      after: veneerAfter,
      alt: 'Veneer zirconia',
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
    title: 'Zirconia Crowns & Bridges Onlay',
    photos: {
      before: crownBefore,
      after: crownAfter,
      alt: 'Zirconia crown',
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
    title: 'Scaling & Rawatan Asas',
    photos: {
      before: scalingBefore,
      after: scalingAfter,
      alt: 'Deep scaling',
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

function TreatmentCard({ card, delay }: { card: CardConfig; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-[#E23E8F]/10 hover:-translate-y-1 transition-all duration-200 overflow-hidden bg-white flex flex-col ${card.span ?? ''}`}
    >
      {card.photos && (
        <div className="flex-shrink-0">
          <div className="relative h-24 sm:h-28 overflow-hidden">
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
          <div className="relative h-24 sm:h-28 overflow-hidden">
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
      )}

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
    </motion.div>
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
          className="text-center mb-14"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <TreatmentCard key={c.key} card={c} delay={i * 0.08} />
          ))}
        </div>

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
