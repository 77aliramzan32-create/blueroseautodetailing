// Review text paraphrased from customer themes â€” do not modify without permission

interface ReviewCard {
  initials: string;
  reviewer: string;
  text: string;
  theme: string;
}

const REVIEWS: ReviewCard[] = [
  {
    initials: "JM",
    reviewer: "J.M.",
    theme: "Transparent Pricing",
    text: "Pricing was straightforward and fair â€” I knew exactly what I was paying for before any work started. No surprises, no add-ons I didn't ask for. That kind of transparency is rare and genuinely appreciated.",
  },
  {
    initials: "SK",
    reviewer: "S.K.",
    theme: "Classic Vehicle Interior Restoration",
    text: "Brought in my 2005 Corvette with aging leather and worn carpets that had seen better days. The transformation was incredible â€” the interior looks and feels completely restored. I didn't think it could come back this well.",
  },
  {
    initials: "RT",
    reviewer: "R.T.",
    theme: "Road Trip Prep Detail",
    text: "Had the car detailed before a long road trip and it looked brand new for the entire drive. Tristan was professional, thorough, and clearly takes real pride in the work. Will absolutely be back.",
  },
  {
    initials: "AL",
    reviewer: "A.L.",
    theme: "Ceramic Coating + PPF Combo",
    text: "Got the ceramic coating and PPF combo treatment. The combination of physical paint protection and the ceramic finish is outstanding â€” best I've seen on any vehicle. The two together make a real difference.",
  },
  {
    initials: "MG",
    reviewer: "M.G.",
    theme: "Friendly Team, Great Experience",
    text: "Kaylee and George at the front desk were incredibly helpful and friendly from the moment I called to book. The whole experience from scheduling to pickup was easy and professional. Great team all around.",
  },
];

function StarFilled() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 1.5L12.472 7.22L18.5 7.91L14.25 11.9L15.528 18.5L10 15.27L4.472 18.5L5.75 11.9L1.5 7.91L7.528 7.22L10 1.5Z"
        fill="var(--color-accent)"
      />
    </svg>
  );
}

function GoogleLogo() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export default function TestimonialSection() {
  return (
    <section
      className="relative w-full bg-surface-alt py-16 md:py-24"
      aria-label="Customer Testimonials"
    >
      {/* Subtle top divider */}
      <div className="divider-chrome mb-16 mx-8 md:mx-16 lg:mx-32" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-body text-sm font-semibold text-accent tracking-widest uppercase mb-3">
            Customer Reviews
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-ink mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="inline-flex gap-0.5" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, i) => (
                <StarFilled key={i} />
              ))}
            </span>
            <span className="font-body text-ink-muted text-sm">
              5.0 Â· Google Reviews
            </span>
          </div>
        </div>

        {/* Review cards grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          role="list"
        >
          {REVIEWS.map((review) => (
            <li
              key={review.reviewer}
              className="glass-card rounded-xl p-6 flex flex-col gap-4"
            >
              {/* Stars */}
              <div
                className="inline-flex gap-0.5"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }, (_, i) => (
                  <StarFilled key={i} />
                ))}
              </div>

              {/* Review text */}
              <blockquote className="font-body text-sm text-ink-muted leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              {/* Reviewer row */}
              <footer className="flex items-center gap-3 pt-2 border-t border-edge">
                {/* Initials avatar */}
                <div
                  className="w-9 h-9 rounded-full bg-[rgba(200,36,63,0.15)] border border-edge-accent flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <span className="font-display font-bold text-xs text-accent leading-none">
                    {review.initials}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-body font-semibold text-ink text-sm truncate">
                    {review.reviewer}
                  </p>
                  <p className="font-body text-ink-subtle text-xs truncate">
                    {review.theme}
                  </p>
                </div>

                {/* Google badge */}
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[rgba(255,255,255,0.05)] border border-edge text-ink-subtle text-xs font-body shrink-0">
                  <GoogleLogo />
                  Google
                </span>
              </footer>
            </li>
          ))}

          {/* Fifth card â€” spans full width on the last row when there are 5 items in a 3-col grid */}
        </ul>

        {/* Trust signal + CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2 font-body text-ink-muted text-sm">
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="text-accent shrink-0"
            >
              <path
                d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 1.5a6.5 6.5 0 110 13 6.5 6.5 0 010-13zm0 2.75a1 1 0 100 2 1 1 0 000-2zm-.75 3.5v4.5h1.5v-4.5h-1.5z"
                fill="currentColor"
              />
            </svg>
            Owner Tristan personally responds to every review
          </div>

          <span className="hidden sm:block text-ink-subtle" aria-hidden="true">
            Â·
          </span>

          <a
            href="https://g.page/r/BlueRoseAutoSpringfield/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-body font-semibold text-sm text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded"
            aria-label="Leave us a Google review (opens in new tab)"
          >
            Leave a Google Review
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M2 10L10 2M5 2h5v5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
