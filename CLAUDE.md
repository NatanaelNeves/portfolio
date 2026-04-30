@AGENTS.md
# MISSÃO: Elevar o portfólio ao nível profissional

## CONTEXTO
Este é o portfólio de Natanael Neves, desenvolvedor full stack de 23 anos de Fortaleza-CE.
Stack atual: Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion.
Objetivo: o site deve parecer um produto, não um currículo. Deve converter visita em contato.

---

## FASE 1 — DIAGNÓSTICO COMPLETO

Antes de qualquer alteração, faça uma varredura completa no projeto:

1. Liste todos os erros de TypeScript (`tsc --noEmit`)
2. Liste todos os warnings do ESLint
3. Identifique componentes com textos genéricos ou placeholders
4. Identifique animações ausentes ou inconsistentes
5. Verifique se todos os links (`href`) apontam para destinos reais
6. Verifique se a API route `/api/diagnostico` está funcional e retornando JSON válido
7. Verifique responsividade — mobile primeiro
8. Relate tudo antes de começar a corrigir

---

## FASE 2 — CORREÇÃO DE ERROS

Corrija todos os erros encontrados na Fase 1, nesta ordem de prioridade:

1. Erros de TypeScript que quebram o build
2. Erros de runtime (console errors)
3. Links quebrados ou `href="#"` que deveriam apontar para algo real
4. Warnings de acessibilidade (alt em imagens, aria-labels em botões icon-only)
5. Warnings do ESLint

---

## FASE 3 — COPY E TEXTOS

Substitua qualquer texto genérico pelos textos abaixo. Não invente texto novo — use exatamente o que está especificado.

### Hero
- Tag: `Desenvolvedor Full Stack · Fortaleza, CE`
- Headline: `Ideias confusas se tornam produtos digitais que funcionam.` (com `<em>` em "que funcionam.")
- Subheadline: `Desenvolvo sistemas e sites com foco no problema real — não na tecnologia pela tecnologia. Do diagnóstico ao deploy, com clareza em cada etapa.`
- Botão primário: `Diagnosticar ideia` → ancora `#diagnostico`
- Botão secundário: `Ver projetos` → ancora `#projetos`

### Como eu penso
- Headline: `Estratégia antes de execução.` (com `<em>` em "execução.")
- Card 01 — título: `Problema primeiro` | texto: `Antes de abrir o editor, eu entendo o que realmente precisa ser resolvido. A maioria dos bugs começa no briefing, não no código.`
- Card 02 — título: `Usuário no centro` | texto: `Interface bonita que confunde é produto ruim. Eu projeto para quem vai usar — não para quem vai ver o screenshot.`
- Card 03 — título: `Código como ferramenta` | texto: `Stack não é identidade. Escolho tecnologia pelo contexto, não pelo hype. O critério é sempre: resolve bem, mantém fácil, escala quando precisar.`

### Processo
- Headline: `Sem surpresas, sem achismos.` (com `<em>` em "achismos.")
- Step 01: `Conversa real sobre o problema, o usuário e o contexto. Sem essa etapa, tudo que vem depois é chute.`
- Step 02: `Fluxos, arquitetura e decisões técnicas documentadas antes de escrever código. O que parece perda de tempo aqui evita retrabalho depois.`
- Step 03: `Entregas parciais funcionais, não um big bang no final. Você acompanha, testa e valida junto enquanto o produto cresce.`
- Step 04: `Deploy feito, documentação escrita, você sabe usar o que foi construído. Sem dependência eterna de suporte.`

### Princípios
- Headline: `O que não negocio em nenhum projeto.` (com `<em>` em "projeto.")
- 01 Clareza: `Se você não entendeu o que foi entregue, o projeto não está pronto. Clareza não é opcional — é o produto.`
- 02 Responsabilidade: `Assumi, entrego. Se algo mudar no caminho, você é o primeiro a saber — não o último.`
- 03 Excelência: `'Funciona no meu computador' não é critério de entrega. O padrão é: funciona, performa e resiste ao uso real.`
- 04 Simplicidade: `Código complexo sem necessidade é dívida técnica disfarçada de esforço. A solução certa é a mais simples que resolve o problema.`

