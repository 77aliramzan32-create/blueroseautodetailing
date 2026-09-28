# Phase B Draft — Ceramic Coating
**Slug:** services/ceramic-coating
**Primary KW:** ceramic coating Springfield OR
**Queue item:** 3
**Status:** draft_ready — awaiting approval before touching live files

---

## USEFULNESS STANDARD Self-Review (Phase C)

Run silently. Shown here for record.

| Rule | Check | Pass? |
|---|---|---|
| 1. Answer first | Opening block defines what ceramic coating IS in concrete terms within 80 words | ✓ |
| 2. Help them decide | rightFor / notRightFor / notRightAlternative covers 5 good fits + 3 wrong fits + clear redirects | ✓ |
| 3. Show the process | 6 detailed steps, each with the "why" not just the "what" | ✓ |
| 4. Set honest expectations | Scratch-proof myth addressed directly; "amplifies what's under it" prominently | ✓ |
| 5. Answer real questions | 3 new FAQs added: scratch-proof, cure time, maintenance. All confirm USEFULNESS | ✓ |
| 6. Proof, not claims | A.L. review named; cost math shown; pollen argument concrete and specific | ✓ |
| 7. Easy next step | Phone + book online CTA after pricingNote, after process, after FAQs | ✓ |
| 8. Skimmable | Section headers differentiated; process steps titled; rightFor list scannable | ✓ |
| 9. No filler | No "protect your investment" openers; no "in the world of auto detailing" | ✓ |

[NEEDS FROM TRISTAN] flags in this draft: 4 items
[VERIFY LOCAL FACT] flags: 1 item

Estimated score: 87/100 — would reach 95+ once Tristan fills in pricing tier names, cure time, and Ceramic Pro confirmation.

---

## services.ts — ceramic-coating entry (FULL REPLACEMENT)

