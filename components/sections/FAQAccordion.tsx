"use client";

import { useState } from "react";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

function PlusMinusIcon({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={[
        "relative w-5 h-5 shrink-0 flex items-center justify-center text-accent",
        "transition-transform duration-200",
        open ? "rotate-0" : "rotate-0",
      ].join(" ")}
    >
      {/* Horizontal bar — always visible */}
      <span className="absolute w-3 h-0.5 bg-current rounded-full" />
      {/* Vertical bar — visible when closed, fades out when open */}
      <span
        className={[
          "absolute w-0.5 h-3 bg-current rounded-full transition-all duration-200",
          open ? "opacity-0 scale-y-0" : "opacity-100 scale-y-100",
        ].join(" ")}
      />
    </span>
  );
}

function AccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `faq-panel-${faq.id}`;
  const buttonId = `faq-btn-${faq.id}`;

  return (
    <div className="border-b border-edge last:border-b-0">
      {/* Question row */}
      <h3>
        <button
          id={buttonId}
          type="button"
          role="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className={[
            "w-full flex items-center justify-between gap-4 py-5 text-left",
            "font-body font-semibold text-base text-ink",
            "hover:text-ink transition-colors duration-150",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded-sm",
          ].join(" ")}
        >
          <span className="leading-snug">{faq.question}</span>
          <PlusMinusIcon open={isOpen} />
        </button>
      </h3>

      {/* Answer panel — CSS max-height transition */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? "600px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="font-body text-sm text-ink-muted leading-relaxed pb-5 pr-8">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  function handleToggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  if (faqs.length === 0) return null;

  return (
    <div
      className="w-full"
      role="list"
      aria-label="Frequently asked questions"
    >
      {faqs.map((faq) => (
        <AccordionItem
          key={faq.id}
          faq={faq}
          isOpen={openId === faq.id}
          onToggle={() => handleToggle(faq.id)}
        />
      ))}
    </div>
  );
}
