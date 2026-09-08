/**
 * Divisor entre seções inspirado em uma mecha de cabelo ondulada — o
 * equivalente, no universo capilar, ao traço de pincel usado em projetos
 * de pintura. Some com prefers-reduced-motion (ver globals.css).
 */
export function StrandDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1200 60"
        className="strand-draw h-10 w-full text-[var(--color-brand)] opacity-70"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 30 C 100 5, 200 55, 320 30 S 540 5, 660 30 S 880 55, 1000 30 S 1150 10, 1200 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
