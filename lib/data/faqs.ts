export interface FAQ {
  id: string
  question: string
  answer: string
  category: 'general' | 'pricing' | 'services' | 'ceramic' | 'ppf' | 'vinyl' | 'tinting' | 'rv-boat'
}

export const FAQS: FAQ[] = [
  // General
  {
    id: 'bring-car-in',
    category: 'general',
    question: 'Is Blue Rose mobile, or do I bring my car to you?',
    answer:
      'You bring your vehicle to us at our shop: Suite 100, 3436 Olympic Street, Springfield, OR 97478. We\'re not a mobile service — working in our controlled indoor environment allows us to do higher-quality work, especially for paint correction, ceramic coating, and PPF, which require clean conditions. Most customers drop off their vehicle in the morning and pick up the same day for detail work, or the following day for multi-stage correction or coating jobs.',
  },
  {
    id: 'detail-how-long',
    category: 'general',
    question: 'How long does a full auto detail take?',
    answer:
      'A full interior and exterior detail typically takes 4–8 hours depending on vehicle size, condition, and the specific services requested. A basic detail on a clean mid-size car is usually closer to 4–5 hours; a large SUV or a vehicle with heavy interior soiling, pet hair, or significant paint contamination can take a full day. We\'ll give you a realistic time estimate when you call or book.',
  },
  {
    id: 'detail-how-often',
    category: 'general',
    question: 'How often should I get my car detailed?',
    answer:
      'For most daily drivers, a full detail once or twice per year keeps the vehicle in great condition. High-use vehicles, vehicles with children or pets, and vehicles parked outdoors benefit from more frequent interior cleaning and paint protection maintenance. If you have a ceramic coating, the maintenance wash schedule is less demanding than an uncoated vehicle because contamination doesn\'t bond as readily to the coating.',
  },
  {
    id: 'detail-vs-carwash',
    category: 'general',
    question: 'What\'s the difference between a car wash and auto detailing?',
    answer:
      'A tunnel car wash takes about 4 minutes and removes surface dirt. A full detail takes most of a day and addresses what the wash leaves behind: bonded contamination pulled from the paint with iron fallout remover and a clay bar, carpet extracted rather than vacuumed over, leather cleaned and conditioned, and a machine polish and sealant applied to the paint. They\'re not comparable services — one maintains surface cleanliness, the other restores the vehicle.',
  },
  {
    id: 'detail-pet',
    category: 'general',
    question: 'Can detailing remove pet hair and pet odor?',
    answer:
      'Pet hair: yes, systematically — from fabric seats, carpet, and crevices. Pet odor: depends on severity. A mild or recent pet smell typically clears with extraction and steam treatment. A strong embedded odor from years of multiple pets may require an enzyme treatment or ozone treatment to fully neutralize rather than mask. We assess at intake and tell you which approach applies before we quote the job.',
  },
  {
    id: 'detail-prep',
    category: 'general',
    question: 'Do I need to clean my car before bringing it in for a detail?',
    answer:
      'No. Remove personal items, paperwork, and anything you\'d rather keep safe — but don\'t pre-clean the car. Leave it in the condition it\'s in. Seeing the actual work scope at intake is how we quote the job accurately, and cleaning it beforehand can obscure what needs attention.',
  },
  {
    id: 'pollen-paint-damage',
    category: 'general',
    question: 'Can pollen damage my car\'s paint?',
    answer:
      'Yes — specifically grass seed pollen in the Willamette Valley, which is finer and more chemically active than tree pollen. Pollen that settles on damp paint and goes through morning dew and afternoon heat cycles begins bonding to the clear coat within 24–48 hours. Left for weeks, the organic acids in bonded pollen slowly etch the clear coat. The fix for bonded pollen is clay bar decontamination — a car wash removes loose pollen but doesn\'t touch what\'s already bonded into the surface. A paint sealant or ceramic coating applied before pollen season significantly reduces how much pollen bonds.',
  },
  {
    id: 'pollen-car-wash',
    category: 'general',
    question: 'Will washing my car remove bonded pollen?',
    answer:
      'It depends on how long the pollen has been there. A car wash removes loose pollen that settled recently — within the first day or two before the dew-and-heat cycle has fully bonded it. Pollen that has been through several wet-morning, hot-afternoon cycles bonds to the clear coat and can\'t be removed by water alone. The test: run your hand across a freshly-washed panel. If it feels slightly rough or gritty rather than completely smooth, the texture is bonded contamination the wash left behind. Clay bar decontamination is what removes bonded pollen — it physically lifts the embedded particles out of the paint surface.',
  },
  {
    id: 'pricing-general',
    category: 'pricing',
    question: 'How much does auto detailing cost at Blue Rose Auto Detailing Services?',
    answer:
      'We quote every job individually because price depends on vehicle size, condition, and the specific services requested — a compact car in good condition costs less than a large SUV with heavy soiling. We\'re known for transparent, fair pricing: you get a quote before we start, and the final price matches the quote. Call us at (541) 337-9893 or stop by the shop for a free estimate.',
  },
  {
    id: 'correction-how-long',
    category: 'services',
    question: 'How long does paint correction take?',
    answer:
      'A single-stage paint correction on an average-sized vehicle takes 4–6 hours. A full two-stage or three-stage correction — which we recommend before ceramic coating — typically takes a full day (8–10 hours) depending on paint condition and vehicle size. Larger vehicles like trucks and SUVs take longer. We don\'t rush correction work because thoroughness is what produces the result.',
  },
  {
    id: 'correction-vs-polish',
    category: 'services',
    question: 'What\'s the difference between a polish and paint correction?',
    answer:
      'A basic polish is a single-step treatment that improves gloss and removes very light surface marks. True paint correction is a multi-stage machine polishing process using progressively finer compounds and pads, calibrated to your paint\'s specific thickness and defect depth. Correction removes a measurable percentage of defects — swirls, scratches, water spots, oxidation — while a basic polish just enhances gloss without addressing real paint damage.',
  },
  {
    id: 'correction-before-ceramic',
    category: 'services',
    question: 'Do I need paint correction before ceramic coating?',
    answer:
      'Yes — and this is important. Ceramic coating doesn\'t correct paint; it permanently locks in whatever condition the paint is in at the time of application. If you apply ceramic coating over scratched or swirled paint, those defects become permanent and very difficult to address afterward without removing the coating. We always recommend at minimum a thorough decontamination, and ideally a correction pass, before any ceramic coating job.',
  },
  {
    id: 'correction-scratches',
    category: 'services',
    question: 'Does paint correction remove all scratches?',
    answer:
      'Not all. Paint correction removes defects in the clear coat — swirls, water spot etching, light oxidation, and surface scratches. The test: drag your fingernail across the scratch. If it catches, the scratch goes through the clear coat into the base coat and won\'t polish out — that needs touch-up paint or a panel respray. We check every scratch during the assessment and tell you what correction will and won\'t address before we quote.',
  },
  {
    id: 'correction-safe',
    category: 'services',
    question: 'Can paint correction damage my car?',
    answer:
      'Done properly, no. Done carelessly, yes — polishing aggressively on thin clear coat can burn through to the base coat, which requires a respray to fix. The safeguard is a digital paint thickness gauge: we measure every panel before and during the correction. If a reading falls below safe cutting depth on any panel, we stop and tell you before doing anything. A shop that skips this step is guessing with your paint.',
  },
  {
    id: 'correction-how-many-times',
    category: 'services',
    question: 'How many times can my car be corrected?',
    answer:
      'It depends on starting clear coat thickness and how aggressively each correction was performed. Factory clear coat runs 100–150 microns; a careful correction removes roughly 2–8 microns depending on the stage. Managed properly, most vehicles can go through 4–6 corrections over their life before the clear coat becomes too thin to safely polish. We track thickness readings on every correction job — that record is what makes an honest answer to this question possible.',
  },
  // Ceramic Coating
  {
    id: 'ceramic-cost',
    category: 'ceramic',
    question: 'How much does ceramic coating cost in Eugene or Springfield, OR?',
    answer:
      'Ceramic coating pricing in the Eugene-Springfield area depends on vehicle size, paint condition, the coating product tier, and whether paint correction is included. We quote every job individually. Call (541) 337-9893 for a free estimate — we\'re transparent about pricing and will give you a clear breakdown before any work begins.',
  },
  {
    id: 'ceramic-scratch-proof',
    category: 'ceramic',
    question: 'Does ceramic coating make my car scratch-proof?',
    answer:
      'No — and this is one of the most common misunderstandings about ceramic. Ceramic coating is harder than clear coat and resists minor surface marring better than unprotected paint, but it doesn\'t stop rock chips or deep scratches. What it does: resists swirl marks from washing, makes bird droppings and sap easier to remove before they etch, and reduces the contamination that causes micro-scratches over time. For protection against physical impacts — rock chips on the hood and bumper — paint protection film is the right product. Ceramic and PPF work best together: PPF for the impact zones, ceramic for contamination resistance over the whole vehicle.',
  },
  {
    id: 'ceramic-how-long',
    category: 'ceramic',
    question: 'How long does ceramic coating last?',
    answer:
      'Professional ceramic coatings applied by Blue Rose typically last 2–5 years with proper maintenance, depending on the product tier and how the vehicle is used and washed. Consumer spray-on ceramic products sold at auto parts stores typically last weeks to months. The durability difference is in the concentration of SiO2 and the application process — professional coatings require controlled conditions and proper curing that can\'t be replicated in a driveway application.',
  },
  {
    id: 'ceramic-cure-time',
    category: 'ceramic',
    question: 'How long before I can wash my car after ceramic coating?',
    answer:
      'The initial cure window — the period when the coating is most vulnerable to water contact and contamination — is typically 24–72 hours. Full hardness develops over the following 2–4 weeks as the coating continues cross-linking. During the initial window: no washing, minimize rain exposure if possible, and remove bird droppings or sap immediately rather than letting them sit. We walk through the care instructions at pickup and provide written aftercare guidance with every coating job.',
  },
  {
    id: 'ceramic-maintenance',
    category: 'ceramic',
    question: 'How do I wash my car after ceramic coating?',
    answer:
      'Proper wash technique protects the coating and determines how long it performs well. Two-bucket hand wash with a pH-neutral, coating-safe shampoo is the best method. Touchless automated washes are acceptable for maintenance between hand washes. Avoid brush-based tunnel washes — the brushes cause the swirl marks the coating is partly protecting against. Never apply wax or traditional sealant on top of the coating — they can\'t bond to the ceramic surface and will haze the finish. We provide written care instructions and product recommendations at pickup.',
  },
  {
    id: 'ceramic-vs-wax',
    category: 'ceramic',
    question: 'Is ceramic coating better than wax?',
    answer:
      'Ceramic coating significantly outperforms wax in durability, hardness, and chemical resistance. Wax typically lasts 1–3 months; ceramic coatings last 2–5 years. Ceramic also provides harder surface protection and greater resistance to bird droppings, tree sap, and road chemicals. Wax provides a warmer, more traditional look and is easier to apply and remove — but for a vehicle you\'re keeping long-term, ceramic is the better investment.',
  },
  {
    id: 'ceramic-ppf-combo',
    category: 'ceramic',
    question: 'Can I get both ceramic coating and PPF on the same vehicle?',
    answer:
      'Yes — and this is one of the most effective protection combinations available. PPF is applied first to high-impact areas (front bumper, hood, mirrors, rockers) for physical impact protection, then ceramic coating is applied over the entire vehicle including on top of the PPF. The ceramic on top of the film enhances gloss, makes cleaning easier, and extends the life of the film. We\'ve done this combination for many customers and it consistently produces excellent results.',
  },
  // PPF
  {
    id: 'ppf-vs-ceramic',
    category: 'ppf',
    question: 'What\'s the difference between PPF and ceramic coating?',
    answer:
      'PPF (paint protection film) is a physical urethane film that provides real impact resistance — it absorbs rock chips and road debris before they reach your paint. Ceramic coating is a chemical bond to the clear coat that provides hydrophobic protection, UV resistance, and chemical resistance, but offers no physical impact protection. They serve different purposes and work best together: PPF for impact zones, ceramic everywhere for contamination protection.',
  },
  {
    id: 'ppf-how-long-lasts',
    category: 'ppf',
    question: 'How long does paint protection film last?',
    answer:
      'Quality PPF typically lasts 7–10 years before yellowing, edge lifting, or adhesive degradation becomes visible. Factors that affect longevity include UV exposure, washing technique, and whether a ceramic coating was applied on top. The self-healing top coat in modern PPF becomes less effective over time as it\'s exposed to UV, but the impact protection layer remains functional throughout the film\'s life.',
  },
  // Window Tinting
  {
    id: 'tint-legal-oregon',
    category: 'tinting',
    question: 'What window tint is legal in Oregon?',
    answer:
      'Oregon law requires front side windows to allow at least 35% of light in (35% VLT or higher). Rear side windows and the rear window can have any darkness. The windshield can only have a non-reflective tint strip along the top 6 inches. We\'ll advise you on Oregon-legal options for all window positions and help you choose a film that meets legal requirements while achieving your heat reduction and privacy goals.',
  },
  {
    id: 'tint-how-long-lasts',
    category: 'tinting',
    question: 'How long does window tint last?',
    answer:
      'Quality window tint professionally installed lasts 5–10 years or more. Cheap dyed-only films fade and purple within 2–3 years, especially in Oregon\'s sun-exposed summer months. We use quality film that maintains color stability and UV rejection over its lifespan. Proper installation — clean glass, no bubbles, tucked edges — is the other half of longevity.',
  },
  {
    id: 'tint-types',
    category: 'tinting',
    question: 'What\'s the difference between dyed, carbon, and ceramic window tint?',
    answer:
      'Dyed film is the most affordable option — it blocks light but fades over time and doesn\'t block infrared heat as effectively. Carbon film is more stable, provides better heat rejection, and doesn\'t interfere with electronics. Ceramic window film is the premium tier: it blocks the most infrared heat (often 50%+) without a metallic look, doesn\'t fade, and doesn\'t interfere with GPS, radio, or phone signals. We\'ll explain the trade-offs and help you choose the right level for your priorities.',
  },
  // Vinyl Wraps
  {
    id: 'wrap-how-long',
    category: 'vinyl',
    question: 'How long does a vinyl wrap last?',
    answer:
      'A quality vinyl wrap installed by professionals typically lasts 5–7 years outdoors. Vehicles garaged when not in use can see longer life from the same wrap. Ceramic coating on top of the wrap significantly improves UV resistance and longevity. Poor installation quality — especially improper edge work — is the main cause of premature wrap failure.',
  },
  {
    id: 'wrap-vs-paint',
    category: 'vinyl',
    question: 'Is a vinyl wrap better than paint?',
    answer:
      'A wrap and a respray serve different purposes. A wrap is reversible, protects the factory paint underneath, and is faster and less expensive than a quality paint job. A high-quality respray is permanent, looks slightly better under extreme scrutiny, and doesn\'t have edges. For someone who wants a color change without permanently committing to it — or who wants to protect resale value — a wrap is the better choice. For a permanent color change or repairing damage, paint is appropriate.',
  },
  {
    id: 'wrap-care',
    category: 'vinyl',
    question: 'How do I care for a vinyl wrap?',
    answer:
      'Hand washing is always best for a wrapped vehicle. Avoid high-pressure spray directly at wrap edges, which can lift the film. Avoid automated car washes with abrasive brushes. Ceramic coating on top of the wrap makes it significantly easier to clean and reduces the risk of contamination bonding to the film. We provide detailed care instructions with every wrap installation.',
  },
  // RV & Boat
  {
    id: 'rv-oxidation',
    category: 'rv-boat',
    question: 'My RV has a chalky white haze. Can detailing restore it?',
    answer:
      'Gelcoat oxidation is the most common issue we address on RVs, and the answer depends on severity. Light oxidation — surface haze with some gloss still visible — responds to a single compound and polish pass and can restore close to the original color depth. Medium oxidation — dull with some color loss, no gloss — takes two passes and recovers most of the depth. Heavy oxidation — fully chalky, significant color loss across large panels — is a multi-stage job, and we\'ll tell you upfront that some color loss at that stage is permanent without re-gelcoating or repainting. We assess every rig at intake and tell you honestly what correction will achieve before we quote.',
  },
  {
    id: 'rv-detail-how-long',
    category: 'rv-boat',
    question: 'How long does an RV detail take?',
    answer:
      'An RV detail takes significantly longer than a car detail due to the surface area involved. A basic exterior wash and polish on a standard Class C is typically a full day (8+ hours); a full interior and exterior detail with oxidation removal on a larger Class A can take 2 full days. We\'ll assess your rig and give you a time estimate before scheduling.',
  },
  {
    id: 'rv-when-to-detail',
    category: 'rv-boat',
    question: 'When should I detail my RV?',
    answer:
      'The best times to detail an RV are before and after camping season. A pre-season detail removes winter storage grime, conditions rubber seals and slide gaskets, and applies protection before the rig sees UV and weather exposure. A post-season detail before storage removes biological growth, conditions the rubber roof, and prevents oxidation from setting in over the winter. Annual detailing significantly extends the life and appearance of fiberglass and painted surfaces.',
  },
  {
    id: 'rv-rubber-roof',
    category: 'rv-boat',
    question: 'How do you clean an RV rubber roof without damaging it?',
    answer:
      'The first step is identifying the membrane type — most RV rubber roofs are either EPDM or TPO. EPDM is the soft, slightly chalky-feeling material found on older rigs; TPO is smoother and firmer, more common on newer units. They require different cleaners. Bleach-based products and citrus cleaners degrade EPDM over time, causing cracking and shortening membrane life. We use a membrane-appropriate cleaner for each type. After cleaning, we inspect the seams for cracking or separation and flag any that need repair — those are separate from the detail and should be addressed before the next camping season.',
  },
  {
    id: 'rv-ceramic',
    category: 'rv-boat',
    question: 'Can you ceramic coat an RV?',
    answer:
      'Yes — and it\'s one of the better applications of ceramic coating we offer. The self-cleaning effect on a large fiberglass surface is significant: black streaking from the rubber roof runs off rather than setting, bio-growth doesn\'t bond as readily, and UV degradation slows. Between annual details, a ceramic-coated RV stays cleaner and is easier to wash. The process is the same as on a vehicle: fiberglass must be fully decontaminated and oxidation-free before application. We price ceramic on RVs by surface area — call (541) 337-9893 for an estimate once we\'ve seen the rig.',
  },
  {
    id: 'boat-detail-how-long',
    category: 'rv-boat',
    question: 'How long does a boat detail take?',
    answer:
      'A standard boat detail including exterior wash, oxidation removal, and polish typically takes 4–8 hours depending on vessel size and condition. A full detail with interior cockpit cleaning and ceramic coating application takes a full day or more. We assess each vessel and provide a time estimate before scheduling.',
  },
]

export function getFAQsByCategory(category: FAQ['category']): FAQ[] {
  return FAQS.filter((f) => f.category === category)
}

export function getFAQsByIds(ids: string[]): FAQ[] {
  return FAQS.filter((f) => ids.includes(f.id))
}
