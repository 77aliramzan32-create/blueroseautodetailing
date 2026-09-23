import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/Badge";

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  badge?: string;
  imageSrc?: string;
  imageAlt: string;
}

export default function Hero({
  headline,
  subheadline,
  ctaPrimary,
  ctaSecondary,
  badge,
  imageSrc,
  imageAlt,
}: HeroProps) {
  const resolvedImageSrc =
    imageSrc ?? "/images/gallery/auto-detailing-porsche-911-turbo-blue-exterior-springfield-or.webp";

  return (
    <section
      className="relative w-full min-h-[85svh] md:min-h-[92vh] flex items-center overflow-hidden bg-surface noise-overlay"
      aria-label="Hero"
    >
      {/* Radial accent glow — bottom-left on mobile, left-center on desktop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 15% 60%, rgba(200,36,63,0.10) 0%, transparent 65%)",
        }}
      />

      {/* Hero image layer */}
      <div className="absolute inset-0 z-0 select-none" aria-hidden="true">
        <Image
          src={resolvedImageSrc}
          alt={imageAlt}
          fill
          priority
          // @ts-expect-error — fetchpriority is a valid HTML attribute, TS DOM types may lag
          fetchpriority="high"
          className="object-cover object-[center_30%] opacity-40 md:opacity-50"
          sizes="100vw"
        />

        {/* Mobile: uniform dark vignette so text pops everywhere */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(160deg, rgba(10,10,11,0.72) 0%, rgba(10,10,11,0.50) 50%, rgba(10,10,11,0.75) 100%)",
          }}
        />

        {/* Desktop: left-to-right fade — text (left) is crisp, image (right) breathes */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(to right, #0A0A0B 0%, rgba(10,10,11,0.88) 28%, rgba(10,10,11,0.55) 58%, rgba(10,10,11,0.08) 100%)",
          }}
        />

        {/* Bottom fade into next section — both viewports */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(10,10,11,0.9) 75%, #0A0A0B 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:pt-32 md:pb-28 lg:pt-36 lg:pb-36">
        <div className="max-w-3xl">

          {/* Badge */}
          {badge && (
            <div className="mb-5 md:mb-6">
              <Badge variant="accent" className="text-sm px-3 py-1">
                {badge}
              </Badge>
            </div>
          )}

          {/* Headline */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-ink mb-4 md:mb-6">
            {headline}
          </h1>

          {/* Subheadline */}
          <p className="font-body text-base sm:text-lg md:text-xl text-ink-muted leading-relaxed mb-6 md:mb-8 max-w-xl">
            {subheadline}
          </p>

          {/* Click-to-call */}
          <a
            href="tel:5413379893"
            className="inline-flex items-center gap-2 font-display font-bold text-xl sm:text-2xl md:text-3xl text-gradient-accent mb-7 md:mb-10 hover:opacity-80 transition-opacity"
            aria-label="Call Blue Rose Auto Detailing at (541) 337-9893"
          >
            <PhoneIcon />
            (541) 337-9893
          </a>

          {/* CTA buttons — stacked on mobile, inline from sm */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href={ctaPrimary.href}
              className="relative overflow-hidden inline-flex items-center justify-center gap-2 font-body font-bold text-base px-8 py-4 rounded-xl bg-accent text-white tracking-wide transition-all duration-200 ease-out hover:bg-accent-hover hover:shadow-[0_0_28px_6px_rgba(200,36,63,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface w-full sm:w-auto"
            >
              {ctaPrimary.label}
            </Link>

            {ctaSecondary && (
              <Link
                href={ctaSecondary.href}
                className="inline-flex items-center justify-center gap-2 font-body font-bold text-base px-8 py-4 rounded-xl bg-transparent text-accent border border-accent hover:bg-accent-wash transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface w-full sm:w-auto"
              >
                {ctaSecondary.label}
              </Link>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01L6.62 10.79z"
        fill="currentColor"
      />
    </svg>
  );
}
