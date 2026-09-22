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
  const resolvedImageSrc = imageSrc ?? "/images/hero-placeholder.jpg";

  return (
    <section
      className="relative w-full min-h-[auto] md:min-h-[90vh] flex items-center overflow-hidden bg-surface noise-overlay"
      aria-label="Hero"
    >
      {/* Radial accent glow from center-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 20% 50%, rgba(200,36,63,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Hero image — right side, fades left into surface */}
      <div className="absolute inset-0 z-0 select-none" aria-hidden="true">
        <Image
          src={resolvedImageSrc}
          alt={imageAlt}
          fill
          priority
          // @ts-expect-error — fetchpriority is a valid HTML attribute, TS DOM types may lag
          fetchpriority="high"
          className="object-cover object-center opacity-30 md:opacity-40"
          sizes="100vw"
        />
        {/* Left-to-right fade so text is always legible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #0A0A0B 0%, #0A0A0B 30%, rgba(10,10,11,0.7) 55%, rgba(10,10,11,0.1) 100%)",
          }}
        />
      </div>

      {/* Bottom gradient fade into the next section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 z-10"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, #0A0A0B 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          {/* Badge */}
          {badge && (
            <div className="mb-6">
              <Badge variant="accent" className="text-sm px-3 py-1">
                {badge}
              </Badge>
            </div>
          )}

          {/* Headline */}
          <h1
            className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight text-ink mb-6"
          >
            {headline}
          </h1>

          {/* Subheadline */}
          <p className="font-body text-lg md:text-xl text-ink-muted leading-relaxed mb-8 max-w-xl">
            {subheadline}
          </p>

          {/* Phone number — prominent click-to-call */}
          <a
            href="tel:5413379893"
            className="inline-flex items-center gap-2 font-display font-bold text-2xl md:text-3xl text-gradient-accent mb-10 hover:opacity-80 transition-opacity"
            aria-label="Call Blue Rose Auto Detailing at (541) 337-9893"
          >
            <PhoneIcon />
            (541) 337-9893
          </a>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={ctaPrimary.href}
              className="relative overflow-hidden inline-flex items-center justify-center gap-2 font-body font-bold text-base px-8 py-4 rounded-xl bg-accent text-white tracking-wide transition-all duration-200 ease-out hover:bg-accent-hover hover:shadow-[0_0_24px_4px_rgba(200,36,63,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              {ctaPrimary.label}
            </Link>

            {ctaSecondary && (
              <Link
                href={ctaSecondary.href}
                className="inline-flex items-center justify-center gap-2 font-body font-bold text-base px-8 py-4 rounded-xl bg-transparent text-accent border border-accent hover:bg-accent-wash transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
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
      width="24"
      height="24"
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
