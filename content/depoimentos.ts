export type Depoimento = {
  nome: string;
  servico: string;
  texto: string;
};

// TODO: substituir por depoimentos reais de clientes
export const depoimentos: Depoimento[] = [
  {
    nome: "Camila R.",
    servico: "Mega Hair",
    texto:
      "Sempre tive medo de fazer mega hair por já ter feito em outro lugar e não gostado. Na Sadina o resultado ficou tão natural que ninguém percebe que não é meu fio.",
  },
  {
    nome: "Juliana P.",
    servico: "Penteado para casamento",
    texto:
      "Fiz prova de penteado semanas antes do casamento e no dia foi ainda melhor. Cuidado, pontualidade e um capricho que fez toda a diferença nas fotos.",
  },
  {
    nome: "Fernanda A.",
    servico: "Química em geral",
    texto:
      "Depois de anos sofrendo com química mal feita em outros salões, encontrei um cuidado de verdade com a saúde do meu cabelo. Meu fio nunca esteve tão saudável.",
  },
];
