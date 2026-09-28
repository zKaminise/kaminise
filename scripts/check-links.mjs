import { readFile } from "node:fs/promises";
const source = await readFile("src/data/projects.ts", "utf8");
const urls = [...source.matchAll(/url: "(https:[^"]+)"/g)].map(
  (match) => match[1],
);
const results = await Promise.all(
  urls.map(async (url) => {
    try {
      const response = await fetch(url, {
        method: "GET",
        signal: AbortSignal.timeout(12000),
      });
      await response.body?.cancel();
      return { url, status: response.status, finalUrl: response.url };
    } catch (error) {
      return { url, error: error.cause?.code || error.message };
    }
  }),
);
console.log(JSON.stringify(results, null, 2));
