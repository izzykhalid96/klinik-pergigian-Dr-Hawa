// Real price list supplied by the clinic via WhatsApp. Keep prices exact, do not round or estimate.
export type PriceRow = { label: string; price: string }

export const promos = [
  { title: 'Promo Whitening 2 Cycle', price: 'RM350', note: 'Termasuk scaling & polishing' },
  { title: 'Promo Scaling', price: 'Bermula RM120', note: 'Untuk pesakit baru & sedia ada' },
]

export const bracesFull: PriceRow[] = [
  { label: 'Conventional (Pelajar)', price: 'RM3,999 · RM150/bulan' },
  { label: 'Conventional', price: 'RM4,500 · RM150/bulan' },
  { label: 'Zero Depo', price: 'RM4,500 · RM200/bulan' },
  { label: 'Self Ligating', price: 'RM5,599 · RM220/bulan' },
  { label: 'Damon Self-Ligating', price: 'RM6,900 - RM7,900 · RM250/bulan' },
  { label: 'Ceramic Conventional', price: 'RM5,588 · RM200/bulan' },
  { label: 'Ceramic Self Ligating', price: 'RM6,900 - RM7,500 · RM220/bulan' },
  { label: 'Clear Aligner', price: 'RM6,000 - RM12,000' },
]

export const veneerFull: PriceRow[] = [
  { label: 'Composite', price: 'RM300 - RM350 /unit' },
  { label: 'Prefabricated', price: 'RM500 - RM600 /unit' },
  { label: 'FRC', price: 'RM700 - RM900 /unit' },
  { label: 'Porcelain', price: 'RM1,000 - RM1,500 /unit' },
]

export const crownFull: PriceRow[] = [
  { label: 'PFM', price: 'RM800 /unit' },
  { label: 'Porcelain', price: 'RM1,200 /unit' },
  { label: 'Zirconia', price: 'RM1,200 /unit' },
  { label: 'E-Max', price: 'RM1,400 /unit' },
]

export const whiteningFull: PriceRow[] = [
  { label: 'Express (1 cycle)', price: 'RM299' },
  { label: 'Premium (2 cycle)', price: 'RM450 · Couple RM750' },
  { label: 'Advance Shine (3 cycle)', price: 'RM800' },
]

export const scalingFull: PriceRow[] = [
  { label: 'Scaling', price: 'Dari RM120' },
  { label: 'Consultation', price: 'RM50' },
  { label: 'Filling', price: 'RM100 - RM250' },
  { label: 'Extraction', price: 'RM100 - RM250' },
]
