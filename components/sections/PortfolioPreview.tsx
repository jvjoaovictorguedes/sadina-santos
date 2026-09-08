import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Portfolio } from "@/components/sections/Portfolio";

export function PortfolioPreview() {
  return (
    <section className="bg-[var(--color-paper-soft)] py-20 md:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Trabalhos"
            title="Resultados que falam pelo fio"
            description="Uma seleção de transformações feitas no estúdio — de mega hair a penteados de festa."
          />
          <Link
            href="/trabalhos"
            className="text-sm font-medium text-[var(--color-ink)] transition-colors hover:text-[var(--color-brand)]"
          >
            Ver galeria completa →
          </Link>
        </div>

        <div className="mt-12">
          <Portfolio limit={6} />
        </div>
      </Container>
    </section>
  );
}
