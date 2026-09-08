import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Portfolio } from "@/components/sections/Portfolio";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Trabalhos — ${site.name}`,
  description: "Galeria de transformações feitas no estúdio Sadina Santos.",
};

export default function TrabalhosPage() {
  return (
    <>
      <section className="pt-32 pb-10 md:pt-40">
        <Container className="max-w-2xl">
          <p className="mb-3 text-sm text-[var(--color-brand)]">Trabalhos</p>
          <h1 className="font-display text-4xl leading-tight text-[var(--color-ink)] md:text-5xl">
            Cada fio, um resultado para chamar de seu
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[var(--color-ink-soft)]">
            Filtre por especialidade e veja um pouco do que já saiu da cadeira
            do estúdio.
          </p>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <Portfolio />
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
