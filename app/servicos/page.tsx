import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Services } from "@/components/sections/Services";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { site } from "@/content/site";
import { getServices, getSiteSettings } from "@/lib/content";

export const metadata: Metadata = {
  title: `Serviços — ${site.name}`,
  description:
    "Corte, escova, química em geral, penteados e mega hair no estúdio Sadina Santos.",
};

export default async function ServicosPage() {
  const [siteData, services] = await Promise.all([
    getSiteSettings(),
    getServices(),
  ]);
  return (
    <>
      <section className="pt-32 pb-10 md:pt-40">
        <Container className="max-w-2xl">
          <p className="mb-3 text-sm text-[var(--color-brand)]">Serviços</p>
          <h1 className="font-display text-4xl leading-tight text-[var(--color-ink)] md:text-5xl">
            Um cuidado pensado para cada etapa do seu cabelo
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[var(--color-ink-soft)]">
            Da manutenção mensal às grandes transformações, cada serviço é
            conduzido com diagnóstico, técnica e produtos profissionais.
          </p>
        </Container>
      </section>

      <Services showDetails hideHeading services={services} />
      <ContactCTA siteData={siteData} />
    </>
  );
}
