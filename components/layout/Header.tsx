"use client";

import { useState, useEffect, useRef } from "react";
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
  { name: "Springfield, OR",   href: "/locations/springfield-or" },
  { name: "Eugene, OR",        href: "/locations/eugene-or" },
  { name: "Coburg, OR",        href: "/locations/coburg-or" },
  { name: "Santa Clara, OR",   href: "/locations/santa-clara-or" },
  { name: "Junction City, OR", href: "/locations/junction-city-or" },
  { name: "Harrisburg, OR",    href: "/locations/harrisburg-or" },
  { name: "Veneta, OR",        href: "/locations/veneta-or" },
  { name: "Creswell, OR",      href: "/locations/creswell-or" },
  { name: "Cottage Grove, OR", href: "/locations/cottage-grove-or" },
  { name: "Lowell, OR",        href: "/locations/lowell-or" },
];

type Dropdown = "services" | "locations" | null;

export default function Header() {
  const [scrolled,       setScrolled]     = useState(false);
  const [mobileOpen,     setMobileOpen]   = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<Dropdown>(null);
  const [mobServices,    setMobServices]  = useState(false);
  const [mobLocations,   setMobLocations] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobServices(false);
    setMobLocations(false);
  };

  const toggle = (d: Dropdown) =>
    setActiveDropdown((prev) => (prev === d ? null : d));

  const Chevron = ({ open }: { open: boolean }) => (
    <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );

  const dropdownCls =
    "absolute top-full mt-2 rounded-xl border border-edge bg-card/98 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.6)] py-1.5 z-50";

  return (
    <>
      {/* Header shell */}
      <header
        className={[
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-card/95 backdrop-blur-md border-b border-edge shadow-[0_2px_24px_rgba(0,0,0,0.5)]"
            : "bg-transparent",
        ].join(" ")}
        style={{ height: "var(--header-h, 72px)" }}
      >
        <style>{`:root { --header-h: 72px; } @media(min-width:768px){ :root { --header-h: 80px; } }`}</style>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" onClick={closeMobile} className="flex-shrink-0 group" aria-label="Blue Rose Auto Detailing — Home">
            <Image
              src="/images/Blue-Rose-Auto.webp"
              alt="Blue Rose Auto Detailing logo"
              width={600} height={700} priority
              className="h-12 md:h-14 w-auto transition-opacity duration-200 group-hover:opacity-90"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary" ref={dropdownRef}>

            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-ink-muted hover:text-ink transition-colors">Home</Link>

            {/* Services dropdown */}
            <div className="relative">
              <button onClick={() => toggle("services")} aria-expanded={activeDropdown === "services"} aria-haspopup="true"
                className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-ink-muted hover:text-ink transition-colors">
                Services <Chevron open={activeDropdown === "services"} />
              </button>
              {activeDropdown === "services" && (
                <div className={`${dropdownCls} left-1/2 -translate-x-1/2 w-56`}>
                  <Link href="/services" onClick={() => setActiveDropdown(null)}
                    className="block px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent border-b border-edge mb-1">
                    All Services →
                  </Link>
                  {services.map((svc) => (
                    <Link key={svc.href} href={svc.href} onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-2 text-sm text-ink-muted hover:text-ink hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                      {svc.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Locations dropdown */}
            <div className="relative">
              <button onClick={() => toggle("locations")} aria-expanded={activeDropdown === "locations"} aria-haspopup="true"
                className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-ink-muted hover:text-ink transition-colors">
                Locations <Chevron open={activeDropdown === "locations"} />
              </button>
              {activeDropdown === "locations" && (
                <div className={`${dropdownCls} left-1/2 -translate-x-1/2 w-52`}>
                  <Link href="/locations" onClick={() => setActiveDropdown(null)}
                    className="block px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent border-b border-edge mb-1">
                    All Areas →
                  </Link>
                  {locations.map((loc) => (
                    <Link key={loc.href} href={loc.href} onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-2 text-sm text-ink-muted hover:text-ink hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                      {loc.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/gallery" className="px-3 py-2 rounded-md text-sm font-medium text-ink-muted hover:text-ink transition-colors">Gallery</Link>
            <Link href="/blog"    className="px-3 py-2 rounded-md text-sm font-medium text-ink-muted hover:text-ink transition-colors">Blog</Link>
            <Link href="/reviews" className="px-3 py-2 rounded-md text-sm font-medium text-ink-muted hover:text-ink transition-colors">Reviews</Link>
            <Link href="/about"   className="px-3 py-2 rounded-md text-sm font-medium text-ink-muted hover:text-ink transition-colors">About</Link>
            <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-ink-muted hover:text-ink transition-colors">Contact</Link>
          </nav>

          {/* Desktop right: phone + CTA */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <a href="tel:5413379893" className="flex items-center gap-1.5 text-sm font-medium text-chrome hover:text-ink transition-colors">
              <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.5 10.5a11.047 11.047 0 005 5l1.113-1.724a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (541) 337-9893
            </a>
            <Link href="/book" className="px-4 py-2 rounded-lg text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-colors shadow-[0_0_16px_rgba(200,36,63,0.3)]">
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen((v) => !v)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}
            className="lg:hidden flex-shrink-0 w-10 h-10 flex flex-col justify-center items-center gap-[5px] rounded-md hover:bg-[rgba(255,255,255,0.06)] transition-colors">
            <span className={`block h-[2px] w-5 bg-ink rounded-full transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-[2px] w-5 bg-ink rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-[2px] w-5 bg-ink rounded-full transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        aria-hidden={!mobileOpen}
        className={[
          "fixed inset-0 z-30 lg:hidden flex flex-col bg-surface transition-all duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        style={{ paddingTop: "72px" }}
      >
        <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-0.5">

          {/* Phone */}
          <a href="tel:5413379893" onClick={closeMobile}
            className="flex items-center gap-3 px-4 py-3 mb-3 rounded-xl border border-edge-accent bg-[rgba(200,36,63,0.07)] text-ink font-semibold">
            <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.5 10.5a11.047 11.047 0 005 5l1.113-1.724a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (541) 337-9893
          </a>

          <Link href="/" onClick={closeMobile} className="px-4 py-3 rounded-xl text-ink font-medium text-base hover:bg-[rgba(255,255,255,0.05)] transition-colors block">Home</Link>

          {/* Services expandable */}
          <div>
            <button onClick={() => setMobServices((v) => !v)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-ink font-medium text-base hover:bg-[rgba(255,255,255,0.05)] transition-colors">
              Services
              <svg className={`w-4 h-4 transition-transform duration-200 ${mobServices ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobServices && (
              <div className="ml-4 mt-0.5 flex flex-col border-l border-edge-accent pl-4">
                <Link href="/services" onClick={closeMobile} className="py-2 text-sm text-accent font-semibold">All Services →</Link>
                {services.map((svc) => (
                  <Link key={svc.href} href={svc.href} onClick={closeMobile} className="py-2 text-sm text-ink-muted hover:text-ink transition-colors">
                    {svc.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Locations expandable */}
          <div>
            <button onClick={() => setMobLocations((v) => !v)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-ink font-medium text-base hover:bg-[rgba(255,255,255,0.05)] transition-colors">
              Locations
              <svg className={`w-4 h-4 transition-transform duration-200 ${mobLocations ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobLocations && (
              <div className="ml-4 mt-0.5 flex flex-col border-l border-edge-accent pl-4">
                <Link href="/locations" onClick={closeMobile} className="py-2 text-sm text-accent font-semibold">All Areas →</Link>
                {locations.map((loc) => (
                  <Link key={loc.href} href={loc.href} onClick={closeMobile} className="py-2 text-sm text-ink-muted hover:text-ink transition-colors">
                    {loc.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Plain links */}
          {[
            { name: "Gallery",  href: "/gallery" },
            { name: "Blog",     href: "/blog" },
            { name: "Reviews",  href: "/reviews" },
            { name: "About",    href: "/about" },
            { name: "FAQ",      href: "/faq" },
            { name: "Contact",  href: "/contact" },
          ].map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMobile}
              className="px-4 py-3 rounded-xl text-ink font-medium text-base hover:bg-[rgba(255,255,255,0.05)] transition-colors block">
              {link.name}
            </Link>
          ))}

          {/* CTA */}
          <Link href="/book" onClick={closeMobile}
            className="mt-4 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-white font-semibold text-base hover:bg-accent-hover transition-colors shadow-[0_0_24px_rgba(200,36,63,0.35)]">
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
}
