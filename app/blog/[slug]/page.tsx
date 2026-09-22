/**
 * BLOG POST: Wire up CMS or MDX data source here.
 * Return notFound() until posts are available.
 *
 * To add real posts:
 * 1. Choose a data source: MDX files in /content/blog/, a headless CMS
 *    (Sanity, Contentful, Payload), or a local data file.
 * 2. Implement `getPostBySlug(slug)` in @/lib/data/blog.ts
 * 3. Implement `getAllPostSlugs()` for generateStaticParams
 * 4. Replace notFound() below with real post rendering
 * 5. Add generateMetadata() using post frontmatter/fields
 */

import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

// ISR: revalidate every hour
export const revalidate = 3600

// No pre-rendered posts yet — all requests handled dynamically on demand
export async function generateStaticParams() {
  // BLOG: Replace with real slug list when posts exist
  // Example:
  //   const slugs = await getAllPostSlugs()
  //   return slugs.map((slug) => ({ slug }))
  return []
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

// BLOG: Replace with real metadata from post frontmatter/CMS fields
export async function generateMetadata(
  { params }: BlogPostPageProps,
): Promise<Metadata> {
  // Until real posts exist, we return a minimal metadata object.
  // When posts are wired up, fetch the post here and return its metadata.
  const { slug } = await params
  return {
    title: `Blog | Blue Rose Auto Detailing`,
    description: `Auto detailing tips and insights from Blue Rose Auto Detailing Services in Springfield, OR.`,
    alternates: {
      canonical: `https://blueroseauto.com/blog/${slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // BLOG: Wire up CMS or MDX data source here. Return notFound() until posts are available.
  //
  // When real posts exist, replace this with:
  //   const { slug } = await params
  //   const post = await getPostBySlug(slug)
  //   if (!post) notFound()
  //   return <BlogPostLayout post={post} />

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { slug: _slug } = await params

  // No posts available yet — always 404 until content is wired up
  notFound()
}
