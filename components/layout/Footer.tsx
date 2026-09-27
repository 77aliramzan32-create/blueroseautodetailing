import Link from "next/link";
import Image from "next/image";

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

// ── Social profiles (icons shown in brand column) ──────────────────────────
const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/BlueRoseAuto",
    icon: <FacebookIcon />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/blueroseauto",
    icon: <InstagramIcon />,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@BLUEROSEAUTO",
    icon: <YouTubeIcon />,
  },
  {
    name: "Yelp",
    href: "https://www.yelp.com/biz/blue-rose-auto-springfield-2",
    icon: <YelpIcon />,
  },
  {
    name: "Linktree",
    href: "https://linktr.ee/blueroseauto",
    icon: <LinktreeIcon />,
  },
];

// ── Review & trust platforms ───────────────────────────────────────────────
const reviews = [
  { name: "Google Business",  href: "https://g.co/kgs/blueRoseAutoDetailing" },
  { name: "Yelp Reviews",     href: "https://www.yelp.com/biz/blue-rose-auto-springfield-2" },
  { name: "Carfax Reviews",   href: "https://www.carfax.com/Reviews-Blue-Rose-Auto-Springfield-OR_FWVLYD21RR" },
  { name: "BBB",              href: "https://www.bbb.org/us/or/springfield/category/automotive-paint-protection" },
  { name: "Nextdoor",         href: "https://nextdoor.com/pages/blue-rose-auto-detail-eugene-or-1/" },
];

// ── Business directories (NAP citations) ──────────────────────────────────
const directories = [
  { name: "MapQuest",     href: "https://www.mapquest.com/us/oregon/blue-rose-detail-12457472" },
  { name: "Yahoo Local",  href: "https://local.yahoo.com/info-58473228-blue-rose-auto-springfield/" },
  { name: "Nextdoor",     href: "https://nextdoor.com/pages/blue-rose-auto-detail-eugene-or-1/" },
  { name: "ClaimsPages",  href: "https://www.claimspages.com/providers/blue-rose-detail-5413440115/" },
  { name: "Wheree",       href: "https://blue-rose-auto.wheree.com/" },
  { name: "Giftly",       href: "https://www.giftly.com/gift-card/blue-rose-auto-care-and-repair-services-springfield" },
];

function ExternalLinkIcon() {
  return (
    <svg className="w-3 h-3 opacity-40 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function YelpIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.16 12.73l-4.703 1.16a1.5 1.5 0 01-1.77-1.847l.215-.78c.22-.8.44-1.61.66-2.41.21-.78.78-1.23 1.57-1.16.31.03.6.14.87.31l3.69 2.4c.63.41.87 1.17.56 1.84-.15.32-.6.49-.09.49h-.01zM9.36 3.28L9.28 8.1a1.5 1.5 0 001.5 1.52h.83c.83 0 1.5-.68 1.5-1.52l-.08-4.82c0-.83-.67-1.5-1.5-1.5h-.67c-.82 0-1.5.67-1.5 1.5zM5.04 15.81l4.25-1.95a1.5 1.5 0 00.67-2.08l-.41-.72c-.41-.72-.85-1.43-1.27-2.15-.4-.68-1.07-.95-1.81-.68a2 2 0 00-.77.5L2.6 12.03c-.54.61-.56 1.52-.04 2.15.26.32.73.44 2.48 1.63zM5.73 20.84l3.26-3.58a1.5 1.5 0 00-.37-2.28l-.71-.41c-.72-.41-1.43-.83-2.15-1.25-.69-.4-1.43-.27-1.88.35-.17.24-.27.52-.29.81l-.26 4.21c-.05.81.5 1.52 1.3 1.63.36.05.72-.07 1.1-.48zM14.44 20.2l-1.88-4.35a1.5 1.5 0 00-2.15-.76l-.73.42c-.72.42-1.44.83-2.15 1.25-.68.4-.88 1.15-.5 1.83.14.26.36.47.63.6l3.87 1.84c.75.35 1.63.06 2.04-.65.2-.34.2-.78-.13-1.18z" />
    </svg>
  );
}

function LinktreeIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.51 5.3l3.41-3.41a.5.5 0 01.71 0l1.41 1.41a.5.5 0 010 .71l-3.41 3.41 3.41 3.41a.5.5 0 010 .71l-1.41 1.41a.5.5 0 01-.71 0L13.5 9.54v10.96a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5V9.54l-3.41 3.41a.5.5 0 01-.71 0L4.87 11.54a.5.5 0 010-.71l3.41-3.41-3.41-3.41a.5.5 0 010-.71L6.28 1.89a.5.5 0 01.71 0L10.5 5.3V.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v4.8z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-edge" aria-label="Site footer">
      {/* ── chrome divider ── */}
      <div className="divider-chrome" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">

          {/* ── Col 1: Brand ── */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-5 group" aria-label="Blue Rose Auto Detailing — Home">
              <Image
                src="/images/Blue-Rose-Auto.webp"
                alt="Blue Rose Auto Detailing logo"
                width={600}
                height={700}
                className="h-20 w-auto transition-opacity duration-200 group-hover:opacity-90"
              />
            </Link>

            <p className="text-sm text-ink-subtle leading-relaxed mb-6">
              Professional auto detailing, ceramic coating, paint protection, and more — serving Eugene, Springfield, and the greater Willamette Valley since 1994.
            </p>

            {/* Social profile icons */}
            <div className="flex items-center flex-wrap gap-2 mb-4">
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Blue Rose Auto Detailing on ${s.name}`}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-edge bg-card text-ink-muted hover:text-ink hover:border-edge-bright transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Trust badges row */}
            <div className="flex flex-wrap gap-2 mt-5">
              {reviews.map((r) => (
                <a
                  key={r.href}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Blue Rose Auto Detailing on ${r.name}`}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-edge text-[11px] text-ink-subtle hover:border-edge-bright hover:text-ink transition-colors"
                >
                  {r.name}
                  <ExternalLinkIcon />
                </a>
              ))}
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
                  <Link href={svc.href} className="text-sm text-ink-subtle hover:text-ink transition-colors">
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
                  <Link href={loc.href} className="text-sm text-ink-subtle hover:text-ink transition-colors">
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Company ── */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-chrome mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: "About Us", href: "/about" },
                { name: "Gallery",  href: "/gallery" },
                { name: "Reviews",  href: "/reviews" },
                { name: "Blog",     href: "/blog" },
                { name: "FAQ",      href: "/faq" },
                { name: "Book Now", href: "/book" },
                { name: "Contact",  href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-ink-subtle hover:text-ink transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 5: Contact / NAP ── */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-chrome mb-4">
              Contact
            </h3>

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
                <a href="tel:5413379893" itemProp="telephone" className="hover:text-ink transition-colors">
                  (541) 337-9893
                </a>
              </div>
            </address>

            <div className="mb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-chrome-dim mb-2">Hours</p>
              <ul className="space-y-1">
                {hours.map(({ day, time }) => (
                  <li key={day} className="flex justify-between text-xs text-ink-subtle">
                    <span>{day}</span>
                    <span className={time === "Closed" ? "text-chrome-dim" : "text-ink-muted"}>{time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://maps.google.com/?q=Suite+100,+3436+Olympic+Street,+Springfield,+OR+97478"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover transition-colors font-medium"
            >
              <ExternalLinkIcon />
              Get Directions
            </a>
          </div>
        </div>

        {/* ── Find Us Online — NAP citation strip (E-E-A-T) ── */}
        <div className="mt-10 pt-8 border-t border-edge">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-chrome mb-4">
            Find Us Online
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { name: "Google Business",  href: "https://g.co/kgs/blueRoseAutoDetailing" },
              { name: "Facebook",         href: "https://www.facebook.com/BlueRoseAuto" },
              { name: "Instagram",        href: "https://www.instagram.com/blueroseauto" },
              { name: "YouTube",          href: "https://www.youtube.com/@BLUEROSEAUTO" },
              { name: "Yelp",             href: "https://www.yelp.com/biz/blue-rose-auto-springfield-2" },
              { name: "Linktree",         href: "https://linktr.ee/blueroseauto" },
              { name: "BBB",              href: "https://www.bbb.org/us/or/springfield/category/automotive-paint-protection" },
              { name: "Carfax",           href: "https://www.carfax.com/Reviews-Blue-Rose-Auto-Springfield-OR_FWVLYD21RR" },
              { name: "Nextdoor",         href: "https://nextdoor.com/pages/blue-rose-auto-detail-eugene-or-1/" },
              { name: "MapQuest",         href: "https://www.mapquest.com/us/oregon/blue-rose-detail-12457472" },
              { name: "Yahoo Local",      href: "https://local.yahoo.com/info-58473228-blue-rose-auto-springfield/" },
              { name: "ClaimsPages",      href: "https://www.claimspages.com/providers/blue-rose-detail-5413440115/" },
              { name: "Wheree",           href: "https://blue-rose-auto.wheree.com/" },
              { name: "Giftly",           href: "https://www.giftly.com/gift-card/blue-rose-auto-care-and-repair-services-springfield" },
            ].map(({ name, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Blue Rose Auto Detailing on ${name}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-edge text-xs text-ink-subtle hover:border-edge-bright hover:text-ink transition-colors"
              >
                {name}
                <ExternalLinkIcon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-edge">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-ink-subtle">
            &copy; {new Date().getFullYear()} Blue Rose Auto Detailing Services. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-ink-subtle">Springfield, OR 97478</p>
            <Link href="/admin" className="text-xs text-ink-subtle/40 hover:text-ink-subtle transition-colors">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
