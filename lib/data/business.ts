// Central source of truth for all business facts.
// Every page and schema references this — never hardcode business data elsewhere.

export const BUSINESS = {
  name: 'Blue Rose Auto Detailing Services',
  legalName: 'Blue Rose Auto Detailing Services',
  shortName: 'Blue Rose Auto Detailing',
  tagline: 'Professional Auto Detailing in Springfield & Eugene, OR',
  description:
    'Blue Rose Auto Detailing Services is a professional auto detailing shop in Springfield, OR, serving Eugene, Springfield, and surrounding areas since 1994. Specializing in paint correction, ceramic coating, PPF, window tinting, and vinyl wraps — with fair, transparent pricing and owner-operated attention to detail.',
  founded: '1994',
  phone: '(541) 337-9893',
  phonePlain: '5413379893',
  email: '', // placeholder — add if available
  address: {
    street: 'Suite 100, 3436 Olympic Street',
    city: 'Springfield',
    state: 'OR',
    zip: '97478',
    full: 'Suite 100, 3436 Olympic Street, Springfield, OR 97478',
    mapQuery: '3436+Olympic+Street+Springfield+OR+97478',
  },
  website: 'https://blueroseauto.com',
  googleRating: 5.0,
  reviewCount: 5,
  priceRange: '$$',
  social: {
    facebook: 'https://www.facebook.com/BlueRoseAuto',
    youtube: 'https://www.youtube.com/@BLUEROSEAUTO',
    instagram: 'https://www.instagram.com/blueroseauto',
  },
  hours: [
    { day: 'Monday',    open: '8:00 AM',  close: '5:00 PM' },
    { day: 'Tuesday',   open: '8:30 AM',  close: '5:00 PM' },
    { day: 'Wednesday', open: '8:00 AM',  close: '5:00 PM' },
    { day: 'Thursday',  open: '8:00 AM',  close: '5:00 PM' },
    { day: 'Friday',    open: '8:00 AM',  close: '5:00 PM' },
    { day: 'Saturday',  open: '10:00 AM', close: '5:00 PM' },
    { day: 'Sunday',    open: null,        close: null       },
  ],
  hoursSchema: [
    { dayOfWeek: ['Monday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '17:00' },
    { dayOfWeek: ['Tuesday'], opens: '08:30', closes: '17:00' },
    { dayOfWeek: ['Saturday'], opens: '10:00', closes: '17:00' },
  ],
  team: [
    { name: 'Tristan', role: 'Owner & Lead Detailer' },
    { name: 'Kaylee',  role: 'Customer Relations' },
    { name: 'George',  role: 'Front Desk' },
    { name: 'Chelsea', role: 'Interior Detailing Specialist' },
  ],
  serviceArea: [
    'Eugene', 'Springfield', 'Coburg', 'Lowell', 'Veneta',
    'Creswell', 'Harrisburg', 'Santa Clara', 'Cottage Grove', 'Junction City',
  ],
} as const

export type BusinessHour = (typeof BUSINESS.hours)[number]
export type TeamMember = (typeof BUSINESS.team)[number]
