import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

type ButtonBaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof ButtonBaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<Variant, string> = {
  primary: [
    "relative overflow-hidden",
    "bg-accent text-white",
    "hover:bg-accent-hover",
    "shadow-[0_0_0_0_rgba(200,36,63,0)] hover:shadow-[0_0_24px_4px_rgba(200,36,63,0.45)]",
    "before:absolute before:inset-0 before:-translate-x-full",
    "before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
    "hover:before:translate-x-full before:transition-transform before:duration-500",
    "transition-all duration-200 ease-out",
  ].join(" "),

  secondary: [
    "bg-card text-ink",
    "border border-edge",
    "hover:bg-card-hover",
    "transition-colors duration-200",
  ].join(" "),

  ghost: [
    "bg-transparent text-ink-muted",
    "hover:text-ink",
    "transition-colors duration-200",
  ].join(" "),

  outline: [
    "bg-transparent text-accent",
    "border border-accent",
    "hover:bg-accent-wash",
    "transition-colors duration-200",
  ].join(" "),
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm font-medium rounded-md",
  md: "px-5 py-2.5 text-sm font-semibold rounded-lg",
  lg: "px-8 py-4 text-base font-bold rounded-xl tracking-wide",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-body cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:pointer-events-none disabled:opacity-50";

export default function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className = "", children, ...rest } = props;

  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (rest.href !== undefined) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  const { ...buttonRest } = rest as ButtonAsButton;
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
