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
  Navbar.tsx          # Header fixo com status de disponibilidade
  Hero.tsx            # Seção principal
  Projetos.tsx        # Produtos pessoais + cases de cliente
  Processo.tsx        # Pipeline de trabalho
  Marquee.tsx         # Stack strip
  Sobre.tsx           # Trajetória e timeline
  CTAFinal.tsx        # Seção de contato com formulário WhatsApp
  ClientStrip.tsx     # Faixa de clientes
  Testimonials.tsx    # Depoimentos (desativado até coletar reais)
  Footer.tsx
  CustomCursor.tsx
  MotionProvider.tsx
```

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
