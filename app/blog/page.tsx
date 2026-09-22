import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/layout/Breadcrumb'
import CallToAction from '@/components/sections/CallToAction'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Auto Detailing Tips & Insights | Blue Rose Auto Detailing Blog — Springfield, OR',
  description:
    'Expert advice on ceramic coating, PPF, paint protection, and keeping your vehicle looking its best — from the team at Blue Rose Auto Detailing Services in Springfield, OR.',
}

/* BLOG: Replace with real post data */
const PLACEHOLDER_POSTS = [
  {
    slug: 'how-long-does-ceramic-coating-last',
    category: 'Ceramic Coating',
    title: 'How Long Does Ceramic Coating Last? What Oregon Drivers Should Know',
    excerpt:
      'Professional ceramic coatings can last 2–5 years — but the number depends on the product tier, prep work, and how you wash the car afterward. Here is what actually matters for drivers in the Pacific Northwest.',
    readTime: '6 min read',
  },
  {
    slug: 'how-to-wash-ceramic-coated-car',
    category: 'Maintenance',
    title: 'The Right Way to Wash a Ceramic-Coated Car',
    excerpt:
      'A ceramic coating is a significant investment. Using the wrong wash technique can degrade it years early. This is the correct process — and what to avoid if you want the coating to last.',
    readTime: '5 min read',
  },
  {
    slug: 'ppf-vs-ceramic-coating',
    category: 'PPF vs. Ceramic',
    title: 'PPF vs. Ceramic Coating: Which Does Your Car Need?',
    excerpt:
      'They are often confused, but they do completely different things. Paint Protection Film handles physical impact; ceramic coating handles chemical contamination and gloss. Most vehicles benefit from both — here is how to think about the decision.',
    readTime: '7 min read',
  },
]

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10M8 3l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function BlogIndexPage() {
  return (
    <>
      {/* ── Page Header ───────────────────────────────────────────────────── */}
      <section className="relative w-full bg-surface border-b border-edge pt-10 pb-14 md:pt-14 md:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(200,36,63,0.06) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: 'Blog', href: '/blog' }]} />
          <h1 className="mt-6 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-ink leading-tight">
            Auto Detailing Tips &amp; Insights
          </h1>
          <p className="mt-4 font-body text-base md:text-lg text-ink-muted max-w-2xl leading-relaxed">
            Expert advice on keeping your vehicle looking its best — from ceramic coating and PPF
            to everyday washing techniques — straight from the team at Blue Rose Auto Detailing.
          </p>
        </div>
      </section>

      {/* ── Post Cards ────────────────────────────────────────────────────── */}
      <section
        aria-label="Blog posts"
        className="w-full bg-surface py-14 md:py-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* BLOG: Replace with real post data */}

          <ul className="flex flex-col gap-6" role="list">
            {PLACEHOLDER_POSTS.map((post) => (
              <li key={post.slug}>
                <Card hover glow className="p-6 md:p-8">
                  <div className="flex flex-col gap-3">
                    {/* Category + read time */}
                    <div className="flex items-center gap-2">
                      <Badge variant="accent">{post.category}</Badge>
                      <span className="font-body text-xs text-ink-muted">{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h2 className="font-display font-bold text-xl md:text-2xl text-ink leading-snug">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="font-body text-sm text-ink-muted leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Read more link */}
                    <div className="pt-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 font-body font-semibold text-sm text-accent hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card rounded"
                        aria-label={`Read: ${post.title}`}
                      >
                        Read More
                        <ArrowRight />
                      </Link>
                    </div>
                  </div>
                </Card>
              </li>
            ))}
          </ul>

          {/* Coming soon note */}
          <div className="mt-10 text-center glass-card rounded-xl px-6 py-8">
            <p className="font-body text-sm text-ink-muted mb-1">More posts coming soon.</p>
            <p className="font-body text-sm text-ink-muted">
              In the meantime,{' '}
              <Link
                href="/faq"
                className="text-accent hover:underline underline-offset-2"
              >
                browse our FAQ
              </Link>{' '}
              or{' '}
              <Link
                href="/contact"
                className="text-accent hover:underline underline-offset-2"
              >
                contact us directly
              </Link>{' '}
              with your question.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <CallToAction
        headline="Have Questions? We Have Answers."
        subtext="Talk to a real detailer. Every consultation is free and no-pressure."
      />
    </>
  )
}
