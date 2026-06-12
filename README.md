# Natanael Neves — Portfólio

Portfólio pessoal de Natanael Neves, Frontend Developer em Fortaleza, CE.

**Live:** [natanaelneves.vercel.app](https://natanaelneves.vercel.app)

---

## Stack

- **Next.js 14** — App Router, geração estática
- **React 18** — com diretiva `"use client"` onde necessário
- **TypeScript** — strict mode
- **Tailwind CSS v4** — com `@import "tailwindcss"` e design tokens via CSS custom properties
- **Framer Motion v12** — animações com `reducedMotion="user"` global
- **next/font** — Syne (display), Inter (corpo), DM Mono (técnico), Instrument Serif (itálico)

## Estrutura

```
app/
  layout.tsx          # Fonts, metadata, JSON-LD, MotionProvider
  page.tsx            # Composição das seções
  globals.css         # Design tokens, escala tipográfica, utilitários
  sitemap.ts          # Sitemap gerado automaticamente
  robots.ts           # robots.txt
  projetos/
    minhas-contas/    # Case study — Minhas Contas
    sessao/           # Case study — Sessão

components/
  motion.tsx          # Primitives de animação: EASE, Reveal, MaskLines, SectionHeader, Magnetic, CountUp
  Navbar.tsx          # Header com menu mobile, seção ativa e hide-on-scroll
  Hero.tsx            # Abertura: mask reveal, spotlight, parallax, relógio BRT, CTAs magnéticos
  Projetos.tsx        # Produtos com previews animados e tilt 3D + cases de cliente
  Processo.tsx        # Pipeline com espinha que desenha no scroll
  Marquee.tsx         # Marquee infinito da stack (CSS puro, pausa no hover)
  Sobre.tsx           # Trajetória com timeline scroll-linked
  CTAFinal.tsx        # Contato com formulário WhatsApp em painel
  ClientStrip.tsx     # Faixa de clientes
  Testimonials.tsx    # Depoimentos (desativado até coletar reais)
  Footer.tsx          # Assinatura "// end of log" com nome em outline
  CustomCursor.tsx    # Cursor dot + anel com lerp via rAF (para quando ocioso)
  ScrollProgress.tsx  # Linha de progresso de leitura no topo
  MotionProvider.tsx  # LazyMotion (bundle reduzido) + reducedMotion="user"
```

## Motion

Toda animação compartilha a mesma curva (`EASE` em `components/motion.tsx`) e usa
apenas `transform`/`opacity`. O framer-motion é carregado via `LazyMotion` com
componentes `m` (modo `strict`) — usar `motion.div` direto quebra em runtime de
propósito, para manter o bundle pequeno. `prefers-reduced-motion` é respeitado
globalmente (MotionConfig + media query no CSS).

> **Atenção:** não adicione resets CSS fora de `@layer` no `globals.css`. O
> preflight do Tailwind v4 vive em `@layer base`; um reset unlayered vence as
> utilities e zera todo `p-*`/`m-*` silenciosamente.

## Design tokens

Definidos em `app/globals.css`:

| Token | Valor | Uso |
|---|---|---|
| `--accent` | `#c8ff00` | Verde-limão — destaques |
| `--bg` | `#0c0c0c` | Fundo principal |
| `--surface` | `#141414` | Cards e painéis |
| `--text` | `#f2efe9` | Texto primário |
| `--text-2` | `rgba(242,239,233,0.62)` | Texto secundário |
| `--font-body` | Inter | Parágrafos e descrições |
| `--font-syne` | Syne | Headings e display |
| `--font-dm-mono` | DM Mono | Labels técnicos e tags |

## Desenvolvimento local

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## CV

O arquivo `public/natanael-neves-cv.pdf` é servido em `/natanael-neves-cv.pdf`. Substitua o arquivo para atualizar.

## Deploy

Hospedado na Vercel. Push para `master` faz deploy automático.

```bash
npm run build   # verifica build antes do push
```

## Depoimentos

O componente `<Testimonials />` está criado em `components/Testimonials.tsx` e comentado em `app/page.tsx`. Descomente quando tiver depoimentos reais dos clientes.
