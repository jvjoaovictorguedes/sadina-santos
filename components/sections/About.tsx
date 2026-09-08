import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const valores = [
  {
    titulo: "Diagnóstico antes da técnica",
    texto:
      "Cada atendimento começa com uma leitura real do seu fio, não com uma receita pronta.",
  },
  {
    titulo: "Produtos profissionais",
    texto:
      "Linhas de coloração, tratamento e mega hair selecionadas pela qualidade, não pelo custo.",
  },
  {
    titulo: "Acabamento de estúdio",
    texto:
      "Cuidado com o detalhe do início ao fim — o resultado continua bonito muito depois do salão.",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-28">
      <Container className="grid gap-14 md:grid-cols-[0.85fr_1.15fr] md:items-center">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl bg-[var(--color-paper-soft)]">
          <Image
            src="/logo/logo-sadina.jpg"
            alt="Sadina Santos"
            fill
            sizes=""
            className="object-none"
          />
        </div>

        <div>
          <SectionHeading
            eyebrow="Sobre o estúdio"
            title="Beleza que respeita a história do seu cabelo"
            description="Sadina Santos construiu, ao longo de anos de estúdio, uma abordagem que une técnica apurada e escuta — porque cada cabelo carrega uma rotina, uma textura e uma expectativa diferentes."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {valores.map((valor) => (
              <div key={valor.titulo}>
                <p className="font-display text-lg text-[var(--color-brand)]">
                  {valor.titulo}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                  {valor.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
