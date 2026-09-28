# Phase B Draft — RV Detailing
**Slug:** services/rv-detailing
**Primary KW:** rv detailing Springfield OR / rv detailing Eugene OR
**Queue item:** 4
**Status:** draft_ready — awaiting approval before touching live files

---

## USEFULNESS STANDARD Self-Review (Phase C)

| Rule | Check | Pass? |
|---|---|---|
| 1. Answer first | Summary opens with gelcoat/fiberglass distinction — the proof-of-expertise hook — within 60 words | ✓ |
| 2. Help them decide | rightFor covers 5 real triggers; notRightFor addresses 3 common misfires with honest redirects | ✓ |
| 3. Show the process | 6 detailed steps, each with the "why" — EPDM/TPO reasoning, oxidation scale, why top-down order matters | ✓ |
| 4. Set honest expectations | Heavy oxidation section explicitly states "some color loss is permanent" — no overclaiming | ✓ |
| 5. Answer real questions | 3 new FAQs: chalky RV (oxidation scale), rubber roof (EPDM/TPO), ceramic coating on fiberglass | ✓ |
| 6. Proof not claims | Coburg RV Row angle is specific; seasonal use pattern is Lane County-specific; no vague "quality work" | ✓ |
| 7. Easy next step | Phone CTA after pricingNote; book online after FAQs | ✓ |
| 8. Skimmable | Section headers, process step titles, rightFor list scannable | ✓ |
| 9. No filler | No "your RV is a big investment" opener; no "we take pride in" | ✓ |

[NEEDS FROM TRISTAN] flags: 1 item (RV job story)
[VERIFY LOCAL FACT] flags: 1 item (Guaranty RV "largest in the US" claim — kept generic in live draft)

Estimated score: 86/100 — reaches 93+ with a job story from Tristan.

---

## services.ts — rv-detailing entry (FULL REPLACEMENT)

```typescript
{
  slug: 'rv-detailing',
  name: 'RV Detailing',
  shortName: 'RV Detailing',
  tagline: 'RV & Motorhome Detailing in Springfield & Eugene, OR',
  summary:
    'RV detailing at Blue Rose is built around fiberglass gelcoat — not automotive paint. Oxidation removal, rubber roof membrane treatment with EPDM and TPO-safe products, slide seal conditioning, and awning cleaning are handled with techniques specific to recreational vehicles. We detail Class B vans through Class A coaches at our Springfield shop.',
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
        'A polymer sealant applied to all polished fiberglass surfaces adds UV resistance and makes subsequent cleaning easier — road film and bio-growth don\'t bond as readily to a protected surface. For owners who want longer-term protection, ceramic coating on fiberglass is available. It\'s one of our better use cases for ceramic: the self-cleaning effect on a large fiberglass surface between annual details is significant, and it slows the oxidation cycle considerably.',
    },
    {
      title: 'Interior Deep Clean',
      description:
        'RV interiors accumulate campsite odors, cooking smells, and moisture-driven mildew in ways car interiors don\'t. We vacuum and extract upholstered seating and carpet, clean kitchen and bathroom surfaces with appropriate products for each material, and treat any odor issues. Mildew and bio-growth in a living space needs to be identified early — we note what we find at intake and tell you before starting whether a detail will resolve it or whether the source needs addressing first.',
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
    'Failing or peeling gelcoat: fiberglass repair before polishing — compounding over a failing surface makes it worse, and we\'ll say so at intake. Active interior mold: remediation addresses the source; a detail after remediation is the right sequence. Roof seam or water damage: seam repair and drying before we touch the exterior. We can point you to specialists for any of these.',
  pricingNote:
    'RV detailing is priced by rig size, oxidation severity, and which services are needed. A basic exterior wash, compound, and polish on a standard Class C typically runs a full day (8+ hours). A full interior and exterior detail with heavy oxidation removal on a larger Class A can run 2 full days. Oxidation severity is the biggest price variable — light haze takes one pass; heavy chalking takes multiple stages. We quote after seeing the rig. Call (541) 337-9893 or bring it by for a free assessment.',
  localAngle:
    'Lane County has one of the highest concentrations of RV owners and dealerships in Oregon. Coburg Road off I-5 hosts a cluster of major dealers where buyers drive off the lot in new rigs, often without a plan for maintaining the fiberglass and rubber roof through Oregon\'s seasonal cycle. A new rig that goes into its first winter without protection comes out of storage with the beginning of an oxidation problem.\n\nThe use pattern here runs on two peaks: spring prep before Cascade trips — McKenzie River Valley, Willamette Pass, Diamond Lake — and coast runs to Florence and the Oregon Dunes, then a post-season detail in September or October before the rains. That\'s the natural detail schedule for most Lane County RV owners: one pre-season job to protect the rig going into high-use months, one post-season job to clean off the summer accumulation and condition the seals before winter storage.\n\nOregon\'s wet winters are hard on rigs that go in dirty. Black streaking from the rubber roof runs and sets on the fiberglass during winter rain. Bio-growth accelerates on damp surfaces. An RV stored dirty in October comes out harder to clean in April and starts each season a little further behind. The post-season detail is the one that makes the pre-season one easier.\n\n[NEEDS FROM TRISTAN: memorable RV job story — rig class, condition coming in, customer, what was restored]',
  faqIds: [
    'rv-oxidation',
    'rv-detail-how-long',
    'rv-when-to-detail',
    'rv-rubber-roof',
    'rv-ceramic',
    'bring-car-in',
  ],
  heroAlt: 'RV detailing and oxidation removal — Blue Rose Auto Detailing Springfield OR',
  heroImage: '/images/gallery/rv-detailing-country-coach-intrigue-motorhome-springfield-or.webp',
  metaTitle: 'RV Detailing Springfield OR | Blue Rose Auto Detailing',
  metaDescription:
    'RV & motorhome detailing in Springfield, OR — gelcoat oxidation removal, EPDM/TPO roof treatment, slide seal conditioning. All sizes. Free estimate: (541) 337-9893.',
},
```