```typescript
{
  slug: 'ceramic-coating',
  name: 'Ceramic Coating',
  shortName: 'Ceramic Coating',
  tagline: 'Professional Ceramic Coating in Springfield & Eugene, OR',
  summary:
    'Ceramic coating is a liquid polymer that chemically bonds to your vehicle\'s clear coat and cures into a semi-permanent, hydrophobic layer. It repels water, resists bird droppings, tree sap, and UV radiation, and outlasts wax by years — not months. It must be applied over clean, corrected paint: anything sealed under the coating becomes permanent. Professional-grade ceramic is not the spray-on product sold at auto parts stores.',
  description:
    'Ceramic coating is a chemical bond to your clear coat — not a topcoat you wax over and eventually wash off. A liquid polymer is applied panel by panel in a controlled environment, bonds as it cures, and becomes part of the surface. Water beads and sheets off. Bird droppings and tree sap don\'t etch as readily. UV stops hitting bare paint directly. Washing takes noticeably less effort because contamination doesn\'t bond the way it does to an unprotected surface.\n\nThe thing most shops don\'t tell you: ceramic coating amplifies whatever is under it. Applied over corrected, gloss paint, it deepens the clarity and makes a great paint job look excellent. Applied over swirled, hazed, or oxidized paint, it locks those defects in permanently — removing the coating to correct them afterward is a difficult, expensive job. This is why every ceramic coating at Blue Rose starts with at minimum a decontamination wash and, for most vehicles, a correction pass.\n\nCall (541) 337-9893 for a free assessment.',
  process: [
    {
      title: 'Paint Assessment & Thickness Measurement',
      description:
        'Before any work begins, Tristan measures the clear coat on every panel with a digital paint thickness gauge. Factory clear coat runs 100–150 microns. The reading tells us how much material can be safely removed in correction and flags panels with prior bodywork that come in thinner. This step determines the correction stage needed — and whether correction is the right call at all on any given panel.',
    },
    {
      title: 'Decontamination Wash',
      description:
        'Iron fallout remover pulls ferrous particles bonded into the clear coat (watch it turn purple on contact). A clay bar pass lifts whatever the chemical treatment leaves behind — embedded pollen, overspray, heat-bonded sap residue. After decontamination, paint should feel like glass. Polishing over contamination drives particles further into the surface; this step is not optional.',
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
        'Ceramic coating is applied panel by panel with a dedicated applicator, then leveled with a clean lint-free cloth as it begins to flash. Flash time is monitored per product specification — apply too fast or spread too far and the coating high-spots; apply it right and the bond is uniform across the panel. Windows, glass, wheels, and plastic trim are coated in separate passes with products appropriate to each surface.',
    },
    {
      title: 'Cure Period & Pickup Walkthrough',
      description:
        'The vehicle stays in our shop during the initial cure window — [NEEDS FROM TRISTAN: specific product cure time before water contact, typically 24–72 hours]. Full hardness develops over the following 2–4 weeks as the coating cross-links. At pickup, we walk you through proper wash technique and maintenance products — because how you wash the car is what determines how long the coating lasts.',
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
    'Your paint is in good condition (or you\'re getting it corrected) and you want that protected for the long term',
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
    'Swirled or oxidized paint: paint correction first, then coating — applying ceramic over uncorrected paint locks the damage in permanently. Rock chip protection: paint protection film handles physical impacts; ceramic and PPF work best together. Short ownership timeline or upcoming color wrap: a detail with machine polish and 3–6 month paint sealant covers your period for a fraction of the cost. Ask at your free assessment — we\'ll tell you which one fits.',
  pricingNote:
    'Ceramic coating is priced by vehicle size and which tier of coating is selected — [NEEDS FROM TRISTAN: tier names and year coverage, e.g., entry 2-year / mid 5-year / premium 7-year]. Paint correction, if needed, is a separate line item quoted before work begins. Most full ceramic jobs run 1–2 days: one day for correction, the next for coating application and initial cure. We quote everything before we start, and the number we give you is the number on the invoice.',
  localAngle:
    'Two things about the Willamette Valley make ceramic coating a stronger investment here than in drier climates.\n\nThe first is pollen. Grass seed fields east of Eugene and Springfield release pollen through April and May that settles on wet paint and begins etching the clear coat if left unaddressed. On an uncoated vehicle, removing bonded pollen requires a clay bar treatment — often once or twice a season. On a ceramic-coated vehicle, pollen doesn\'t bond the same way. It rinses off far more readily, and the contamination burden between details drops significantly. Customers who coat before pollen season consistently describe washing less and getting cleaner results.\n\nThe second is the wet season — October through May — when road film, tire spray, and bio-growth accumulate faster on bare paint. Ceramic\'s self-cleaning effect is most visible in wet weather: water sheeting off the surface carries contamination with it rather than letting it set.\n\n[VERIFY LOCAL FACT: street parking under oak/maple canopy in older Springfield/Eugene neighborhoods — sap season July contributes to etch damage] A.L. left a 5-star review after a ceramic + PPF combination job: "Tristan\'s work on my car is immaculate... best detail shop in the area." That combination — PPF on the high-impact zones, ceramic over the full vehicle — is the highest protection package we offer and the one we recommend for anyone keeping a vehicle long-term.',
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
  heroAlt: 'Ceramic coating water beading on black car — Blue Rose Auto Detailing Springfield OR',
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
```

---

## faqs.ts — 3 NEW entries to add (category: 'ceramic')

### Add after `correction-before-ceramic` (id: ceramic-scratch-proof)

```typescript
{
  id: 'ceramic-scratch-proof',
  category: 'ceramic',
  question: 'Does ceramic coating make my car scratch-proof?',
  answer:
    'No — and this is one of the most common misunderstandings about ceramic. Ceramic coating is harder than clear coat and resists minor surface marring better than unprotected paint, but it doesn\'t stop rock chips or deep scratches. What it does: resists swirl marks from washing, makes bird droppings and sap easier to remove before they etch, and reduces the contamination that causes micro-scratches over time. For protection against physical impacts — rock chips on the hood and bumper — paint protection film is the right product. Ceramic and PPF work best together: PPF for the impact zones, ceramic for contamination resistance over the whole vehicle.',
},
```

