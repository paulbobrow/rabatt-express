/**
 * Coupon feed importer (automation starter).
 *
 * Usage:
 *   node scripts/import-coupons.mjs
 *   COUPON_FEED_URL=https://... node scripts/import-coupons.mjs
 *
 * Without COUPON_FEED_URL it validates data/feed.example.json locally
 * and writes data/feed.last-import.json + a short report.
 *
 * Later: point COUPON_FEED_URL to Digidip/Awin/exported JSON and schedule
 * via GitHub Actions or Vercel Cron.
 */

import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const dataDir = path.join(root, "data");

async function loadFeed() {
  const remote = process.env.COUPON_FEED_URL?.trim();
  if (remote) {
    const headers = {};
    if (process.env.COUPON_FEED_TOKEN) {
      headers.Authorization = `Bearer ${process.env.COUPON_FEED_TOKEN}`;
    }
    const res = await fetch(remote, { headers });
    if (!res.ok) {
      throw new Error(`Feed HTTP ${res.status}: ${remote}`);
    }
    return res.json();
  }

  const local = path.join(dataDir, "feed.example.json");
  const raw = await readFile(local, "utf8");
  return JSON.parse(raw);
}

function validateFeed(feed) {
  const errors = [];
  if (!feed || !Array.isArray(feed.shops)) {
    errors.push("feed.shops must be an array");
    return errors;
  }

  for (const shop of feed.shops) {
    if (!shop.slug) errors.push("shop missing slug");
    if (!Array.isArray(shop.coupons)) {
      errors.push(`shop ${shop.slug || "?"} coupons must be array`);
      continue;
    }
    for (const coupon of shop.coupons) {
      if (!coupon.id) errors.push(`coupon in ${shop.slug} missing id`);
      if (!coupon.merchantUrl) errors.push(`coupon ${coupon.id} missing merchantUrl`);
      if (coupon.expiresAt && Number.isNaN(Date.parse(coupon.expiresAt))) {
        errors.push(`coupon ${coupon.id} invalid expiresAt`);
      }
    }
  }
  return errors;
}

function summarize(feed) {
  const now = Date.now();
  let coupons = 0;
  let expired = 0;
  for (const shop of feed.shops || []) {
    for (const coupon of shop.coupons || []) {
      coupons += 1;
      if (coupon.expiresAt && Date.parse(coupon.expiresAt) < now) expired += 1;
    }
  }
  return {
    shops: feed.shops?.length || 0,
    coupons,
    expired,
    generatedAt: feed.generatedAt || null,
    importedAt: new Date().toISOString(),
    source: process.env.COUPON_FEED_URL || "data/feed.example.json",
  };
}

async function main() {
  await mkdir(dataDir, { recursive: true });
  const feed = await loadFeed();
  const errors = validateFeed(feed);
  if (errors.length) {
    console.error("Feed invalid:");
    for (const error of errors) console.error("-", error);
    process.exit(1);
  }

  const report = summarize(feed);
  const stamp = report.importedAt.replace(/[:.]/g, "-");
  await writeFile(
    path.join(dataDir, "feed.last-import.json"),
    JSON.stringify({ report, feed }, null, 2),
    "utf8",
  );
  await writeFile(
    path.join(dataDir, `feed-report-${stamp}.json`),
    JSON.stringify(report, null, 2),
    "utf8",
  );

  console.log("Import OK");
  console.log(JSON.stringify(report, null, 2));
  console.log(
    "\nNext: map feed into src/data/shops.ts (or a DB) and redeploy. With Digidip/Awin IDs set, /out wraps links automatically.",
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
