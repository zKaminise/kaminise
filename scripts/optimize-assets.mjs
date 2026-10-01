import sharp from "sharp";
import { mkdir, readdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const source = resolve("src/assets");
const output = resolve("public/images");
await mkdir(output, { recursive: true });
const manifest = {};
for (const file of await readdir(source)) {
  if (!/^(portfolio-|case-|mockup-).+\.(png|jpg)$/.test(file)) continue;
  const name = file.replace(/\.(png|jpg)$/, "");
  const metadata = await sharp(resolve(source, file)).metadata();
  const variants = [];
  const widths = file.startsWith("portfolio") ? [640, 1280, 1920] : [800];
  for (const width of widths) {
    const info = await sharp(resolve(source, file))
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 86 })
      .toFile(resolve(output, `${name}-${width}.webp`));
    if (!variants.some((variant) => variant.width === info.width))
      variants.push({ file: `${name}-${width}.webp`, width: info.width });
  }
  manifest[name] = { width: metadata.width, height: metadata.height, variants };
}
await writeFile(
  resolve("src/data/image-manifest.json"),
  JSON.stringify(manifest, null, 2) + "\n",
);
console.log("WebP variants generated; original assets preserved.");
