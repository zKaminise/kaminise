import { readFile, writeFile } from "node:fs/promises";
import { build } from "vite";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

// The same React page is rendered for everyone, with interactive hydration on load.
// Production React avoids development-only useLayoutEffect warnings during SSR.
process.env.NODE_ENV = "production";
await build({
  build: { ssr: "src/entry-server.tsx", outDir: "dist-ssr" },
  ssr: { noExternal: ["gsap"] },
});
const { render } = await import(
  pathToFileURL(resolve("dist-ssr/entry-server.js")).href
);
const html = await readFile("dist/index.html", "utf8");
const placeholder = '<div id="root"></div>';
if (!html.includes(placeholder)) throw new Error("Missing prerender root");
const content = render();
if (!content.includes("Salon 2Beauté ADN") || !content.includes("#servicos"))
  throw new Error("Prerendered content is incomplete");
await writeFile(
  "dist/index.html",
  html.replace(placeholder, () => `<div id="root">${content}</div>`),
);
console.log(
  "Homepage prerendered: projects, services and contact are available in HTML.",
);
