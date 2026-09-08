# Sadina Santos — Site

Site institucional em Next.js 16 + React 19 + Tailwind v4 para o estúdio
Sadina Santos (Mega Hair), seguindo um padrão arquitetural com tokens de
cor via CSS variables, componentes em `layout/`, `sections/` e `ui/`, e
conteúdo centralizado em `content/`.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Publicando na Vercel

1. Crie um repositório no GitHub e suba esta pasta (ou use a CLI da Vercel direto, sem GitHub).
2. Em https://vercel.com, clique em "Add New… → Project" e importe o repositório.
3. Framework Preset: Next.js (detectado automaticamente). Não é preciso configurar nada extra.
4. Clique em Deploy. Pronto — a Vercel builda e publica automaticamente.

Ou, direto do terminal, dentro da pasta do projeto:
```bash
npm i -g vercel
vercel
```

## O que já está pronto

- Estrutura completa Next.js (App Router) com TypeScript e Tailwind v4
- Paleta de cores derivada da logo (rosa-magenta, preto-ameixa suavizado, marfim)
- Dark mode funcional, sem "flash" ao carregar, com preferência salva no navegador
- Header com comportamento scroll-aware e menu mobile
- Elementos gráficos remetendo à profissão: ícones de tesoura, secador e
  frasco de coloração, textura sutil de "pente", divisor animado em forma
  de mecha de cabelo, faixa corrida com os serviços
- 4 páginas: Início (`/`), Serviços (`/servicos`), Trabalhos (`/trabalhos`),
  Sobre (`/sobre`)
- Galeria de trabalhos com filtro por categoria (Mega Hair, Corte, Química, Penteado)
- Botão flutuante de WhatsApp e CTA de agendamento no header
- Build de produção testado e validado (`npm run build`), sem erros

## O que falta você preencher (marcado com `TODO` no código)

- `content/site.ts` — número real de WhatsApp, Instagram, endereço, horários e e-mail
- `content/servicos.ts` — revisar os textos finais dos serviços, se desejar
- `content/depoimentos.ts` — depoimentos reais de clientes
- `content/portfolio.ts` + `public/gallery/` — troque os SVGs de placeholder
  pelas fotos reais dos trabalhos (mesmo nome de arquivo ou atualize o
  caminho em `imagem`)
- `app/sobre/page.tsx` e `components/sections/About.tsx` — texto e foto reais
  de Sadina Santos ou do estúdio (hoje usa a logo como imagem provisória)

## Paleta de cores (`app/globals.css`)

| Token                   | Claro     | Escuro    |
| ------------------------ | --------- | --------- |
| `--color-paper` (fundo)  | `#fbf5f2` | `#1b1215` |
| `--color-ink` (texto)    | `#241019` | `#f6ece9` |
| `--color-brand` (rosa)   | `#d6127a` | `#ef4fa0` |
| `--color-gold` (acento)  | `#b8935a` | `#d2b483` |
