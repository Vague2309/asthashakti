import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

type Variant = "primary" | "accent" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-hover",
  accent:
    "bg-accent text-accent-foreground hover:bg-accent-hover",
  outline:
    "border border-border text-foreground hover:bg-surface-muted",
  ghost: "text-foreground hover:bg-surface-muted",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-6 py-3 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

type ButtonAsButton = { href?: undefined } & ComponentPropsWithoutRef<"button">;
type ButtonAsLink = { href: string } & ComponentPropsWithoutRef<typeof Link>;

type ButtonProps = (ButtonAsButton | ButtonAsLink) & {
  variant?: Variant;
  size?: Size;
  className?: string;
};

/**
 * Shared CTA button. Renders a Next.js <Link> when `href` is given,
 * otherwise a native <button> (e.g. for form submit actions).
 */
export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props;
    return <Link href={href} className={classes} {...rest} />;
  }

  const { type = "button", ...rest } = props as ButtonAsButton;
  return <button type={type} className={classes} {...rest} />;
}
