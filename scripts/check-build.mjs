import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import sharp from "sharp";

const html = await readFile("dist/index.html", "utf8");
assert.match(html, /<main id="conteudo"/);
assert.equal((html.match(/<h1\b/g) || []).length, 1);
assert.match(html, /Desenvolvedor Web e Criação de Sites/);
assert.match(html, /wa\.me\/5534998275292\?text=/);
assert(!html.includes("mini-browser"));
assert(!html.includes("script.kaminisegrowth.com.br"));
assert(!html.includes('href="https://ecosdaalma.com.br"'));
const featured = [
  ...html.matchAll(/class="featured-project[\s\S]*?<h3>(.*?)<\/h3>/g),
].map((match) => match[1]);
assert.deepEqual(featured, [
  "Alçar Humà",
  "Odontologia Flavia",
  "BRASA",
  "Acquagyn",
]);
for (const url of [
  "https://curso-leandro.vercel.app/",
  "https://ecosdaalma.app.br/",
  "https://salon2beauteadn.com.br/",
])
  assert(html.includes(`href="${url}"`), `Missing project link: ${url}`);
const schema = JSON.parse(
  html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1],
);
assert.equal(
  schema["@graph"].find((item) => item["@type"] === "Person").telephone,
  "+55-34-99827-5292",
);
const canonical = html.match(/rel="canonical" href="([^"]+)"/)[1];
assert((await readFile("dist/sitemap.xml", "utf8")).includes(canonical));
for (const [, src] of html.matchAll(
  /(?:src|href)="(\/(?:images|brand|assets)\/[^"?]+)"/g,
))
  await access(`dist${src}`);
const manifest = JSON.parse(
  await readFile("src/data/image-manifest.json", "utf8"),
);
for (const asset of Object.values(manifest)) {
  for (const variant of asset.variants) {
    const metadata = await sharp(`dist/images/${variant.file}`).metadata();
    assert.equal(
      metadata.width,
      variant.width,
      `Incorrect srcset width: ${variant.file}`,
    );
  }
}
console.log(
  "Build checks passed: prerender, project order, contact, metadata and image variants.",
);
