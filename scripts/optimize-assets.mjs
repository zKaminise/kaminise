import sharp from "sharp";
import { mkdir, readdir } from "node:fs/promises";
import { resolve } from "node:path";

const source = resolve("src/assets");
const output = resolve("public/images");
await mkdir(output, { recursive: true });
for (const file of await readdir(source)) {
  if (!/^(portfolio-|case-|mockup-).+\.png$/.test(file)) continue;
  const name = file.replace(".png", "");
  const widths = file.startsWith("portfolio") ? [640, 1280, 1920] : [800];
  for (const width of widths) {
    await sharp(resolve(source, file))
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 86 })
      .toFile(resolve(output, `${name}-${width}.webp`));
  }
}
console.log("WebP variants generated; original assets preserved.");