### Sobre — blocos de texto
- Bloco 1 título: `Penso como arquiteto, executo como dev.`
  texto: `Já entreguei sistemas pra ONG com dezenas de usuários, site com CMS pra cliente não-técnica gerenciar sozinha e app de treino com feedback em tempo real. Em todos, a primeira pergunta foi a mesma: qual é o problema de verdade?`
- Bloco 2 título: `Stack muda. Raciocínio, não.`
  texto: `Trabalho com TypeScript, React, Node.js e Azure no dia a dia. Mas já escolhi Firebase quando fazia mais sentido, Sanity quando o cliente precisava de autonomia e SQL quando consistência era inegociável. Contexto define ferramenta.`
- Bloco 3 título: `Clareza como padrão, não exceção.`
  texto: `Cada etapa tem critério de aceite. Cada decisão tem razão documentada. Você não vai receber um produto pronto sem entender o que está recebendo.`

### Diagnóstico
- Headline: `Me conta sua ideia. Eu digo por onde começar.` (com `<em>` em "por onde começar.")
- Sub: `Descreve o que você quer construir — mesmo que ainda esteja bagunçado. Retorno um diagnóstico com o problema real, estrutura sugerida e próximos passos concretos.`
- Placeholder: `Ex: Tenho uma clínica e perco muito tempo marcando consulta por WhatsApp. Queria algo mais organizado, mas não sei por onde começar...`

### CTA Final
- Headline: `Vamos tirar sua ideia do papel?` (com `<em>` em "do papel?")
- Sub: `Me chama. A primeira conversa é sem compromisso.`
- Botão WhatsApp: `Falar no WhatsApp →`
- Botão Email: `Enviar email`

---

## FASE 4 — ANIMAÇÕES

Implemente ou revise as animações abaixo. Use Framer Motion em tudo.

### Regras globais de animação
- `initial={{ opacity: 0, y: 30 }}`
- `whileInView={{ opacity: 1, y: 0 }}`
- `transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}`
- `viewport={{ once: true, amount: 0.12 }}`
- Nunca animar dois elementos com o mesmo delay na mesma seção — sempre stagger

### Hero — animações de entrada (só no mount, não whileInView)
- Tag linha: delay 0.2s
- H1: delay 0.4s, duration 0.8s
- Parágrafo: delay 0.7s
- Botões: delay 0.9s
- Scroll indicator: delay 1.5s, fadeIn apenas

### CustomCursor
Se ainda não existir, criar `components/CustomCursor.tsx`:
- Dot: 10px, `background: var(--accent)`, `mix-blend-mode: difference`, segue o mouse sem delay
- Ring: 34px, `border: 1px solid rgba(200,255,0,0.35)`, segue com lag via `requestAnimationFrame` e interpolação `pos += (target - pos) * 0.1`
- `cursor: none` no `body` via `globals.css`
- Montar no `layout.tsx` fora do `<main>`

### Marquee
- Animação CSS pura: `@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`
- Duration: 22s, linear, infinite
- A lista de itens deve ser duplicada no DOM para loop seamless

### Cards — ComoEuPenso e Princípios
- Usar `staggerChildren: 0.14` no container
- Cada card: `variants` com hidden/show
- Hover: `whileHover={{ y: -4 }}` suave

### Processo — barra de progresso
- Cada barra: `initial={{ width: 0 }}`, `whileInView={{ width: "100%" }}`, `transition={{ duration: 0.9, ease: "easeOut" }}`
- `viewport={{ once: true, amount: 0.8 }}` — só anima quando o card está bem visível

### Projetos — accordion
- Usar `AnimatePresence` com `initial={false}`
- `motion.div` com `initial={{ height: 0, opacity: 0 }}`, `animate={{ height: "auto", opacity: 1 }}`, `exit={{ height: 0, opacity: 0 }}`
- Ícone `+` rotaciona 45° com `animate={{ rotate: isOpen ? 45 : 0 }}`

