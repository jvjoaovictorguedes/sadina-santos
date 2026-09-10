import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  InstagramIcon,
  WhatsAppIcon,
  ScissorsIcon,
} from "@/components/ui/Icons";
import { site, whatsappLink } from "@/content/site";
import type { Site } from "@/content/site";

export function Footer({ siteData = site }: { siteData?: Site }) {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-paper-soft)]">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl text-[var(--color-ink)]">
            Sadina Santos
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--color-ink-soft)]">
            Estúdio de beleza especializado em corte, química e mega hair, com
            acabamento fino e atendimento personalizado em {siteData.city}.
          </p>
          <div className="mt-5 flex items-center gap-4">
            <Link
              href={whatsappLink(undefined, siteData)}
              target="_blank"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </Link>
            <Link
              href={siteData.instagram}
              target="_blank"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
            >
              <InstagramIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-[var(--color-ink)]">
            Navegação
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-[var(--color-ink-soft)]">
            <li>
              <Link href="/" className="hover:text-[var(--color-brand)]">
                Início
              </Link>
            </li>
            <li>
              <Link
                href="/servicos"
                className="hover:text-[var(--color-brand)]"
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                href="/trabalhos"
                className="hover:text-[var(--color-brand)]"
              >
                Trabalhos
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="hover:text-[var(--color-brand)]">
                Sobre
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-[var(--color-ink)]">
            Horários
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-[var(--color-ink-soft)]">
            {siteData.hours.map((h) => (
              <li key={h.dias} className="flex justify-between gap-4">
                <span>{h.dias}</span>
                <span>{h.horario}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container>
        <div className="flex flex-col items-center justify-between gap-3 border-t border-[var(--color-border)] py-6 text-xs text-[var(--color-ink-soft)] md:flex-row">
          <p className="flex items-center gap-2">
            <ScissorsIcon className="h-3.5 w-3.5" />© {new Date().getFullYear()}{" "}
            Sadina Santos. Todos os direitos reservados.
          </p>
          <p>{siteData.address}</p>
        </div>
      </Container>
    </footer>
  );
}
