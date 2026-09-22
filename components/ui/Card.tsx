import { type ComponentPropsWithoutRef } from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
} & Omit<ComponentPropsWithoutRef<"div">, "children" | "className">;

export default function Card({
  children,
  className = "",
  hover = false,
  glow = false,
  ...rest
}: CardProps) {
  const classes = [
    // Base
    "bg-card border border-edge rounded-xl overflow-hidden",
    // Hover background + scale
    hover &&
      "transition-[background-color,transform,box-shadow] duration-200 ease-out hover:bg-card-hover hover:scale-[1.015]",
    // Glow shadow on hover (accent)
    glow &&
      "hover:shadow-[0_0_32px_4px_rgba(200,36,63,0.25)] transition-shadow duration-200",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