### Diagnóstico — resultado
- Container do resultado: `AnimatePresence` + slide down ao aparecer
- Cada `ResultItem`: stagger de 0.08s entre os blocos
- Loading dots: CSS `animation: pulse 1.2s ease infinite` com delays 0s / 0.2s / 0.4s

---

## FASE 5 — POLIMENTO VISUAL

### Tipografia
- Confirme que `Syne` está sendo usado nos headings (classe `headline`)
- Confirme que `DM Mono` está em todos os labels, tags e textos mono
- Confirme que `Instrument Serif` italic está nos `<em>` dentro de headlines
- Se alguma fonte não estiver carregando, revisar o import em `layout.tsx`

### Espaçamento e grid
- Seções com `section-shell`: padding `py-28 px-6 md:px-12`
- Grids com divisória: `gap: 1px; background: var(--border)` no container, filhos com `background: var(--bg)` ou `var(--surface)`
- Alternar `bg-[var(--bg)]` e `bg-[var(--surface)]` entre seções consecutivas

### Navbar
- Ao scrollar >50px: adicionar `border-b border-[var(--border)]` + `backdrop-blur-md` + `bg-[rgba(10,10,10,0.88)]`
- Transição suave com `transition: background 0.3s, border-color 0.3s`
- Link ativo: cor `var(--accent)` se a seção estiver no viewport

### Botões
- `btn-primary`: `background: var(--accent)`, `color: #000`, `font-weight: 700`, border-radius 2px
- `btn-ghost`: `border: 1px solid var(--border)`, hover `border-color: var(--accent)` + `color: var(--accent)`
- Ambos: `whileHover={{ scale: 1.04 }}`, `whileTap={{ scale: 0.97 }}`

### Stack tags nos projetos
- `font-family: DM Mono`, `font-size: 0.65rem`, uppercase, `letter-spacing: 0.14em`
- `border: 1px solid var(--border)`, `padding: 0.25rem 0.6rem`
- Cor `var(--muted)`, sem hover (são informativos)

---

## FASE 6 — RESPONSIVIDADE MOBILE

Revise cada seção no breakpoint `< 768px`:

- Hero: headline com `clamp(2.6rem, 7vw, 7rem)`, botões empilhados em coluna
- ComoEuPenso: grid 1 coluna
- Projetos: header do card empilhado, stack tags com quebra
- Processo: grid 1 coluna (não 4)
- Sobre: grid 1 coluna, sem sticky
- Princípios: grid 1 coluna
- Navbar: esconder links e manter só logo + botão CTA (ou adicionar menu hamburger simples)
- CustomCursor: desativar em dispositivos touch (`window.matchMedia('(hover: none)')`)

---

## FASE 7 — VALIDAÇÃO FINAL

Depois de todas as alterações:

1. Rodar `tsc --noEmit` — zero erros
2. Rodar `next build` — build deve passar sem warnings críticos
3. Testar o fluxo do Diagnóstico de ponta a ponta — textarea → botão → loading → resultado
4. Testar todos os links externos (GitHub, WhatsApp, email)
5. Verificar no mobile (375px) e tablet (768px)
6. Confirmar que o cursor customizado aparece no desktop e some no mobile
7. Confirmar que todas as animações de scroll disparam corretamente

---

## RESTRIÇÕES IMPORTANTES

- Não altere a estrutura de pastas sem necessidade
- Não troque de biblioteca de animação (manter Framer Motion)
- Não adicione dependências sem confirmar antes
- Não invente projetos, experiências ou textos — use apenas o que está neste prompt
- Não remova a seção de Diagnóstico — ela é o principal diferencial do site
- Mantenha o design system: `--bg #0a0a0a`, `--surface #111`, `--border #222`, `--text #f0ede8`, `--muted #888`, `--accent #c8ff00`