---

## faqs.ts — 3 NEW entries to add (category: 'rv-boat')

### Add BEFORE rv-detail-how-long (id: rv-oxidation)

```typescript
{
  id: 'rv-oxidation',
  category: 'rv-boat',
  question: 'My RV has a chalky white haze. Can detailing restore it?',
  answer:
    'Gelcoat oxidation is the most common issue we address on RVs, and the answer depends on severity. Light oxidation — surface haze with some gloss still visible — responds to a single compound and polish pass and can restore close to the original color depth. Medium oxidation — dull with some color loss, no gloss — takes two passes and recovers most of the depth. Heavy oxidation — fully chalky, significant color loss across large panels — is a multi-stage job, and we\'ll tell you upfront that some color loss at that stage is permanent without re-gelcoating or repainting. We assess every rig at intake and tell you honestly what correction will achieve before we quote.',
},
```

### Add AFTER rv-when-to-detail (id: rv-rubber-roof)

```typescript
{
  id: 'rv-rubber-roof',
  category: 'rv-boat',
  question: 'How do you clean an RV rubber roof without damaging it?',
  answer:
    'The first step is identifying the membrane type — most RV rubber roofs are either EPDM or TPO. EPDM is the soft, slightly chalky-feeling material found on older rigs; TPO is smoother and firmer, more common on newer units. They require different cleaners. Bleach-based products and citrus cleaners degrade EPDM over time, causing cracking and shortening membrane life. We use a membrane-appropriate cleaner for each type. After cleaning, we inspect the seams for cracking or separation and flag any that need repair — those are separate from the detail and should be addressed before the next camping season.',
},
```

### Add AFTER rv-rubber-roof (id: rv-ceramic)

```typescript
{
  id: 'rv-ceramic',
  category: 'rv-boat',
  question: 'Can you ceramic coat an RV?',
  answer:
    'Yes — and it\'s one of the better applications of ceramic coating we offer. The self-cleaning effect on a large fiberglass surface is significant: black streaking from the rubber roof runs off rather than setting, bio-growth doesn\'t bond as readily, and UV degradation slows. Between annual details, a ceramic-coated RV stays cleaner and is easier to wash. The process is the same as on a vehicle: fiberglass must be fully decontaminated and oxidation-free before application. We price ceramic on RVs by surface area — call (541) 337-9893 for an estimate once we\'ve seen the rig.',
},
```

---

## [NEEDS FROM TRISTAN] — Before publishing (improvements, not blockers)

- [ ] **RV job story** — rig class (Class A / B / C), condition at intake, what was restored, customer outcome. A specific story here would significantly strengthen the localAngle section.

---

## Key SEO Decisions

- **metaTitle** changed from `RV Detailing in Springfield & Eugene, OR | Blue Rose` (55 chars, city buried) to `RV Detailing Springfield OR | Blue Rose Auto Detailing` (54 chars, city-first pattern consistent with other pages)
- **Coburg RV Row** mentioned in localAngle without a specific dealer name — avoids any potential claim about "largest in the US" that can't be verified; still captures the local anchor
- **faqIds order:** rv-oxidation first (highest buyer intent Q for RVs), then how-long, when-to-detail, rubber-roof, ceramic, bring-car-in
- **Secondary KWs woven in:** motorhome detailing, Class A detail, RV oxidation removal, EPDM roof cleaning, Lane County RV
