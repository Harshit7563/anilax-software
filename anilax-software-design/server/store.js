import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const DATA_DIR = path.join(__dirname, "data");

async function ensureDataDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

export async function readStore(name, fallback = []) {
  await ensureDataDir();
  const file = path.join(DATA_DIR, name);
  try {
    const raw = await fs.readFile(file, "utf8");
    return JSON.parse(raw);
  } catch (err) {
    if (err.code === "ENOENT") return fallback;
    throw err;
  }
}

export async function writeStore(name, data) {
  await ensureDataDir();
  const file = path.join(DATA_DIR, name);
  await fs.writeFile(file, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

export function nextId(items) {
  const max = items.reduce((n, row) => Math.max(n, Number(row.id) || 0), 0);
  return max + 1;
}
