import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import CallToAction from '@/components/sections/CallToAction'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { BUSINESS } from '@/lib/data/business'

export const metadata: Metadata = {
  title: 'About Blue Rose Auto Detailing | Springfield, OR — Owner-Operated Since 1994',
  description:
    'Meet the team behind Blue Rose Auto Detailing Services in Springfield, OR. Owner-operated since 1994. Tristan, Kaylee, George & Chelsea deliver honest, quality detailing work.',
}

const TEAM = [
  {
    name: 'Tristan',
    role: 'Owner & Lead Detailer',
    description:
      'The owner-operator of Blue Rose since 1994, Tristan personally inspects every vehicle under LED lighting before it leaves the shop — no exceptions.',
    initial: 'T',
  },
  {
    name: 'Kaylee',
    role: 'Customer Relations',
    description:
      'Warm, efficient, and detail-oriented, Kaylee handles scheduling and ensures every customer interaction is smooth from first call to final pickup.',
    initial: 'K',
  },
  {
    name: 'George',
    role: 'Front Desk',
    description:
      'George manages front desk operations, assists with estimates, and makes every check-in straightforward and professional.',
    initial: 'G',
  },
  {
    name: 'Chelsea',
    role: 'Interior Detailing Specialist',
    description:
      'An expert in leather restoration and upholstery care, Chelsea brings exceptional attention to every interior job — from daily drivers to classic vehicles.',
    initial: 'C',
  },
]

const PHILOSOPHY_PILLARS = [
  {
    title: 'Transparency',
    body: 'Every job is priced honestly before work begins. No hidden charges, no surprise add-ons. You know exactly what you are paying for and why before we touch your vehicle.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.75" />
        <path d="M7 9h10M7 13h7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        <circle cx="19" cy="7" r="3" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 7l.8.8 1.6-1.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Quality',
    body: 'Owner Tristan personally inspects every vehicle under LED lighting before release. We do not rush work and we do not cut corners — the standard is consistent on every job.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2L4 6v7c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z"
          fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"
        />
        <path d="M8.5 12l2.5 2.5 5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Experience',
    body: '30+ years of professional detailing in the Eugene-Springfield community. Our longevity is not an accident — it is the result of doing good work at a fair price, year after year.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
        <path d="M12 7v5l3.5 3.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Page Header ─────────────────────────────────────────────────────── */}
      <section className="relative w-full bg-surface border-b border-edge pt-10 pb-14 md:pt-14 md:pb-20">
        {/* Subtle radial glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(200,36,63,0.06) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: 'About', href: '/about' }]} />
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-ink leading-tight">
              About Blue Rose Auto Detailing
            </h1>
            <Badge variant="accent" className="self-start mt-1">
              Owner-Operated Since 1994
            </Badge>
          </div>
          <p className="mt-4 font-body text-base md:text-lg text-ink-muted max-w-2xl leading-relaxed">
            A Springfield institution built on honesty, craftsmanship, and over three decades of
            trusted relationships with customers across Lane County.
          </p>
        </div>
      </section>

      {/* ── Founding Story ───────────────────────────────────────────────────── */}
      <section
        aria-labelledby="founding-story-heading"
        className="w-full bg-surface py-14 md:py-20"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-body text-sm font-semibold text-accent tracking-widest uppercase mb-3">
              Our Story
            </p>
            <h2
              id="founding-story-heading"
              className="font-display font-bold text-3xl md:text-4xl text-ink mb-6"
            >
              Thirty Years in the Making
            </h2>
            <div className="space-y-5 font-body text-base text-ink-muted leading-relaxed">
              <p>
                Founded in November 1994, Blue Rose Auto Detailing Services has been serving
                Springfield, Eugene, and the surrounding Lane County communities for over 30 years.
                What started as a commitment to doing quality work with honest pricing has grown into
                a shop that customers trust for everything from routine details to multi-day ceramic
                coating and PPF projects.
              </p>
              <p>
                From day one, the philosophy has been the same: quote the job honestly before
                touching the vehicle, do the work right the first time, and stand behind the result.
                That approach — straightforward and uncompromising — is why customers who first came
                in during the late nineties still bring their vehicles in today.
              </p>
              <p>
                Over the decades, the services have evolved with the industry. We have added ceramic
                coating, paint protection film, vinyl wraps, and premium window tinting to complement
                our core detailing work. The tools and products improve every year. But the standard
                that owner Tristan holds the shop to has never changed: every vehicle leaves cleaner,
                better protected, and in better condition than it arrived — or we are not done yet.
              </p>
              <p>
                We are not a chain, not a franchise, and not a mobile pop-up. We are a real shop
                with a real address, a consistent team, and 30+ years of accountability to this
                community. That is what owner-operated actually means.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Meet the Team ────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="team-heading"
        className="w-full bg-card border-y border-edge py-14 md:py-20"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <p className="font-body text-sm font-semibold text-accent tracking-widest uppercase mb-3">
              The Team
            </p>
            <h2
              id="team-heading"
              className="font-display font-bold text-3xl md:text-4xl text-ink"
            >
              Meet the People Behind Every Detail
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {TEAM.map((member) => (
              <Card key={member.name} hover className="p-6 flex gap-5 items-start">
                {/* Avatar */}
                <div
                  className="w-12 h-12 rounded-full bg-[rgba(200,36,63,0.12)] border border-edge-accent flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <span className="font-display font-bold text-lg text-accent leading-none">
                    {member.initial}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-ink leading-tight">
                    {member.name}
                  </h3>
                  <p className="font-body text-xs font-semibold text-accent tracking-wide uppercase mt-0.5 mb-2">
                    {member.role}
                  </p>
                  <p className="font-body text-sm text-ink-muted leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Philosophy ───────────────────────────────────────────────────── */}
      <section
        aria-labelledby="philosophy-heading"
        className="w-full bg-surface py-14 md:py-20"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <p className="font-body text-sm font-semibold text-accent tracking-widest uppercase mb-3">
              How We Work
            </p>
            <h2
              id="philosophy-heading"
              className="font-display font-bold text-3xl md:text-4xl text-ink"
            >
              Our Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {PHILOSOPHY_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="glass-card rounded-xl p-6 md:p-8 flex flex-col gap-4"
              >
                <div className="w-11 h-11 rounded-lg bg-accent-wash border border-[rgba(200,36,63,0.14)] flex items-center justify-center text-accent shrink-0">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-ink mb-2">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-sm text-ink-muted leading-relaxed">{pillar.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications Placeholder ───────────────────────────────────────── */}
      {/* CERTIFICATIONS: add certification logos and text here when available */}

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <CallToAction
        headline="Ready to Experience the Difference?"
        subtext="Owner-operated, honestly priced, and held to a standard 30 years in the making. Come see us in Springfield."
        variant="accent-bg"
      />
    </>
  )
}
