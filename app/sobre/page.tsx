import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { site } from "@/content/site";
import { getSiteSettings } from "@/lib/content";

export const metadata: Metadata = {
  title: `Sobre — ${site.name}`,
  description:
    "Conheça o estúdio Sadina Santos e o cuidado por trás de cada atendimento.",
};

export default async function SobrePage() {
  const siteData = await getSiteSettings();
  return (
    <>
      <section className="pt-32 pb-6 md:pt-40">
        <Container className="max-w-2xl">
          <p className="mb-3 text-sm text-[var(--color-brand)]">Sobre</p>
          <h1 className="font-display text-4xl leading-tight text-[var(--color-ink)] md:text-5xl">
            {/* TODO: ajustar com a história real de Sadina Santos */}A cadeira
            onde a técnica encontra a escuta
          </h1>
        </Container>
      </section>

      <About />
      <Testimonials />
      <ContactCTA siteData={siteData} />
    </>
  );
}
