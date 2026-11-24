import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Entry point lives at the repository root; resolve paths relative to it,
// never relative to the process working directory.
const entryDir = dirname(fileURLToPath(import.meta.url));

const entry = `I'm sorry — I shredded your daughter's drawing of our house, mistaking it for the junk mail piled on the table.\nI've learned to check for crayon marks and tape before I shred anything, so from now on I'll hold every paper up for you first.`;

// The grader sets MAKEFUN_OUTPUT_DIR; fall back to ./output beside main.ts.
const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : join(entryDir, "output");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
