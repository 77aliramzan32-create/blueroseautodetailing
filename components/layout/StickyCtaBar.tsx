"use client";

import Link from "next/link";

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.5 10.5a11.047 11.047 0 005 5l1.113-1.724a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
    </svg>
  );
}

export default function StickyCtaBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div
        className="flex items-stretch border-t border-edge bg-card"
        style={{ height: "64px" }}
        role="navigation"
        aria-label="Quick actions"
      >
        {/* ── Call Now ── */}
        <a
          href="tel:5413379893"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 text-ink-muted hover:text-ink hover:bg-[rgba(255,255,255,0.04)] active:bg-[rgba(255,255,255,0.08)] transition-colors border-r border-edge"
          aria-label="Call Blue Rose Auto Detailing at (541) 337-9893"
        >
          <PhoneIcon />
          <span className="text-[0.65rem] font-medium tracking-wide">Call Now</span>
        </a>

        {/* ── Get a Quote (accent, middle) ── */}
        <Link
          href="/contact"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 bg-accent text-white hover:bg-accent-hover active:bg-accent-dim transition-colors shadow-[0_0_20px_rgba(200,36,63,0.4)]"
          aria-label="Get a free quote"
        >
          <MessageIcon />
          <span className="text-[0.65rem] font-semibold tracking-wide">Free Quote</span>
        </Link>

        {/* ── Text Us ── */}
        <a
          href="sms:5413379893"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 text-ink-muted hover:text-ink hover:bg-[rgba(255,255,255,0.04)] active:bg-[rgba(255,255,255,0.08)] transition-colors border-l border-edge"
          aria-label="Text Blue Rose Auto Detailing at (541) 337-9893"
        >
          <ChatIcon />
          <span className="text-[0.65rem] font-medium tracking-wide">Text Us</span>
        </a>
      </div>
    </div>
  );
}
