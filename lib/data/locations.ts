export interface Location {
  slug: string
  city: string
  state: string
  county: string
  fullName: string
  distance: string         // approx. distance from shop
  description: string      // unique 100-150 word intro paragraph
  serviceHighlights: string[]
  metaTitle: string
  metaDescription: string
  heroAlt: string
  nearbyLocations: string[] // slugs of nearby locations
}

export const LOCATIONS: Location[] = [
  {
    slug: 'eugene-or',
    city: 'Eugene',
    state: 'OR',
    county: 'Lane County',
    fullName: 'Eugene, OR',
    distance: '12 min',
    description:
      "Eugene is 12 minutes from our Springfield shop — close enough that most Eugene customers drop off, run errands on the east side, and pick up the same day. Eugene vehicle owners tend to be a particular kind of customer: they've done the research, they ask good questions, and they care about what goes on their paint. The city's EV adoption rate is among the highest in Oregon — and many EV owners prefer ceramic coating specifically because it eliminates petroleum-based wax products from their maintenance routine. Pollen is the other factor specific to Eugene: South Eugene and the Whiteaker neighborhood sit under significant oak and maple canopy, and the grass seed fields east of town push airborne contamination into the city during bloom season. We see a real surge in decontamination details from Eugene customers every spring.",
    serviceHighlights: [
      'Ceramic coating for Eugene EV owners — eliminates petroleum wax from your maintenance routine',
      'Spring decontamination detail removing grass seed pollen bonded to clear coat from fields east of Eugene',
      'PPF for Eugene vehicles commuting on I-5 and OR-126',
      'Paint correction for oak and maple sap contamination from South Eugene and Whiteaker tree canopy',
    ],
    metaTitle: 'Auto Detailing Eugene OR | Blue Rose — 12 Min from Springfield',
    metaDescription:
      'Professional auto detailing, ceramic coating, PPF & paint correction serving Eugene, OR. 12 min to our Springfield shop. Popular with EV owners. Call (541) 337-9893.',
    heroAlt: 'Auto detailing serving Eugene OR — Blue Rose Auto Detailing Services Springfield',
    nearbyLocations: ['springfield-or', 'coburg-or', 'santa-clara-or'],
  },
  {
    slug: 'springfield-or',
    city: 'Springfield',
    state: 'OR',
    county: 'Lane County',
    fullName: 'Springfield, OR',
    distance: '0 miles',
    description:
      "Blue Rose Auto Detailing Services is located right here in Springfield, OR — at Suite 100, 3436 Olympic Street — making us the most convenient professional detailer for Springfield residents. Whether you live in the Thurston area, Mohawk, downtown Springfield, or along the Willamette River neighborhoods, we're your backyard detailing shop. Since 1994, owner Tristan and the Blue Rose team have served Springfield vehicle owners with honest, quality detailing work at prices that reflect real value. Springfield drivers have trusted us with daily drivers, work trucks, classic cars, and high-end vehicles — and our 5.0-star rating reflects the consistency of that work. Drop your car off before work or book a Saturday appointment for a same-day turnaround.",
    serviceHighlights: [
      'Your local Springfield auto detailing shop since 1994',
      'Walk-in and appointment service at our Olympic Street location',
      'Paint correction, ceramic coating, and PPF for Springfield vehicles',
      'Interior restoration including carpet extraction and leather conditioning',
    ],
    metaTitle: 'Auto Detailing in Springfield, OR | Blue Rose — Local Since 1994',
    metaDescription:
      'Your Springfield, OR auto detailing shop — located at 3436 Olympic Street. Full detail, paint correction, ceramic coating, PPF & window tinting. Call (541) 337-9893.',
    heroAlt: 'Auto detailing in Springfield OR — Blue Rose Auto Detailing at 3436 Olympic Street',
    nearbyLocations: ['eugene-or', 'coburg-or', 'lowell-or'],
  },
  {
    slug: 'coburg-or',
    city: 'Coburg',
    state: 'OR',
    county: 'Lane County',
    fullName: 'Coburg, OR',
    distance: '8 miles',
    description:
      "Coburg sits 8 miles north of Springfield at I-5 Exit 199, but most people outside Lane County know it for one thing: Coburg Road hosts one of the densest stretches of RV dealerships in Oregon. New RV buyers who drive off those lots are a significant part of our Coburg customer base — many want a full detail or ceramic coating done before they take the rig on its first trip. We also serve Coburg's collector car community; the town's annual classic and antique car events draw owners who take their paint seriously. For daily commuters running the short I-5 hop to Eugene or Springfield, highway decontamination and front-end PPF are the most common requests. The drive to our Olympic Street shop is under 15 minutes from most of Coburg.",
    serviceHighlights: [
      'New RV detail and ceramic coating for buyers from Coburg Road dealerships — protect your investment before the first trip',
      'Classic car detailing and paint correction for Coburg collector vehicle owners',
      'I-5 decontamination detail for Coburg commuters — removes tar, road film, and highway contamination',
      'PPF for front-end protection on vehicles running I-5 daily from Exit 199',
    ],
    metaTitle: 'Auto Detailing Coburg OR | Blue Rose — RV & Classic Car Specialists',
    metaDescription:
      'Professional auto detailing, RV detailing & classic car services serving Coburg, OR. New RV buyers welcome. 8 miles to our Springfield shop. Call (541) 337-9893.',
    heroAlt: 'Auto detailing serving Coburg OR — Blue Rose Auto Detailing Springfield',
    nearbyLocations: ['eugene-or', 'springfield-or', 'junction-city-or'],
  },
  {
    slug: 'lowell-or',
    city: 'Lowell',
    state: 'OR',
    county: 'Lane County',
    fullName: 'Lowell, OR',
    distance: '20 miles',
    description:
      "Lowell sits along the Middle Fork Willamette River corridor, 20 miles southeast of Springfield, with Dexter Reservoir and Lookout Point Lake defining the character of the community. Boats are a way of life here — and boats that sit on trailers outdoors accumulate hard water mineral deposits from lake water, UV gelcoat oxidation from open storage, and biological growth on hull surfaces that requires the right chemistry to remove without damaging fiberglass. Our boat detailing is built around these specific problems. RV owners in Lowell face a similar issue: a rig that goes into storage dirty comes out in spring with oxidation and mildew that's harder to remove than it would have been in fall. For vehicles of all kinds stored outdoors in the wet Middle Fork winters, ceramic coating is the protection that makes long-term maintenance realistic.",
    serviceHighlights: [
      'Boat detailing for Lowell-area owners on Dexter Reservoir and Lookout Point Lake — mineral deposits, gelcoat oxidation, and hull restoration',
      'RV detailing for Lowell rigs stored outdoors — UV oxidation removal and wet winter prep',
      'Ceramic coating for vehicles and boats stored outside in the Middle Fork Willamette corridor',
      'Off-road and truck detailing for active Lowell households — trail dust, mud, and OR-58 road grime removed',
    ],
    metaTitle: 'Auto Detailing Lowell OR | Blue Rose — Boat & RV Specialists',
    metaDescription:
      'Professional auto detailing, boat detailing & RV detailing serving Lowell, OR. Dexter Reservoir and Lookout Point Lake area. 20 miles to Springfield. Call (541) 337-9893.',
    heroAlt: 'Auto detailing serving Lowell OR — Blue Rose Auto Detailing',
    nearbyLocations: ['springfield-or', 'cottage-grove-or', 'creswell-or'],
  },
  {
    slug: 'veneta-or',
    city: 'Veneta',
    state: 'OR',
    county: 'Lane County',
    fullName: 'Veneta, OR',
    distance: '18 miles',
    description:
      "Veneta sits 18 miles west of Springfield on OR-126, where the Willamette Valley floor meets the Coast Range foothills. The drive out there feels different from the Eugene suburbs — rural properties, forest edges, horses, and the kind of outdoor lifestyle that leaves its mark on vehicles. Organic contamination is the dominant problem for Veneta vehicles: tree sap from Douglas fir and oak canopy, mud from unpaved driveways and farm roads, and moss that takes hold on paint that sits wet through Oregon winters. Standard washing doesn't fully address any of these — sap bonds to clear coat, mud leaves mineral residue in crevices, and moss produces biological staining. Almost no one in Veneta parks in a garage, which makes ceramic coating a stronger investment here than in most places: the hydrophobic surface actively sheds what the environment throws at it.",
    serviceHighlights: [
      'Decontamination detail for Veneta vehicles with OR-126 rural road mud, tree sap, and organic debris',
      'Ceramic coating for Veneta vehicles stored outdoors — forest-edge conditions require more than a wax',
      'Full interior detail for active rural households — farm, trail, and pet use removed completely',
      'Paint correction for Veneta vehicles with tree sap etching, oxidation, and long-term outdoor exposure',
    ],
    metaTitle: 'Auto Detailing Veneta OR | Blue Rose — Rural & Outdoor Vehicle Specialists',
    metaDescription:
      'Professional auto detailing serving Veneta, OR. Tree sap, mud & organic decontamination. Ceramic coating for outdoor-stored vehicles. 25 min to Springfield. Call (541) 337-9893.',
    heroAlt: 'Auto detailing serving Veneta OR — Blue Rose Auto Detailing',
    nearbyLocations: ['eugene-or', 'junction-city-or', 'santa-clara-or'],
  },
  {
    slug: 'creswell-or',
    city: 'Creswell',
    state: 'OR',
    county: 'Lane County',
    fullName: 'Creswell, OR',
    distance: '15 miles',
    description:
      "Creswell sits at I-5 Exit 182, 15 miles south of Springfield — a 20-minute drive that most Creswell customers tell us feels shorter than they expected. The town is growing fast, and a lot of Creswell residents commute north to Eugene or Springfield daily on I-5. That driving pattern produces a specific kind of paint damage: the highway generates tar strips from road repairs, rubber tire fragments, and diesel exhaust residue that bonds to clear coat in ways a car wash doesn't address. Stone chips on the front end are a when, not an if — PPF is the only protection that actually stops them. Ceramic coating has also been popular with Creswell customers who bought a new or nearly-new vehicle and want to protect it before swirls and contamination get established.",
    serviceHighlights: [
      'PPF for the front end of Creswell I-5 commuters — highway tar, stone chips, and road film are daily hazards',
      'Ceramic coating for newer Creswell vehicles — best applied within the first 1–3 years before swirls accumulate',
      'Decontamination detail removing tar strips, rubber deposits, and diesel residue from I-5 driving',
      'Full interior detail for Creswell daily drivers — one visit brings a worn interior back to new',
    ],
    metaTitle: 'Auto Detailing Creswell OR | Blue Rose — I-5 Commuter PPF & Ceramic',
    metaDescription:
      'Professional auto detailing, PPF & ceramic coating serving Creswell, OR. 20-min drive to Springfield. I-5 commuter paint protection specialists. Call (541) 337-9893.',
    heroAlt: 'Auto detailing serving Creswell OR — Blue Rose Auto Detailing',
    nearbyLocations: ['springfield-or', 'cottage-grove-or', 'lowell-or'],
  },
  {
    slug: 'harrisburg-or',
    city: 'Harrisburg',
    state: 'OR',
    county: 'Linn County',
    fullName: 'Harrisburg, OR',
    distance: '22 miles',
    description:
      "Harrisburg sits in Linn County, 22 miles north of Springfield on I-5 — we cross the county line to serve it because the agricultural community there is exactly the kind of customer we built our decontamination and protection services for. The OR-99W corridor through Harrisburg runs through active grass seed and ryegrass production land; during bloom season, pollen deposits on paint are among the heaviest in the Valley. Farm trucks and work vehicles in the Harrisburg area follow a predictable pattern: heavy use through spring and summer, a detail before winter to remove bonded contamination, and another in spring to prep for the next season. Ceramic coating is a practical investment here — vehicles stored outdoors through Willamette Valley winters accumulate oxidation quickly without a protective layer.",
    serviceHighlights: [
      'Seasonal farm truck detail for Harrisburg agricultural households — spring decontamination after bloom, fall protection before winter',
      'Grass seed and ryegrass pollen decontamination for Harrisburg vehicles in the Valley\'s production belt',
      'Ceramic coating for Harrisburg vehicles stored outdoors — Willamette Valley winters accelerate oxidation without protection',
      'Full interior restoration for working vehicles — agricultural residue, field dust, and heavy-use wear removed',
    ],
    metaTitle: 'Auto Detailing Harrisburg OR | Blue Rose — Serving Linn County',
    metaDescription:
      'Professional auto detailing & farm vehicle detailing serving Harrisburg, OR (Linn County). Seasonal decontamination, ceramic coating & full detail. Call (541) 337-9893.',
    heroAlt: 'Auto detailing serving Harrisburg OR — Blue Rose Auto Detailing',
    nearbyLocations: ['junction-city-or', 'coburg-or', 'eugene-or'],
  },
  {
    slug: 'santa-clara-or',
    city: 'Santa Clara',
    state: 'OR',
    county: 'Lane County',
    fullName: 'Santa Clara, OR',
    distance: '7 miles',
    description:
      "Santa Clara is an unincorporated community directly north of Eugene, 7 miles from our Olympic Street shop via the Belt Line Highway — one of the shortest drives of any location we serve. The Santa Clara household profile tends to be suburban and active: multiple vehicles, kids, pets, and the kind of everyday interior wear that builds up faster than most people realize. Full interior details are consistently our most popular service with Santa Clara customers — seat extraction, carpet shampoo, and door panel wipe-down that resets a vehicle that's been in daily family use. Belt Line Highway commuters also bring us vehicles with road film and winter grime that standard washing doesn't fully remove. For households with newer SUVs or a vehicle they plan to drive for years, ceramic coating is the conversation we have most often.",
    serviceHighlights: [
      'Full interior detail for Santa Clara family vehicles — pet hair, car seats, and everyday wear removed completely',
      'Belt Line Highway decontamination for Santa Clara commuters — road film and winter grime removed',
      'Ceramic coating for Santa Clara households with newer SUVs or vehicles they plan to keep long-term',
      'Window tinting for Santa Clara commuters — reduces glare on the Belt Line and heat buildup in parked vehicles',
    ],
    metaTitle: 'Auto Detailing Santa Clara OR | Blue Rose — 7 Miles from Springfield',
    metaDescription:
      'Professional auto detailing, interior detail & ceramic coating serving Santa Clara, OR. 7 miles to our Springfield shop. Family vehicles welcome. Call (541) 337-9893.',
    heroAlt: 'Auto detailing serving Santa Clara OR — Blue Rose Auto Detailing',
    nearbyLocations: ['eugene-or', 'springfield-or', 'veneta-or'],
  },
  {
    slug: 'cottage-grove-or',
    city: 'Cottage Grove',
    state: 'OR',
    county: 'Lane County',
    fullName: 'Cottage Grove, OR',
    distance: '30 miles',
    description:
      "Cottage Grove sits 30 miles south on I-5, at the edge of Lane County where the terrain opens up toward the Cascades and two reservoirs — Dorena Lake and the Cottage Grove Reservoir — put boats on the water just minutes from most neighborhoods. That outdoor-first lifestyle shows up in what Cottage Grove customers bring us: boats with hull oxidation and water mineral deposits after a season on the water, RVs coming out of storage with chalky fiberglass gelcoat, and daily drivers whose front ends show the real cost of I-5 commuting. Our boat and RV detailing is built around the specific chemistry those materials need — not generic car-wash products. Cottage Grove customers making the 30-minute drive north consistently tell us it's worth it for work done right.",
    serviceHighlights: [
      'Boat detailing for Cottage Grove owners running Dorena Lake and Cottage Grove Reservoir',
      'RV detailing for Cottage Grove rigs coming out of storage before Cascade and Coast season',
      'PPF protecting the front end of vehicles commuting 30 miles on I-5 to Eugene',
      'Ceramic coating for vehicles stored outdoors in Lane County\'s wet winters',
    ],
    metaTitle: 'Auto Detailing Cottage Grove OR | Blue Rose — Springfield Shop',
    metaDescription:
      'Professional auto detailing, boat detailing & RV detailing serving Cottage Grove, OR. 30 miles to our Springfield shop. Paint correction, ceramic coating & PPF. Call (541) 337-9893.',
    heroAlt: 'Auto detailing serving Cottage Grove OR — Blue Rose Auto Detailing',
    nearbyLocations: ['creswell-or', 'lowell-or', 'springfield-or'],
  },
  {
    slug: 'junction-city-or',
    city: 'Junction City',
    state: 'OR',
    county: 'Lane County',
    fullName: 'Junction City, OR',
    distance: '16 miles',
    description:
      "Junction City sits at the center of the Willamette Valley's grass seed production belt — not near the fields, inside them. The OR-99W and OR-36 corridor runs through some of the most intensively farmed grass seed land in the country, and during bloom season (May through July), pollen accumulates on paint overnight. Standard washing doesn't remove it: grass seed pollen bonds chemically to clear coat, especially after morning dew and afternoon heat cycles it into the surface. Our spring decontamination detail — clay bar plus chemical decontamination — removes what washing leaves behind. Junction City customers also bring us farm trucks carrying fertilizer dust, field chemical residue, and clay soil that needs real decontamination chemistry. Ceramic coating has been the biggest conversation with Junction City customers who want a surface that actively sheds what the Valley throws at it.",
    serviceHighlights: [
      'Spring decontamination detail for vehicles in the grass seed belt — removes bonded pollen, field dust, and agricultural contamination',
      'Ceramic coating for Junction City vehicles that live in pollen country — hydrophobic surface sheds contamination weekly',
      'Farm truck and agricultural vehicle detailing — fertilizer dust, field chemical residue, and clay soil removal',
      'Paint correction for vehicles with oxidation and contamination buildup from outdoor storage in the Valley',
    ],
    metaTitle: 'Auto Detailing Junction City OR | Blue Rose — Grass Seed Belt Specialists',
    metaDescription:
      'Professional auto detailing & spring decontamination serving Junction City, OR. Pollen removal, ceramic coating & farm vehicle detailing. 20 min to Springfield. Call (541) 337-9893.',
    heroAlt: 'Auto detailing serving Junction City OR — Blue Rose Auto Detailing',
    nearbyLocations: ['eugene-or', 'harrisburg-or', 'veneta-or'],
  },
]

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug)
}

export function getLocationByCity(city: string): Location | undefined {
  return LOCATIONS.find((l) => l.city.toLowerCase() === city.toLowerCase())
}
