import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const source = "src/assets/brand";
const output = "public/brand";
await mkdir(output, { recursive: true });

// Preserve the supplied artwork and portrait; only encode responsive web copies.
for (const name of [
  "logo-horizontal",
  "logo-principal",
  "monogram",
  "icon-square",
]) {
  await sharp(`${source}/${name}.png`)
    .webp({ quality: 94 })
    .toFile(`${output}/${name}.webp`);
}
for (const width of [480, 800, 1122]) {
  await sharp(`${source}/gabriel-misao-portrait.png`)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 88 })
    .toFile(`${output}/gabriel-misao-portrait-${width}.webp`);
}
await sharp(`${source}/icon-square.png`)
  .resize(64, 64)
  .png()
  .toFile("public/favicon.png");
await sharp(`${source}/icon-square.png`)
  .resize(180, 180)
  .png()
  .toFile("public/apple-touch-icon.png");
console.log("Logos, retrato responsivo e ícones preparados.");
