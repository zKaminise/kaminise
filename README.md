# Gabriel Misao — Creative Developer

Portfólio pessoal em React, Vite e TypeScript. Design editorial em preto, off-white e verde ácido, com projetos reais e contato pelo WhatsApp.

## Executar

Requer Node.js 22.12 ou superior.

```sh
npm install
npm run dev
```

Prévia local: http://127.0.0.1:8080

```sh
npm run build
npm run preview
npm run lint
npm run typecheck
npm run format
```

O build verifica TypeScript estrito e gera `dist/`. Publique o conteúdo de `dist/` na hospedagem do domínio. Configure fallback de rotas para `index.html`, mantendo os arquivos estáticos acessíveis. Nenhum push ou deploy é executado por esses comandos.

## Organização

- `src/components/layout`: navegação, menu nativo acessível, links e rodapé.
- `src/components/sections`: hero, manifesto, projetos, serviços, processo, sobre e FAQ.
- `src/components/motion`: Lenis, cursor e controle de movimento.
- `src/data/projects.ts`: todos os projetos, imagens e URLs.
- `src/data/site.ts`: contatos, serviços, processo e respostas do FAQ.
- `src/hooks/useMotionPreference.ts`: preferência do sistema e redução manual de movimento.
- `src/index.css`: tokens, composições, breakpoints e estilos de acessibilidade.
- `src/assets`: todos os arquivos originais, preservados.
- `public/images`: versões WebP responsivas.

## Imagens e SEO

```sh
npm run assets:optimize
npm run assets:brand
npm run assets:social
node scripts/check-links.mjs
```

`assets:optimize` gera WebP dos projetos sem ampliar os originais. `assets:brand` prepara as logos, os ícones e três tamanhos da foto de perfil. Os cinco arquivos enviados pelo proprietário ficam preservados em `src/assets/brand`. `assets:social` atualiza a imagem de compartilhamento usando a logo principal. As fontes são servidas localmente, sem requisições ao Google Fonts.

Metadata, canonical, Open Graph, Twitter Card e JSON-LD estão em `index.html`. Sitemap e robots estão em `public/`. Para mudar de domínio, atualize esses três arquivos.

## Movimento e acessibilidade

O hero tem três fases ligadas ao scroll: separação da tipografia, abertura das janelas e composição expandida. Os cases se sobrepõem enquanto o anterior recua em escala; a galeria do arquivo se desloca horizontalmente com a rolagem vertical. Essas duas cenas usam sticky nativo somente a partir de 1000 px de largura e 650 px de altura. Em telas menores, os projetos seguem em fluxo vertical com movimentos curtos.

Manifesto e linhas de serviços têm animações próprias, com máscaras e deslocamento lateral. A foto real da seção Sobre tem parallax discreto dentro de uma moldura, sem girar o retrato. O processo tem índice sticky e conteúdo legível no fluxo. Framer Motion anima os links do menu. Lenis e cursor só entram em desktop com ponteiro preciso. O cursor do sistema permanece disponível.

`prefers-reduced-motion` desativa as grandes animações, smooth scroll e sticky do hero. O botão no rodapé permite reduzir o movimento também por escolha do visitante e salva essa escolha para as próximas visitas, quando o armazenamento está disponível. A preferência de redução do sistema sempre prevalece e é identificada no controle.

O menu usa `dialog.showModal()` para contenção de foco, Escape e restauração de foco. Projetos, serviços e FAQ usam `details/summary`, com operação nativa por teclado e toque.

Veja [a análise da reconstrução](docs/reconstruction.md) e [o registro de validação](docs/validation.md).
