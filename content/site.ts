export type Site = {
  name: string;
  tagline: string;
  title: string;
  description: string;
  whatsapp: string;
  whatsappDisplay: string;
  instagram: string;
  instagramHandle: string;
  email: string;
  city: string;
  address: string;
  hours: { dias: string; horario: string }[];
  heroBadge: string;
};

export const site: Site = {
  name: "Sadina Santos",
  tagline: "Mega Hair",
  title: "Sadina Santos — Cortes, Química e Mega Hair",
  description:
    "Estúdio de beleza especializado em corte, escova, química, penteados e mega hair, com atendimento personalizado e acabamento de salão fino.",
  whatsapp: "5534996545747",
  whatsappDisplay: "(34) 99654-5747",
  instagram: "https://instagram.com/sadinasantos",
  instagramHandle: "@sadinasantos",
  email: "sadinacristina@gmail.com",
  city: "Uberlândia, MG",
  address: "Rua Rio Corumba N° 1100 — Jardim Europa, Uberlândia/MG",
  hours: [
    { dias: "Segunda a Sábado", horario: "8h às 18h" },
    { dias: "Domingo", horario: "Fechado" },
  ],
  heroBadge: "Atendimento com hora marcada",
} as const;

export function whatsappLink(
  message?: string,
  currentSite: Pick<Site, "whatsapp"> = site,
) {
  const base = `https://wa.me/${currentSite.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
