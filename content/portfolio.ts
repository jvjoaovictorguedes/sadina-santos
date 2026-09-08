export type TrabalhoCategoria =
  | "Todos"
  | "Mega Hair"
  | "Corte"
  | "Química"
  | "Penteado";

export type Trabalho = {
  id: string;
  categoria: Exclude<TrabalhoCategoria, "Todos">;
  titulo: string;
  imagem: string; // caminho em /public/gallery
  before?: string;
  after?: string;
};

export const trabalhos: Trabalho[] = [
  {
    id: "1",
    categoria: "Mega Hair",
    titulo: "Mega hair fio a fio, efeito natural",
    imagem: "/gallery/cabelo-2.webp",
    before: "/gallery/cabelo-1.webp",
    after: "/gallery/cabelo-2.webp",
  },
  {
    id: "2",
    categoria: "Química",
    titulo: "Coloração e luzes personalizadas",
    imagem: "/gallery/cabelo-23.jpeg",
    before: "/gallery/cabelo-21.jpeg",
    after: "/gallery/cabelo-23.jpeg",
  },
  {
    id: "3",
    categoria: "Penteado",
    titulo: "Penteado especial para festa",
    imagem: "/gallery/cabelo-3.webp",
    before: "/gallery/cabelo-36.jpeg",
    after: "/gallery/cabelo-3.webp",
  },
  {
    id: "4",
    categoria: "Corte",
    titulo: "Corte com movimento",
    imagem: "/gallery/cabelo-10.jpeg",
    before: "/gallery/cabelo-9.jpeg",
    after: "/gallery/cabelo-10.jpeg",
  },
  {
    id: "5",
    categoria: "Química",
    titulo: "Coloração dos fios para transformação do visual",
    imagem: "/gallery/cabelo-17.jpeg",
    before: "/gallery/cabelo-13.jpeg",
    after: "/gallery/cabelo-17.jpeg",
  },
  {
    id: "6",
    categoria: "Química",
    titulo: "Transformação com progressiva",
    imagem: "/gallery/cabelo-31.jpeg",
    before: "/gallery/cabelo-29.jpeg",
    after: "/gallery/cabelo-31.jpeg",
  },
];
