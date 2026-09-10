import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { depoimentos, type Depoimento } from "@/content/depoimentos";

export function Testimonials({
  testimonials = depoimentos,
}: {
  testimonials?: Depoimento[];
}) {
  return (
    <section className="bg-[var(--color-ink)] py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Quem já passou pelo estúdio"
          title="Contado por quem sentou na cadeira"
          align="center"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((d) => (
            <blockquote
              key={d.nome}
              className="rounded-2xl border border-white/10 p-7"
            >
              <p className="font-display text-lg italic leading-relaxed text-[var(--color-paper)]">
                “{d.texto}”
              </p>
              <footer className="mt-5 text-sm text-white/60">
                {d.nome} — {d.servico}
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
