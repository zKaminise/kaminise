# Registro de validação

Validação inicial em 23/09/2026, com revisão de movimento em 28/09/2026, Node.js 22.20.0, npm e navegador Chromium integrado. Alterações feitas diretamente no clone solicitado. Commit e push autorizados pelo proprietário em 28/09/2026; publicação no domínio depende da hospedagem conectada ao repositório.

## Verificações técnicas

- `npm install`: concluído; lockfile atualizado.
- `npm run build`: aprovado, incluindo TypeScript estrito.
- `npm run lint`: aprovado.
- `npm audit`: nenhuma vulnerabilidade reportada na árvore instalada.
- `git diff --check`: sem erros de whitespace. O Git apenas informa a conversão habitual LF/CRLF do ambiente Windows.
- Console da prévia de produção: sem erros ou avisos na sessão de verificação.

Build após a revisão de movimento: aproximadamente 463 kB de JavaScript (158 kB gzip), 48 kB de CSS (13,4 kB gzip) e 3,64 kB de HTML (1,32 kB gzip). Esses valores são tamanhos de arquivos, não medições de Core Web Vitals. Fontes locais, imagens responsivas WebP e lazy loading estão implementados. Não foi executado Lighthouse; nenhuma nota de performance é atribuída.

## Responsividade e interação

Verificados viewports de 2560×1440, 1920×1080, 1440×900, 1366×768, 1280×720, 1024×768, 768×1024, 430×932, 390×844, 375×812 e 360×800. Uma quebra de linha no manifesto foi corrigida na largura de 360 px. Sem overflow horizontal após a correção. As composições desktop, intermediária e mobile também foram inspecionadas visualmente; não se trata de teste em aparelhos físicos ou em todos os motores de navegador.

- Menu mobile: abertura, fechamento por navegação, Escape, retorno de foco ao botão e restauração da rolagem.
- FAQ: expansão pelo teclado com Enter.
- Projetos complementares: expansão e visualização da captura no mobile.
- Navegação por âncoras e índice de etapas do processo.
- Rota inexistente: página 404 em português, título próprio e retorno funcional ao início.
- Hero e cases: composição e movimento durante a rolagem no desktop; apresentação vertical simplificada no mobile.
- Redução manual de movimento: Lenis desativado, hero fora do modo sticky, transforms removidos e conteúdo visível. Reativação também verificada.
- `prefers-reduced-motion`: integração revisada no hook compartilhado e nas regras CSS. A preferência do sistema prevalece sobre o controle manual; a configuração do sistema operacional não foi alterada durante os testes.
- Sem âncoras vazias ou destinos internos inexistentes. Imagens carregadas verificadas sem falhas.
- Os sete links de contato usam o número 5534998275292 e mensagem codificada corretamente. Nenhuma mensagem foi enviada.

## Destinos externos

Resultados da verificação de 23/09/2026:

| Projeto            | Resultado local                                                                   |
| ------------------ | --------------------------------------------------------------------------------- |
| Alçar Humà         | HTTP 200                                                                          |
| Odontologia Flavia | HTTP 200                                                                          |
| Clube das Zizas    | HTTP 200                                                                          |
| Acquagyn           | HTTP 200 após redirecionamento para www                                           |
| Saldanha Móveis    | HTTP 200 após redirecionamento para www                                           |
| Leandro Kaminise   | Falha de resolução DNS em `script.kaminisegrowth.com.br`, confirmada no navegador |
| Ecos da Alma       | HTTP 403; navegador apresenta Cloudflare Error 1000, DNS points to prohibited IP  |

Os dois últimos problemas pertencem aos domínios de destino. Os projetos, screenshots e URLs originais foram preservados; precisam de correção na hospedagem/DNS correspondente ou de um novo endereço confirmado pelo proprietário. Esses resultados refletem apenas o momento do teste.

## Publicação

O conteúdo publicável está em `dist/`. Nenhuma configuração de domínio ou hospedagem foi alterada diretamente. A hospedagem deve servir os arquivos estáticos e usar fallback para `index.html` nas rotas da aplicação. Após a publicação, conferir HTTPS, redirecionamento do domínio, sitemap, compartilhamento social e desempenho na infraestrutura real.

## Revisão de scroll — 28/09/2026

- Hero com tipografia se separando e três janelas em movimento individual. A composição das janelas usa camadas planas para evitar recortes entre superfícies inclinadas.
- Cases sobrepostos com recuo de escala, rotação discreta, máscaras e sombra de transição. Marcadores fora dos painéis sticky mantêm os pontos de scroll estáveis durante recalculações. Foco por teclado retorna ao projeto correspondente.
- Arquivo visual com movimento horizontal e progresso sincronizado à rolagem vertical; alternativa em coluna para telas pequenas e redução de movimento.
- Manifesto com máscaras por palavra e sublinhado progressivo; serviços com linhas e entradas laterais alternadas; monograma com parallax moderado.
- Conferidos visualmente: hero expandido, primeiro e segundo cases, sobreposição dos painéis, movimento horizontal e manifesto a 360 px. Sem imagens quebradas ou erros/avisos no console da sessão.
- Abertura de serviço com Enter confirmada. Redução manual desativa Lenis, sticky e transforms das novas cenas; reativação restaura o comportamento.
- Build com TypeScript estrito e lint aprovados após os ajustes. Os testes continuam locais, em Chromium, sem promessa de resultado em Lighthouse ou teste em hardware físico.

