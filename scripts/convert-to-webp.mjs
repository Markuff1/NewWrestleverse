import { readdir, stat, unlink } from "node:fs/promises";
import { join, extname, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = join(__dirname, "..", "public", "Images");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Windows Defender/indexer transiently locks freshly-written files; retry with backoff.
async function withRetry(fn, attempts = 10) {
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      if (err.code !== "EBUSY" || i === attempts - 1) throw err;
      await sleep(Math.min(300 * 2 ** i, 4000));
    }
  }
}

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(fullPath);
    } else {
      yield fullPath;
    }
  }
}

async function main() {
  let converted = 0;
  let skipped = 0;
  let failed = 0;
  let sizeBefore = 0;
  let sizeAfter = 0;
  const failures = [];

  for await (const filePath of walk(IMAGES_DIR)) {
    if (extname(filePath).toLowerCase() !== ".png") continue;

    const dir = dirname(filePath);
    const name = basename(filePath, extname(filePath));
    const webpPath = join(dir, `${name}.webp`);

    try {
      let webpAlreadyExists = true;
      try {
        await stat(webpPath);
      } catch {
        webpAlreadyExists = false;
      }

      if (webpAlreadyExists) {
        // webp already exists (e.g. from a prior interrupted run) — just
        // make sure the stale source png doesn't linger alongside it.
        await withRetry(() => unlink(filePath)).catch(() => {});
        skipped++;
        continue;
      }

      const before = (await stat(filePath)).size;
      await sharp(filePath)
        .webp({ quality: 82, effort: 6 })
        .toFile(webpPath);
      const after = (await stat(webpPath)).size;

      await withRetry(() => unlink(filePath));

      sizeBefore += before;
      sizeAfter += after;
      converted++;
    } catch (err) {
      failed++;
      failures.push({ filePath, message: err.message });
    }
  }

  const mb = (bytes) => (bytes / (1024 * 1024)).toFixed(1);
  console.log(`Converted: ${converted}`);
  console.log(`Skipped (already had .webp): ${skipped}`);
  console.log(`Failed: ${failed}`);
  console.log(`Size: ${mb(sizeBefore)} MB -> ${mb(sizeAfter)} MB`);
  if (failures.length > 0) {
    console.log("\nFailures:");
    failures.forEach((f) => console.log(`  ${f.filePath}: ${f.message}`));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
