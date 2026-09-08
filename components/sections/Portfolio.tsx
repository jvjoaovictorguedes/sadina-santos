"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { trabalhos, type TrabalhoCategoria } from "@/content/portfolio";

type ModalImagem = {
  src: string;
  alt: string;
} | null;

const categorias: TrabalhoCategoria[] = [
  "Todos",
  "Mega Hair",
  "Corte",
  "Química",
  "Penteado",
];

export function Portfolio({ limit }: { limit?: number }) {
  const [filtro, setFiltro] = useState<TrabalhoCategoria>("Todos");
  const [imagemAmpliada, setImagemAmpliada] = useState<ModalImagem>(null);

  const lista = useMemo(() => {
    const base =
      filtro === "Todos"
        ? trabalhos
        : trabalhos.filter((t) => t.categoria === filtro);
    return limit ? base.slice(0, limit) : base;
  }, [filtro, limit]);

  return (
    <div>
      {!limit && (
        <div className="mb-10 flex flex-wrap gap-2">
          {categorias.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFiltro(cat)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                filtro === cat
                  ? "border-[var(--color-brand)] bg-[var(--color-brand)] text-white"
                  : "border-[var(--color-border)] text-[var(--color-ink-soft)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {!limit ? (
        <div className="grid gap-6 md:grid-cols-2">
          {lista.map((trabalho) => (
            <article
              key={trabalho.id}
              className="overflow-hidden rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-paper)] p-3 shadow-[0_18px_38px_rgba(15,16,13,0.05)]"
            >
              <div className="grid grid-cols-2 gap-3">
                {trabalho.before && (
                  <button
                    type="button"
                    onClick={() =>
                      setImagemAmpliada({
                        src: trabalho.before!,
                        alt: `${trabalho.titulo} antes`,
                      })
                    }
                    className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-[var(--color-paper-soft)] text-left"
                  >
                    <Image
                      src={trabalho.before}
                      alt={`${trabalho.titulo} antes`}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-2 top-2 rounded-full bg-black/60 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white">
                      Antes
                    </span>
                  </button>
                )}

                {trabalho.after && (
                  <button
                    type="button"
                    onClick={() =>
                      setImagemAmpliada({
                        src: trabalho.after!,
                        alt: `${trabalho.titulo} depois`,
                      })
                    }
                    className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-[var(--color-paper-soft)] text-left"
                  >
                    <Image
                      src={trabalho.after}
                      alt={`${trabalho.titulo} depois`}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-2 top-2 rounded-full bg-[var(--color-brand)] px-2 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white">
                      Depois
                    </span>
                  </button>
                )}
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-brand)]">
                    {trabalho.categoria}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-[var(--color-ink)]">
                    {trabalho.titulo}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {lista.map((trabalho) => (
            <button
              key={trabalho.id}
              type="button"
              onClick={() =>
                setImagemAmpliada({
                  src: trabalho.imagem,
                  alt: trabalho.titulo,
                })
              }
              className="group relative aspect-square overflow-hidden rounded-2xl bg-[var(--color-paper-soft)] text-left"
            >
              <Image
                src={trabalho.imagem}
                alt={trabalho.titulo}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/70 to-transparent p-4 text-sm text-white transition-transform duration-300 group-hover:translate-y-0">
                {trabalho.titulo}
              </span>
            </button>
          ))}
        </div>
      )}

      {imagemAmpliada && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setImagemAmpliada(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-[var(--color-ink)] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Fechar imagem ampliada"
              onClick={() => setImagemAmpliada(null)}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-xl text-white transition hover:bg-black/80"
            >
              ×
            </button>

            <div className="relative h-[80vh] w-full">
              <Image
                src={imagemAmpliada.src}
                alt={imagemAmpliada.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
