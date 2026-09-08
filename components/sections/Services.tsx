import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceIcons } from "@/components/ui/Icons";
import { servicos } from "@/content/servicos";
import { whatsappLink } from "@/content/site";

export function Services({
  showDetails = false,
  hideHeading = false,
}: {
  showDetails?: boolean;
  hideHeading?: boolean;
}) {
  return (
    <section id="servicos" className="py-20 md:py-28">
      <Container>
        {!hideHeading && (
          <SectionHeading
            eyebrow="O que fazemos"
            title="Cinco especialidades, um único padrão de cuidado"
            description="Cada serviço segue o mesmo compromisso: diagnóstico antes da técnica, produtos profissionais e um resultado que dura além do dia do salão."
          />
        )}

        <div className="mt-16 divide-y divide-[var(--color-border)]">
          {servicos.map((servico) => {
            const Icon = serviceIcons[servico.icone];
            return (
              <div
                key={servico.slug}
                className="grid gap-6 py-10 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-brand)]">
                  <Icon className="h-7 w-7" />
                </div>

                <div>
                  <h3 className="font-display text-2xl text-[var(--color-ink)]">
                    {servico.nome}
                  </h3>
                  <p className="mt-2 max-w-lg text-[var(--color-ink-soft)]">
                    {showDetails ? servico.descricao : servico.resumo}
                  </p>
                  {showDetails && (
                    <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1.5 text-sm text-[var(--color-ink-soft)]">
                      {servico.destaques.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-[var(--color-brand)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <Link
                  href={whatsappLink(`Olá! Gostaria de agendar: ${servico.nome}.`)}
                  target="_blank"
                  className="text-sm font-medium text-[var(--color-ink)] transition-colors hover:text-[var(--color-brand)] md:justify-self-end"
                >
                  Agendar →
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
