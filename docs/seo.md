# Busca no Google e pedidos de orçamento

Atualizado em 1 de outubro de 2026.

## O que está implementado

- Conteúdo da página pré-renderizado no build, com os mesmos textos e projetos apresentados ao visitante. O React ativa os menus e animações após o carregamento.
- Título e descrição focados em Gabriel Misao, desenvolvedor web e criação de sites; textos naturais sobre sites profissionais, landing pages e orçamento.
- Dados estruturados `Person`, `WebSite` e `Service`, sem avaliações, localização ou resultados inventados.
- Canonical, sitemap e robots preservados para `https://gabrielmisao.com.br/`.
- WhatsApp `(34) 99827-5292` com mensagem de orçamento, telefone visível e instruções do que informar para receber a proposta.
- Imagens WebP com dimensões reais no srcset, carregamento tardio abaixo da abertura e textos alternativos.

## Após publicar

1. Confirme que `https://gabrielmisao.com.br/` é o domínio principal em produção e que recebe este build. Se trocar de domínio, atualize também canonical, Open Graph, JSON-LD, robots e sitemap.
2. Verifique a propriedade do domínio no [Google Search Console](https://search.google.com/search-console). Essa etapa exige acesso à conta e, normalmente, ao DNS do domínio.
3. Envie `https://gabrielmisao.com.br/sitemap.xml` em Sitemaps.
4. Use Inspeção de URL para testar a página publicada e solicitar indexação. Confira a versão renderizada e eventuais impedimentos de rastreamento.
5. Acompanhe impressões, consultas e cliques. Publique estudos dos projetos com contexto real e mantenha os links do portfólio atualizados.

Não foi enviada uma solicitação de indexação nem configurado acesso ao Search Console neste trabalho. Não existe prazo ou posição garantida no Google. Repetir palavras-chave, adicionar uma meta tag de keywords ou se apresentar como agência sem ser uma não substitui conteúdo útil.

Fonte: [Guia de SEO do Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=pt-br).

## Manutenção

`npm run build` gera o site e a pré-renderização. `npm run check:build` verifica o HTML, os links, a ordem dos destaques, os metadados e as imagens. Depois de adicionar imagens em `src/assets`, execute `npm run assets:optimize` para atualizar as versões WebP e o manifesto com as dimensões reais.

Os arquivos `portfolio-brasa.jpg` e `portfolio-salon.jpg` são capturas das páginas públicas fornecidas. As três imagens `portfolio-ref-*` foram fornecidas pelo usuário e aparecem como referências de design, separadas da lista de projetos.
