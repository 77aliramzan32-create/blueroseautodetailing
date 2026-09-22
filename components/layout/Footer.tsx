import Link from "next/link";

const services = [
  { name: "Auto Detailing",        href: "/services/auto-detailing" },
  { name: "Paint Correction",      href: "/services/paint-correction" },
  { name: "Ceramic Coating",       href: "/services/ceramic-coating" },
  { name: "Paint Protection Film", href: "/services/paint-protection-film" },
  { name: "Window Tinting",        href: "/services/window-tinting" },
  { name: "Vinyl Wraps",           href: "/services/vinyl-wraps" },
  { name: "RV Detailing",          href: "/services/rv-detailing" },
  { name: "Boat Detailing",        href: "/services/boat-detailing" },
];

const locations = [
  { name: "Eugene, OR",        href: "/locations/eugene-or" },
  { name: "Springfield, OR",   href: "/locations/springfield-or" },
  { name: "Coburg, OR",        href: "/locations/coburg-or" },
  { name: "Lowell, OR",        href: "/locations/lowell-or" },
  { name: "Veneta, OR",        href: "/locations/veneta-or" },
  { name: "Creswell, OR",      href: "/locations/creswell-or" },
  { name: "Harrisburg, OR",    href: "/locations/harrisburg-or" },
  { name: "Santa Clara, OR",   href: "/locations/santa-clara-or" },
  { name: "Cottage Grove, OR", href: "/locations/cottage-grove-or" },
  { name: "Junction City, OR", href: "/locations/junction-city-or" },
];

const hours = [
  { day: "Monday",    time: "8:00 AM – 5:00 PM" },
  { day: "Tuesday",   time: "8:30 AM – 5:00 PM" },
  { day: "Wednesday", time: "8:00 AM – 5:00 PM" },
  { day: "Thursday",  time: "8:00 AM – 5:00 PM" },
  { day: "Friday",    time: "8:00 AM – 5:00 PM" },
  { day: "Saturday",  time: "10:00 AM – 5:00 PM" },
  { day: "Sunday",    time: "Closed" },
];

function FacebookIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      className="bg-surface border-t border-edge"
      aria-label="Site footer"
    >
      {/* ── chrome divider ── */}
      <div className="divider-chrome" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* ── Col 1: Brand ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex flex-col leading-none mb-5 group">
              <span
                className="font-display font-bold text-[1.55rem] tracking-tight text-ink group-hover:text-white transition-colors"
                style={{ fontFamily: "var(--font-display, sans-serif)" }}
              >
                BLUE ROSE
              </span>
              <span
                className="block h-[2px] w-full rounded-full mt-[2px] mb-[3px]"
                style={{ background: "linear-gradient(90deg, #C8243F 0%, #A81D34 60%, transparent 100%)" }}
                aria-hidden="true"
              />
              <span
                className="text-[0.48rem] tracking-[0.22em] uppercase text-chrome font-medium"
                style={{ fontFamily: "var(--font-body, sans-serif)" }}
              >
                AUTO DETAILING SERVICES
              </span>
            </Link>

            <p className="text-sm text-ink-subtle leading-relaxed mb-6">
              Professional auto detailing, ceramic coating, paint protection, and more — serving Eugene, Springfield, and the greater Willamette Valley.
            </p>

            {/* social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/BlueRoseAuto"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Blue Rose Auto Detailing on Facebook"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-edge bg-card text-ink-muted hover:text-ink hover:border-edge-bright transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.youtube.com/@BLUEROSEAUTO"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Blue Rose Auto Detailing on YouTube"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-edge bg-card text-ink-muted hover:text-ink hover:border-edge-bright transition-colors"
              >
                <YouTubeIcon />
              </a>
              <a
                href="https://www.instagram.com/blueroseauto"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Blue Rose Auto Detailing on Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-edge bg-card text-ink-muted hover:text-ink hover:border-edge-bright transition-colors"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* ── Col 2: Services ── */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-chrome mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((svc) => (
                <li key={svc.href}>
                  <Link
                    href={svc.href}
                    className="text-sm text-ink-subtle hover:text-ink transition-colors"
                  >
                    {svc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Locations ── */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-chrome mb-4">
              Locations
            </h3>
            <ul className="space-y-2.5">
              {locations.map((loc) => (
                <li key={loc.href}>
                  <Link
                    href={loc.href}
                    className="text-sm text-ink-subtle hover:text-ink transition-colors"
                  >
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contact / NAP ── */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-chrome mb-4">
              Contact
            </h3>

            {/* NAP — real crawlable text for Local SEO */}
            <address
              className="not-italic space-y-3 mb-5"
              itemScope
              itemType="https://schema.org/AutoRepair"
            >
              <span itemProp="name" className="sr-only">Blue Rose Auto Detailing Services</span>

              <div className="flex gap-2 text-sm text-ink-muted">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <span itemProp="streetAddress">Suite 100, 3436 Olympic Street</span>
                  <br />
                  <span itemProp="addressLocality">Springfield</span>,{" "}
                  <span itemProp="addressRegion">OR</span>{" "}
                  <span itemProp="postalCode">97478</span>
                </span>
              </div>

              <div className="flex gap-2 items-center text-sm text-ink-muted">
                <svg className="w-4 h-4 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.5 10.5a11.047 11.047 0 005 5l1.113-1.724a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a
                  href="tel:5413379893"
                  itemProp="telephone"
                  className="hover:text-ink transition-colors"
                >
                  (541) 337-9893
                </a>
              </div>
            </address>

            {/* Hours */}
            <div className="mb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-chrome-dim mb-2">
                Hours
              </p>
              <ul className="space-y-1">
                {hours.map(({ day, time }) => (
                  <li key={day} className="flex justify-between text-xs text-ink-subtle">
                    <span>{day}</span>
                    <span className={time === "Closed" ? "text-chrome-dim" : "text-ink-muted"}>
                      {time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Directions */}
            <a
              href="https://maps.google.com/?q=Suite+100,+3436+Olympic+Street,+Springfield,+OR+97478"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover transition-colors font-medium"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-edge">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-ink-subtle">
            &copy; 2024 Blue Rose Auto Detailing Services. All rights reserved.
          </p>
          <p className="text-xs text-ink-subtle">Springfield, OR</p>
        </div>
      </div>
    </footer>
  );
}
