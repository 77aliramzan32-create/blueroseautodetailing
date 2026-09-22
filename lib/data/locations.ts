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
    distance: '5 miles',
    description:
      "Eugene, OR is the cultural and economic hub of Lane County, and one of Blue Rose Auto Detailing's most-served communities. Many Eugene vehicle owners make the short drive to our Springfield shop on Olympic Street — often commenting that the quality of our work and transparent pricing is worth the trip from any part of the city. From the Whiteaker neighborhood and downtown to the University of Oregon area and South Eugene, we've built a reputation serving Eugene residents who want professional-grade detailing results, not a rushed tunnel wash. We service daily drivers, classic cars, and high-end vehicles for Eugene customers — and we're proud to offer the same fair pricing regardless of what you drive.",
    serviceHighlights: [
      'Full interior & exterior detail for Eugene daily drivers',
      'Paint correction and ceramic coating for Eugene vehicle owners',
      'PPF installation protecting vehicles from I-5 and belt-line road debris',
      'Window tinting popular among Eugene students and commuters',
    ],
    metaTitle: 'Auto Detailing in Eugene, OR | Blue Rose — Springfield Shop',
    metaDescription:
      'Professional auto detailing, paint correction, ceramic coating & PPF serving Eugene, OR. Short drive to our Springfield shop. Fair pricing, owner-operated since 1994. Call (541) 337-9893.',
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
      "Coburg, OR is a small community just north of Eugene along the I-5 corridor, home to many classic car collectors and recreational vehicle owners who have found Blue Rose Auto Detailing Services to be their go-to detailing shop in the region. The drive down to our Springfield location takes under 15 minutes from most of Coburg, and we've become a trusted destination for Coburg residents who want paint correction and ceramic coating work done properly. Coburg's proximity to I-5 means vehicles accumulate road film, tar deposits, and highway contamination faster than city-driven cars — our decontamination detail process specifically addresses this type of buildup.",
    serviceHighlights: [
      'I-5 highway decontamination detail for Coburg commuters',
      'Classic car detailing for Coburg collector vehicle owners',
      'Ceramic coating and PPF for Coburg vehicle owners',
      'RV and boat detailing for Coburg recreational vehicle owners',
    ],
    metaTitle: 'Auto Detailing in Coburg, OR | Blue Rose — Springfield Shop',
    metaDescription:
      'Professional auto detailing serving Coburg, OR. Paint correction, ceramic coating, PPF & RV detailing. 10-min drive to our Springfield shop. Call (541) 337-9893.',
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
      "Lowell, OR sits along the Dexter Reservoir and Middle Fork Willamette River — a scenic community southeast of Eugene where outdoor recreation is a way of life. Lowell residents who own boats, RVs, off-road vehicles, and daily drivers have made the drive to Blue Rose Auto Detailing Services for professional detailing work they can't get locally. We understand that Lowell vehicle owners put their equipment through real use — lake water mineral deposits on boat hulls, forest road dust and debris on trucks, and UV exposure on vehicles stored outdoors. Our detailing and protection services are built for working vehicles as much as show cars.",
    serviceHighlights: [
      'Boat detailing for Lowell area lake vehicle owners',
      'Off-road and truck detailing for active Lowell households',
      'RV detailing for Lowell recreational vehicle owners',
      'Ceramic coating for vehicles stored outdoors in Lowell',
    ],
    metaTitle: 'Auto Detailing in Lowell, OR | Blue Rose — Springfield Shop',
    metaDescription:
      'Professional auto detailing, boat detailing & RV detailing serving Lowell, OR. 20-min drive to our Springfield shop. Owner-operated since 1994. Call (541) 337-9893.',
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
      "Veneta, OR is a community in the Coast Range foothills west of Eugene, known for the Oregon Country Fair and a rural, outdoorsy character. Veneta residents drive on roads that accumulate mud, agricultural dust, and forest debris — the kind of contamination that bonds to paint over time and requires proper decontamination, not just a hose-down. Blue Rose Auto Detailing Services serves Veneta households who want to properly protect and maintain their vehicles. The drive to our Springfield shop takes around 25 minutes and is a worthwhile investment for Veneta residents who want professional-grade ceramic coating, paint correction, or just a quality full detail.",
    serviceHighlights: [
      'Rural road decontamination detail for Veneta vehicles',
      'Ceramic coating for Veneta vehicles stored outdoors',
      'Full interior deep clean for active family vehicles',
      'Window tinting for Veneta commuters traveling to Eugene',
    ],
    metaTitle: 'Auto Detailing in Veneta, OR | Blue Rose — Springfield Shop',
    metaDescription:
      'Professional auto detailing serving Veneta, OR. Paint correction, ceramic coating & full detail. 25-min drive to Springfield. Owner-operated since 1994. Call (541) 337-9893.',
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
      "Creswell, OR is a growing I-5 corridor community south of Eugene in Lane County, where many residents commute north for work and entertainment. Creswell vehicle owners who value their paint and interior have found Blue Rose Auto Detailing Services to be the right choice for quality work — worth the 20-minute drive north to Springfield. Highway driving on I-5 exposes paint to tar, stone chips, and road film at high speeds; our PPF and ceramic coating services are particularly popular with Creswell commuters who want to protect the front ends of their vehicles from the daily wear of I-5 driving.",
    serviceHighlights: [
      'PPF for Creswell I-5 commuters protecting front-end paint',
      'Ceramic coating packages for Creswell daily drivers',
      'Full detail and paint correction for Creswell residents',
      'RV detailing for Creswell area recreational vehicle owners',
    ],
    metaTitle: 'Auto Detailing in Creswell, OR | Blue Rose — Springfield Shop',
    metaDescription:
      'Professional auto detailing serving Creswell, OR. PPF, ceramic coating & paint correction. 20-min drive to Springfield. Owner-operated since 1994. Call (541) 337-9893.',
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
      "Harrisburg, OR is an agricultural community in the Willamette Valley, located in Linn County about 22 miles north of Springfield via I-5. Harrisburg residents who work the land know that vehicles take a beating — agricultural dust, tractor diesel residue, and road film build up fast. We serve Harrisburg households who want to periodically restore and protect their personal vehicles and keep them in quality condition. Our full interior and exterior detail is popular with Harrisburg customers who want a thorough clean-up of farm-used vehicles, and our ceramic coating is a smart investment for anyone who parks outdoors in the Valley's notoriously wet winters.",
    serviceHighlights: [
      'Agricultural vehicle detailing for Harrisburg area residents',
      'Full interior deep clean including carpet extraction',
      'Ceramic coating for outdoor-parked vehicles in Willamette Valley weather',
      'Paint correction for Harrisburg vehicles with long road exposure',
    ],
    metaTitle: 'Auto Detailing in Harrisburg, OR | Blue Rose — Springfield Shop',
    metaDescription:
      'Professional auto detailing serving Harrisburg, OR. Full detail, paint correction & ceramic coating. 25-min drive to Springfield. Call (541) 337-9893.',
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
      "Santa Clara is an unincorporated community directly north of Eugene along the Willamette River, with easy access to our Springfield shop via the Belt Line Highway. Many Santa Clara residents already shop and work in Springfield regularly, making Blue Rose Auto Detailing Services a natural and convenient choice for professional vehicle care. We've served Santa Clara households with everything from routine full details and window tinting to multi-day ceramic coating and PPF projects. The short drive — typically under 15 minutes — means same-day drop-off and pickup is realistic for most Santa Clara customers.",
    serviceHighlights: [
      'Convenient 15-minute drive from Santa Clara to our Springfield shop',
      'Window tinting for Santa Clara commuters',
      'Full detail packages for Santa Clara family vehicles',
      'Ceramic coating and PPF for Santa Clara daily drivers',
    ],
    metaTitle: 'Auto Detailing in Santa Clara, OR | Blue Rose — Springfield Shop',
    metaDescription:
      'Professional auto detailing serving Santa Clara, OR. 15-min drive to Springfield. Window tinting, ceramic coating, full detail & more. Call (541) 337-9893.',
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
      "Cottage Grove, OR is a historic I-5 corridor city in the southern end of Lane County, about 30 miles south of Springfield. Cottage Grove residents who care deeply about vehicle appearance and protection have made the drive to Blue Rose — and many return regularly because the quality and pricing are consistently better than what's available locally. The I-5 drive north to Springfield is easy, and we work with Cottage Grove customers on scheduling to make the trip as efficient as possible. Classic car owners and ceramic coating enthusiasts from Cottage Grove have been some of our most loyal returning customers.",
    serviceHighlights: [
      'Classic car detailing for Cottage Grove collector vehicle owners',
      'Ceramic coating and PPF for Cottage Grove high-value vehicles',
      'Full detail and paint correction for I-5 road-worn vehicles',
      'RV detailing for Cottage Grove recreational travelers',
    ],
    metaTitle: 'Auto Detailing in Cottage Grove, OR | Blue Rose — Springfield Shop',
    metaDescription:
      'Professional auto detailing serving Cottage Grove, OR. Paint correction, ceramic coating & classic car detailing. 30-min drive to Springfield. Call (541) 337-9893.',
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
      "Junction City, OR is a growing community northwest of Eugene in Lane County, sitting at the junction of OR-99W and OR-36. Junction City residents who want professional-grade detailing work — not a basic car wash — have found Blue Rose Auto Detailing Services to be worth the easy drive south on OR-99W or I-5 to our Springfield shop. We serve Junction City households with full detail, paint correction, ceramic coating, vinyl wrap, and window tinting, and we've built a relationship with several Junction City customers who bring in their vehicles for regular seasonal details. The agricultural character of the Junction City area means cars often accumulate significant contamination — our decontamination wash and clay bar process removes what a regular wash can't.",
    serviceHighlights: [
      'Rural road and agricultural area decontamination for Junction City vehicles',
      'Ceramic coating for Junction City vehicles stored outdoors',
      'Vinyl wraps for Junction City commercial and personal vehicles',
      'Window tinting for Junction City commuters',
    ],
    metaTitle: 'Auto Detailing in Junction City, OR | Blue Rose — Springfield Shop',
    metaDescription:
      'Professional auto detailing serving Junction City, OR. Full detail, ceramic coating, vinyl wraps & window tinting. 20-min drive to Springfield. Call (541) 337-9893.',
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
