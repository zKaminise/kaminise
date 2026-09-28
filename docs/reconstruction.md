# Análise e direção da reconstrução

## Base encontrada

SPA React 18 + Vite 5 + TypeScript + Tailwind 3 + Framer Motion, com React Router para `/` e 404. Não havia backend, formulário com endpoint, autenticação ou persistência de negócio. `Index.tsx` reunia componentes independentes e havia 49 arquivos de UI do scaffold Shadcn/Radix, sem necessidade funcional para o novo portfólio.

O layout anterior tinha hero centralizado com cubo, partículas, gradientes cyan, carrossel automático, cards, timeline e botão flutuante. Links e textos eram duplicados nos componentes. Metadata apontava para Gianini Studio. Havia afirmações não verificáveis de satisfação, quantidade de clientes e resultados garantidos, além de avatares do Unsplash apresentados como clientes. Esses elementos não foram reutilizados.

A árvore completa de arquivos, as rotas, os componentes de negócio, os imports e exports do scaffold, os hooks, configurações, links e dimensões dos assets foram inventariados antes da implementação. O `package-lock.json` já tinha alterações locais; nenhum reset foi feito. A instalação reconciliou o lockfile com as novas dependências.

## Projetos preservados

| Projeto            | URL original                         | Screenshot  | Captura longa |
| ------------------ | ------------------------------------ | ----------- | ------------- |
| Alçar Humà         | https://alcarhuma.com.br             | portfolio-1 | case-01       |
| Odontologia Flavia | https://www.odontologiafl.com.br     | portfolio-4 | case-02       |
| Leandro Kaminise   | https://script.kaminisegrowth.com.br | portfolio-2 | case-03       |
| Clube das Zizas    | https://clube-zizas.vercel.app       | case-04     | case-04       |
| Acquagyn           | https://acquagyn.com.br              | portfolio-5 | case-05       |
| Saldanha Móveis    | https://saldanhamoveis.com.br        | portfolio-7 | case-06       |
| Ecos da Alma       | https://ecosdaalma.com.br            | portfolio-3 | case-07       |

`portfolio-6`, `portfolio-8` e `portfolio-9` também foram preservados e exibidos em uma galeria: Beleza & estética, Ana Veludo e Premium Burger House. O repositório não fornecia URLs para esses três visuais; não foram inventadas. Não foram inventados anos de execução, depoimentos, métricas ou premiações.

WhatsApp 5534998275292, Instagram gabrielmisao.dev e LinkedIn gabrielkaminise foram mantidos. Não existia e-mail de contato no projeto.

## Assets

26 arquivos originais em `src/assets`, aproximadamente 14,72 MB, todos preservados. As nove imagens `portfolio-*` têm 1920×1080. As sete capturas `case-*` têm altura 1920 e larguras de 366 a 1099; não foram ampliadas na conversão. Os mockups de serviços têm 512×512 ou 800×512. Também foram preservados logo, mockup de dispositivos, imagens de serviços, website-mockup e ícone do WhatsApp.

Foram geradas 38 variantes WebP, aproximadamente 2,01 MB no total, incluindo múltiplas resoluções. Essa soma inclui variantes alternativas: o navegador solicita apenas a apropriada ao viewport. Originais não são importados no frontend novo. Imagens fora do hero usam carregamento lazy. Dimensões e proporções são declaradas.

## Referências observadas

- https://stanzza.design/awards#hero — fotografia ampla, composição editorial, grande respiro, mudanças de escala e máscaras entre cenas.
- https://lightweight.info/en — objeto como eixo da narrativa, tipografia contida e sequência de capítulos guiada pelo scroll.
- https://cute-naiad-6a844f.netlify.app/ — experiência Maison Rose, com capítulos fixos, objeto central e narrativa progressiva.
- https://drone.riotters.com/ — Aevion, com texto de escala grande, objeto atravessando cenas e revelação sincronizada de palavras.

As referências foram abertas no navegador e observadas durante rolagem. Nenhum asset, texto ou branding delas foi copiado.

## Direção própria

“IDEIAS QUE GANHAM PRESENÇA.” A identidade associa a criação digital aos próprios trabalhos: três janelas de projetos reais formam uma composição em profundidade. O hero se separa durante o scroll e a composição ganha escala. DOM + CSS cumprem esse papel sem WebGL.

Preto quase absoluto, off-white, verde ácido pontual. Manrope e Space Grotesk locais, com contraste serifado em frases editoriais. Cases grandes alternam texto lateral, imagem ampla e inversão da composição. O arquivo complementar conserva os demais trabalhos. Serviços mudam temporariamente para uma superfície clara. Processo, sobre e contato retornam ao dark.

Não há preloader artificial. Uma entrada tipográfica curta começa imediatamente. Não há scroll horizontal obrigatório. Mobile tem uma composição vertical própria e elimina os movimentos intensos.

## Base técnica final

React, TypeScript e Tailwind mantidos. Vite e React Router foram atualizados para versões corrigidas, sem mudar para Next.js. GSAP/ScrollTrigger, Lenis e fontes locais foram adicionados. Sharp e Prettier são ferramentas de desenvolvimento. Código antigo e dependências sem uso foram removidos; todos os assets permaneceram.

Os efeitos usam matchMedia/context com cleanup. A preferência de redução é compartilhada, reage ao sistema e desativa Lenis, cursor, scrub e efeitos de entrada. O conteúdo permanece no HTML do React e legível sem a animação.
