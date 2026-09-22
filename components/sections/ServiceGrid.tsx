import Link from "next/link";
import { SERVICES } from "@/lib/data/services";

interface ServiceGridProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

// â”€â”€ Service icon map â€” simple inline SVG for each service slug â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function ServiceIcon({ slug, size }: { slug: string; size: number }) {
  const cls = "shrink-0";

  switch (slug) {
    case "auto-detailing":
      // Car silhouette
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true" className={cls}>
          <path d="M8 26h24M6 22l3-7h22l3 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="4" y="22" width="32" height="6" rx="2" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="11" cy="28" r="2.5" fill="currentColor"/>
          <circle cx="29" cy="28" r="2.5" fill="currentColor"/>
          <path d="M13 15h14l2 7H11l2-7z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M15 15l1-3h8l1 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );

    case "paint-correction":
      // Swirl / sparkle
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true" className={cls}>
          <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3"/>
          <circle cx="20" cy="20" r="4" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M20 6v4M20 30v4M6 20h4M30 20h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M10.1 10.1l2.8 2.8M27.1 27.1l2.8 2.8M10.1 29.9l2.8-2.8M27.1 12.9l2.8-2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );

    case "ceramic-coating":
      // Shield
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true" className={cls}>
          <path d="M20 4L6 10v10c0 8.28 5.92 16.03 14 18 8.08-1.97 14-9.72 14-18V10L20 4z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M14 20l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );

    case "paint-protection-film":
      // Film / layered rectangles suggesting a film sheet
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true" className={cls}>
          <rect x="6" y="12" width="28" height="18" rx="2" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 3"/>
          <rect x="9" y="15" width="22" height="14" rx="1.5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M13 19h14M13 23h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );

    case "window-tinting":
      // Window / rectangle with gradient
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true" className={cls}>
          <rect x="6" y="8" width="28" height="24" rx="3" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="2"/>
          <rect x="6" y="8" width="28" height="10" rx="3" fill="currentColor" fillOpacity="0.3"/>
          <path d="M6 18h28" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M20 8v24" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2"/>
        </svg>
      );

    case "vinyl-wraps":
      // Palette / wrap layers
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true" className={cls}>
          <path d="M8 14c0-3.31 5.37-6 12-6s12 2.69 12 6-5.37 6-12 6c-2.5 0-4.82-.46-6.67-1.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 14v12c0 3.31 5.37 6 12 6s12-2.69 12-6V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <ellipse cx="20" cy="14" rx="12" ry="3" fill="currentColor" fillOpacity="0.18"/>
          <path d="M8 20c0 3.31 5.37 6 12 6s12-2.69 12-6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2"/>
        </svg>
      );

    case "rv-detailing":
      // Motorhome silhouette
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true" className={cls}>
          <rect x="4" y="14" width="28" height="14" rx="2" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2"/>
          <rect x="32" y="18" width="5" height="8" rx="1" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="8" y="17" width="6" height="5" rx="1" fill="currentColor" fillOpacity="0.3"/>
          <rect x="18" y="17" width="6" height="5" rx="1" fill="currentColor" fillOpacity="0.3"/>
          <circle cx="10" cy="29" r="2.5" fill="currentColor"/>
          <circle cx="25" cy="29" r="2.5" fill="currentColor"/>
          <path d="M4 18h28" stroke="currentColor" strokeWidth="1"/>
        </svg>
      );

    case "boat-detailing":
      // Anchor
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true" className={cls}>
          <circle cx="20" cy="10" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M20 14v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M10 20h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M10 20c0 6 4 10 10 12 6-2 10-6 10-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="currentColor" fillOpacity="0.12"/>
        </svg>
      );

    default:
      // Generic star fallback
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true" className={cls}>
          <path d="M20 4l4 12h12l-10 7.5 4 12L20 28l-10 7.5 4-12L4 16h12z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      );
  }
}

export default function ServiceGrid({ title, subtitle, compact = false }: ServiceGridProps) {
  const iconSize = compact ? 32 : 40;

  return (
    <section
      className="relative w-full bg-surface"
      aria-label={title ?? "Our Services"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Section header */}
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {title && (
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-ink mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="font-body text-lg text-ink-muted max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Service grid */}
        <ul
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
          role="list"
        >
          {SERVICES.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className={[
                  "group flex flex-col bg-card border border-edge rounded-xl",
                  "hover:bg-card-hover hover:border-edge-accent",
                  "transition-[background-color,border-color,box-shadow,transform] duration-200 ease-out",
                  "hover:shadow-[0_0_24px_2px_rgba(200,36,63,0.12)]",
                  "hover:-translate-y-0.5",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
                  compact ? "p-4" : "p-5 md:p-6",
                ].join(" ")}
                aria-label={`Learn more about ${service.name}`}
              >
                {/* Icon container */}
                <div
                  className={[
                    "mb-4 text-accent flex items-center justify-center rounded-lg bg-accent-wash border border-accent-wash-md",
                    "group-hover:bg-[rgba(200,36,63,0.14)] transition-colors duration-200",
                    compact ? "w-10 h-10" : "w-12 h-12",
                  ].join(" ")}
                >
                  <ServiceIcon slug={service.slug} size={iconSize} />
                </div>

                {/* Name */}
                <h3
                  className={[
                    "font-display font-bold text-ink leading-tight mb-2",
                    compact ? "text-sm" : "text-base md:text-lg",
                  ].join(" ")}
                >
                  {service.shortName}
                </h3>

                {/* Tagline */}
                <p
                  className={[
                    "font-body text-ink-muted leading-snug flex-1",
                    compact ? "text-xs" : "text-sm",
                  ].join(" ")}
                >
                  {service.tagline}
                </p>

                {/* CTA */}
                <span
                  className={[
                    "mt-4 inline-flex items-center gap-1 font-body font-semibold text-accent",
                    "group-hover:gap-2 transition-all duration-200",
                    compact ? "text-xs" : "text-sm",
                  ].join(" ")}
                  aria-hidden="true"
                >
                  Learn More
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                  >
                    <path
                      d="M3 7h8M7 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
