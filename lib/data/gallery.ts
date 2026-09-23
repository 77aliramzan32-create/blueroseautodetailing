export type GalleryCategory = 'exterior' | 'interior' | 'process' | 'ceramic' | 'paint-correction'

export type GalleryItem = {
  src: string
  alt: string
  title: string
  category: GalleryCategory
  service: string       // slug for /services/[slug]
  featured: boolean     // shown on home page
  width: number
  height: number
}

export const GALLERY: GalleryItem[] = [

  // ── Exterior After ────────────────────────────────────────────────────────
  {
    src: '/images/gallery/auto-detailing-porsche-911-turbo-blue-exterior-springfield-or.webp',
    alt: 'Porsche 911 Turbo blue exterior after full auto detail — Blue Rose Auto Detailing Springfield OR',
    title: 'Porsche 911 Turbo — Full Auto Detail',
    category: 'exterior',
    service: 'auto-detailing',
    featured: true,
    width: 1200, height: 800,
  },
  {
    src: '/images/gallery/auto-detailing-toyota-celica-white-exterior-springfield-or.webp',
    alt: 'Toyota Celica white coupe exterior after full auto detail — Blue Rose Auto Detailing Springfield OR',
    title: 'Toyota Celica — Full Exterior Detail',
    category: 'exterior',
    service: 'auto-detailing',
    featured: false,
    width: 1200, height: 900,
  },
  {
    src: '/images/gallery/auto-detailing-ford-fusion-hybrid-white-exterior-springfield-or.webp',
    alt: 'Ford Fusion Hybrid white exterior after full auto detail — Blue Rose Auto Detailing Springfield OR',
    title: 'Ford Fusion Hybrid — Full Exterior Detail',
    category: 'exterior',
    service: 'auto-detailing',
    featured: false,
    width: 1200, height: 800,
  },
  {
    src: '/images/gallery/auto-detailing-shop-exterior-blue-rose-springfield-or.webp',
    alt: 'Blue Rose Auto Detail shop exterior Springfield OR — auto detail boats SUVs motorcycles',
    title: 'Blue Rose Auto Detail — Our Shop',
    category: 'exterior',
    service: 'auto-detailing',
    featured: false,
    width: 1200, height: 800,
  },

  // ── RV Detailing ──────────────────────────────────────────────────────────
  {
    src: '/images/gallery/rv-detailing-country-coach-intrigue-motorhome-springfield-or.webp',
    alt: 'Country Coach Intrigue 530 motorhome RV detail and polish — Blue Rose Auto Detailing Springfield OR',
    title: 'Country Coach Intrigue 530 — Full RV Detail',
    category: 'exterior',
    service: 'rv-detailing',
    featured: true,
    width: 1200, height: 800,
  },

  // ── Paint Correction ──────────────────────────────────────────────────────
  {
    src: '/images/gallery/paint-correction-audi-rs7-grey-polishing-process-springfield-or.webp',
    alt: 'Audi RS7 grey paint correction — technician polishing with masking tape in shop Springfield OR',
    title: 'Audi RS7 — Paint Correction in Shop',
    category: 'paint-correction',
    service: 'paint-correction',
    featured: true,
    width: 1200, height: 800,
  },
  {
    src: '/images/gallery/paint-correction-audi-q7-black-suv-polishing-process-springfield-or.webp',
    alt: 'Audi Q7 black SUV paint correction polishing process — Blue Rose Auto Detailing Springfield OR',
    title: 'Audi Q7 — Paint Correction Process',
    category: 'paint-correction',
    service: 'paint-correction',
    featured: true,
    width: 1200, height: 800,
  },
  {
    src: '/images/gallery/paint-correction-black-car-da-polisher-process-springfield-or.webp',
    alt: 'Technician using DA polisher on black car hood during paint correction — Blue Rose Detailing Springfield OR',
    title: 'Paint Correction — DA Polisher Close-Up',
    category: 'paint-correction',
    service: 'paint-correction',
    featured: false,
    width: 1200, height: 800,
  },

  // ── Vinyl Wrap ────────────────────────────────────────────────────────────
  {
    src: '/images/gallery/vinyl-wrap-blue-sports-car-process-springfield-or.webp',
    alt: 'Blue vinyl wrap installation on sports car — Blue Rose Auto Detailing Springfield OR',
    title: 'Sports Car — Blue Vinyl Wrap Install',
    category: 'process',
    service: 'vinyl-wraps',
    featured: true,
    width: 1200, height: 1200,
  },

  // ── Interior After ────────────────────────────────────────────────────────
  {
    src: '/images/gallery/interior-detail-toyota-rav4-dashboard-clean-springfield-or.webp',
    alt: 'Toyota RAV4 interior dashboard and seats cleaned — Thank You floor mats Blue Rose Auto Detailing Springfield OR',
    title: 'Toyota RAV4 — Interior Detail After',
    category: 'interior',
    service: 'auto-detailing',
    featured: true,
    width: 1200, height: 800,
  },
  {
    src: '/images/gallery/interior-detail-dodge-ram-1500-black-leather-springfield-or.webp',
    alt: 'Dodge RAM 1500 black leather interior cleaned and detailed — Blue Rose Auto Detailing Springfield OR',
    title: 'Dodge RAM 1500 — Black Leather Interior',
    category: 'interior',
    service: 'auto-detailing',
    featured: true,
    width: 1200, height: 800,
  },
  {
    src: '/images/gallery/interior-detail-acura-mdx-black-leather-seats-springfield-or.webp',
    alt: 'Acura MDX black leather interior seats cleaned after deep detail — Blue Rose Auto Detailing Springfield OR',
    title: 'Acura MDX — Black Leather Interior After',
    category: 'interior',
    service: 'auto-detailing',
    featured: false,
    width: 1200, height: 900,
  },
  {
    src: '/images/gallery/interior-detail-toyota-celica-dashboard-clean-springfield-or.webp',
    alt: 'Toyota Celica interior dashboard cleaned — We Take Pride In Your Vehicle mats Springfield OR',
    title: 'Toyota Celica — Interior Dashboard Detail',
    category: 'interior',
    service: 'auto-detailing',
    featured: false,
    width: 1200, height: 900,
  },
  {
    src: '/images/gallery/interior-detail-toyota-4runner-carpet-clean-springfield-or.webp',
    alt: 'Toyota 4Runner interior carpet and floor deep cleaned — Blue Rose Auto Detailing Springfield OR',
    title: 'Toyota 4Runner — Interior Deep Clean',
    category: 'interior',
    service: 'auto-detailing',
    featured: false,
    width: 1200, height: 900,
  },
  {
    src: '/images/gallery/interior-detail-minivan-headliner-clean-springfield-or.webp',
    alt: 'Minivan headliner and ceiling cleaned during interior detail — Blue Rose Auto Detailing Springfield OR',
    title: 'Minivan — Headliner & Ceiling Interior Clean',
    category: 'interior',
    service: 'auto-detailing',
    featured: false,
    width: 1200, height: 800,
  },
  {
    src: '/images/gallery/interior-detail-jeep-wrangler-rear-seats-before-springfield-or.webp',
    alt: 'Jeep Wrangler rear interior seats before deep clean — Blue Rose Auto Detailing Springfield OR',
    title: 'Jeep Wrangler — Interior Before Deep Clean',
    category: 'interior',
    service: 'auto-detailing',
    featured: false,
    width: 1200, height: 900,
  },
  {
    src: '/images/gallery/interior-detail-honda-civic-si-seat-before-springfield-or.webp',
    alt: 'Honda Civic Si front seat before interior deep clean — Blue Rose Auto Detailing Springfield OR',
    title: 'Honda Civic Si — Seat Before Deep Clean',
    category: 'interior',
    service: 'auto-detailing',
    featured: false,
    width: 1200, height: 900,
  },

  // ── Process Shots ─────────────────────────────────────────────────────────
  {
    src: '/images/gallery/interior-detail-lexus-rx330-deep-clean-process-springfield-or.webp',
    alt: 'Blue Rose technician deep cleaning Lexus RX330 interior — Springfield OR auto detailing',
    title: 'Lexus RX330 — Deep Interior Clean In Progress',
    category: 'process',
    service: 'auto-detailing',
    featured: true,
    width: 1200, height: 800,
  },
  {
    src: '/images/gallery/interior-detail-carpet-extraction-deep-clean-springfield-or.webp',
    alt: 'Full vehicle carpet extracted and deep cleaned — Blue Rose Auto Detailing Springfield OR',
    title: 'Carpet Extraction — Deep Interior Clean Process',
    category: 'process',
    service: 'auto-detailing',
    featured: false,
    width: 1200, height: 800,
  },
]

export const FEATURED_GALLERY = GALLERY.filter(g => g.featured)
