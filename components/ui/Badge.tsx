import { type ComponentPropsWithoutRef } from "react";

type Variant = "accent" | "chrome" | "ghost";

type BadgeProps = {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"span">, "children" | "className">;

const variantClasses: Record<Variant, string> = {
  accent: [
    "bg-[rgba(200,36,63,0.12)] text-accent",
    "border border-edge-accent",
  ].join(" "),

  chrome: [
    "bg-[rgba(201,205,211,0.10)] text-chrome",
    "border border-chrome-border",
  ].join(" "),

  ghost: [
    "bg-[rgba(255,255,255,0.07)] text-ink-subtle",
    "border border-transparent",
  ].join(" "),
};

const baseClasses =
  "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold font-body leading-none whitespace-nowrap";

export default function Badge({
  variant = "accent",
  children,
  className = "",
  ...rest
}: BadgeProps) {
  return (
    <span
      className={[baseClasses, variantClasses[variant], className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </span>
  );
}
