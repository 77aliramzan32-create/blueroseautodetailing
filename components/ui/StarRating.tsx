type Size = "sm" | "md";

type StarRatingProps = {
  rating: number;
  count?: number;
  size?: Size;
  className?: string;
};

const starSize: Record<Size, number> = {
  sm: 14,
  md: 18,
};

const textSize: Record<Size, string> = {
  sm: "text-xs",
  md: "text-sm",
};

function StarIcon({ filled, px }: { filled: boolean; px: number }) {
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 1.5L12.472 7.22L18.5 7.91L14.25 11.9L15.528 18.5L10 15.27L4.472 18.5L5.75 11.9L1.5 7.91L7.528 7.22L10 1.5Z"
        fill={filled ? "var(--color-accent)" : "none"}
        stroke={filled ? "var(--color-accent)" : "var(--color-ink-subtle)"}
        strokeWidth={filled ? 0 : 1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function StarRating({
  rating,
  count,
  size = "md",
  className = "",
}: StarRatingProps) {
  const maxStars = 5;
  const clampedRating = Math.min(Math.max(rating, 0), maxStars);
  const fullStars = Math.round(clampedRating);
  const px = starSize[size];

  return (
    <div
      className={["inline-flex items-center gap-1.5", className]
        .filter(Boolean)
        .join(" ")}
      aria-label={`Rating: ${clampedRating} out of ${maxStars} stars${count !== undefined ? `, ${count} reviews` : ""}`}
    >
      <span className="inline-flex items-center gap-0.5">
        {Array.from({ length: maxStars }, (_, i) => (
          <StarIcon key={i} filled={i < fullStars} px={px} />
        ))}
      </span>

      <span
        className={[
          textSize[size],
          "font-semibold text-ink font-body leading-none",
        ].join(" ")}
      >
        {clampedRating.toFixed(1)}
      </span>

      {count !== undefined && (
        <span
          className={[textSize[size], "text-ink-muted font-body leading-none"].join(
            " "
          )}
        >
          ({count.toLocaleString()} {count === 1 ? "review" : "reviews"})
        </span>
      )}
    </div>
  );
}
