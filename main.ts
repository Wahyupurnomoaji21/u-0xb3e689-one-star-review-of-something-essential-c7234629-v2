import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const MAX_LEN = 160;
const MIN_LEN = 1;

const fragments: string[] = [
  "One star. My knees creak every time I stand up,",
  "like an unoiled door.",
  "No warranty, no spares.",
  "Would not recommend.",
  "Unfortunately, returns are not accepted.",
];

function assembleReview(pieces: string[]): string {
  const joined = pieces.join(" ");
  return joined.replace(/\s+/g, " ").trim();
}

function assertSingleLine(text: string): void {
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (text.includes("  ")) {
    throw new Error("entry must not contain double spaces");
  }
}

function assertLength(text: string): void {
  if (text.length < MIN_LEN || text.length > MAX_LEN) {
    throw new Error(
      `entry length ${text.length} outside allowed range ${MIN_LEN}-${MAX_LEN}`,
    );
  }
}

function resolveEntryPath(): string {
  const scriptDir = dirname(fileURLToPath(import.meta.url));
  const raw = process.env.MAKEFUN_OUTPUT_DIR;
  if (!raw) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  const outDir = raw.startsWith("/") ? raw : join(scriptDir, raw);
  return join(outDir, "entry.txt");
}

const review = assembleReview(fragments);
assertSingleLine(review);
assertLength(review);

const destination = resolveEntryPath();
mkdirSync(dirname(destination), { recursive: true });
writeFileSync(destination, review, "utf8");
console.log(`wrote ${review.length} chars to ${destination}`);