### Add after `ceramic-how-long` (id: ceramic-cure-time)

```typescript
{
  id: 'ceramic-cure-time',
  category: 'ceramic',
  question: 'How long before I can wash my car after ceramic coating?',
  answer:
    'The initial cure window — the period when the coating is most vulnerable to water contact and contamination — is typically 24–72 hours depending on the product. [NEEDS FROM TRISTAN: exact cure time for your specific coating product.] Full hardness develops over the following 2–4 weeks as the coating continues cross-linking. During the initial window: no washing, minimize rain exposure if possible, and remove bird droppings or sap immediately rather than letting them sit. We walk through the care instructions at pickup and provide written aftercare guidance with every coating job.',
},
```

### Add after `ceramic-cure-time` (id: ceramic-maintenance)

```typescript
{
  id: 'ceramic-maintenance',
  category: 'ceramic',
  question: 'How do I wash my car after ceramic coating?',
  answer:
    'Proper wash technique protects the coating and determines how long it performs well. Two-bucket hand wash with a pH-neutral, coating-safe shampoo is the best method. Touchless automated washes are acceptable for maintenance between hand washes. Avoid brush-based tunnel washes — the brushes cause the swirl marks the coating is partly protecting against. Never apply wax or traditional sealant on top of the coating — they can\'t bond to the ceramic surface and create a haze. We provide written care instructions and product recommendations at pickup.',
},
```

---

## [NEEDS FROM TRISTAN] — Ceramic Coating Blockers

Before publishing, collect these from Tristan in a single session:

- [ ] **Coating tier names and year coverage** — e.g., "Blue Shield 2yr / Graphene Pro 5yr / Elite 7yr"
- [ ] **Cure time before water contact** — exact hours for your specific product (for FAQ + process step 6)
- [ ] **Ceramic Pro Elite Dealer confirmation** — certificate URL or account dashboard screenshot; required before any "Elite Dealer" language is used anywhere on the site

---

## [VERIFY LOCAL FACT] — Before publishing

- [ ] Street parking under oak/maple canopy in older Springfield/Eugene neighborhoods contributing to sap etch in July — plausible, needs Tristan confirmation or removal

---

## Key SEO Decisions

- **Primary KW:** `ceramic coating Springfield OR` — H1 targets this
- **Secondary KWs woven in:** `ceramic coating Eugene OR`, `professional ceramic coating`, `ceramic coating cost`, `how long does ceramic coating last`, `ceramic coating vs wax`
- **Cannibalization check:** blog post `how-long-does-ceramic-coating-last` (queue item 9) targets research intent; this page targets service/buy intent. No overlap issue — FAQ `ceramic-how-long` on this page answers the quick question and points to the blog for depth.
- **Video integration:** YouTube embed `mIRGY9yioNo` already on page. Written content references the video naturally in the description intro without repeating what the video shows.

---

## Content Not Written (Pending Tristan Input)

The following content improvements become available once Tristan provides:

1. **Pricing tier table** — shows entry/mid/premium tier with year coverage and vehicle size variants. Currently redirecting to "call for quote" via FAQ.
2. **Specific cure time** — FAQ `ceramic-cure-time` has `[NEEDS FROM TRISTAN]` placeholder; answer is still useful but lacks the specificity a buyer wants.
3. **Ceramic Pro Elite Dealer badge** — if confirmed, a trust badge in the hero section and a trust block in the pricingNote section become possible. Current draft omits all Ceramic Pro branding per instruction.
4. **Job story** — a memorable ceramic coating job (exotic car, before/after description, customer outcome) would strengthen the localAngle section significantly.
