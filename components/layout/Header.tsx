"use client";

import { useState, useEffect, useRef } from "react";
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

const navLinks = [
  { name: "Home",      href: "/" },
  { name: "Services",  href: "/services",   hasDropdown: true },
  { name: "Locations", href: "/locations" },
  { name: "About",     href: "/about" },
  { name: "Reviews",   href: "/reviews" },
  { name: "FAQ",       href: "/faq" },
  { name: "Contact",   href: "/contact" },
];

export default function Header() {
  const [scrolled,        setScrolled]        = useState(false);
  const [mobileOpen,      setMobileOpen]       = useState(false);
  const [servicesOpen,    setServicesOpen]     = useState(false);
  const [mobServicesOpen, setMobServicesOpen]  = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* ── scroll listener ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── close desktop dropdown on outside click ── */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* ── lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobServicesOpen(false);
  };

  return (
    <>
      {/* ── Header shell ── */}
      <header
        className={[
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-card/95 backdrop-blur-md border-b border-edge shadow-[0_2px_24px_rgba(0,0,0,0.5)]"
            : "bg-transparent",
        ].join(" ")}
        style={{ height: "var(--header-h, 72px)" }}
      >
        {/* height custom property so pages can offset */}
        <style>{`:root { --header-h: 72px; } @media(min-width:768px){ :root { --header-h: 80px; } }`}</style>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">

          {/* ── Logo ── */}
          <Link href="/" onClick={closeMobile} className="flex-shrink-0 group">
            <div className="flex flex-col leading-none">
              <span
                className="font-display font-bold text-[1.6rem] md:text-[1.75rem] tracking-tight text-ink group-hover:text-white transition-colors"
                style={{ fontFamily: "var(--font-display, sans-serif)" }}
              >
                BLUE ROSE
              </span>
              {/* accent rule */}
              <span
                className="block h-[2px] w-full rounded-full mt-[2px] mb-[3px]"
                style={{ background: "linear-gradient(90deg, #C8243F 0%, #A81D34 60%, transparent 100%)" }}
                aria-hidden="true"
              />
              <span
                className="text-[0.48rem] md:text-[0.52rem] tracking-[0.22em] uppercase text-chrome font-medium"
                style={{ fontFamily: "var(--font-body, sans-serif)", letterSpacing: "0.22em" }}
              >
                AUTO DETAILING SERVICES
              </span>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setServicesOpen((v) => !v)}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-ink-muted hover:text-ink transition-colors"
                  >
                    {link.name}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* dropdown */}
                  {servicesOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-xl border border-edge bg-card/98 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.6)] py-1.5 z-50"
                    >
                      {services.map((svc) => (
                        <Link
                          key={svc.href}
                          href={svc.href}
                          onClick={() => setServicesOpen(false)}
                          className="block px-4 py-2 text-sm text-ink-muted hover:text-ink hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                        >
                          {svc.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-ink-muted hover:text-ink transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* ── Desktop right: phone + CTA ── */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <a
              href="tel:5413379893"
              className="flex items-center gap-1.5 text-sm font-medium text-chrome hover:text-ink transition-colors"
            >
              <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.5 10.5a11.047 11.047 0 005 5l1.113-1.724a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (541) 337-9893
            </a>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-lg text-sm font-semibold bg-accent text-white hover:bg-accent-hover transition-colors shadow-[0_0_16px_rgba(200,36,63,0.3)]"
            >
              Get a Quote
            </Link>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="md:hidden flex-shrink-0 w-10 h-10 flex flex-col justify-center items-center gap-[5px] rounded-md hover:bg-[rgba(255,255,255,0.06)] transition-colors"
          >
            <span
              className={`block h-[2px] w-5 bg-ink rounded-full transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block h-[2px] w-5 bg-ink rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block h-[2px] w-5 bg-ink rounded-full transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* ── Mobile full-screen overlay ── */}
      <div
        aria-hidden={!mobileOpen}
        className={[
          "fixed inset-0 z-30 md:hidden flex flex-col bg-surface transition-all duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        style={{ paddingTop: "72px" }}
      >
        <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-2">

          {/* phone prominent */}
          <a
            href="tel:5413379893"
            onClick={closeMobile}
            className="flex items-center gap-3 px-4 py-3 mb-2 rounded-xl border border-edge-accent bg-[rgba(200,36,63,0.07)] text-ink font-semibold"
          >
            <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.5 10.5a11.047 11.047 0 005 5l1.113-1.724a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (541) 337-9893
          </a>

          {/* nav items */}
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.name}>
                <button
                  onClick={() => setMobServicesOpen((v) => !v)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-ink font-medium text-base hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                >
                  {link.name}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${mobServicesOpen ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobServicesOpen && (
                  <div className="ml-4 mt-1 flex flex-col gap-0.5 border-l border-edge-accent pl-4">
                    {services.map((svc) => (
                      <Link
                        key={svc.href}
                        href={svc.href}
                        onClick={closeMobile}
                        className="py-2.5 text-sm text-ink-muted hover:text-ink transition-colors"
                      >
                        {svc.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="px-4 py-3 rounded-xl text-ink font-medium text-base hover:bg-[rgba(255,255,255,0.05)] transition-colors block"
              >
                {link.name}
              </Link>
            )
          )}

          {/* CTA */}
          <Link
            href="/contact"
            onClick={closeMobile}
            className="mt-4 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-white font-semibold text-base hover:bg-accent-hover transition-colors shadow-[0_0_24px_rgba(200,36,63,0.35)]"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </>
  );
}
