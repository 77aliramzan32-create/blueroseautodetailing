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
    id: 'pricing-general',
    category: 'pricing',
    question: 'How much does auto detailing cost at Blue Rose?',
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
  // Ceramic Coating
  {
    id: 'ceramic-cost',
    category: 'ceramic',
    question: 'How much does ceramic coating cost in Eugene or Springfield, OR?',
    answer:
      'Ceramic coating pricing in the Eugene-Springfield area depends on vehicle size, paint condition, the coating product tier, and whether paint correction is included. We quote every job individually. Call (541) 337-9893 for a free estimate — we\'re transparent about pricing and will give you a clear breakdown before any work begins.',
  },
  {
    id: 'ceramic-how-long',
    category: 'ceramic',
    question: 'How long does ceramic coating last?',
    answer:
      'Professional ceramic coatings applied by Blue Rose typically last 2–5 years with proper maintenance, depending on the product tier and how the vehicle is used and washed. Consumer spray-on ceramic products sold at auto parts stores typically last weeks to months. The durability difference is in the concentration of SiO2 and the application process — professional coatings require controlled conditions and proper curing that can\'t be replicated in a driveway application.',
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
