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
  // ── Land Rover Defender — Paint Correction + Ceramic (hero project) ────────
  {
    src: '/images/gallery/paint-correction-land-rover-defender-blue-garage-springfield-or.webp',
    alt: 'Blue Land Rover Defender 110 inside Blue Rose Auto Detailing garage — paint correction Springfield OR',
    title: 'Land Rover Defender 110 — Paint Correction',
    category: 'paint-correction',
    service: 'paint-correction',
    featured: true,
    width: 1200, height: 1600,
  },
  {
    src: '/images/gallery/auto-detailing-land-rover-defender-blue-exterior-rear-springfield-or.webp',
    alt: 'Land Rover Defender blue SUV exterior rear view after auto detailing — Springfield OR',
    title: 'Land Rover Defender — Exterior Detail After',
    category: 'exterior',
    service: 'auto-detailing',
    featured: true,
    width: 1200, height: 1600,
  },
  {
    src: '/images/gallery/auto-detailing-land-rover-defender-blue-exterior-side-springfield-or.webp',
    alt: 'Land Rover Defender blue 110 side profile after full auto detail — Blue Rose Auto Detailing Springfield OR',
    title: 'Land Rover Defender 110 — Full Detail',
    category: 'exterior',
    service: 'auto-detailing',
    featured: false,
    width: 1200, height: 1600,
  },
  {
    src: '/images/gallery/paint-correction-land-rover-defender-gloss-panel-springfield-or.webp',
    alt: 'Land Rover Defender paint correction — deep gloss panel reflection Springfield OR',
    title: 'Defender — Paint Correction Close-Up',
    category: 'paint-correction',
    service: 'paint-correction',
    featured: false,
    width: 1200, height: 1600,
  },
  {
    src: '/images/gallery/paint-correction-land-rover-defender-door-mirror-gloss-springfield-or.webp',
    alt: 'Land Rover Defender door panel after paint correction showing mirror gloss finish — Springfield OR',
    title: 'Defender Door Panel — Mirror Gloss Result',
    category: 'paint-correction',
    service: 'paint-correction',
    featured: false,
    width: 1200, height: 1600,
  },
  {
    src: '/images/gallery/paint-correction-land-rover-defender-gloss-finish-springfield-or.webp',
    alt: 'Land Rover Defender paint correction gloss finish reflection in shop — Blue Rose Auto Detailing',
    title: 'Defender — Paint Correction Gloss Result',
    category: 'paint-correction',
    service: 'paint-correction',
    featured: false,
    width: 1200, height: 1600,
  },
  {
    src: '/images/gallery/ceramic-coating-land-rover-defender-sill-reflection-springfield-or.webp',
    alt: 'Land Rover Defender sill after ceramic coating — deep reflection Springfield OR',
    title: 'Defender Sill — Ceramic Coating Reflection',
    category: 'ceramic',
    service: 'ceramic-coating',
    featured: false,
    width: 1200, height: 1600,
  },
  {
    src: '/images/gallery/ceramic-coating-land-rover-defender-water-beading-paint-springfield-or.webp',
    alt: 'Water beading on Land Rover Defender paint after ceramic coating — Blue Rose Auto Detailing Springfield OR',
    title: 'Defender — Ceramic Coating Water Beading',
    category: 'ceramic',
    service: 'ceramic-coating',
    featured: true,
    width: 1200, height: 1600,
  },

  // ── Maserati Levante ──────────────────────────────────────────────────────
  {
    src: '/images/gallery/auto-detailing-maserati-levante-black-suv-exterior-springfield-or.webp',
    alt: 'Maserati Levante black SUV exterior after full auto detailing — Blue Rose Auto Detailing Springfield OR',
    title: 'Maserati Levante — Full Auto Detail',
    category: 'exterior',
    service: 'auto-detailing',
    featured: true,
    width: 1200, height: 1600,
  },
  {
    src: '/images/gallery/auto-detailing-maserati-levante-foam-wash-springfield-or.webp',
    alt: 'Maserati Levante trident badge under snow foam during auto detail — Springfield OR',
    title: 'Maserati Levante — Snow Foam Wash',
    category: 'process',
    service: 'auto-detailing',
    featured: false,
    width: 1200, height: 1600,
  },

  // ── Mercedes-Benz GLA ─────────────────────────────────────────────────────
  {
    src: '/images/gallery/auto-detailing-mercedes-gla-full-detail-inside-garage-springfield-or.webp',
    alt: 'Mercedes-Benz GLA black in Blue Rose Auto Detailing garage — full auto detail Springfield OR',
    title: 'Mercedes GLA AMG — Full Detail in Shop',
    category: 'exterior',
    service: 'auto-detailing',
    featured: true,
    width: 1200, height: 1600,
  },
  {
    src: '/images/gallery/auto-detailing-mercedes-gla-shop-springfield-or.webp',
    alt: 'Mercedes-Benz GLA black SUV inside detailing shop — Blue Rose Auto Detailing Springfield OR',
    title: 'Mercedes GLA — Detailing Shop',
    category: 'exterior',
    service: 'auto-detailing',
    featured: false,
    width: 1200, height: 1600,
  },
  {
    src: '/images/gallery/auto-detailing-mercedes-gla-black-exterior-springfield-or.webp',
    alt: 'Mercedes-Benz GLA 200 black exterior after auto detail — Blue Rose Auto Detailing Springfield OR',
    title: 'Mercedes GLA — Exterior After Detail',
    category: 'exterior',
    service: 'auto-detailing',
    featured: false,
    width: 1200, height: 1600,
  },
  {
    src: '/images/gallery/auto-detailing-mercedes-gla-black-rear-exterior-springfield-or.webp',
    alt: 'Mercedes-Benz GLA rear exterior after full auto detail — Springfield OR',
    title: 'Mercedes GLA — Rear Exterior Detail',
    category: 'exterior',
    service: 'auto-detailing',
    featured: false,
    width: 1200, height: 1600,
  },
  {
    src: '/images/gallery/interior-detail-mercedes-gla-steering-wheel-springfield-or.webp',
    alt: 'Mercedes-Benz GLA AMG steering wheel interior detail — Springfield Oregon',
    title: 'Mercedes GLA AMG — Interior Steering Wheel',
    category: 'interior',
    service: 'auto-detailing',
    featured: false,
    width: 1200, height: 1600,
  },
  {
    src: '/images/gallery/auto-detailing-mercedes-gla-snow-foam-wash-springfield-or.webp',
    alt: 'Mercedes-Benz GLA covered in snow foam during exterior wash — Blue Rose Auto Detailing',
    title: 'Mercedes GLA — Snow Foam Wash Process',
    category: 'process',
    service: 'auto-detailing',
    featured: false,
    width: 1200, height: 1600,
  },

  // ── Mercedes-Benz GLC ─────────────────────────────────────────────────────
  {
    src: '/images/gallery/auto-detailing-mercedes-glc-black-exterior-springfield-or.webp',
    alt: 'Mercedes-Benz GLC black exterior after auto detail — Blue Rose Auto Detailing Springfield OR',
    title: 'Mercedes GLC — Exterior Auto Detail',
    category: 'exterior',
    service: 'auto-detailing',
    featured: false,
    width: 1200, height: 1600,
  },
  {
    src: '/images/gallery/ceramic-coating-mercedes-glc-wheel-red-brake-caliper-springfield-or.webp',
    alt: 'Mercedes-Benz GLC alloy wheel with red brake caliper after ceramic coating — Springfield OR',
    title: 'Mercedes GLC — Ceramic Coating Wheel Detail',
    category: 'ceramic',
    service: 'ceramic-coating',
    featured: true,
    width: 1200, height: 1600,
  },
  {
    src: '/images/gallery/ceramic-coating-mercedes-gls-amg-wheel-red-caliper-springfield-or.webp',
    alt: 'Mercedes-Benz GLS AMG black alloy wheel red brake caliper ceramic coating — Blue Rose Auto Detailing',
    title: 'Mercedes GLS AMG — Wheel Ceramic Coating',
    category: 'ceramic',
    service: 'ceramic-coating',
    featured: false,
    width: 1200, height: 1600,
  },

  // ── BMW ───────────────────────────────────────────────────────────────────
  {
    src: '/images/gallery/auto-detailing-bmw-3-series-black-exterior-springfield-or.webp',
    alt: 'BMW 3 Series black exterior after full auto detail — Blue Rose Auto Detailing Springfield OR',
    title: 'BMW 3 Series — Full Exterior Detail',
    category: 'exterior',
    service: 'auto-detailing',
    featured: true,
    width: 1200, height: 1600,
  },
  {
    src: '/images/gallery/interior-detail-bmw-x5-beige-leather-dashboard-springfield-or.webp',
    alt: 'BMW X5 interior beige leather dashboard and center console after deep interior detail — Springfield OR',
    title: 'BMW X5 — Interior Deep Clean',
    category: 'interior',
    service: 'auto-detailing',
    featured: true,
    width: 1200, height: 1600,
  },

  // ── Audi ──────────────────────────────────────────────────────────────────
  {
    src: '/images/gallery/auto-detailing-audi-a3-black-exterior-springfield-or.webp',
    alt: 'Audi A3 black exterior after full auto detail — Blue Rose Auto Detailing Springfield OR',
    title: 'Audi A3 — Exterior After Detail',
    category: 'exterior',
    service: 'auto-detailing',
    featured: false,
    width: 1200, height: 1600,
  },
  {
    src: '/images/gallery/interior-detail-audi-a3-steering-wheel-clean-springfield-or.webp',
    alt: 'Audi A3 steering wheel interior deep clean — Blue Rose Auto Detailing Springfield OR',
    title: 'Audi A3 — Interior Steering Wheel Detail',
    category: 'interior',
    service: 'auto-detailing',
    featured: false,
    width: 1200, height: 1600,
  },
  {
    src: '/images/gallery/auto-detailing-audi-a3-alloy-wheel-clean-springfield-or.webp',
    alt: 'Audi A3 alloy wheel cleaned and dressed during full auto detail — Springfield OR',
    title: 'Audi A3 — Alloy Wheel Detail',
    category: 'exterior',
    service: 'auto-detailing',
    featured: false,
    width: 1200, height: 1600,
  },
  {
    src: '/images/gallery/auto-detailing-audi-q7-snow-foam-wash-springfield-or.webp',
    alt: 'Audi Q7 SUV covered in snow foam during exterior detail — Blue Rose Auto Detailing Springfield OR',
    title: 'Audi Q7 — Snow Foam Wash',
    category: 'process',
    service: 'auto-detailing',
    featured: false,
    width: 1200, height: 1600,
  },

  // ── VW Golf R ─────────────────────────────────────────────────────────────
  {
    src: '/images/gallery/auto-detailing-vw-golf-r-black-exterior-detail-springfield-or.webp',
    alt: 'VW Golf R black exterior detail after full auto detail — Blue Rose Auto Detailing Springfield OR',
    title: 'VW Golf R — Full Exterior Detail',
    category: 'exterior',
    service: 'auto-detailing',
    featured: false,
    width: 1200, height: 1600,
  },
  {
    src: '/images/gallery/auto-detailing-vw-golf-r-full-detail-after-springfield-or.webp',
    alt: 'VW Golf R black hatchback after complete auto detail — Springfield Oregon',
    title: 'VW Golf R — Complete Auto Detail After',
    category: 'exterior',
    service: 'auto-detailing',
    featured: false,
    width: 1200, height: 1600,
  },

  // ── Ford Transit Van ──────────────────────────────────────────────────────
  {
    src: '/images/gallery/auto-detailing-ford-transit-custom-van-garage-springfield-or.webp',
    alt: 'Ford Transit Custom van auto detail inside Blue Rose detailing garage — Springfield OR',
    title: 'Ford Transit Custom Van — Full Detail',
    category: 'exterior',
    service: 'auto-detailing',
    featured: false,
    width: 1200, height: 1600,
  },
]

export const FEATURED_GALLERY = GALLERY.filter(g => g.featured)
