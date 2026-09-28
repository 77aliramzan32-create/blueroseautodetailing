export interface BlogSection {
  heading?: string
  headingLevel?: 2 | 3
  body?: string[]
  list?: string[]
  orderedList?: string[]
  callout?: {
    type: 'tip' | 'note' | 'important'
    heading?: string
    text: string
  }
}

export interface BlogPost {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  category: string
  readTime: string
  publishDate: string
  excerpt: string
  intro: string[]
  sections: BlogSection[]
  faqIds?: string[]
  relatedServiceSlugs?: string[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'how-long-does-ceramic-coating-last',
    title: 'How Long Does Ceramic Coating Last? (And What Actually Determines It)',
    metaTitle: 'How Long Does Ceramic Coating Last? | Blue Rose Auto Detailing',
    metaDescription:
      'Professional ceramic coatings last 2–5 years. Five factors determine where you land — and most people focus on the wrong one. From Blue Rose Auto Detailing in Springfield, OR.',
    category: 'Ceramic Coating',
    readTime: '7 min read',
    publishDate: '2026-09-28',
    excerpt:
      'Professional ceramic coatings last 2–5 years — but which end of that range you reach depends on five things, and most people focus on the wrong one.',
    intro: [
      'Professional ceramic coatings last 2–5 years. Consumer spray-on products labeled "ceramic coating" at auto parts stores typically last weeks to a few months. They\'re not the same product.',
      'The 2–5 year range for professional coatings depends on five things. Most buyers focus on the coating product tier — entry-level vs. premium — as if that\'s the only variable. It matters, but it\'s not the most important one. If you get one thing right, make it the first item below.',
    ],
    sections: [
      {
        heading: 'What Actually Determines How Long Ceramic Coating Lasts',
        headingLevel: 2,
        body: ['Here are the five factors, ranked by how much they affect longevity:'],
        orderedList: [
          'Prep work before application. The coating bonds to the paint chemistry — polish residue, oils, or bonded contamination on the surface at application time weakens the bond from day one. Fully corrected, decontaminated, IPA-wiped paint cures into a tight, uniform bond. A premium coating applied over contaminated paint often underperforms a mid-tier coating applied over properly prepped paint.',
          'Coating product tier. Entry-level professional coatings (1–2 year rated) have a lower concentration of SiO₂ — the active compound — and a thinner application layer. Premium multi-year coatings (5–7 year rated) have higher concentration and often involve multi-layer application. Both are dramatically better than consumer spray-ons. The tier matters — just less than the prep.',
          'Wash technique after application. Brush-based automated tunnels create micro-abrasion that degrades the coating\'s hydrophobic surface layer over time. Two-bucket hand washing with pH-neutral shampoo is the correct approach. Using regular wax or sealant on top of a ceramic coating creates a barrier that interferes with the coating\'s hydrophobics rather than extending them.',
          'Parking and storage. UV radiation is the primary degradation mechanism for ceramic coatings — Si-O chemical bonds break down under prolonged UV exposure. A garaged vehicle consistently gets more years from the same coating than an identical vehicle parked outdoors.',
          'Climate. High-UV climates degrade coatings faster. Pacific Northwest summers are sunny but not as UV-intense as the desert Southwest. Lane County also has no road salt — a chemical stressor that doesn\'t factor here but significantly affects coating longevity in other parts of the country.',
        ],
      },
      {
        heading: 'Professional vs. Consumer "Ceramic Coating": Not the Same Product',
        headingLevel: 2,
        body: [
          'Both products share the name. They\'re not comparable.',
          'Consumer spray-ons contain 1–5% SiO₂. Applied in minutes with no prep required, they last weeks to a few months. Professional-grade coatings contain 50%+ SiO₂, applied in a controlled environment after full paint correction and decontamination, requiring a full day including cure time. They last 2–5+ years.',
          'The difference isn\'t branding — it\'s the concentration of the active compound and the quality of the chemical bond. A thin SiO₂ layer applied over whatever is currently on the paint degrades quickly. A dense, well-bonded layer applied over properly prepped paint lasts years.',
        ],
      },
      {
        heading: 'How to Tell If Your Ceramic Coating Is Still Working',
        headingLevel: 2,
        body: [
          'You don\'t need a shop to check. There\'s a simple test.',
          'The water bead test: wash and dry the car normally, then pour a small amount of water onto a horizontal panel — the hood or roof works well. If the coating is performing, water forms tight spheres and sheets off at a steep angle when the car moves. If the coating has degraded, water spreads flat into large puddles and sits on the surface rather than running off.',
          'You can also feel the difference on a freshly-washed, dry panel. A working ceramic coating feels noticeably slick — almost frictionless. Paint that has lost its coating has more friction when dry.',
          'If the water bead test shows degradation, it doesn\'t necessarily mean a full recoat. A coating-compatible SiO₂ spray booster — not regular wax — can restore hydrophobics between full recoat cycles. We can inspect an existing coating and tell you which applies.',
        ],
      },
      {
        heading: 'Five Ways to Make Your Ceramic Coating Last Longer',
        headingLevel: 2,
        body: ['Ranked by impact:'],
        orderedList: [
          'Two-bucket hand wash with pH-neutral shampoo. No brush tunnels. This is the highest-impact thing you can control after application. Brush-based washes cause micro-abrasion; single-bucket washing recycles contamination back onto the paint with every panel.',
          'Nothing on top of it. No wax, no standard sealant, no spray detailers unless they\'re explicitly marked coating-compatible. Traditional wax bonds to the surface and degrades the hydrophobic effect rather than protecting it.',
          'Remove bird droppings and tree sap the same day. Ceramic reduces etching risk — it doesn\'t eliminate it. Bird droppings are highly acidic and will etch through a ceramic coating left on a hot panel in direct sun within hours.',
          'Apply an annual SiO₂ maintenance booster. A coating-compatible spray topped off once a year extends the hydrophobic layer between full recoat cycles. Think maintenance, not replacement — same logic as annual tire rotation.',
          'Use garage parking when available. UV is the primary aging mechanism. Consistent garage storage is the single biggest lifestyle factor in coating longevity.',
        ],
      },
      {
        heading: 'How Lane County\'s Climate Affects Ceramic Coating Longevity',
        headingLevel: 2,
        body: [
          'Eugene-Springfield sits in a favorable position for ceramic longevity relative to most US climates.',
          'No road salt. Lane County roads don\'t salt in winter. Salt is a chemical stressor on protective coatings that doesn\'t apply here — an advantage over most of the country east of the Rockies.',
          'Moderate UV. Oregon summers are sunny, but UV intensity is lower than California or Arizona. June through September is when UV degradation is most active; the other eight months are comparatively gentle on the coating surface.',
          'Pollen season — April and May — creates the main washing stress in Lane County. Grass seed fields east of Eugene and Springfield release pollen that settles on paint and demands more frequent washing. Ceramic-coated cars handle pollen better than bare paint: it doesn\'t bond as readily to the coating surface. But the extra wash frequency in spring adds wear cycles. Two-bucket method through pollen season keeps this from being a problem.',
          'The wet season from October through May is ceramic\'s best friend here. Rain activates the self-cleaning effect — water sheeting off the hydrophobic surface carries contamination with it. Cars parked outdoors in the rain stay cleaner between washes than they would in a dry climate.',
          'Net result: ceramic coatings in Lane County consistently reach the higher end of their rated range when the owner follows proper wash technique through pollen season.',
        ],
      },
      {
        heading: 'Getting Your Coating Checked or Applied in Springfield',
        headingLevel: 2,
        body: [
          'If you\'re unsure whether an existing coating is still performing, we inspect them at no charge. If yours needs a refresh or a full recoat, we\'ll tell you honestly which one applies — and what the paint needs first if correction is warranted before recoating.',
          'If you\'re getting a coating for the first time, the free assessment tells you what the paint needs before application. Paint correction is almost always part of the job — ceramic coating applied over swirled or oxidized paint locks those defects in permanently.',
          'Call (541) 337-9893 or book online. The assessment takes a few minutes and there\'s no obligation.',
        ],
      },
    ],
    faqIds: [
      'ceramic-how-long',
      'ceramic-scratch-proof',
      'ceramic-cure-time',
      'ceramic-maintenance',
      'ceramic-vs-wax',
      'correction-before-ceramic',
    ],
    relatedServiceSlugs: ['ceramic-coating', 'paint-correction'],
  },
  {
    slug: 'pollen-season-oregon-paint-protection',
    title: 'Willamette Valley Pollen Season: What It Does to Your Car\'s Paint (and How to Stop It)',
    metaTitle: 'Pollen Season & Car Paint in the Willamette Valley | Blue Rose Auto Detailing',
    metaDescription:
      'Willamette Valley grass seed pollen bonds to clear coat within days and can etch paint. How Lane County drivers can protect their cars before and during pollen season.',
    category: 'Seasonal Care',
    readTime: '6 min read',
    publishDate: '2026-09-28',
    excerpt:
      'Willamette Valley grass seed pollen is different from typical tree pollen — it bonds to clear coat within days and can etch paint if left unaddressed. Here\'s what Lane County drivers need to know before spring.',
    intro: [
      'If you park outdoors in the Eugene-Springfield area, you\'ve seen it: the yellow-green layer that coats everything in April and May. What most drivers don\'t know is that this pollen — from the grass seed crops that blanket Lane County east of town — behaves differently on paint than the tree pollen most car care content is written for.',
      'This post covers what Willamette Valley pollen does to clear coat, how long you have before it becomes a problem, and what you can do before the season, during it, and after.',
    ],
    sections: [
      {
        heading: 'Why Willamette Valley Pollen Is Hard on Paint',
        headingLevel: 2,
        body: [
          'The Willamette Valley produces more grass seed than any other region in the United States. Lane County — the fields along I-5 south toward Creswell, east toward Junction City and Harrisburg — is dense with ryegrass, tall fescue, and bluegrass seed crops. When these crops release pollen from late April through early June, the volume is heavier than what drivers in most US cities experience by a significant margin.',
          'Tree pollen (oak, maple) is dry, granular, and relatively large. It sits on the paint surface and rinses off with water pressure. Grass seed pollen is finer, wetter, and contains organic proteins and acids that interact with clear coat chemistry. It doesn\'t just sit on the surface — it settles into the microscopic texture of the paint and begins bonding.',
          'The result: a car that has been sitting outside for a week during grass seed pollen season may look like it has a layer of yellow-green dust, but some of that pollen is no longer on the surface. It\'s in it.',
        ],
      },
      {
        heading: 'The Dew-and-Heat Cycle — How Pollen Bonds to Clear Coat',
        headingLevel: 2,
        body: [
          'The damage mechanism is specific. Pollen settles on the car overnight. Morning dew wets the pollen layer, beginning to dissolve the organic compounds in the pollen into the paint surface. Afternoon sun heats the panel and bakes that chemistry in. By the following evening, pollen that was sitting loosely on the surface the night before is now bonded to the clear coat.',
          'This cycle repeats. A few warm spring days with morning dew is enough for a measurable pollen bond to develop. The critical window — when a pressure rinse will still remove it — is roughly the first 24–48 hours after settling. After that, a clay bar is what removes it. Water alone won\'t.',
          'Left much longer, bonded pollen compounds begin to etch the clear coat. The organic acids in grass seed pollen don\'t reach the severity of bird droppings, but they\'re slow-acting and cumulative. A full spring season of accumulation on unprotected paint creates contamination that contributes to the haze and accelerated oxidation visible on vehicles that spend several years parked outdoors in this region.',
        ],
      },
      {
        heading: 'What a Car Wash Actually Does to Pollen',
        headingLevel: 2,
        body: [
          'A tunnel wash or pressure rinse removes loose pollen — the layer that settled recently before the bake-in cycle had time to bond it. Run your hand across a just-washed panel. If it feels slightly rough or gritty rather than completely smooth, the contamination that remains is bonded. That texture isn\'t dirt — it\'s pollen, tree sap residue, and other bonded contamination that water can\'t lift.',
          'Clay bar decontamination is what removes bonded pollen. A clay bar worked across a lubricated paint surface lifts the embedded particles mechanically. After a proper clay pass, the panel should feel completely smooth — like glass rather than fine-grain sandpaper.',
          'A quick test: put your hand in a zip-lock bag and run it across a freshly-washed panel. Your fingers will feel any embedded contamination the wash left behind. If it feels like anything other than perfectly smooth paint, the pollen has bonded.',
        ],
      },
      {
        heading: 'Your Protection Options — Before, During, and After Pollen Season',
        headingLevel: 2,
        body: ['Three tiers of protection, depending on what you have in place before April:'],
        orderedList: [
          'Ceramic coating — best protection, multi-year. Ceramic-coated paint doesn\'t prevent pollen from landing, but pollen doesn\'t bond to a hydrophobic surface the way it does to bare clear coat. The morning dew cycle still happens, but the organic acids can\'t find the same purchase in the coating surface. Pollen rinses off coated paint far more readily, and between seasonal clay decontaminations, coated vehicles accumulate significantly less bonded contamination than uncoated ones.',
          'Paint sealant before the season — good protection, 3–6 months. If you don\'t have ceramic, a paint sealant applied in February or early March creates a hydrophobic layer that slows bonding through the peak pollen months. It won\'t prevent bonding entirely, but it significantly reduces how much pollen chemically attaches and makes the spring clay decontamination faster. A detail with sealant in late February is the right move for uncoated vehicles that park outdoors.',
          'Frequent washing during the season — minimum protection. If no coating or sealant is in place, washing every 3–5 days during peak pollen season is the baseline. The goal is to stay ahead of the bake-in cycle — remove pollen before it has completed enough dew-and-heat cycles to bond. This requires discipline; miss a week during a warm April and the bonding accelerates significantly.',
        ],
      },
      {
        heading: 'If Pollen Is Already in Your Paint — What to Do',
        headingLevel: 2,
        body: [
          'If your car came through a spring without protection and the paint feels rough or hazy, pollen has bonded and you\'re dealing with a contamination layer. A full decontamination sequence — iron fallout remover and a clay bar pass — removes it. The iron fallout step addresses the brake dust and ferrous particles that co-accumulate with pollen; the clay bar lifts the organic contamination.',
          'After decontamination, a paint sealant or ceramic coating should be applied to protect the freshly cleaned surface heading into the next season. A clay decontamination on bare unprotected paint is a short-term fix — the following spring will rebond just as fast without something in place.',
          'If the paint shows haze or water spot etching beyond surface contamination — visible in direct sunlight as a cloudy, slightly dulled layer rather than just a rough texture — that\'s clear coat damage that decontamination won\'t address. That\'s paint correction, not just a detail.',
        ],
      },
      {
        heading: 'Seasonal Timing — What to Do and When',
        headingLevel: 2,
        body: ['A practical calendar for Lane County drivers:'],
        list: [
          'February–March: Best window to apply a paint sealant or book a ceramic coating before pollen season. Paint correction should happen before ceramic application; book early because spring is the busiest season.',
          'April–May (peak pollen): Rinse every 3–5 days if no coating or sealant is in place. No dry wiping — dragging pollen across paint creates swirl marks. Rinse first, always.',
          'May–June: After peak pollen, a clay bar decontamination removes what bonded during the season. Best window to reseal or coat the paint heading into summer UV exposure.',
          'If you have ceramic coating: maintain normal wash schedule with pH-neutral shampoo and two-bucket technique. The coating handles pollen significantly better than bare paint — your main job is keeping up with wash frequency.',
        ],
        callout: {
          type: 'tip',
          heading: 'Get Ahead of Pollen Season',
          text: 'The best time to apply a paint sealant or ceramic coating is before pollen season starts — February through March. Call (541) 337-9893 or book online for a free assessment. We\'ll tell you what the paint needs before recommending anything.',
        },
      },
    ],
    faqIds: [
      'pollen-paint-damage',
      'pollen-car-wash',
      'detail-vs-carwash',
      'ceramic-how-long',
    ],
    relatedServiceSlugs: ['ceramic-coating', 'auto-detailing', 'paint-correction'],
  },
  {
    slug: 'paint-correction-vs-polishing',
    title: 'Paint Correction vs. Polishing: What\'s Actually Different (and Why It Matters)',
    metaTitle: 'Paint Correction vs. Polishing: What\'s the Difference? | Blue Rose Auto Detailing',
    metaDescription:
      'Polish and paint correction are not the same service. Here\'s what each actually does, when each is appropriate, and why the distinction matters most before ceramic coating.',
    category: 'Paint Correction',
    readTime: '6 min read',
    publishDate: '2026-09-28',
    excerpt:
      'Polish and paint correction are used interchangeably by a lot of shops — but they\'re not the same thing. Here\'s what each actually means, and why the distinction matters most when you\'re about to get ceramic coating.',
    intro: [
      'Polish and paint correction are used interchangeably at a lot of shops, on product labels, and in detailing marketing. They\'re not the same thing. They produce different results, cost different amounts, and — if you\'re considering ceramic coating — have very different long-term consequences.',
      'Here\'s what each actually means, when each is the right choice, and what to ask before you book.',
    ],
    sections: [
      {
        heading: 'There Are Actually Three Distinct Services',
        headingLevel: 2,
        body: [
          'The terminology confusion exists partly because there are three categories, not two, and most shops only explain two of them.',
          'A polish is a product — a liquid or paste with mild abrasives that adds gloss and removes very light surface contamination. What consumer brands sell at auto parts stores is polish.',
          'A paint enhancement is a single-stage machine polish — one pass with a medium compound or polish on a dual-action polisher. It noticeably improves gloss and removes very light swirl marks, but it doesn\'t address moderate defects or water spot etching. This is what most shops mean when they include a "machine polish" in a detail package.',
          'Paint correction is a multi-stage machine polishing process — two or three passes with progressively finer compounds and pads, calibrated to the specific paint\'s defect depth and clear coat thickness. It removes a measurable percentage of defects: swirl marks, water spot etching, oxidation, light scratches. The process is measured against paint thickness readings, not estimated.',
          'The practical difference: an enhancement makes your car look noticeably better. A correction makes your paint look like it was never damaged.',
        ],
      },
      {
        heading: 'What a Polish (Enhancement) Actually Does',
        headingLevel: 2,
        body: [
          'A single-stage machine polish works in one pass — you choose a compound that cuts at a set level of aggression, run it across the paint, and get what that level of abrasive can produce. On paint with very light swirling or surface haze, this is a significant visual improvement. On paint with moderate swirls or water spot etching, the result is a gloss improvement with the defects still visible under direct or LED light.',
          'This isn\'t the wrong service for every situation. Paint that\'s generally in good condition, where the customer wants it looking better without the cost or time of full correction, benefits from an enhancement. The result holds until the next set of wash swirls accumulates.',
          'Where it becomes a problem: when a shop performs an enhancement and the customer believes they\'re getting correction — or when an enhancement is done before ceramic coating and the swirls the customer came in with are still there under the new coating.',
        ],
      },
      {
        heading: 'What Paint Correction Actually Is',
        headingLevel: 2,
        body: [
          'Paint correction is a multi-stage process that removes a defined percentage of defects from the clear coat. "Correction" means measurable improvement: before the job, the paint has a specific defect profile under LED lighting. After a proper correction, a meaningful percentage of those defects are gone.',
          'The process starts before any polishing: paint thickness is measured on every panel with a digital gauge. Factory clear coat runs 100–150 microns; safe polishing depth is typically above 60–80 microns minimum depending on the product and technique. The thickness reading determines how aggressively to cut — and whether any panel needs to be skipped entirely.',
          'A shop doing real paint correction can answer: what were the thickness readings before and after? What stages were used? What percentage of defects were removed on each panel? These aren\'t trick questions — they\'re the natural output of work done with measurement rather than guesswork.',
        ],
      },
      {
        heading: 'The Three Correction Stages — What Each One Does',
        headingLevel: 2,
        body: ['Here\'s what each stage means in practice:'],
        orderedList: [
          'Single-stage correction (1-stage). One machine pass with a medium compound and appropriate pad. Removes roughly 50–70% of light to moderate defects — surface swirls, light oxidation, water spots that haven\'t fully etched. Best for paint in decent condition, where the primary goal is a cleaner finish or preparation for a sealant. Moderate and deep defects will remain.',
          'Two-stage correction (2-stage). A cut pass with a more aggressive compound, followed by a refining pass with a finer polish. Removes 80–95% of moderate swirls, water spot etching, and surface oxidation. This is the standard stage before ceramic coating on most daily-driver paint. Takes a full day on an average vehicle.',
          'Three-stage correction (3-stage). A heavy cut, a medium refine, and a finishing pass that eliminates holograms and any remaining micro-marring. Used for heavily defected paint — years of tunnel wash accumulation, deep oxidation, severe water spot etching — or for enthusiast-level results where maximum clarity is the goal. The most time-intensive option; produces the sharpest possible result.',
        ],
      },
      {
        heading: 'What Correction Can Fix — and What It Can\'t',
        headingLevel: 2,
        body: [
          'Paint correction works on defects in the clear coat. Swirl marks, water spot etching, light oxidation, surface scratches that haven\'t cut through to the base coat — these live in the clear coat and respond to machine polishing.',
          'The fingernail test: drag your fingernail across a scratch. If it catches — if your nail drops into the scratch — it goes through the clear coat into the base coat and won\'t polish out. That needs touch-up paint or a panel respray. If your nail glides over it without catching, the scratch is in the clear coat and correction can address it.',
          'Other things correction can\'t fix: clear coat that\'s cracking or peeling (polishing accelerates the failure), scratches to bare metal, and paint that\'s already below safe polishing thickness. A shop measuring with a paint thickness gauge catches the last case before any compound touches the panel.',
        ],
      },
      {
        heading: 'Why This Distinction Matters Most Before Ceramic Coating',
        headingLevel: 2,
        body: [
          'Ceramic coating doesn\'t correct paint — it locks in whatever condition the paint is in at application. Applied over corrected, glossy paint, it deepens the clarity and permanently seals a great result. Applied over swirled or hazed paint, it seals those defects in permanently.',
          'This is why asking "what exactly are you doing to the paint before the coating?" matters. If the answer is "we do a light polish as part of prep" without any mention of correction stages or paint thickness measurement, you may be getting an enhancement — not a correction. The swirls will still be there after the coating goes on. Removing the coating afterward to correct them is a difficult, expensive job.',
          'At Blue Rose, the sequence is: decontamination wash, paint thickness measurement, correction to the appropriate stage for what the paint actually needs, IPA wipe, then coating. The correction stage is confirmed after the decontamination wash — we assess the paint in clean condition before recommending or charging for stages that aren\'t needed.',
          'If you\'re comparing quotes for a ceramic coating job and one is significantly cheaper, asking what the paint prep involves is the most useful question. The answer tells you whether the price difference is efficiency or a skipped step.',
        ],
      },
    ],
    faqIds: [
      'correction-vs-polish',
      'correction-how-long',
      'correction-scratches',
      'correction-safe',
      'correction-before-ceramic',
    ],
    relatedServiceSlugs: ['paint-correction', 'ceramic-coating'],
  },
  {
    slug: 'ppf-vs-ceramic-coating',
    title: 'PPF vs. Ceramic Coating: Which Does Your Car Actually Need?',
    metaTitle: 'PPF vs. Ceramic Coating: Which Does Your Car Need? | Blue Rose Auto Detailing',
    metaDescription:
      'PPF stops rock chips. Ceramic resists chemical damage. They answer different threats — here\'s how to decide which one your car needs, and when to get both.',
    category: 'PPF & Ceramic',
    readTime: '7 min read',
    publishDate: '2026-09-28',
    excerpt:
      'PPF and ceramic coating do completely different things — one stops rock chips, the other resists chemical damage. Here\'s how to decide which your car needs, and whether both makes sense.',
    intro: [
      'PPF and ceramic coating are frequently compared as if you have to choose one. You don\'t — and understanding what each does makes the decision straightforward.',
      'Here\'s what each product actually does, what it can\'t do, and how to figure out which one your situation calls for.',
    ],
    sections: [
      {
        heading: 'What Each Product Actually Does',
        headingLevel: 2,
        body: [
          'PPF — paint protection film — is a physical urethane film applied to your vehicle\'s surface. It absorbs rock chips, road debris, and minor abrasion before they reach the paint. The film takes the impact so the paint doesn\'t. Modern PPF has a self-healing top coat that causes light surface scratches to disappear with heat. No coating, wax, or chemical product can do what film does — only physical material can absorb physical impact.',
          'Ceramic coating is a liquid polymer that chemically bonds to the clear coat and cures into a hydrophobic, UV-resistant surface. It resists bird droppings, tree sap, pollen etching, road film bonding, and UV oxidation. It makes washing significantly easier and dramatically reduces the contamination that bonds between cleans. But it\'s a surface treatment, not armor — it cannot stop a rock chip.',
          'The simplest framing: PPF is a bumper. Ceramic is a raincoat. They answer completely different threats. Most buyers aren\'t choosing between them — they\'re figuring out which threat matters more for their situation.',
        ],
      },
      {
        heading: 'What Threat Does Your Car Actually Face?',
        headingLevel: 2,
        body: [
          'Rock chips happen when road debris — gravel, small stones, grit thrown up by other vehicles — hits the front of your car. The faster you drive, the more front-surface impacts you accumulate. Highway commuters, anyone who regularly drives I-5 or OR-126 through construction zones, and drivers on rural roads with gravel shoulders face meaningfully higher chip risk than someone whose primary driving is low-speed city streets.',
          'Chemical threats — bird droppings, pollen etching, tree sap, UV oxidation, road film — accumulate on every vehicle that parks outdoors. They\'re not catastrophic events; they\'re slow, cumulative damage. In the Willamette Valley, pollen season (April–May) and summer UV (June–September) are the two largest contributors. A vehicle parked outdoors through an Oregon spring and summer without protection is taking a slow chemical assault across every painted panel.',
          'Most daily drivers face both threats to some degree. The question is which is higher. A vehicle that parks outdoors in Eugene and takes regular highway trips faces both meaningfully. A vehicle primarily used for local errands and kept in a garage faces mostly chemical threat. That answer shapes the right product choice.',
        ],
      },
      {
        heading: 'Where Each Product Belongs on the Car',
        headingLevel: 2,
        body: [
          'PPF belongs on high-impact zones: the front bumper, hood leading edge, A-pillars, mirrors, door cups, and rocker panels. These are the surfaces that take the most road debris. Full-vehicle PPF exists but costs significantly more; most buyers choose a partial front-end package that covers the surfaces where chips most commonly occur.',
          'Ceramic belongs everywhere — the full vehicle, including glass, wheels, and trim. It\'s applied over whatever surfaces are present: painted panels and the PPF film itself if film is already in place.',
          'The combination maps cleanly: PPF on the impact zones, ceramic on top of the film for those areas and over the rest of the vehicle. There\'s no conflict — they work in separate layers for separate purposes.',
        ],
      },
      {
        heading: 'Why PPF + Ceramic Together Is the Best of Both',
        headingLevel: 2,
        body: [
          'The combination produces protection that neither product can provide alone. PPF handles physical impact on the front end. Ceramic handles chemical contamination across the entire vehicle. Together, the paint is protected against the full range of threats it faces.',
          'They also make each other more effective. PPF typically lasts 7–10 years; ceramic lasts 2–5 years. Ceramic applied on top of PPF protects the film\'s self-healing top coat from UV degradation — the primary cause of premature film yellowing and surface dulling. A ceramic-coated film lasts noticeably longer than bare film. Meanwhile, PPF protects the paint from physical impacts that ceramic can\'t stop.',
          'One of our customers came in for a ceramic + PPF combination and left a 5-star review: "Tristan\'s work on my car is immaculate... best detail shop in the area." That combination is our most complete protection package and the one we recommend for anyone keeping a vehicle long-term.',
          'The correct sequence when doing both: paint correction first if needed, then PPF, then ceramic applied over everything. Order matters — ceramic applied before the film goes on ends up under the film rather than on top of it, which defeats the purpose of both layers.',
        ],
      },
      {
        heading: 'If Budget Requires Choosing One',
        headingLevel: 2,
        body: ['Here\'s the decision logic:'],
        list: [
          'Get PPF if: you drive frequently on highways or rural roads where road debris is a regular risk; you\'ve had chips before and want to stop them from happening again; your vehicle is new or recently painted and the front end is what you want to protect first.',
          'Get ceramic if: your primary exposure is chemical — pollen, bird droppings, UV, road film — rather than physical impact; you park outdoors in Lane County through spring and summer; you want to reduce the ongoing maintenance burden of waxing and clay bar decontamination.',
          'Get both if: you\'re keeping the vehicle 5+ years; you drive regularly on I-5 or similar highways; and protecting the paint investment over the long term is the goal. The combined cost over 5 years is typically less than a single panel respray if the paint fails.',
        ],
      },
      {
        heading: 'How to Sequence the Job Correctly',
        headingLevel: 2,
        body: [
          'If you\'re getting both products, the order matters and can\'t be reversed without redoing previous work.',
        ],
        orderedList: [
          'Paint correction (if needed). Both PPF and ceramic amplify what\'s under them — swirls visible on bare paint will be visible through PPF and locked in under ceramic. Correction before any protection layer is applied.',
          'PPF application. Film is applied to the prepared, corrected paint on the impact zones. The shop custom-cuts the film to your vehicle\'s specific panels.',
          'Ceramic coating. Applied over the PPF on the film zones and over the rest of the vehicle. Bonds to both painted panels and the film surface.',
        ],
        callout: {
          type: 'tip',
          heading: 'Free Assessment',
          text: 'Not sure which combination is right for your vehicle? We assess the paint at no charge — correction stage needed, impact zone risk, and the package that fits your use case. Call (541) 337-9893 or book online.',
        },
      },
    ],
    faqIds: [
      'ppf-vs-ceramic',
      'ppf-how-long-lasts',
      'ceramic-ppf-combo',
      'ceramic-scratch-proof',
      'ceramic-how-long',
    ],
    relatedServiceSlugs: ['paint-protection-film', 'ceramic-coating', 'paint-correction'],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

export function getAllPostSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug)
}

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS
}
