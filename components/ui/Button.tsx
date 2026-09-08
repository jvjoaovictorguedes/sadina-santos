import Link from "next/link";
import { ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
};

const variants: Record<string, string> = {
  solid:
    "bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-deep)] shadow-[0_10px_30px_-10px_var(--shadow-color)]",
  outline:
    "border border-[var(--color-ink)] text-[var(--color-ink)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]",
  ghost: "text-[var(--color-ink)] hover:text-[var(--color-brand)]",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200";

export function Button({
  children,
  variant = "solid",
  className = "",
  href,
  ...rest
}: BaseProps & { href: string } & Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    "className" | "children"
  >) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
