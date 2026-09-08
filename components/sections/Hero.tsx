import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site, whatsappLink } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="texture-comb absolute inset-0" />

      <Container className="relative grid gap-14 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-1.5 text-xs text-[var(--color-ink-soft)]">
            {site.heroBadge}
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.08] text-[var(--color-ink)] md:text-6xl">
            Cabelos com identidade,
            <br />
            <span className="italic text-[var(--color-brand)]">assinatura</span>{" "}
            Sadina Santos.
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--color-ink-soft)] md:text-lg">
            Corte, escova, química, penteados e mega hair — cada atendimento é
            construído fio a fio, com técnica e acabamento de estúdio para
            quem quer se ver e se sentir bem em cada detalhe.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href={whatsappLink("Olá! Gostaria de agendar um horário.")}
              target="_blank"
              className="rounded-full bg-[var(--color-brand)] px-7 py-3.5 text-sm font-medium text-white shadow-[0_14px_30px_-10px_var(--shadow-color)] transition-colors hover:bg-[var(--color-brand-deep)]"
            >
              Agendar pelo WhatsApp
            </Link>
            <Link
              href="/servicos"
              className="rounded-full border border-[var(--color-ink)] px-7 py-3.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
            >
              Ver serviços
            </Link>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md">
          <svg
            viewBox="0 0 420 420"
            className="h-full w-full text-[var(--color-brand)]"
            aria-hidden="true"
          >
            <circle
              cx="210"
              cy="210"
              r="176"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.35"
            />
            <circle
              cx="210"
              cy="210"
              r="150"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.2"
            />
            <g className="strand-draw" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M110 150c30 10 20 45 55 55s45-30 75-20 40 45 65 35" />
              <path d="M110 230c30 -10 20 -45 55 -55s45 30 75 20 40 -45 65 -35" opacity="0.55" />
              <path d="M120 200c40 0 40 20 80 20s40 -20 80 -20" opacity="0.35" />
            </g>
          </svg>

          <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-paper)] px-5 py-2.5 text-xs text-[var(--color-ink-soft)] shadow-[0_10px_25px_-12px_var(--shadow-color)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand)]" />
            Especialistas em mega hair
          </div>
        </div>
      </Container>
    </section>
  );
}
