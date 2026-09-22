export interface Service {
  slug: string
  name: string
  shortName: string
  tagline: string
  summary: string          // 40-60 word direct-answer block for AEO
  description: string      // 150-200 word intro paragraph
  process: ProcessStep[]
  benefits: string[]
  faqIds: string[]         // references FAQs from faqs.ts
  heroAlt: string          // image alt text (SEO)
  heroImage: string        // placeholder filename
  metaTitle: string
  metaDescription: string
  schema: {
    name: string
    serviceType: string
    description: string
  }
}

export interface ProcessStep {
  title: string
  description: string
}

export const SERVICES: Service[] = [
  {
    slug: 'auto-detailing',
    name: 'Auto Detailing',
    shortName: 'Auto Detailing',
    tagline: 'Full Interior & Exterior Detailing in Springfield, OR',
    summary:
      'Auto detailing at Blue Rose covers a thorough hand wash, clay bar decontamination, interior deep clean, carpet extraction, leather conditioning, and glass polish — restoring your vehicle to a showroom-level finish inside and out.',
    description:
      "A true detail is more than a car wash. At Blue Rose Auto Detailing Services in Springfield, OR, every full-detail job begins with a two-bucket hand wash and decontamination clay bar treatment to safely lift bonded contamination from the paint. Interior work includes vacuuming, steam-cleaning vents and crevices, carpet extraction, leather conditioning, and streak-free glass cleaning. The exterior finish with a machine polish and protective sealant to enhance gloss and add short-term protection. Whether you're prepping a classic car for show, getting your daily driver road-trip ready, or restoring a vehicle you just purchased, our detail process is adapted to your specific needs and paint condition. We explain every step and price every job honestly — no surprise add-ons.",
    process: [
      { title: 'Rinse & Wheel Clean', description: 'High-pressure rinse removes loose dirt; wheels and wheel wells cleaned first to avoid cross-contamination.' },
      { title: 'Two-Bucket Hand Wash', description: 'Grit guard buckets prevent swirl marks; pH-neutral soap used on all surfaces.' },
      { title: 'Clay Bar Decontamination', description: 'Fine clay bar removes bonded rail dust, overspray, and industrial fallout the wash leaves behind.' },
      { title: 'Interior Deep Clean', description: 'Full vacuum, carpet extraction, vent detailing, leather conditioning, and streak-free glass treatment.' },
      { title: 'Machine Polish & Seal', description: 'Light machine polish removes minor surface oxidation and water spots; paint sealant adds 3–6 months of protection.' },
      { title: 'Final Inspection', description: 'Tristan personally inspects every vehicle under LED lighting before it leaves the shop.' },
    ],
    benefits: [
      'Removes bonded contamination not reached by a car wash',
      'Interior restoration including leather and carpet',
      'Machine-polished paint with noticeably improved gloss',
      'Transparent pricing — quoted before work begins',
      'Owner-inspected quality control on every job',
    ],
    faqIds: ['detail-how-long', 'detail-how-often', 'bring-car-in'],
    heroAlt: 'Full auto detailing in Springfield OR — Blue Rose Auto Detailing Services',
    heroImage: '/images/auto-detailing-springfield-or-blue-rose.jpg',
    metaTitle: 'Auto Detailing in Springfield & Eugene, OR | Blue Rose',
    metaDescription:
      'Professional full interior & exterior auto detailing in Springfield, OR. Clay bar, machine polish, carpet extraction, leather conditioning. Call (541) 337-9893.',
    schema: {
      name: 'Auto Detailing',
      serviceType: 'AutoDetailingService',
      description: 'Professional full interior and exterior auto detailing including clay bar decontamination, machine polish, carpet extraction, and leather conditioning.',
    },
  },
  {
    slug: 'paint-correction',
    name: 'Paint Correction',
    shortName: 'Paint Correction',
    tagline: 'Remove Swirls, Scratches & Oxidation — Springfield, OR',
    summary:
      'Paint correction is a multi-stage machine polishing process that removes swirl marks, light scratches, water spots, and oxidation from your vehicle\'s clear coat, restoring true paint clarity and gloss without repainting.',
    description:
      "Your car's paint tells a story — and unfortunately, most of that story involves automatic car washes, improper hand washing, and years of fine scratches accumulating in the clear coat. Paint correction at Blue Rose reverses that damage using professional-grade dual-action and rotary polishers with graduated polishing compounds and finishing pads. The process starts with a paint thickness gauge reading so we never polish through the clear coat — every cut is calculated, not guessed. Stage one removes the bulk of defects; stage two refines the finish; a final pass produces the deep, wet gloss that looks like it just rolled off the show floor. We document the correction percentage so you know exactly what was achieved. Paint correction is a prerequisite for ceramic coating — a coat applied over defect-laden paint just locks those defects in permanently.",
    process: [
      { title: 'Paint Thickness Measurement', description: 'Digital gauge readings at multiple points across every panel ensure we have safe polishing depth.' },
      { title: 'Decontamination Wash', description: 'Iron remover, tar remover, and clay bar eliminate surface contamination before polishing begins.' },
      { title: 'Stage 1 Cut', description: 'Compound polish and cutting pad removes heavy swirls, water spots, and oxidation.' },
      { title: 'Stage 2 Refinement', description: 'Medium polish and polishing pad refines the finish, removing compound trails and micro-marring.' },
      { title: 'Finishing Pass', description: 'Ultra-fine polish and finishing pad produces maximum gloss and clarity.' },
      { title: 'Panel Wipe & Inspection', description: 'IPA wipe-down removes polish oils so defect correction percentage can be assessed under LED lighting.' },
    ],
    benefits: [
      'Removes up to 90%+ of swirl marks and light scratches',
      'Restores true paint depth and gloss without repainting',
      'Required preparation step before ceramic coating',
      'Paint thickness monitored throughout to protect clear coat',
      'Documented results — you see the before and after',
    ],
    faqIds: ['correction-how-long', 'correction-vs-polish', 'correction-before-ceramic'],
    heroAlt: 'Paint correction removing swirl marks on dark paint — Blue Rose Auto Detailing Springfield OR',
    heroImage: '/images/paint-correction-eugene-or-blue-rose.jpg',
    metaTitle: 'Paint Correction in Eugene & Springfield, OR | Blue Rose',
    metaDescription:
      'Professional multi-stage paint correction removing swirls, scratches & oxidation in Springfield, OR. Paint thickness gauged on every car. Call (541) 337-9893.',
    schema: {
      name: 'Paint Correction',
      serviceType: 'PaintCorrectionService',
      description: 'Multi-stage machine polishing service that removes swirl marks, light scratches, water spots, and oxidation to restore paint clarity and gloss.',
    },
  },
  {
    slug: 'ceramic-coating',
    name: 'Ceramic Coating',
    shortName: 'Ceramic Coating',
    tagline: 'Professional Ceramic Coating in Springfield & Eugene, OR',
    summary:
      'Ceramic coating is a liquid polymer bonded directly to your paint that creates a permanent, hydrophobic protective layer — far more durable than wax or sealant — with self-cleaning properties, UV protection, and a deep glossy finish that can last several years.',
    description:
      "Ceramic coating is the biggest single upgrade you can make to a vehicle's paint protection. When properly applied over corrected paint, a professional-grade ceramic coat chemically bonds to the clear coat and creates a rigid, hydrophobic shell that repels water, road grime, bird droppings, tree sap, and UV radiation with far greater durability than any wax or polymer sealant. At Blue Rose, we use professional-grade coatings — not the consumer spray-on products. The application happens in our controlled indoor environment after full paint correction and decontamination, because any contamination sealed under the coating becomes permanent. The result: water beads violently off every surface, dirt doesn't bond to the paint, and the gloss is noticeably deeper and more reflective than factory. Most coatings we apply carry 2–5 year durability under normal driving conditions. We also offer coating packages that extend to glass, wheels, and trim.",
    process: [
      { title: 'Paint Correction', description: 'Ceramic coating locks in whatever is under it — defects must be corrected first or they become permanent.' },
      { title: 'Final Decontamination', description: 'IPA wipe-down and panel wipe ensures zero oils, wax, or silicone on the surface before application.' },
      { title: 'Coating Application', description: 'Ceramic coating applied panel by panel with leveling cloth; flash time monitored per product specification.' },
      { title: 'Cure in Controlled Environment', description: 'Vehicle kept in our shop during initial cure period to avoid water or contamination contact.' },
      { title: 'Maintenance Instructions', description: 'We walk you through proper wash technique and maintenance products to protect your investment.' },
    ],
    benefits: [
      'Hydrophobic surface — water and dirt slide off, making washing easier',
      'UV protection prevents paint fading and oxidation',
      '2–5 year durability vs. weeks/months for wax',
      'Deep, glossy finish with enhanced paint clarity',
      'Can be extended to glass, wheels, and plastic trim',
    ],
    faqIds: ['ceramic-cost', 'ceramic-how-long', 'ceramic-vs-wax', 'ceramic-ppf-combo'],
    heroAlt: 'Ceramic coating water beading on black car — Blue Rose Auto Detailing Springfield OR',
    heroImage: '/images/ceramic-coating-springfield-or-blue-rose.jpg',
    metaTitle: 'Ceramic Coating in Springfield & Eugene, OR | Blue Rose',
    metaDescription:
      'Professional ceramic coating applied over corrected paint in Springfield, OR. 2–5 year protection, deep gloss, hydrophobic finish. Call (541) 337-9893.',
    schema: {
      name: 'Ceramic Coating',
      serviceType: 'CeramicCoatingService',
      description: 'Professional ceramic paint coating that chemically bonds to clear coat, providing hydrophobic protection, UV resistance, and enhanced gloss lasting 2–5 years.',
    },
  },
  {
    slug: 'paint-protection-film',
    name: 'Paint Protection Film',
    shortName: 'PPF',
    tagline: 'Paint Protection Film (PPF) in Springfield, OR',
    summary:
      'Paint protection film (PPF) is a thick, optically clear urethane film applied to high-impact areas of your vehicle — hood, bumper, mirrors, rocker panels — that absorbs rock chips, road debris, and minor abrasions before they ever reach your paint.',
    description:
      "No coating or wax can stop a rock chip — only physical film can. Paint protection film (PPF) is the most complete paint defense available: a thick, self-healing urethane film custom-cut and applied to your vehicle's high-risk surfaces. The film is virtually invisible when properly installed, and modern PPF has a self-healing top coat that causes light surface scratches to disappear with heat exposure. We offer partial-front-end packages (bumper, hood leading edge, A-pillars, mirrors, door cups) and full-front or full-vehicle coverage depending on your needs. PPF is frequently combined with ceramic coating on top — the film handles physical impacts, the ceramic handles contamination. We've done ceramic + PPF combo jobs that customers praised specifically for how the two work together. The investment in PPF is measured against the cost of a single paint repair — rock chip repairs on late-model vehicles can cost hundreds per panel.",
    process: [
      { title: 'Surface Preparation', description: 'Thorough decontamination wash and clay bar treatment before any film is applied.' },
      { title: 'Custom Film Cutting', description: 'Templates custom-cut to your specific vehicle\'s panels for precise coverage without visible edges.' },
      { title: 'Application', description: 'Film applied with slip solution and squeegeed flat; edges tucked into door jambs and seams where possible.' },
      { title: 'Inspection & Trimming', description: 'Every edge inspected under LED lighting; final trimming and edge sealing completed.' },
      { title: 'Optional Ceramic Top Coat', description: 'Ceramic coating on top of PPF dramatically enhances gloss and makes the film easier to clean.' },
    ],
    benefits: [
      'Physical protection from rock chips, road debris, and minor impacts',
      'Self-healing surface coat — light scratches disappear with heat',
      'Virtually invisible on properly-fitted panels',
      'Can be combined with ceramic coating for ultimate protection',
      'Protects resale value by preserving factory paint',
    ],
    faqIds: ['ppf-vs-ceramic', 'ppf-how-long-lasts', 'ceramic-ppf-combo'],
    heroAlt: 'Paint protection film applied to hood and bumper — Blue Rose Auto Detailing Springfield OR',
    heroImage: '/images/paint-protection-film-springfield-or-blue-rose.jpg',
    metaTitle: 'Paint Protection Film (PPF) in Springfield, OR | Blue Rose',
    metaDescription:
      'Professional PPF installation for rock chip & road debris protection in Springfield, OR. Full-front, partial, or full-vehicle coverage. Call (541) 337-9893.',
    schema: {
      name: 'Paint Protection Film (PPF)',
      serviceType: 'PaintProtectionFilmService',
      description: 'Custom-cut urethane paint protection film installation protecting high-impact vehicle surfaces from rock chips, road debris, and abrasion.',
    },
  },
  {
    slug: 'window-tinting',
    name: 'Window Tinting',
    shortName: 'Window Tinting',
    tagline: 'Professional Window Tinting in Springfield & Eugene, OR',
    summary:
      'Window tinting at Blue Rose uses high-quality film to block UV radiation, reduce interior heat buildup, increase privacy, and enhance the aesthetic of your vehicle — professionally installed with clean, bubble-free edges.',
    description:
      "Window film does more than change how your car looks — it meaningfully affects how it feels to drive. A quality tint blocks 99% of UV-A radiation, which is the type that fades your interior and contributes to skin damage on long drives. It also significantly reduces heat buildup on hot Oregon summer days, reducing A/C load and fuel consumption. At Blue Rose, we offer several film types from standard dyed film to high-performance ceramic window film that blocks infrared heat without the metallic look that interferes with signals. Every tint job starts with a deep clean of the glass to eliminate any dust or debris that would create bubbles — the number one cause of poor tint jobs elsewhere. We handle the Oregon legal limit compliance — front-side windows must allow 35%+ light transmission, and we'll advise you on legal options before you decide. Rear windows can go much darker for privacy and heat rejection.",
    process: [
      { title: 'Glass Cleaning & Prep', description: 'Windows cleaned with ammonia-free solution and razor-scraped to remove any debris before film application.' },
      { title: 'Film Cutting', description: 'Film cut to exact window dimensions — no improvised trimming on the glass.' },
      { title: 'Application', description: 'Film applied with slip solution and hard-card squeegee to push out water and air from every corner.' },
      { title: 'Dry Time', description: 'Windows left to cure; we advise on how long to avoid rolling windows down to allow proper adhesion.' },
      { title: 'Final Inspection', description: 'Each window inspected for bubbles, dust inclusions, and edge adhesion.' },
    ],
    benefits: [
      'Blocks 99% of UV radiation — protects skin and interior',
      'Reduces interior heat, lowering A/C demand',
      'Enhanced privacy and security (harder to see valuables)',
      'Improves vehicle aesthetics significantly',
      'Oregon-legal film options available for all window positions',
    ],
    faqIds: ['tint-legal-oregon', 'tint-how-long-lasts', 'tint-types'],
    heroAlt: 'Professional window tinting on car at Blue Rose Auto Detailing Springfield OR',
    heroImage: '/images/window-tinting-springfield-or-blue-rose.jpg',
    metaTitle: 'Window Tinting in Springfield & Eugene, OR | Blue Rose',
    metaDescription:
      'Professional window tinting in Springfield, OR. UV-blocking, heat-reducing film types from standard to ceramic. Oregon-legal compliance advised. Call (541) 337-9893.',
    schema: {
      name: 'Window Tinting',
      serviceType: 'WindowTintingService',
      description: 'Professional automotive window film installation blocking UV radiation, reducing heat, and enhancing vehicle privacy and appearance.',
    },
  },
  {
    slug: 'vinyl-wraps',
    name: 'Vinyl Wraps',
    shortName: 'Vinyl Wraps',
    tagline: 'Custom Vinyl Wraps in Springfield & Eugene, OR',
    summary:
      'Vinyl wraps let you change your vehicle\'s color or finish — matte, satin, gloss, chrome, color-shift — without permanent paint and without voiding your factory warranty, using cast vinyl film that conforms to every curve and edge.',
    description:
      "A vinyl wrap is one of the most versatile vehicle upgrades available — change your color, protect your factory paint, and revert to stock when you choose, all for significantly less than a full respray. At Blue Rose, we work with high-quality cast vinyl films that conform to compound curves, deep recesses, and complex bodywork without lifting or peeling at edges. We offer full vehicle wraps, partial wraps (roof, hood, trunk), and accent pieces (pillars, mirror caps, trim). The prep work matters as much as the wrap itself — panels must be clean, decontaminated, and warm before film application. We also wrap commercial fleet vehicles for businesses in the Eugene-Springfield area. After installation, a ceramic coating on top of the vinyl dramatically improves the finish, makes cleaning easier, and extends the life of the wrap — we frequently recommend this combination.",
    process: [
      { title: 'Surface Preparation', description: 'Full decontamination wash, trim removal where necessary, and panel cleaning with IPA solution.' },
      { title: 'Film Measurement & Cut', description: 'Cast vinyl measured and cut with generous overlap for tucking into panel edges and seams.' },
      { title: 'Application', description: 'Film applied with heat gun for conforming to curves; edges tucked and heat-sealed.' },
      { title: 'Trimming & Edge Work', description: 'Precision trimming around door handles, emblems, and panel edges for a clean OEM-style look.' },
      { title: 'Post-Wrap Ceramic (Optional)', description: 'Ceramic coating on top of the wrap improves gloss, adds UV protection, and extends wrap life.' },
    ],
    benefits: [
      'Change vehicle color or finish without permanent paint',
      'Protects factory paint underneath the wrap',
      'Reversible — remove and revert to original paint',
      'Available in matte, satin, gloss, chrome, color-shift finishes',
      'Much less expensive than a full respray',
    ],
    faqIds: ['wrap-how-long', 'wrap-vs-paint', 'wrap-care'],
    heroAlt: 'Custom vinyl wrap color change on vehicle — Blue Rose Auto Detailing Springfield OR',
    heroImage: '/images/vinyl-wraps-springfield-or-blue-rose.jpg',
    metaTitle: 'Vinyl Wraps in Springfield & Eugene, OR | Blue Rose',
    metaDescription:
      'Full vehicle & partial vinyl wraps in Springfield, OR. Color changes, matte & satin finishes, fleet wrapping. Reversible without damaging factory paint. Call (541) 337-9893.',
    schema: {
      name: 'Vinyl Wraps',
      serviceType: 'VinylWrapService',
      description: 'Full and partial vehicle vinyl wrap installation for color change, protection, and customization using high-quality cast vinyl film.',
    },
  },
  {
    slug: 'rv-detailing',
    name: 'RV Detailing',
    shortName: 'RV Detailing',
    tagline: 'Professional RV Detailing in Springfield & Eugene, OR',
    summary:
      'RV detailing at Blue Rose addresses the unique challenges of large recreational vehicles — oxidized fiberglass, roof membrane cleaning, slide-out seal conditioning, awning cleaning, and interior deep cleaning — restoring appearance and protecting your investment.',
    description:
      "RVs face paint and surface challenges that standard auto detailing products aren't designed for. Fiberglass oxidation turns that bright white exterior chalky and dull; rubber roof membranes accumulate black streaking and mildew; awning fabric degrades without proper cleaning and conditioning; and slide-out seals dry out and crack if neglected. At Blue Rose, we have the equipment and experience to properly detail rigs of all sizes — from Class C camper vans to Class A coaches. Our RV detail process begins with a top-down high-pressure wash, then oxidation removal and compound polishing on the fiberglass sides to restore the original color and gloss. We clean and treat the rubber roof with appropriate membrane-safe products, and clean awnings with a gentle fabric cleaner that removes biological growth without degrading the fabric. Interior work includes upholstery cleaning, carpet extraction, and cabinetry wipe-down. Before a season of use or before storing for winter, a proper RV detail protects your rig and extends its life.",
    process: [
      { title: 'Roof & Awning Cleaning', description: 'Rubber roof membrane cleaned with membrane-safe cleaners; awning fabric cleaned and treated.' },
      { title: 'Exterior Wash', description: 'Top-down pressure wash removes road grime, bug splatter, and environmental deposits from all exterior surfaces.' },
      { title: 'Fiberglass Oxidation Removal', description: 'Compound polish removes oxidation and chalking from fiberglass panels, restoring original gloss.' },
      { title: 'Slide-Out Seal Conditioning', description: 'Rubber slide seals cleaned and conditioned to prevent drying, cracking, and water intrusion.' },
      { title: 'Wax or Sealant Protection', description: 'Protective wax or polymer sealant applied to all exterior surfaces after polishing.' },
      { title: 'Interior Deep Clean', description: 'Upholstery, carpets, kitchen surfaces, and bathroom areas cleaned and deodorized.' },
    ],
    benefits: [
      'Removes fiberglass oxidation and restores exterior gloss',
      'Proper rubber roof membrane treatment extends roof life',
      'Awning and slide seal conditioning prevents costly damage',
      'Interior cleaning removes odors and restores living space',
      'Pre-season and winterization detail packages available',
    ],
    faqIds: ['rv-detail-how-long', 'rv-when-to-detail', 'bring-car-in'],
    heroAlt: 'RV detailing and oxidation removal — Blue Rose Auto Detailing Springfield OR',
    heroImage: '/images/rv-detailing-springfield-or-blue-rose.jpg',
    metaTitle: 'RV Detailing in Springfield & Eugene, OR | Blue Rose',
    metaDescription:
      'Professional RV detailing in Springfield, OR — oxidation removal, rubber roof treatment, awning cleaning, interior deep clean. All sizes. Call (541) 337-9893.',
    schema: {
      name: 'RV Detailing',
      serviceType: 'RVDetailingService',
      description: 'Professional recreational vehicle detailing including fiberglass oxidation removal, roof membrane treatment, awning cleaning, and interior deep cleaning.',
    },
  },
  {
    slug: 'boat-detailing',
    name: 'Boat Detailing',
    shortName: 'Boat Detailing',
    tagline: 'Professional Boat Detailing in Springfield & Eugene, OR',
    summary:
      'Boat detailing at Blue Rose addresses marine-specific challenges — fiberglass oxidation, waterline staining, hull polishing, cockpit cleaning, and UV protection — keeping your vessel looking and performing its best throughout the season.',
    description:
      "Boat surfaces endure UV exposure, mineral deposits from lake water, biological staining from algae and waterline growth, and general oxidation that dulls fiberglass gelcoat faster than car paint. Blue Rose brings the same methodical, quality-focused approach we apply to automotive work to boat and watercraft detailing. Our boat detail starts with a thorough flush and wash, followed by oxidation removal on the hull and deck gelcoat. Waterline staining is treated with appropriate marine-grade cleaners, and the hull is machine-polished to restore that deep wet shine. We apply a protective marine wax or gelcoat sealant to all exterior surfaces to resist UV and water minerals through the season. Cockpit interiors are vacuumed and cleaned; vinyl seating is conditioned and protected against UV cracking. We also offer full-season protection packages that include ceramic coating for boats — providing the same long-lasting hydrophobic protection you'd get on a vehicle, but adapted for marine gelcoat.",
    process: [
      { title: 'Flush & Exterior Wash', description: 'Fresh water flush and pressure wash removes lake/river deposits, algae, and surface contaminants.' },
      { title: 'Oxidation Assessment', description: 'Gelcoat oxidation assessed across hull, deck, and topsides to determine compound cut needed.' },
      { title: 'Waterline Treatment', description: 'Marine-grade cleaners remove waterline staining and biological growth at the hull-water interface.' },
      { title: 'Compound & Polish', description: 'Machine compound and polish removes oxidation from gelcoat surfaces, restoring original color depth.' },
      { title: 'Marine Wax or Ceramic', description: 'Marine-formulated wax or ceramic coating applied to all polished surfaces for season-long protection.' },
      { title: 'Cockpit & Interior Clean', description: 'Upholstery, vinyl seating, and cockpit surfaces cleaned and conditioned.' },
    ],
    benefits: [
      'Removes fiberglass gelcoat oxidation and restores shine',
      'Waterline stain removal and prevention',
      'UV protection for season-long surface preservation',
      'Vinyl seat conditioning prevents UV cracking',
      'Marine ceramic coating option for multi-year protection',
    ],
    faqIds: ['boat-detail-how-long', 'bring-car-in'],
    heroAlt: 'Boat detailing and hull polishing — Blue Rose Auto Detailing Springfield OR',
    heroImage: '/images/boat-detailing-springfield-or-blue-rose.jpg',
    metaTitle: 'Boat Detailing in Springfield & Eugene, OR | Blue Rose',
    metaDescription:
      'Professional boat & watercraft detailing in Springfield, OR — oxidation removal, waterline treatment, hull polishing, cockpit cleaning. Call (541) 337-9893.',
    schema: {
      name: 'Boat Detailing',
      serviceType: 'BoatDetailingService',
      description: 'Professional marine vessel detailing including gelcoat oxidation removal, waterline stain treatment, hull polishing, and UV protection.',
    },
  },
]

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
