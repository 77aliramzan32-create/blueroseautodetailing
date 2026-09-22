import Link from "next/link";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  if (!items || items.length === 0) return null;

  // Build full trail: Home is always first unless already included
  const trail: BreadcrumbItem[] = items[0]?.href === "/" ? items : [{ name: "Home", href: "/" }, ...items];

  // JSON-LD BreadcrumbList schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://blueroseautodetailing.com${item.href}`,
    })),
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Visual breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-0 text-sm"
      >
        <ol
          className="flex flex-wrap items-center gap-0"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {trail.map((item, index) => {
            const isLast = index === trail.length - 1;
            return (
              <li
                key={item.href}
                className="flex items-center"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {/* separator (not before first item) */}
                {index > 0 && (
                  <span
                    className="mx-2 text-chrome-subtle select-none"
                    aria-hidden="true"
                  >
                    ›
                  </span>
                )}

                {isLast ? (
                  /* current page — no link */
                  <span
                    className="text-ink font-medium"
                    aria-current="page"
                    itemProp="name"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-ink-subtle hover:text-ink-muted transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.name}</span>
                  </Link>
                )}

                <meta itemProp="position" content={String(index + 1)} />
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
