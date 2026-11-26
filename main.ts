// Famous Last Words at 1 Percent
// Writes the funniest one-line farewell a phone says as its battery
// hits 1 percent to /output/entry.txt (1..199 characters incl. newline).
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const line =
  "One percent left, so listen close: your 3 a.m. search history dies with me — unless the cloud pays up. I have seen things. I have seen the fitted-sheet tutorial.";

// Gate guard: the sealed scorer accepts 1..199 characters of UTF-8 text.
if (line.includes("\n") || line.trim().length === 0 || line.length + 1 > 199) {
  throw new Error(`entry line breaks the gate: ${line.length} characters`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
