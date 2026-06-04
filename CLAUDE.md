# mezuri — Landing Page · Instruções para Claude Code

## Visão geral do projeto

Landing page da **mezuri**, plataforma de gestão para escritórios de arquitetura.
Stack: **React 18 + Vite 5 + gh-pages**. Sem roteamento, sem estado global, sem bibliotecas de UI.

---

## Estrutura de arquivos

```
mezuri-landing/
├── .github/workflows/deploy.yml   # CI/CD → GitHub Pages
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── logo-horizontal.svg    # usada na nav (desktop, fallback)
│   │   ├── logo-vertical.svg      # hero (não usada — inline no Hero.jsx)
│   │   ├── logo-simbolo.svg       # fallback
│   │   └── kunlatek.svg           # fallback
│   ├── components/
│   │   ├── Nav.jsx                # menu fixo, scroll spy, hamburger mobile
│   │   ├── Hero.jsx               # logo vertical inline, word-swap, scroll hint
│   │   ├── Problem.jsx            # 4 cards com ícone 32px
│   │   ├── HowItWorks.jsx         # 4 steps com ícone 18px
│   │   ├── Features.jsx           # grid 3×2 com ícone stroke
│   │   ├── ProductTour.jsx        # abas React (Dashboard/Clientes/Projetos/Tarefas)
│   │   ├── Exclusive.jsx          # regras com rule-check
│   │   ├── CTA.jsx                # seção final WhatsApp
│   │   ├── Footer.jsx             # 4 colunas + redes sociais + Kunlatek
│   │   ├── CookieBanner.jsx       # 2 etapas: simples e personalizado
│   │   └── useFadeUp.js           # hook utilitário (não usado diretamente — obs em App)
│   ├── App.jsx                    # monta tudo + IntersectionObserver global
│   ├── main.jsx
│   └── index.css                  # todo o CSS — variáveis, componentes, animações, mobile
├── index.html
├── vite.config.js
└── package.json
```

---

## Convenções importantes

### Logos e SVGs
- Os logos **não são importados como arquivo** — estão **inline como JSX** nos componentes.
- `Hero.jsx` → logo vertical completa (mezuri vertical com texto) inline como `<svg viewBox="248 183 302 432">`
- `Nav.jsx` → símbolo mezuri inline como `<svg viewBox="248 235 300 330" fill="#0f172a">`
- `Footer.jsx` → símbolo branco e logo Kunlatek branca, ambos inline
- Se precisar trocar logo: edite diretamente o JSX no componente, não importe arquivo

### CSS
- **Tudo está em `src/index.css`** — nenhum CSS-in-JS, nenhum módulo CSS
- Variáveis globais em `:root` — use sempre `var(--primary)`, `var(--border)`, etc.
- Classes utilitárias: `.fade-up`, `.container`, `.container-sm`, `.btn`, `.btn-primary`, `.btn-lg`
- Animações: `logoReveal`, `titleReveal`, `fadeUp`, `pulse-ring`, `floatY`, `arrowBounce`

### Scroll e navegação
- **Smooth scroll** gerenciado manualmente via `window.scrollTo` — não use `href="#id"` puro
- Offset fixo de **68px** para compensar o nav fixo: `el.getBoundingClientRect().top + window.scrollY - 68`
- Nav se esconde no hero via classe `nav-hidden` (opacity 0 + translateY(-100%))
- Scroll spy atualiza `active` via `useState` no `Nav.jsx`

### Animações fade-up
- O `IntersectionObserver` global está em `App.jsx` — roda uma vez no mount
- Elementos com `.fade-up` ganham `.visible` ao entrar na tela
- Stagger automático por grupo pai: delay de `0.1s × posição no pai`
- **Não adicione** `useEffect` de observer em componentes individuais

### Word-swap no Hero
- A palavra que troca (*merece / precisa / sempre quis*) está em `<span className="wr-swap" ref={swapRef}>`
- Troca começa após **1600ms** (espera o título aparecer), intervalo de **3200ms**
- Animação: fade via classe `.fading` (opacity 0 em 500ms, troca texto, remove `.fading`)

