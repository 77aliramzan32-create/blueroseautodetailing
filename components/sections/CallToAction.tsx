import Link from "next/link";

interface CTAProps {
  headline: string;
  subtext?: string;
  variant?: "default" | "accent-bg";
}

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
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

function ArrowRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M3 8h10M8 3l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Noise pattern as an inline SVG data URL ────────────────────────────────
const NOISE_BG =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")";

export default function CallToAction({
  headline,
  subtext,
  variant = "default",
}: CTAProps) {
  const isAccentBg = variant === "accent-bg";

  return (
    <section
      className={[
        "relative w-full overflow-hidden",
        isAccentBg
          ? "bg-accent-dim"
          : "bg-surface",
      ].join(" ")}
      aria-label="Call to action"
    >
      {/* Subtle noise texture overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{ backgroundImage: NOISE_BG, opacity: 0.5 }}
      />

      {/* Pattern: diagonal lines — only on default variant */}
      {!isAccentBg && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, rgba(200,36,63,0.025) 0px, rgba(200,36,63,0.025) 1px, transparent 1px, transparent 12px)",
          }}
        />
      )}

      {/* Radial glow — center */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: isAccentBg
            ? "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 70%)"
            : "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(200,36,63,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        {/* Headline */}
        <h2
          className={[
            "font-display font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4",
            isAccentBg ? "text-white" : "text-gradient-accent",
          ].join(" ")}
        >
          {headline}
        </h2>

        {/* Subtext */}
        {subtext && (
          <p
            className={[
              "font-body text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed",
              isAccentBg ? "text-white/80" : "text-ink-muted",
            ].join(" ")}
          >
            {subtext}
          </p>
        )}

        {/* Phone number — prominent */}
        <a
          href="tel:5413379893"
          className={[
            "inline-flex items-center gap-2 font-display font-bold text-2xl md:text-3xl mb-10",
            "hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded",
            isAccentBg
              ? "text-white focus-visible:ring-white focus-visible:ring-offset-[#A81D34]"
              : "text-gradient-accent focus-visible:ring-accent focus-visible:ring-offset-surface",
          ].join(" ")}
          aria-label="Call Blue Rose Auto Detailing at (541) 337-9893"
        >
          <PhoneIcon />
          (541) 337-9893
        </a>

        {/* Divider */}
        <div
          aria-hidden="true"
          className={[
            "w-12 h-px mx-auto mb-10",
            isAccentBg ? "bg-white/30" : "bg-edge-bright",
          ].join(" ")}
        />

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Call Now */}
          <a
            href="tel:5413379893"
            className={[
              "inline-flex items-center justify-center gap-2 font-body font-bold text-base px-8 py-4 rounded-xl",
              "transition-all duration-200 ease-out",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
              isAccentBg
                ? [
                    "bg-white text-accent-dim",
                    "hover:bg-white/90",
                    "focus-visible:ring-white focus-visible:ring-offset-[#A81D34]",
                  ].join(" ")
                : [
                    "relative overflow-hidden bg-accent text-white",
                    "hover:bg-accent-hover",
                    "hover:shadow-[0_0_24px_4px_rgba(200,36,63,0.45)]",
                    "focus-visible:ring-accent focus-visible:ring-offset-surface",
                  ].join(" "),
            ].join(" ")}
            aria-label="Call us now at (541) 337-9893"
          >
            <PhoneIcon />
            Call Now
          </a>

          {/* Get a Free Quote */}
          <Link
            href="/contact"
            className={[
              "inline-flex items-center justify-center gap-2 font-body font-bold text-base px-8 py-4 rounded-xl",
              "transition-all duration-200 ease-out",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
              isAccentBg
                ? [
                    "bg-transparent text-white border-2 border-white/60",
                    "hover:bg-white/10",
                    "focus-visible:ring-white focus-visible:ring-offset-[#A81D34]",
                  ].join(" ")
                : [
                    "bg-transparent text-accent border border-accent",
                    "hover:bg-accent-wash",
                    "focus-visible:ring-accent focus-visible:ring-offset-surface",
                  ].join(" "),
            ].join(" ")}
          >
            Get a Free Quote
            <ArrowRightIcon />
          </Link>
        </div>

        {/* Trust note */}
        <p
          className={[
            "mt-8 font-body text-xs",
            isAccentBg ? "text-white/60" : "text-ink-subtle",
          ].join(" ")}
        >
          Owner-operated since 1994 · Springfield, OR · No surprise charges
        </p>
      </div>
    </section>
  );
}