## Aplicação da identidade visual e retrato — 28/09/2026

- Logos fornecidas aplicadas ao cabeçalho, menu mobile, assinatura da seção Sobre, rodapé e página 404. Ícones da aba/Apple e imagem de compartilhamento também atualizados.
- Os cinco PNGs originais foram preservados em `src/assets/brand/`. Versões WebP e retrato responsivo em 480, 800 e 1122 px são gerados por `npm run assets:brand`.
- Foto real na seção Sobre com enquadramento 4:5 e parallax discreto, desativado pela preferência de movimento reduzido.
- Inspeção visual no desktop de 1281×884 e no mobile de 390×844 e 360×800; verificação adicional de layout a 768×1024. Sem overflow horizontal. Cabeçalho, menu, assinatura, foto e rodapé conferidos; imagens visíveis carregadas corretamente.
- Controle manual de movimento reduzido e reativação verificados; transforms da foto e da marca no rodapé removidos no modo reduzido.
- Ajustados a prioridade CSS da identidade do rodapé e o modo de mesclagem para integrar o fundo das logos às seções escuras, inclusive durante a animação.
- `npm run build`, `npm run lint` e `git diff --check` aprovados. Console da prévia sem erros ou avisos durante esta revisão.

## Revisão de usabilidade e marca — 29/09/2026

### Diagnóstico e melhorias aplicadas

- A logo horizontal ocupava espaço excessivo no cabeçalho. Navbar e menu agora usam somente o monograma, em 60 px no desktop e 54 px no mobile, preservando a área de toque e o nome acessível do link de início.
- A assinatura visual duplicada abaixo de “Muito prazer” foi removida. O texto foi alinhado verticalmente com o retrato, e a apresentação identifica Gabriel Misao em texto normal.
- Textos descritivos de 11–13 px dificultavam a leitura, sobretudo no mobile. Corpo de texto e respostas passaram a 15 px; CTAs, metadados e rodapé receberam ajustes de tamanho, quebra de linha e alvos de interação com pelo menos 44 px de altura.
- O índice do Processo podia ficar sob o navbar de 88 px. Agora fica a 108 px do topo; em desktop com altura até 660 px, acompanha o fluxo normal para evitar conteúdo inacessível.
- O mínimo de 320 px aplicado ao body desconsiderava a barra de rolagem em telas de 320 px. Removida essa restrição; largura útil de 305 px verificada sem rolagem horizontal.
- O foco dos acordeões foi movido para dentro do controle, sem cruzar o texto da resposta. Links de projetos agora identificam o destino e a abertura em nova aba para leitores de tela.
- A galeria animada podia selecionar imagens para 30vw e exibi-las a até 60vw. `sizes` agora acompanha a largura da composição, com alternativa para movimento reduzido; no teste a 1440×900 foram selecionadas as três imagens de 1280 px.
- A escolha manual de movimento agora persiste após recarregar a página. A redução definida pelo sistema continua prevalecendo e aparece explicitamente no controle desabilitado. Armazenamento bloqueado mantém a escolha durante a visita, sem interromper a página.

### Validação desta revisão

- Build de produção com TypeScript estrito, lint e verificação de whitespace aprovados.
- Layout verificado em 320×740, 360×800, 390×844, 768×1024, 1024×768, 1024×600, 1366×768 e 1440×900; sem overflow horizontal após os ajustes. Inspeção visual do hero, Sobre, menu mobile, Processo, serviços, FAQ, projeto expansível, galeria e página 404.
- Menu abre, navega e fecha com Escape, devolvendo o foco ao botão. Serviços, FAQ e projetos abrem pelo teclado. Retorno da página 404 ao início confirmado.
- Preferência de movimento reduzido permanece após reload; desativa transforms da foto e permite reativação. Verificações isoladas do hook também cobriram precedência do sistema e armazenamento indisponível.
- Nenhum destino interno inexistente ou imagem carregada com falha encontrado. Verificações locais em Chromium, sem execução de Lighthouse ou testes em aparelhos físicos.
- Nova checagem dos sete destinos externos: cinco HTTP 200; `script.kaminisegrowth.com.br` apresentou falha de DNS (`EAI_AGAIN`) e `ecosdaalma.com.br` respondeu HTTP 403. URLs preservadas; essas pendências dependem dos sites de destino.
