export type SiteSettings = {
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
  heroBadge: string;
  hours: { dias: string; horario: string }[];
};

export type ServiceRow = {
  id: string;
  slug: string;
  nome: string;
  resumo: string;
  descricao: string;
  destaques: string[];
  icone: string;
  ativo: boolean;
  ordem: number;
};

export type PortfolioRow = {
  id: string;
  categoria: string;
  titulo: string;
  imagem: string;
  before: string | null;
  after: string | null;
  ativo: boolean;
  ordem: number;
};

export type TestimonialRow = {
  id: string;
  nome: string;
  servico: string;
  texto: string;
  ativo: boolean;
  ordem: number;
};
