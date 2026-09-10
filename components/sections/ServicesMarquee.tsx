import { ScissorsIcon } from "@/components/ui/Icons";
import { servicos, type Servico } from "@/content/servicos";

export function ServicesMarquee({
  services = servicos,
}: {
  services?: Servico[];
}) {
  const items = services.map((s) => s.nome);
  const row = [...items, ...items];

  return (
    <div className="marquee-row overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-ink)] py-4">
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {[...row, ...row].map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="flex items-center gap-8 font-display text-lg text-[var(--color-paper)] md:text-xl"
          >
            {label}
            <ScissorsIcon className="h-4 w-4 text-[var(--color-brand-light)]" />
          </span>
        ))}
      </div>
    </div>
  );
}
