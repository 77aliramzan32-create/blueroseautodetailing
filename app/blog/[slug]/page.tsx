import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getPostBySlug, getAllPostSlugs } from '@/lib/data/blog'
import type { BlogPost, BlogSection } from '@/lib/data/blog'
import { getService } from '@/lib/data/services'
import type { Service } from '@/lib/data/services'
import { getFAQsByIds } from '@/lib/data/faqs'
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema/jsonld'
import { BUSINESS } from '@/lib/data/business'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FAQAccordion from '@/components/sections/FAQAccordion'
import CallToAction from '@/components/sections/CallToAction'
import Badge from '@/components/ui/Badge'

const BASE_URL = 'https://www.blueroseautodetailing.com'

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `/blog/${slug}`,
      type: 'article',
      publishedTime: post.publishDate,
    },
  }
}

function articleSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: {
      '@type': 'Person',
      name: BUSINESS.team[0].name,
      worksFor: { '@id': `${BASE_URL}/#organization` },
    },
    publisher: { '@id': `${BASE_URL}/#organization` },
    mainEntityOfPage: `${BASE_URL}/blog/${post.slug}`,
  }
}

function PostSection({ section }: { section: BlogSection }) {
  return (
    <div>
      {section.heading && (
        section.headingLevel === 3 ? (
          <h3 className="font-display font-bold text-xl text-ink mt-8 mb-3">
            {section.heading}
          </h3>
        ) : (
          <h2 className="font-display font-bold text-2xl md:text-3xl text-ink mt-12 mb-4 pb-3 border-b border-edge">
            {section.heading}
          </h2>
        )
      )}

      {section.body?.map((para, i) => (
        <p key={i} className="font-body text-base text-ink leading-relaxed mb-4">
          {para}
        </p>
      ))}

      {section.list && (
        <ul className="mt-3 mb-4 space-y-3">
          {section.list.map((item, i) => (
            <li key={i} className="flex gap-3 font-body text-base text-ink leading-relaxed">
              <span
                className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {section.orderedList && (
        <ol className="mt-3 mb-4 space-y-4">
          {section.orderedList.map((item, i) => (
            <li key={i} className="flex gap-4 font-body text-base text-ink leading-relaxed">
              <span
                className="shrink-0 w-7 h-7 rounded-full bg-accent/10 text-accent font-display font-bold text-sm flex items-center justify-center mt-0.5"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <span className="pt-0.5">{item}</span>
            </li>
          ))}
        </ol>
      )}

      {section.callout && (
        <div className="mt-4 mb-4 glass-card rounded-xl p-5 border-l-2 border-accent">
          {section.callout.heading && (
            <p className="font-display font-bold text-xs text-accent uppercase tracking-wider mb-2">
              {section.callout.heading}
            </p>
          )}
          <p className="font-body text-sm text-ink leading-relaxed">{section.callout.text}</p>
        </div>
      )}
    </div>
  )
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const faqs = post.faqIds ? getFAQsByIds(post.faqIds) : []
  const relatedServices = (post.relatedServiceSlugs ?? [])
    .map((s) => getService(s))
    .filter((s): s is Service => s !== undefined)

  const schemas = [
    articleSchema(post),
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blog' },
      { name: post.title, url: `/blog/${post.slug}` },
    ]),
    ...(post.faqIds && post.faqIds.length > 0 ? [faqPageSchema(post.faqIds)] : []),
  ]

  const publishedFormatted = new Date(post.publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ── Page Header ──────────────────────────────────────────────────────── */}
      <section
        className="relative w-full bg-surface border-b border-edge pt-10 pb-14 md:pt-14 md:pb-20"
        aria-labelledby="post-title"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(200,36,63,0.06) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: 'Blog', href: '/blog' },
              { name: post.title, href: `/blog/${post.slug}` },
            ]}
          />
          <div className="mt-6 flex items-center gap-3">
            <Badge variant="accent">{post.category}</Badge>
            <span className="font-body text-sm text-ink-muted">{post.readTime}</span>
          </div>
          <h1
            id="post-title"
            className="mt-4 font-display font-extrabold text-4xl md:text-5xl text-ink leading-tight max-w-3xl"
          >
            {post.title}
          </h1>
          <p className="mt-4 font-body text-base md:text-lg text-ink-muted max-w-2xl leading-relaxed">
            {post.excerpt}
          </p>
          <p className="mt-3 font-body text-xs text-ink-muted">
            By {BUSINESS.team[0].name} &middot; {publishedFormatted}
          </p>
        </div>
      </section>

      {/* ── Article Body ─────────────────────────────────────────────────────── */}
      <section className="w-full bg-surface py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.intro.map((para, i) => (
            <p key={i} className="font-body text-base md:text-lg text-ink leading-relaxed mb-5">
              {para}
            </p>
          ))}
          {post.sections.map((section, i) => (
            <PostSection key={i} section={section} />
          ))}
        </div>
      </section>

      {/* ── Related Services ─────────────────────────────────────────────────── */}
      {relatedServices.length > 0 && (
        <section
          className="w-full border-t border-edge py-12 md:py-16"
          style={{ background: '#0D0D0F' }}
          aria-labelledby="related-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="related-heading"
              className="font-display font-bold text-xl text-ink mb-6"
            >
              Related Services
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="glass-card rounded-xl p-5 flex items-center justify-between gap-3 hover:border-accent/40 transition-colors group"
                  >
                    <div className="min-w-0">
                      <p className="font-display font-semibold text-base text-ink group-hover:text-accent transition-colors">
                        {service.name}
                      </p>
                      <p className="font-body text-xs text-ink-muted mt-0.5 line-clamp-2">
                        {service.tagline}
                      </p>
                    </div>
                    <span className="shrink-0 text-ink-muted group-hover:text-accent transition-colors">
                      <ArrowRight />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      {faqs.length > 0 && (
        <section
          className="w-full bg-surface py-12 md:py-16 border-t border-edge"
          aria-labelledby="faq-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="faq-heading"
              className="font-display font-bold text-2xl md:text-3xl text-ink mb-8"
            >
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <CallToAction
        headline="Questions About Your Coating?"
        subtext="We inspect existing coatings at no charge. If yours needs attention, we'll tell you exactly what and why — before any work begins."
      />
    </>
  )
}
