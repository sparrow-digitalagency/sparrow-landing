// Verifies that every locale file has exactly the same set of message keys as en.json.
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const dir = join(import.meta.dirname, "..", "src", "messages");
const reference = "en.json";

function flatten(obj, prefix = "") {
  return Object.entries(obj).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "string") return [path];
    if (value && typeof value === "object") return flatten(value, path);
    throw new Error(`Invalid value at "${path}": must be a string or object`);
  });
}

const load = (file) =>
  new Set(flatten(JSON.parse(readFileSync(join(dir, file), "utf8"))));
const ref = load(reference);
let failed = false;

for (const file of readdirSync(dir).filter((f) => f.endsWith(".json"))) {
  if (file === reference) continue;
  const keys = load(file);
  const missing = [...ref].filter((k) => !keys.has(k));
  const extra = [...keys].filter((k) => !ref.has(k));
  if (missing.length || extra.length) {
    failed = true;
    console.error(`✗ ${file}`);
    missing.forEach((k) => console.error(`  missing: ${k}`));
    extra.forEach((k) => console.error(`  extra:   ${k}`));
  } else {
    console.log(`✓ ${file} (${keys.size} keys)`);
  }
}

if (failed) process.exit(1);
console.log(`✓ ${reference} is the reference (${ref.size} keys)`);