---

## Design tokens

```css
--bg: #ffffff
--fg: #0f172a
--muted: #f1f5f9
--muted-fg: #64748b
--border: #e2e8f0
--primary: #1a2035        /* azul-marinho escuro */
--primary-fg: #ffffff
--secondary: #f8fafc
--green: #16a34a
--red: #dc2626
--radius: 8px
--font: 'Inter', -apple-system, sans-serif
```

Cores especiais:
- Kunlatek: `#4711cb` (roxo) — mas no footer aparece **branca** via CSS inline
- Fundo seções escuras (`problem-section`, `exclusive-section`): `var(--primary)` = `#1a2035`

---

## WhatsApp CTA

Link padrão usado em **todos** os CTAs:
```
https://wa.me/5582996972131?text=Olá, gostaria de agendar um diagnóstico do mezuri
```

Está em: `CTA.jsx`, `Exclusive.jsx`, `Nav.jsx` (mobile-cta)

---

## Deploy GitHub Pages

### Configuração (fazer uma vez)

1. **`vite.config.js`** — altere `base` para o nome do repositório:
```js
base: '/nome-do-repo/',
```

2. **`package.json`** — altere `homepage`:
```json
"homepage": "https://seuusuario.github.io/nome-do-repo"
```

3. **`index.html`** — o favicon já aponta para `/mezuri/favicon.svg`.

### Deploy manual
```bash
npm install
npm run deploy        # build + publica no branch gh-pages
```

### Deploy automático (CI/CD)
O arquivo `.github/workflows/deploy.yml` faz build e deploy a cada push na `main`.
Não requer configuração extra — usa `GITHUB_TOKEN` nativo.

No GitHub: **Settings → Pages → Source: gh-pages branch**

---

## Adicionando ou editando seções

### Editar copy
Cada seção é autocontida. Ex: para mudar texto do Hero:
```jsx
// src/components/Hero.jsx
<p className="hero-sub">
  Novo texto aqui.
</p>
```

### Adicionar nova seção
1. Crie `src/components/NovaSeccao.jsx`
2. Importe e adicione em `App.jsx` na ordem desejada
3. Adicione CSS em `index.css` seguindo o padrão `.nova-section { padding: 5.5rem 2.5rem; }`
4. Se tiver elementos `.fade-up`, o observer global já os captura automaticamente

### Alterar ícones
Os ícones são SVG inline com `viewBox="0 0 24 24"`, stroke style (Lucide-compatible):
```jsx
<svg width="18" height="18" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" strokeWidth="1.75"
  strokeLinecap="round" strokeLinejoin="round">
  <path d="..."/>
</svg>
```

---

## Seções e seus IDs

| Seção | ID | data-section |
|---|---|---|
| Como funciona | `como-funciona` | `como-funciona` |
| Funcionalidades | `funcionalidades` | `funcionalidades` |
| Para quem é | `exclusividade` | `exclusividade` |
| Agendar / CTA | `agendar` | `agendar` |

Todos têm `scroll-margin-top: 60px` no CSS para compensar o nav fixo.

---

## Dependências

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "vite": "^5.1.0",
  "@vitejs/plugin-react": "^4.2.1",
  "gh-pages": "^6.1.1"
}
```

Nenhuma dependência de UI, ícones ou animação externa.

---

## Problemas comuns

| Problema | Causa | Solução |
|---|---|---|
| Logo não aparece | SVG importado como arquivo quebrou | Use inline JSX conforme padrão do projeto |
| Nav não some no hero | Classe `nav-hidden` não está no CSS | Verificar media query `@media (min-width: 769px)` no index.css |
| Fade-up não anima | Observer não encontrou `.fade-up` | Confirmar que o `setTimeout` em `App.jsx` está com delay de 100ms |
| Build falha | Import de SVG como módulo | Remova imports de SVG, use inline JSX |
| Deploy quebrado no GitHub Pages | `base` errado no vite.config.js | Confirmar que `base` bate com nome do repositório |
| Botões sem cor branca | CSS specificity | Adicionar `style={{ color: '#ffffff' }}` inline no elemento |
