import Link from "next/link";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { site, whatsappLink } from "@/content/site";
import type { Site } from "@/content/site";

export function WhatsAppButton({ siteData = site }: { siteData?: Site }) {
  return (
    <Link
      href={whatsappLink("Olá! Gostaria de agendar um horário.", siteData)}
      target="_blank"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-brand)] text-white shadow-[0_12px_30px_-8px_var(--shadow-color)] transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </Link>
  );
}
