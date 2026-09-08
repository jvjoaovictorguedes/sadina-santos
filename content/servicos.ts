export type Servico = {
  slug: string;
  nome: string;
  resumo: string;
  descricao: string;
  destaques: string[];
  icone: "tesoura" | "secador" | "flaconete" | "penteado" | "megahair";
};

export const servicos: Servico[] = [
  {
    slug: "corte",
    nome: "Corte",
    resumo: "Cortes desenhados para o seu rosto e o seu jeito de viver.",
    descricao:
      "Do risco à finalização, cada corte é planejado sob medida — considerando textura, densidade e a rotina de cuidado que você tem em casa. Ideal para quem quer renovar o visual com precisão.",
    destaques: ["Diagnóstico capilar", "Corte a seco ou molhado", "Finalização incluída"],
    icone: "tesoura",
  },
  {
    slug: "escova",
    nome: "Escova",
    resumo: "Movimento, brilho e durabilidade para o dia a dia ou ocasiões especiais.",
    descricao:
      "Escova modeladora com técnica de secagem que respeita a fibra do fio, entregando um acabamento liso, ondulado ou volumoso — sempre com brilho de salão.",
    destaques: ["Escova lisa ou modelada", "Finalização com produtos profissionais", "Proteção térmica"],
    icone: "secador",
  },
  {
    slug: "quimica",
    nome: "Química em geral",
    resumo: "Coloração, alisamento e reconstrução com segurança para a saúde do fio.",
    descricao:
      "Processos químicos avaliados individualmente — coloração, luzes, alisamento e tratamentos de reconstrução — sempre com produtos profissionais e protocolo de proteção capilar.",
    destaques: ["Coloração e mechas", "Alisamento e progressiva", "Reconstrução pós-química"],
    icone: "flaconete",
  },
  {
    slug: "penteados",
    nome: "Penteados",
    resumo: "Penteados para festas, casamentos e ensaios — do clássico ao contemporâneo.",
    descricao:
      "Penteados construídos fio a fio para casamentos, formaturas e eventos, com prova prévia disponível para garantir que o resultado combine com o seu estilo no grande dia.",
    destaques: ["Prova de penteado disponível", "Presos, semipresos e soltos", "Atendimento para eventos"],
    icone: "penteado",
  },
  {
    slug: "mega-hair",
    nome: "Mega Hair",
    resumo: "Alongamento e volume natural, com aplicação sob medida.",
    descricao:
      "Nossa especialidade. Aplicação de mega hair com fita, tela ou queratina, escolhida conforme a estrutura do seu fio, para um resultado natural, confortável e de longa duração.",
    destaques: ["Técnicas de fita, tela e queratina", "Fios selecionados", "Manutenção programada"],
    icone: "megahair",
  },
];
