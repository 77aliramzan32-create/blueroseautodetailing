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
  rightFor?: string[]
  notRightFor?: string[]
  notRightAlternative?: string
  pricingNote?: string
  localAngle?: string
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
    tagline: 'Full Interior & Exterior Detailing in Springfield & Eugene, OR',
    summary:
      'A full auto detail covers a complete exterior decontamination — iron fallout remover, clay bar, two-bucket hand wash, machine polish, and paint sealant — plus a full interior deep clean: vacuum, steam, carpet extraction, leather conditioning, and glass treatment. Every job is quoted before we start. The quote is the price on the invoice.',
    description:
      "A full detail covers every surface your car wash doesn't reach — bonded pollen and brake dust removed from the paint, carpet extracted rather than vacuumed over, leather cleaned and conditioned rather than wiped down. It takes 4–8 hours. We quote the job before we start, and that number is on your invoice. If your car has been through a rough season, a move, kids, or a dog, call (541) 337-9893 and describe what you're dealing with — we'll tell you honestly what the process will and won't fix before you commit to anything.",
    process: [
      {
        title: 'Pre-Rinse & Wheel Clean',
        description: 'Wheels and wheel wells go first — they carry the heaviest brake dust and road grime. Cleaning them last cross-contaminates everything already washed. A high-pressure rinse removes loose surface debris before any contact wash begins.',
      },
      {
        title: 'Iron Fallout Removal & Clay Bar',
        description: 'Iron fallout remover is applied to all painted surfaces and turns purple on contact as it dissolves ferrous particles bonded into the clear coat. A clay bar pass follows, lifting remaining mechanically embedded contamination — tree sap residue, overspray, heat-bonded pollen. After this step, paint should feel like glass.',
      },
      {
        title: 'Two-Bucket Hand Wash',
        description: 'pH-neutral shampoo, two buckets with grit guards. One for washing, one for rinsing the mitt between panels. This prevents the grit that causes swirl marks from going back on the paint with every pass.',
      },
      {
        title: 'Interior Deep Clean',
        description: 'Vacuum reaches every crevice — seat rails, floor vents, under the seats. Steam cleans fabric, vents, headliner, and plastic trim. Carpet extraction pulls embedded soiling and staining that vacuuming misses. Leather is cleaned then conditioned. Glass is cleaned streak-free on both sides. Trim is dressed with a matte, UV-stable, non-slip product.',
      },
      {
        title: 'Machine Polish & Paint Sealant',
        description: 'A light machine polish removes minor surface oxidation and water spots, restoring the gloss the paint is capable of. A paint sealant over the polished surface adds 3–6 months of hydrophobic protection — water beads and runs off rather than sitting and leaving deposits.',
      },
      {
        title: 'Final Inspection',
        description: 'Tristan inspects every vehicle under the LED bay before we call it done — exterior panel by panel, interior for missed areas, glass for streaks. The keys don\'t go back until that inspection is complete.',
      },
    ],
    benefits: [
      'Iron fallout remover + clay bar removes bonded contamination a car wash can\'t reach',
      'Two-bucket hand wash technique prevents the swirl marks single-bucket washing creates',
      'Carpet extraction goes deeper than vacuuming — removes embedded soiling and staining',
      'Leather cleaned before conditioning — not just conditioned over dirt',
      'Tristan\'s LED bay inspection is the last step before the keys go back to you',
    ],
    rightFor: [
      'Your paint feels rough or hazy after washing — bonded contamination that a standard wash won\'t remove',
      'Your interior has pet hair, food debris, carpet staining, or buildup from months of use',
      'You\'re selling the car — a detail before listing improves photos, removes smell, and supports a stronger asking price',
      'You\'re getting a ceramic coating and need the required decontamination wash first',
      'You just bought a used vehicle and want a clean, known baseline before putting more miles on it',
    ],
    notRightFor: [
      'Your paint has visible swirl marks and spider webbing you want removed — a detail\'s machine polish is maintenance-level gloss, not defect removal. That\'s paint correction.',
      'You have smoke odor embedded for years — a single detail can reduce it, but we\'ll tell you before we start if ozone treatment is the right call instead.',
      'Your leather is cracking through the finish — conditioning can slow progression, but cracked leather may need reconditioning products or panel work beyond a standard detail.',
    ],
    notRightAlternative:
      'Deep swirls and water spots in the clear coat: paint correction is the right service — a detail polish won\'t address them. Embedded smoke odor: ozone treatment is what removes it; we\'ll say so before quoting. Cracked leather: ask about reconditioning options at your free assessment.',
    pricingNote:
      'Price depends on vehicle size, interior condition, and which services are requested — interior-only, exterior-only, and full detail are different jobs with different time requirements. A compact car in reasonable condition costs less than a large SUV with heavy pet hair and deeply soiled carpet. We quote every job individually before starting. The price we give you is the price on the invoice.',
    localAngle:
      'Spring in the Willamette Valley is the busiest detail season for a reason. The grass seed fields surrounding Eugene and Springfield release pollen through April and May that settles on wet paint and bonds to the clear coat. A standard wash rinses the loose layer; the clay bar step in a full detail removes what\'s bonded in. By late May, most vehicles that park outside have a full season of accumulated pollen contributing to paint haze even after washing.\nThe other pattern we see consistently: outdoor-lifestyle vehicles that take real interior abuse — trucks and SUVs carrying dogs, camping gear, and muddy boots from the Cascades or the coast. Once properly cleaned, the maintenance detail is a fraction of the work. S.K. brought in a 2005 Corvette for leather and carpet restoration — a classic that left looking like it was cared for the way it deserved. R.T. had a vehicle detailed before a long road trip. Road trip prep is one of our most common spring bookings, and the sealant we apply keeps the paint cleaner through the whole drive.',
    faqIds: ['detail-how-long', 'detail-vs-carwash', 'detail-pet', 'detail-prep', 'detail-how-often', 'pricing-general'],
    heroAlt: 'Full auto detailing on Maserati Levante — Blue Rose Auto Detailing Services Springfield OR',
    heroImage: '/images/gallery/auto-detailing-maserati-levante-black-suv-exterior-springfield-or.webp',
    metaTitle: 'Auto Detailing Springfield OR | Blue Rose Auto Detailing',
    metaDescription:
      'Full interior & exterior detailing in Springfield, OR — clay bar, extraction, leather conditioning, machine polish. Free quote: (541) 337-9893.',
    schema: {
      name: 'Auto Detailing',
      serviceType: 'AutoDetailingService',
      description: 'Full interior and exterior auto detailing including iron fallout removal, clay bar decontamination, two-bucket hand wash, carpet extraction, leather conditioning, machine polish, and paint sealant.',
    },
  },
  {
    slug: 'paint-correction',
    name: 'Paint Correction',
    shortName: 'Paint Correction',
    tagline: 'Remove Swirl Marks, Water Spots & Oxidation — Springfield & Eugene, OR',
    summary:
      'Paint correction uses machine polishing with calibrated compounds to remove swirl marks, water spot etching, and clear coat oxidation. A digital paint thickness gauge is used before and during every correction to ensure the clear coat is never polished past safe limits. The result is often sharper paint clarity than the factory finish.',
    description:
      "Paint correction is machine polishing that removes swirl marks, water spot etching, and oxidation from your vehicle's clear coat. If your paint looks hazy in direct sunlight, shows a circular web under a parking lot light, or came back from the auto wash looking worse than before — this is the service that fixes it. Before we touch any car, Tristan measures the clear coat thickness with a digital gauge. That reading tells us how much material we can safely remove and whether correction is the right call at all. Call (541) 337-9893 for a free assessment.",
    process: [
      {
        title: 'Paint Thickness Measurement',
        description: 'Before any polishing begins, Tristan measures the clear coat on every panel with a digital gauge. Factory clear coat runs 100–150 microns. The reading tells us safe polishing depth and flags panels with prior bodywork that come in thinner. Below roughly 60–80 microns, the risk of cutting through to the base coat rises sharply — we stop and tell you before any correction happens on that panel.',
      },
      {
        title: 'Decontamination Wash',
        description: 'Polishing over contamination drives it further into the clear coat. Before a machine touches the paint, the car gets a full decontamination sequence: pH-neutral shampoo, iron fallout remover (watch it turn purple as it pulls brake dust and ferrous particles out of the surface), and a clay bar pass to remove anything chemically embedded. Paint should feel like glass before the first polisher comes out.',
      },
      {
        title: 'Stage 1 Cut',
        description: 'For vehicles with heavy swirls, deep water spot etching, or oxidation, we start with a cutting compound and the appropriate pad. This is the aggressive step — removing the bulk of defects by leveling the clear coat surface. We re-check thickness on panels where we\'re cutting heavily. No step is skipped to save time.',
      },
      {
        title: 'Stage 2 Refinement',
        description: 'A medium polish removes compound trails and micro-marring from the cut stage and builds gloss. Vehicles with lighter defects may skip the heavy cut entirely and start here. We assess the paint after decontamination and set the plan before charging for stages that aren\'t needed.',
      },
      {
        title: 'Finishing Pass',
        description: 'Ultra-fine polish on a soft finishing pad maximizes clarity and removes holograms — the circular DA polisher marks that are invisible under shop fluorescents but show as a cloudy swirl under a single LED. Most shops don\'t check for these. We eliminate them on every correction.',
      },
      {
        title: 'LED Inspection',
        description: 'An IPA panel wipe removes all polish oils so the true result is visible. Tristan checks every panel under the LED bay — the only light source that reveals holograms, remaining swirls, and real gloss quality. The car doesn\'t move until that inspection is done.',
      },
    ],
    benefits: [
      'Removes 70–95% of swirl marks, water spot etching, and surface oxidation',
      'Paint thickness gauged throughout — clear coat is never polished past safe limits',
      'Required preparation before ceramic coating — coating locks in whatever is beneath it',
      'Finishing pass eliminates holograms; LED bay inspection confirms the result',
      'Often produces sharper clarity than the original factory finish',
    ],
    rightFor: [
      'Your paint has visible swirl marks, spider webbing, or haze in direct sunlight',
      'You\'re preparing for ceramic coating — correction is always the required first step',
      'You bought a used car with years of accumulated wash damage you want to reset',
      'You\'re prepping for sale — corrected paint photographs better and supports a stronger asking price',
      'Your hood or roof has oxidized and looks dull or chalky compared to the side panels',
    ],
    notRightFor: [
      'The scratch catches your fingernail — it goes through the clear coat into the base coat, and polish can\'t fix it. That needs touch-up paint or a panel respray.',
      'Your clear coat is cracking or peeling — polishing accelerates the damage. Respray is the only real fix.',
      'There\'s active rust on the panel — correction is a paint process, not a metal treatment.',
      'The paint thickness gauge reads too low before we start — we\'ll measure and tell you before the car is touched.',
    ],
    notRightAlternative:
      'Deep scratch through the clear coat: touch-up paint for chips, panel respray for larger damage — we can point you to a local body shop. Failing clear coat: respray is the only permanent solution. Light surface haze with no real swirling: a decontamination wash and paint sealant may be all you need — we\'ll tell you honestly which one fits at your free assessment.',
    pricingNote:
      'Price is set by vehicle size, defect severity, and which correction stages are needed. We assess the paint after the decontamination wash and confirm the plan before you commit to anything. What we quote before the job is what goes on the invoice — no surprise add-ons.',
    localAngle:
      'Most swirl marks we see in Springfield trace back to two sources: automatic tunnel car washes and improper hand washing — single bucket, wrong towel, or wiping a dry dirty panel. The tunnel washes do the job of removing bulk dirt, but the brushes leave a predictable swirl pattern on soft paint that only shows in direct light. In spring, Willamette Valley grass seed pollen settles on wet paint and begins etching the clear coat if it isn\'t washed off within a few days. By early summer we see a steady stream of vehicles that need both decontamination and correction from the season\'s pollen accumulation.\nStreet-parked vehicles under oak and maple canopy in older Springfield and Eugene neighborhoods take a different kind of damage: sap that hardens in July heat, bird drops that etch clear coat within hours in direct sun, and light contamination that accumulates slowly and fills the surface. Correction resets all of it.',
    faqIds: ['correction-how-long', 'correction-scratches', 'correction-safe', 'correction-before-ceramic', 'correction-how-many-times', 'correction-vs-polish'],
    heroAlt: 'Audi RS7 paint correction process — Blue Rose Auto Detailing Services Springfield OR',
    heroImage: '/images/gallery/paint-correction-audi-rs7-grey-polishing-process-springfield-or.webp',
    metaTitle: 'Paint Correction Springfield OR | Blue Rose Auto Detailing',
    metaDescription:
      'Machine paint correction removes swirls, water spots & oxidation in Springfield, OR. Paint thickness gauged before every job. Free quote: (541) 337-9893.',
    schema: {
      name: 'Paint Correction',
      serviceType: 'PaintCorrectionService',
      description: 'Multi-stage machine paint correction that removes swirl marks, water spot etching, and oxidation from automotive clear coat. Paint thickness gauged on every vehicle before and during correction.',
    },
  },
  {
    slug: 'ceramic-coating',
    name: 'Ceramic Coating',
    shortName: 'Ceramic Coating',
    tagline: 'Professional Ceramic Coating in Springfield & Eugene, OR',
    summary:
      'Ceramic coating is a liquid polymer that chemically bonds to your vehicle\'s clear coat and cures into a semi-permanent, hydrophobic layer. It repels water, resists bird droppings, tree sap, and UV radiation, and outlasts wax by years — not months. It must be applied over clean, corrected paint: anything sealed under the coating becomes permanent. Professional-grade ceramic is not the spray-on product sold at auto parts stores.',
    description:
      'Ceramic coating is a chemical bond to your clear coat — not a topcoat you wax over and eventually wash off. A liquid polymer is applied panel by panel in a controlled environment, bonds as it cures, and becomes part of the surface. Water beads and sheets off. Bird droppings and tree sap don\'t etch as readily. UV stops hitting bare paint directly. Washing takes noticeably less effort because contamination doesn\'t bond the way it does to an unprotected surface.\n\nThe thing most shops don\'t tell you: ceramic coating amplifies whatever is under it. Applied over corrected, glossy paint, it deepens the clarity and makes a great paint job look excellent. Applied over swirled, hazed, or oxidized paint, it locks those defects in permanently — removing the coating to correct them afterward is a difficult, expensive job. This is why every ceramic coating at Blue Rose Auto Detailing Services starts with at minimum a decontamination wash and, for most vehicles, a correction pass.\n\nCall (541) 337-9893 for a free assessment.',
    process: [
      {
        title: 'Paint Assessment & Thickness Measurement',
        description:
          'Before any work begins, Tristan measures the clear coat on every panel with a digital paint thickness gauge. Factory clear coat runs 100–150 microns. The reading tells us how much material can be safely removed in correction and flags panels with prior bodywork that come in thinner. This step determines the correction stage needed — and whether correction is the right call at all on any given panel.',
      },
      {
        title: 'Decontamination Wash',
        description:
          'Iron fallout remover pulls ferrous particles bonded into the clear coat — watch it turn purple on contact. A clay bar pass lifts whatever the chemical treatment leaves behind: embedded pollen, overspray, heat-bonded sap residue. After decontamination, paint should feel like glass. Polishing over contamination drives particles further into the surface; this step is not optional.',
      },
      {
        title: 'Paint Correction',
        description:
          'Ceramic coating doesn\'t correct paint — it locks in what it finds. Swirl marks, water spot etching, and oxidation that exist at application time become permanent. A single-stage correction removes the majority of surface defects before the coating goes on. For vehicles in good condition coming in, a light refinement pass may be sufficient. We assess after decontamination and confirm the plan before charging for stages that aren\'t needed.',
      },
      {
        title: 'Final Surface Prep (IPA Wipe)',
        description:
          'After correction, every panel is wiped with isopropyl alcohol to remove all polish oils, silicone, and residue. The ceramic coating bonds to the paint chemistry, not to any product left on top — a surface that looks clean may still have oils invisible to the eye. This step is what makes the bond permanent rather than temporary.',
      },
      {
        title: 'Coating Application',
        description:
          'Ceramic coating is applied panel by panel with a dedicated applicator, then leveled with a clean lint-free cloth as it begins to flash. Flash time is monitored per product specification — apply too fast or spread too far and the coating high-spots; apply it right and the bond is uniform across the panel. Glass, wheels, and plastic trim are coated in separate passes with products appropriate to each surface.',
      },
      {
        title: 'Cure Period & Pickup Walkthrough',
        description:
          'The vehicle stays in our shop during the initial cure window — typically 24–72 hours before water contact. Full hardness develops over the following 2–4 weeks as the coating cross-links. At pickup, we walk you through proper wash technique and maintenance products, because how you wash the car is what determines how long the coating lasts.',
      },
    ],
    benefits: [
      'Chemical bond to the clear coat — outlasts wax and sealant by years, not months',
      'Hydrophobic surface sheds water and road film; washing is noticeably faster',
      'UV barrier prevents paint fading and clear coat oxidation over time',
      'Bird droppings and tree sap don\'t etch as readily into a coated surface',
      'Applied over corrected paint, ceramic deepens gloss and clarity noticeably',
      'Can be extended to glass, wheels, and trim for full surface coverage',
    ],
    rightFor: [
      'Your paint is in good condition (or you\'re getting it corrected) and you want it protected for the long term',
      'You park outdoors — pollen, bird droppings, sun, and road film are regular hazards that coating makes far easier to manage',
      'You\'re keeping the car 3 or more years and want to reduce the time and money spent on wax maintenance',
      'You just bought a new or used vehicle and want to protect the paint from the beginning',
      'You\'re adding PPF to high-impact areas — ceramic goes on top of the film and protects both surfaces',
    ],
    notRightFor: [
      'Your paint has visible swirls, water spot etching, or oxidation — coating locks defects in permanently. Correction must come first, or the coating is a bad investment.',
      'You want protection from rock chips — ceramic is harder than clear coat, but it doesn\'t stop physical impacts. That\'s what PPF is for.',
      'You\'re planning to sell or wrap the vehicle within 12–18 months — the coating cost rarely transfers to resale value or survives a vinyl wrap removal cleanly.',
    ],
    notRightAlternative:
      'Swirled or oxidized paint: paint correction first, then coating — applying ceramic over uncorrected paint locks the damage in permanently. Rock chip protection: paint protection film handles physical impacts; ceramic and PPF work best together. Short ownership timeline or upcoming color wrap: a detail with machine polish and 3–6 month paint sealant covers your period for a fraction of the cost. Ask at your free assessment.',
    pricingNote:
      'Ceramic coating is priced by vehicle size and which tier of coating is selected — entry-level packages through multi-year premium coatings. Paint correction, if needed, is a separate line item quoted before work begins. Most full ceramic jobs run 1–2 days: one day for correction, the next for coating application and initial cure. We quote everything before we start, and the number we give you is the number on the invoice.',
    localAngle:
      'Two things about the Willamette Valley make ceramic coating a stronger investment here than in drier climates.\n\nThe first is pollen. Grass seed fields east of Eugene and Springfield release pollen through April and May that settles on wet paint and begins etching the clear coat if left unaddressed. On an uncoated vehicle, removing bonded pollen requires a clay bar treatment — often once or twice a season. On a ceramic-coated vehicle, pollen doesn\'t bond the same way. It rinses off far more readily, and the contamination burden between details drops significantly. Customers who coat before pollen season consistently describe washing less and getting cleaner results.\n\nThe second is the wet season — October through May — when road film, tire spray, and bio-growth accumulate faster on bare paint. Ceramic\'s self-cleaning effect is most visible in wet weather: water sheeting off the surface carries contamination with it rather than letting it set.\n\nA.L. left a 5-star review after a ceramic + PPF combination job: "Tristan\'s work on my car is immaculate... best detail shop in the area." That combination — PPF on the high-impact zones, ceramic over the full vehicle — is the highest protection package we offer and the one we recommend for anyone keeping a vehicle long-term.',
    faqIds: [
      'ceramic-cost',
      'ceramic-scratch-proof',
      'ceramic-how-long',
      'ceramic-cure-time',
      'ceramic-maintenance',
      'ceramic-vs-wax',
      'ceramic-ppf-combo',
      'correction-before-ceramic',
    ],
    heroAlt: 'Ceramic coating water beading on black car — Blue Rose Auto Detailing Services Springfield OR',
    heroImage: '/images/gallery/auto-detailing-porsche-911-turbo-blue-exterior-springfield-or.webp',
    metaTitle: 'Ceramic Coating Springfield OR | Blue Rose Auto Detailing',
    metaDescription:
      'Professional ceramic coating over corrected paint in Springfield, OR. Hydrophobic protection, UV resistance, deep gloss. Free assessment: (541) 337-9893.',
    schema: {
      name: 'Ceramic Coating',
      serviceType: 'CeramicCoatingService',
      description:
        'Professional ceramic paint coating chemically bonded to clear coat over corrected paint, providing hydrophobic protection, UV resistance, and enhanced gloss lasting 2–5 years.',
    },
  },
  {
    slug: 'paint-protection-film',
    name: 'Paint Protection Film',
    shortName: 'PPF',
    tagline: 'Paint Protection Film (PPF) in Springfield, OR',
    summary:
      'Paint protection film (PPF) is a thick, optically clear urethane film applied to high-impact areas of your vehicle — hood, bumper, mirrors, rocker panels — that physically absorbs rock chips, road debris, and minor abrasions before they reach your paint. Unlike ceramic coating, PPF stops physical impact. Unlike wax, it doesn\'t wash off.',
    description:
      "No coating or wax can stop a rock chip — only physical film can. PPF is a thick, self-healing urethane film custom-cut and applied to your vehicle's high-risk surfaces. The film is virtually invisible when properly installed; modern PPF has a self-healing top coat that causes light surface scratches to disappear with gentle heat exposure. We offer partial front-end packages (bumper, hood leading edge, A-pillars, mirrors, door cup edges) and full-front or full-vehicle coverage depending on how and where you drive.\n\nPPF is frequently combined with ceramic coating — the film handles physical impacts on the front end while ceramic covers the full vehicle for contamination resistance. The combination means every surface is protected against the threat it actually faces. The investment measures against a single rock chip repair on a late-model vehicle, which can run several hundred dollars depending on size and location.",
    process: [
      {
        title: 'Paint Assessment & Surface Prep',
        description:
          'A decontamination wash and clay bar treatment cleans and smooths every surface before film is applied. PPF applied over contaminated paint can trap particles under the film and create visible texture. Existing chips or damage are noted before the film goes on so there\'s no question about what was pre-existing.',
      },
      {
        title: 'Coverage Zone Planning',
        description:
          'Coverage zones are discussed based on how and where you drive. Partial front end covers the bumper, hood leading edge, mirrors, and door cup areas — the highest-frequency impact zones. Full front adds the complete hood and front fenders. Full vehicle wraps every painted panel. The right answer depends on your driving pattern, not a standard upsell.',
      },
      {
        title: 'Custom Film Cutting',
        description:
          'Film is cut using computer-generated templates specific to your vehicle\'s year, make, and model. Template-cut film means precise edge placement without improvised trimming directly on the paint — improvised trimming leaves micro-cuts in the clear coat edge that lift over time.',
      },
      {
        title: 'Film Application & Edge Work',
        description:
          'Film applied with slip solution and squeegeed flat from center out. Edges tucked into door jambs, hood edges, and panel gaps wherever geometry allows. Tucked edges are invisible and don\'t lift; exposed edges require precise placement and heat sealing.',
      },
      {
        title: 'Heat Forming on Compound Curves',
        description:
          'PPF applied over bumper edges, mirror caps, and curved hood sections must be heated and stretched to conform without lifting or bridging. This step determines whether the film lies flat three years later or starts lifting at the first complex curve.',
      },
      {
        title: 'LED Inspection & Optional Ceramic',
        description:
          'Every edge and seam inspected under LED lighting; lift points addressed before the vehicle leaves. Ceramic coating applied on top of the PPF is strongly recommended — it improves gloss, makes the film easier to clean, and protects the film surface itself.',
      },
    ],
    benefits: [
      'Physical protection from rock chips and road debris — the only product that stops impacts',
      'Self-healing top coat causes light surface scratches to disappear with heat',
      'Virtually invisible on properly-fitted panels — doesn\'t change the vehicle\'s appearance',
      'PPF + ceramic combination: physical protection on impact zones, contamination resistance everywhere',
      'Protects resale value by preserving factory paint on the panels that take the most road damage',
      '7–10 year lifespan with proper care',
    ],
    rightFor: [
      'You drive I-5 or Cascade passes regularly — rock chips at highway speed are when, not if',
      'You just bought a new vehicle and want to protect the paint from day one',
      'You\'re keeping the vehicle 3+ years and want the front end to look stock when you sell',
      'Your hood or bumper already shows the beginning of stone chip damage and you want to stop the progression',
      'You\'re getting ceramic coating and want PPF on the high-impact zones first — they\'re designed to work together',
    ],
    notRightFor: [
      'The damage is already there — PPF protects against future impact, not existing chips. Those need touch-up paint or correction first.',
      'You want to change the car\'s appearance — PPF is optically clear. Vinyl wrap is the color-change product.',
      'You want to prevent swirl marks from car washes — PPF doesn\'t stop rotary brush damage. That\'s a washing technique issue; ceramic coating helps with contamination bonding.',
    ],
    notRightAlternative:
      'Existing rock chips and paint damage: touch-up paint for small chips, panel respray or body repair for larger damage — both should happen before PPF. Color change or new finish: vinyl wrap. Swirl mark prevention: ceramic coating plus switching to hand wash or touchless automated wash.',
    pricingNote:
      'PPF is priced by coverage zone and vehicle complexity — partial front end, full hood, or full vehicle. Ceramic coating on top of the film is a separate add-on quoted before work begins. Complex shapes and tight edge geometry take more labor time. We quote every job individually after discussing your coverage needs. Call (541) 337-9893 for a free assessment.',
    localAngle:
      'The most common conversation we have about PPF starts the same way: a customer arrives with a newer vehicle and a hood that already shows the beginning of stone chip damage from I-5. By the time most people start thinking about protection, the front end has already taken hits.\n\nThe I-5 corridor between Springfield and Eugene carries significant commercial truck and construction traffic that kicks up debris at highway speed. Cascade pass drives add to that: OR-58 toward Willamette Pass and OR-126 toward McKenzie Pass have chip-seal surfaces that produce concentrated front-end damage on any vehicle that runs them regularly. The math is simple — a single rock chip repair on a late-model vehicle can cost $200–500+ per panel. The film absorbs those hits instead.\n\nA.L.\'s review after a ceramic + PPF combination job described the work as "immaculate" and "the best detail shop in the area." That combination — PPF on the high-impact zones, ceramic over the full vehicle — is the highest protection package we offer and what we recommend for anyone driving I-5 with a vehicle they want to keep in factory condition.',
    faqIds: ['ppf-vs-ceramic', 'ppf-how-long-lasts', 'ceramic-ppf-combo'],
    heroAlt: 'Paint protection film applied to hood and bumper — Blue Rose Auto Detailing Services Springfield OR',
    heroImage: '/images/gallery/auto-detailing-land-rover-defender-blue-exterior-side-springfield-or.webp',
    metaTitle: 'Paint Protection Film (PPF) in Springfield, OR | Blue Rose',
    metaDescription:
      'Professional PPF installation for rock chip & road debris protection in Springfield, OR. Full-front, partial, or full-vehicle coverage. Free assessment: (541) 337-9893.',
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
      'Window tinting at Blue Rose Auto Detailing Services uses high-quality film to block UV radiation, reduce interior heat buildup, increase privacy, and improve the look of your vehicle. Oregon law requires 35% VLT or higher on front side windows — we advise on legal options before every job.',
    description:
      "Window film does more than change how a car looks — it meaningfully changes how it performs. A quality tint blocks 99% of UV-A radiation: the type that fades leather, plastic trim, and upholstery over years of normal driving, and the type that contributes to skin damage on long commutes. It also significantly reduces infrared heat buildup on Oregon's summer days, which concentrate real heat in June, July, and August.\n\nAt Blue Rose, we offer several film types — from standard dyed film through ceramic window film that blocks infrared heat without any metallic appearance or signal interference. The Oregon VLT requirement for front side windows is 35% minimum; rear windows can go significantly darker. We advise on Oregon-legal options for every position before you decide. Every tint job starts with a deep clean of the glass — the number one cause of bubbling tint is debris left on the surface before installation.",
    process: [
      {
        title: 'Glass Cleaning & Surface Prep',
        description:
          'Each window cleaned with ammonia-free solution and razor-scraped to remove adhesive residue, debris, or factory defects that would create bubbles under the film. This step determines whether the film is flawless at five years or bubbling at one.',
      },
      {
        title: 'Interior Masking',
        description:
          'Door seals and interior panels adjacent to windows are masked before slip solution is used, preventing solution from running into weather seal channels and leaving residue that degrades the seals over time.',
      },
      {
        title: 'Custom Film Cutting',
        description:
          'Film cut to exact window dimensions — no improvised trimming on the glass. Precise cuts mean clean edges that lie flat against the window frame and don\'t lift at corners.',
      },
      {
        title: 'Application & Squeegee',
        description:
          'Film applied with slip solution and hard-card squeegee from center out, pushing water and air from every corner and edge. Corners are the critical test — a rushed installation leaves bubbles and lift points at corners within the first year.',
      },
      {
        title: 'Edge Seating & Cure',
        description:
          'All edges seated against the window frame and tucked behind trim where geometry allows. We advise on rolling-window restrictions during cure — typically 3–5 days — to allow adhesive to fully bond without disturbing edge adhesion.',
      },
      {
        title: 'Final Inspection',
        description:
          'Each window inspected in natural and artificial light for bubbles, dust inclusions, edge lift, and color uniformity. If anything isn\'t right, it\'s fixed before the vehicle leaves.',
      },
    ],
    benefits: [
      'Blocks 99% of UV-A radiation — protects skin and interior materials from fading',
      'Reduces infrared heat buildup — lower cabin temperatures on Oregon summer days',
      'Enhanced privacy — harder to see valuables and occupants from outside',
      'Ceramic window film blocks heat without metallic look or signal interference',
      'Oregon-legal options advised for all window positions before any film is selected',
    ],
    rightFor: [
      'You have leather or light-colored interior — UV fading affects these materials significantly within 2–3 years in untinted vehicles',
      'You park in direct sun and want to reduce interior heat on Oregon\'s summer days',
      'Privacy matters — rear windows for gear, cargo, or personal preference',
      'You commute on east-west routes in the Valley with direct sun in your eyes during peak commute windows',
      'You want to improve the vehicle\'s appearance without touching the paint',
    ],
    notRightFor: [
      'You want front side windows below 35% VLT — Oregon law requires 35% minimum for front glass, and we won\'t install film that violates it.',
      'Your existing tint is peeling, bubbling, or discolored — old film must be removed and adhesive cleaned off before new film goes on. We handle that but quote it as a separate step.',
    ],
    notRightAlternative:
      'Existing peeling or bubbled tint: removal and glass prep before new installation — a separate step we handle but need to quote honestly first. If you want maximum darkness on the front windows: we advise on the darkest Oregon-legal option and help you choose accordingly.',
    pricingNote:
      'Window tinting is priced by the number of windows and film type selected. Ceramic window film costs more than standard dyed or carbon film but blocks significantly more infrared heat and holds its color longer without fading. We explain the differences between film types and let you choose. The quote we give you before the job is the price on the invoice.',
    localAngle:
      "Oregon's reputation for rain is accurate nine months of the year — but June through August in the Willamette Valley can run weeks without cloud cover, and interior vehicle temperatures in parked cars climb fast in direct sun. The UV that passes through untinted glass fades interior leather and plastic trim over years at a rate that surprises most people who haven't tracked it.\n\nThe other angle specific to the Eugene-Springfield area: east-west commute routes — OR-126, the Belt Line, Main Street — put direct sun in drivers' eyes during morning westbound and afternoon eastbound commute windows. Front side window tint at the Oregon-legal 35% VLT minimum reduces that glare meaningfully without feeling like driving through sunglasses.\n\nRear windows in Oregon can go significantly darker than the front glass — and for vehicles with equipment, gear, or valuables visible through the rear while parked, that privacy has practical value beyond aesthetics.",
    faqIds: ['tint-legal-oregon', 'tint-how-long-lasts', 'tint-types'],
    heroAlt: 'Professional window tinting on car at Blue Rose Auto Detailing Services Springfield OR',
    heroImage: '/images/gallery/auto-detailing-bmw-3-series-black-exterior-springfield-or.webp',
    metaTitle: 'Window Tinting in Springfield & Eugene, OR | Blue Rose',
    metaDescription:
      'Professional window tinting in Springfield, OR. UV-blocking, heat-reducing film — standard to ceramic. Oregon-legal compliance on every job. Call (541) 337-9893.',
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
      'Vinyl wraps let you change your vehicle\'s color or finish — matte, satin, gloss, chrome, color-shift — without permanent paint, using cast vinyl film that conforms to compound curves and edges. The factory paint is protected underneath and can be revealed at any time by removing the wrap.',
    description:
      "A vinyl wrap changes your vehicle's appearance completely — and completely reversibly. Cast vinyl film in matte, satin, gloss, color-shift, and specialty finishes covers every painted panel and conforms to compound curves, deep recesses, and complex bodywork when installed correctly. When you choose to sell or change direction, the film comes off and the factory paint is underneath.\n\nAt Blue Rose we offer full vehicle wraps, partial wraps (roof, hood, trunk), and accent pieces (mirror caps, pillars, trim). We also wrap commercial fleet vehicles for businesses in the Eugene-Springfield corridor. Prep work matters as much as the film — panels must be decontaminated and free of wax or oil before application. Ceramic coating applied on top of the wrap is strongly recommended: it extends the wrap's life, makes it significantly easier to clean, and adds UV protection that prevents color shift in the film over time.",
    process: [
      {
        title: 'Surface Inspection & Prep',
        description:
          'Every surface to be wrapped is inspected first — existing chips, rust, or bodywork damage telegraphs through the film. Decontamination wash removes road film and contamination; trim is removed where needed to allow proper edge tucking.',
      },
      {
        title: 'IPA Panel Wipe',
        description:
          'Every panel wiped with isopropyl alcohol solution before film application. Wax, polish oil, and surface residue prevent proper adhesive bond — what looks clean to the eye may still have enough residue to cause the film to lift at edges within months.',
      },
      {
        title: 'Film Measurement & Cut',
        description:
          'Cast vinyl measured and cut with generous overlap to allow for edge tucking and seam work. Precise cutting before application means less correction needed during installation.',
      },
      {
        title: 'Application with Heat Forming',
        description:
          'Film positioned and applied section by section; a heat gun softens the vinyl for compound curves, edges, and recesses where the film needs to stretch and conform without bubbling or bridging. Improper heat application causes the film to thin out or distort at curves — this step takes time.',
      },
      {
        title: 'Edge Tucking & Seam Work',
        description:
          'Edges tucked into door jambs, seams, and panel gaps and heat-sealed for permanent adhesion. Visible seam placement planned in advance to follow natural panel breaks wherever possible.',
      },
      {
        title: 'Post-Wrap Inspection & Optional Ceramic',
        description:
          'Every panel inspected under LED lighting for lift points, bubbles, and edge adhesion. Ceramic coating on top of the wrap is a separate step we recommend on every full wrap — improves gloss on matte and satin finishes, adds UV protection, and makes the wrap easier to maintain.',
      },
    ],
    benefits: [
      'Change vehicle color or finish without permanent paint — fully reversible when you choose',
      'Protects factory paint underneath the wrap from UV, minor impacts, and contamination',
      'Available in matte, satin, gloss, color-shift, and specialty finishes impossible to achieve with paint',
      'Significantly less expensive than a full respray — and reversible',
      'Commercial fleet vehicles wrapped for permanent mobile branding',
    ],
    rightFor: [
      'You want a color or finish change without permanently committing to it',
      'You\'re leasing and can\'t permanently modify the paint — a wrap comes off cleanly and leaves the factory finish intact',
      'You want a matte or satin finish — these are best achieved with wrap film, not paint',
      'You have a business vehicle that would benefit from consistent branding or fleet graphics',
      'You want to protect factory paint during a period of heavy use before selling',
    ],
    notRightFor: [
      'Your paint has existing rust, deep gouges, or active body damage — film conforms to what\'s under it; those defects show through, and wrapping over rust traps moisture. Repair first.',
      'You want rock chip protection from highway driving — vinyl film isn\'t thick enough to absorb high-speed impacts. That\'s PPF.',
      'The vehicle goes through daily brush-wash tunnels — wraps and abrasive brush washes are incompatible. Hand wash or touchless only.',
    ],
    notRightAlternative:
      'Existing rust or body damage: repair before wrapping — film over unrepaired damage creates a worse result. Rock chip protection: PPF for high-impact zones; a wrap can go alongside it. Permanent color change on a vehicle you\'re keeping long-term: a quality respray may be the right call — we\'ll say so honestly if it is.',
    pricingNote:
      'Vinyl wrap pricing depends on vehicle size, coverage area, and film choice. Full-vehicle wraps on larger vehicles take significantly more material and labor than partial wraps or accent pieces. Ceramic coating on top is quoted separately and installed at the same time. Commercial fleet graphics and custom design work are quoted individually. Every job is priced before we start.',
    localAngle:
      "Fleet and commercial vehicle wrapping is a consistent part of our Springfield work — contractors, service businesses, and mobile operations in the Eugene-Springfield corridor who want professional vehicle appearance and brand presence on the road. A wrapped service van on OR-126 or I-5 is working for you every mile it drives.\n\nFor personal vehicle color changes, the math is increasingly clear: a quality full respray in the Eugene-Springfield area runs several thousand dollars and permanently changes what can't be undone. A professional wrap produces the same visual result, costs less, comes off cleanly when you sell or change direction, and protects the factory paint value underneath while it's on.\n\nMatte and satin finishes are where vinyl has a genuine advantage over paint: these finishes are difficult to achieve and maintain with spray paint, and cast vinyl film produces them consistently. A satin black or matte olive finish on an SUV or truck is one of the most common requests we get — and the result after installation genuinely can't be matched with paint at any price.",
    faqIds: ['wrap-how-long', 'wrap-vs-paint', 'wrap-care'],
    heroAlt: 'Custom vinyl wrap color change on vehicle — Blue Rose Auto Detailing Services Springfield OR',
    heroImage: '/images/gallery/vinyl-wrap-blue-sports-car-process-springfield-or.webp',
    metaTitle: 'Vinyl Wraps in Springfield & Eugene, OR | Blue Rose',
    metaDescription:
      'Full vehicle & partial vinyl wraps in Springfield, OR. Color changes, matte, satin & color-shift finishes, fleet graphics. Reversible without damaging factory paint. Call (541) 337-9893.',
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
    tagline: 'RV & Motorhome Detailing in Springfield & Eugene, OR',
    summary:
      'RV detailing at Blue Rose Auto Detailing Services is built around fiberglass gelcoat — not automotive paint. Oxidation removal, rubber roof membrane treatment with EPDM and TPO-safe products, slide seal conditioning, and awning cleaning are handled with techniques specific to recreational vehicles. We detail Class B vans through Class A coaches at our Springfield shop.',
    description:
      'Most RVs don\'t have automotive clear coat — they have fiberglass gelcoat, and the rubber roofs on most motorhomes are either EPDM or TPO membrane. The products that restore automotive paint will damage gelcoat if applied incorrectly. The wrong cleaner on a rubber roof degrades the membrane and shortens its life. Treating an RV like a large car is how the wrong shop does this job.\n\nThe white haze that develops on RV fiberglass is gelcoat oxidation — the surface breaking down from UV and weather exposure. Light oxidation (surface haze with some gloss remaining) responds to a single compound and polish pass and can restore close to original. Heavy oxidation (fully chalky, significant color loss) is a multi-pass job and may recover 70–80% of original depth; some color loss at that stage is permanent without repainting. We assess every rig at intake, tell you what the correction will realistically achieve, and quote accordingly — before we start.\n\nCall (541) 337-9893 or bring your rig in for a free assessment.',
    process: [
      {
        title: 'Roof Inspection & Membrane Cleaning',
        description:
          'We identify the roof membrane type — EPDM or TPO — before any product touches it. EPDM is the soft, slightly chalky-feeling membrane; TPO is smoother and firmer. They require different cleaners: bleach-based and citrus products degrade EPDM over time, causing cracking and premature membrane failure. After cleaning with the appropriate product, we inspect seams and note any separation or cracking. Those are repair items, not detail items — we flag them before proceeding.',
      },
      {
        title: 'Top-Down Exterior Pre-Wash',
        description:
          'High-pressure wash starts at the roof and works down. Road film, bug splatter, and tree debris are heaviest on the front cap and lower side panels. Cleaning top-down prevents contamination already washed from upper surfaces from running back over clean panels. Wheel wells and undercarriage skirt areas get separate attention — they carry the most road spray accumulation.',
      },
      {
        title: 'Oxidation Assessment & Compound Removal',
        description:
          'After the pre-wash, we assess gelcoat oxidation across all fiberglass panels — sides, front cap, and rear. Light oxidation: one pass with a medium compound and foam pad restores most of the original depth. Medium oxidation: two passes, starting aggressive and finishing with a finer polish. Heavy oxidation: multi-stage cut, and we tell you upfront what the realistic outcome is. Some severe cases won\'t fully recover without re-gelcoating — we say so before charging for correction that won\'t get there.',
      },
      {
        title: 'Slide Seal & Awning Cleaning',
        description:
          'Rubber slide-out seals dry, crack, and allow water intrusion if they\'re not cleaned and conditioned regularly. We clean each seal with an EPDM-safe product and apply conditioner to restore flexibility. Awning fabric is cleaned with a gentle cleaner that removes mildew and biological growth without degrading the fabric coating — harsh cleaners break down awning fabric faster than weather does.',
      },
      {
        title: 'Protective Sealant or Ceramic Coating',
        description:
          'A polymer sealant applied to all polished fiberglass surfaces adds UV resistance and makes subsequent cleaning easier — road film and bio-growth don\'t bond as readily to a protected surface. For owners who want longer-term protection, ceramic coating on fiberglass is available: the self-cleaning effect on a large surface area between annual details is significant, and it slows the oxidation cycle considerably.',
      },
      {
        title: 'Interior Deep Clean',
        description:
          'RV interiors accumulate campsite odors, cooking smells, and moisture-driven mildew in ways car interiors don\'t. We vacuum and extract upholstered seating and carpet, clean kitchen and bathroom surfaces, and treat any odor issues. We note what we find at intake and tell you before starting whether a detail will resolve it or whether the source needs addressing first.',
      },
    ],
    benefits: [
      'Fiberglass gelcoat polished with RV-appropriate compounds — not automotive products repurposed for a different surface',
      'Rubber roof cleaned with membrane-safe products for your specific type (EPDM or TPO)',
      'Oxidation removal from light surface haze through heavy chalking — assessed and quoted honestly by stage',
      'Slide seal conditioning prevents the drying and cracking that leads to water intrusion',
      'Pre-season and post-season detail packages timed to Lane County\'s camping calendar',
      'Ceramic coating option for fiberglass panels — multi-year protection between annual details',
    ],
    rightFor: [
      'Your RV fiberglass looks chalky, hazy, or dull — gelcoat oxidation removal is what restores the original color depth',
      'Pre-season before summer Cascade or coast trips — remove storage grime, condition rubber seals, apply protection before UV and weather exposure',
      'Post-season before winter storage — remove bio-growth and road film, condition the roof and seals, prevent oxidation from setting in over the wet season',
      'You just purchased a new or used RV and want a proper clean baseline before the first trip',
      'You\'re preparing to sell — a fully detailed RV photographs better and supports a stronger asking price',
    ],
    notRightFor: [
      'Your gelcoat or fiberglass is cracking, peeling, or failing — compound polishing accelerates the damage on a failing surface. Fiberglass repair or re-gelcoating is the right call first.',
      'You have active mold inside the living space — heavy mold requires remediation, not detailing. We assess at intake and tell you if what we\'re looking at is one or the other.',
      'You have roof seam separation, water staining from a leak, or structural water intrusion — the source needs to be addressed and the structure dried out before exterior detailing makes sense.',
    ],
    notRightAlternative:
      'Failing or peeling gelcoat: fiberglass repair before polishing — compounding a failing surface makes it worse, and we\'ll say so at intake. Active interior mold: remediation addresses the source; a detail after remediation is the right sequence. Roof seam or water damage: seam repair and drying before we touch the exterior. We can point you to specialists for any of these.',
    pricingNote:
      'RV detailing is priced by rig size, oxidation severity, and which services are needed. A basic exterior wash, compound, and polish on a standard Class C typically runs a full day (8+ hours). A full interior and exterior detail with heavy oxidation removal on a larger Class A can run 2 full days. Oxidation severity is the biggest price variable — light haze takes one pass; heavy chalking takes multiple stages. We quote after seeing the rig. Call (541) 337-9893 or bring it by for a free assessment.',
    localAngle:
      'Lane County has one of the highest concentrations of RV owners and dealerships in Oregon. Coburg Road off I-5 hosts a cluster of major dealers where buyers drive off the lot in new rigs, often without a plan for maintaining the fiberglass and rubber roof through Oregon\'s seasonal cycle. A new rig that goes into its first winter without protection comes out of storage with the beginning of an oxidation problem.\n\nThe use pattern here runs on two peaks: spring prep before Cascade trips — McKenzie River Valley, Willamette Pass, Diamond Lake — and coast runs to Florence and the Oregon Dunes, then a post-season detail in September or October before the rains. That\'s the natural detail schedule for most Lane County RV owners: one pre-season job to protect the rig going into high-use months, one post-season job to clean off the summer accumulation and condition the seals before winter storage.\n\nOregon\'s wet winters are hard on rigs that go in dirty. Black streaking from the rubber roof runs and sets on the fiberglass during winter rain. Bio-growth accelerates on damp surfaces. An RV stored dirty in October comes out harder to clean in April and starts each season a little further behind. The post-season detail is the one that makes the pre-season one easier.',
    faqIds: [
      'rv-oxidation',
      'rv-detail-how-long',
      'rv-when-to-detail',
      'rv-rubber-roof',
      'rv-ceramic',
      'bring-car-in',
    ],
    heroAlt: 'RV detailing and oxidation removal — Blue Rose Auto Detailing Services Springfield OR',
    heroImage: '/images/gallery/rv-detailing-country-coach-intrigue-motorhome-springfield-or.webp',
    metaTitle: 'RV Detailing Springfield OR | Blue Rose Auto Detailing',
    metaDescription:
      'RV & motorhome detailing in Springfield, OR — gelcoat oxidation removal, EPDM/TPO roof treatment, slide seal conditioning. All sizes. Free estimate: (541) 337-9893.',
    schema: {
      name: 'RV Detailing',
      serviceType: 'RVDetailingService',
      description:
        'Professional RV and motorhome detailing including fiberglass gelcoat oxidation removal, EPDM and TPO rubber roof treatment, slide seal conditioning, and interior deep cleaning.',
    },
  },
  {
    slug: 'boat-detailing',
    name: 'Boat Detailing',
    shortName: 'Boat Detailing',
    tagline: 'Professional Boat Detailing in Springfield & Eugene, OR',
    summary:
      'Boat detailing at Blue Rose Auto Detailing Services addresses the specific chemistry of fiberglass gelcoat — oxidation removal, waterline mineral deposit treatment, hull polishing, and UV protection for season-long surface preservation. We detail day boats through cabin cruisers at our Springfield shop.',
    description:
      "Boat surfaces live in conditions that accelerate wear faster than anything a daily driver faces. Fiberglass gelcoat — what most boats use instead of automotive clear coat — is constantly exposed to UV radiation, lake water mineral deposits, biological growth at the waterline, and the oxidation cycle that turns a glossy white hull chalky within a few seasons.\n\nThe chemistry matters here the same way it does on RV gelcoat: products that work on automotive paint will damage or dull gelcoat if applied incorrectly. Waterline staining requires marine-grade cleaners formulated for mineral and biological deposits — general degreasers leave residue that attracts future growth. After a full decontamination wash and oxidation assessment, the hull and deck are machine-compounded and polished to restore original color depth, then protected with a marine-rated UV sealant or ceramic coating.\n\nLane County's recreational lakes — Dexter Reservoir, Lookout Point Lake, Dorena Lake, Cottage Grove Reservoir — are all within 30 miles of our shop. Call (541) 337-9893 or bring the vessel by for a free assessment.",
    process: [
      {
        title: 'Freshwater Flush & Pre-Wash',
        description:
          'High-pressure freshwater rinse removes lake and river mineral deposits, biological surface growth, and road trailer debris from all surfaces. Starting clean prevents grinding contamination into gelcoat during compound and polish stages.',
      },
      {
        title: 'Waterline Treatment',
        description:
          'The waterline stripe — where the hull repeatedly contacts the water surface — accumulates mineral scale, algae, and biological staining that requires marine-grade chemical treatment before mechanical work. General degreasers leave residue that attracts future growth; we use chemistry formulated for the specific type of staining present.',
      },
      {
        title: 'Gelcoat Oxidation Assessment',
        description:
          'Hull and deck assessed for oxidation severity across all fiberglass surfaces. Light oxidation (some haze, gloss still visible) responds to a single polish pass. Medium oxidation (dull with color loss) takes two stages. Heavy oxidation (chalky white, significant color loss) is a multi-stage job — we tell you upfront what correction will realistically achieve before we start.',
      },
      {
        title: 'Machine Compound & Polish',
        description:
          'Appropriate compound applied by machine to all oxidized gelcoat surfaces. The compound stage removes the bulk of oxidation and surface degradation; a polish pass following the cut restores gloss and prepares the surface for protection. Panel-by-panel work ensures even results across the full hull and deck.',
      },
      {
        title: 'Marine Wax or Ceramic Coating',
        description:
          'Marine-formulated polymer wax or ceramic coating applied to all polished surfaces. Marine wax provides a season of protection and restores deep wet shine; ceramic coating provides 2–5 years of hydrophobic, UV-blocking protection — the self-cleaning effect on a boat hull between annual details is significant.',
      },
      {
        title: 'Cockpit & Upholstery Clean',
        description:
          'Interior cockpit surfaces, vinyl seating, and instrumentation panel cleaned and conditioned. Vinyl seating takes significant UV damage over a season of open-water use — cleaning before conditioning is what actually protects the material, not conditioning over accumulated residue.',
      },
    ],
    benefits: [
      'Fiberglass gelcoat oxidation removed and gloss restored — marine-appropriate compounds, not automotive products',
      'Waterline mineral and biological staining treated with marine-grade chemistry',
      'UV protection applied after polishing for season-long surface preservation',
      'Vinyl cockpit seating cleaned and conditioned against UV cracking',
      'Ceramic coating option for 2–5 years of hydrophobic protection between annual details',
      'All Lane County recreational lakes within 30 miles of our Springfield shop',
    ],
    rightFor: [
      'Your hull or deck gelcoat looks chalky, hazy, or oxidized — compound polishing restores original depth if the gelcoat surface is still intact',
      'Pre-season before spring launch — remove winter storage grime and apply UV protection before the high-exposure summer months',
      'Post-season before storage — remove waterline mineral deposits and biological growth that will set harder over winter',
      'You\'re selling — a properly detailed hull photographs better and supports a stronger asking price',
      'You want ceramic coating on the hull — multi-year hydrophobic protection, significantly easier to clean between details',
    ],
    notRightFor: [
      'Your gelcoat has crazing, cracks, deep gouges, or structural damage — polishing over a damaged surface accelerates the problem. Gelcoat or fiberglass repair comes first.',
      'You have significant bottom paint that needs removal or restoration — that\'s a different process from surface detailing; we assess at intake and tell you honestly which applies.',
      'Active mold or mildew inside the cabin requiring remediation — we clean biological growth on surfaces, but a serious interior mold issue may need remediation before detailing makes sense.',
    ],
    notRightAlternative:
      'Cracked or failing gelcoat: fiberglass repair before polishing — compounding a damaged surface makes it worse, and we\'ll say so at intake. Bottom paint issues: a marine service or yard is the right call; we handle surfaces above the waterline. Interior mold: remediation first, detail after — the right sequence matters.',
    pricingNote:
      'Boat detailing is priced by vessel size, oxidation severity, and which services are included — exterior compound and polish only, full exterior plus cockpit interior, or with ceramic coating added. Oxidation severity is the biggest variable: light surface haze on a 20-foot day boat takes less time than heavy chalking on a larger cabin cruiser. We quote after seeing the vessel. Call (541) 337-9893 or bring it by.',
    localAngle:
      "Lane County sits at the edge of some of the most active recreational lake country in Oregon — Dexter Reservoir, Lookout Point Lake, Dorena Lake, and Cottage Grove Reservoir are all within 30 miles of our Springfield shop. Boats that run those lakes accumulate specific contamination: calcium and mineral deposits from lake water left to dry on the hull, biological growth at the waterline where hull meets water repeatedly, and UV oxidation from open-water storage in Oregon's summer sun.\n\nThe seasonal pattern here is predictable: spring launch, summer use, fall haul-out. A boat that comes out of the water in September with a season's worth of waterline staining and oxidation building on last year's needs the right chemistry applied in the right sequence — marine-grade waterline treatment before compound polishing, gelcoat-appropriate compounds rather than automotive products, UV-rated marine sealant that holds up differently than car wax.\n\nWillamette Valley winters are hard on boats stored outdoors. Wet, low-UV conditions between October and March accelerate biological growth on damp surfaces and allow oxidation to continue on unprotected gelcoat. A post-season detail before storage is the intervention that makes spring prep faster and prevents each season from starting a little further behind.",
    faqIds: ['boat-detail-how-long', 'bring-car-in'],
    heroAlt: 'Boat detailing and hull polishing — Blue Rose Auto Detailing Services Springfield OR',
    heroImage: '/images/gallery/auto-detailing-shop-exterior-blue-rose-springfield-or.webp',
    metaTitle: 'Boat Detailing in Springfield & Eugene, OR | Blue Rose',
    metaDescription:
      'Professional boat & watercraft detailing in Springfield, OR — gelcoat oxidation removal, waterline treatment, hull polishing, ceramic coating. Call (541) 337-9893.',
    schema: {
      name: 'Boat Detailing',
      serviceType: 'BoatDetailingService',
      description: 'Professional marine vessel detailing including gelcoat oxidation removal, waterline stain treatment, hull polishing, and UV protection for fiberglass boats and watercraft.',
    },
  },
]

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
