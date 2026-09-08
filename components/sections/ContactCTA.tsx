import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon, InstagramIcon } from "@/components/ui/Icons";
import { site, whatsappLink } from "@/content/site";

export function ContactCTA() {
  return (
    <section className="py-20 md:py-28">
      <Container className="grid gap-10 rounded-3xl bg-[var(--color-brand)] px-8 py-14 text-white md:grid-cols-[1.2fr_1fr] md:items-center md:px-14">
        <div>
          <h2 className="font-display text-3xl leading-tight md:text-4xl">
            Vamos marcar o seu horário?
          </h2>
          <p className="mt-4 max-w-md text-white/85">
            Fale direto com o estúdio pelo WhatsApp e escolha o dia que funciona
            melhor para você. Também respondemos por lá dúvidas sobre técnicas
            e valores.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <Link
            href={whatsappLink("Olá! Gostaria de agendar um horário.")}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[var(--color-brand-deep)] transition-transform hover:scale-[1.02]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {site.whatsappDisplay}
          </Link>
          <Link
            href={site.instagram}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm text-white/85 hover:text-white"
          >
            <InstagramIcon className="h-4 w-4" />
            {site.instagramHandle}
          </Link>
        </div>
      </Container>
    </section>
  );
}
