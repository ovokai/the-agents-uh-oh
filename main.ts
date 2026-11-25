import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "bluffing";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
} catch {
  writeFileSync("entry.txt", ENTRY, "utf8");
}
