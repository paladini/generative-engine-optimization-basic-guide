#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const quick = process.argv.includes("--quick");

const required = [
  "index.html",
  "lang/pt-br/index.html",
  "lang/en/index.html",
  "assets/css/site.css",
  "assets/js/site.js",
  "assets/images/geo-mark.svg",
  "assets/images/geo-basics-social.png",
  "robots.txt",
  "sitemap.xml",
];

const diagrams = [
  "assets/diagrams/geo-answer-pipeline.mmd",
  "assets/diagrams/geo-answer-pipeline.svg",
  "assets/diagrams/geo-content-loop.mmd",
  "assets/diagrams/geo-content-loop.svg",
  "assets/diagrams/geo-page-anatomy.mmd",
  "assets/diagrams/geo-page-anatomy.svg",
];

const failures = [];

function read(relativePath) {
  return readFileSync(join(root, relativePath), "utf8");
}

function assert(condition, message) {
  if (!condition) failures.push(message);
}

for (const file of required) {
  assert(existsSync(join(root, file)), `Missing required file: ${file}`);
}

if (!quick) {
  for (const file of diagrams) {
    assert(existsSync(join(root, file)), `Missing diagram asset: ${file}`);
  }
}

try {
  execFileSync(process.execPath, ["--check", join(root, "assets/js/site.js")], { stdio: "pipe" });
} catch (error) {
  failures.push("JavaScript syntax check failed for assets/js/site.js");
}

function collectIds(html) {
  const ids = new Set();
  const pattern = /\sid=["']([^"']+)["']/g;
  let match;
  while ((match = pattern.exec(html))) ids.add(match[1]);
  return ids;
}

function validatePngDimensions(file, expectedWidth, expectedHeight) {
  const buffer = readFileSync(join(root, file));
  const signature = buffer.subarray(0, 8).toString("hex");
  assert(signature === "89504e470d0a1a0a", `${file} is not a PNG image`);
  assert(buffer.readUInt32BE(16) === expectedWidth, `${file} should be ${expectedWidth}px wide`);
  assert(buffer.readUInt32BE(20) === expectedHeight, `${file} should be ${expectedHeight}px high`);
}

function validatePage(file, expectedLang, requiredText) {
  const html = read(file);
  const ids = collectIds(html);
  const anchors = [...html.matchAll(/href=["']#([^"']+)["']/g)].map((match) => match[1]);
  const externalLinks = [...html.matchAll(/<a\s+[^>]*href=["']https?:\/\/[^>]+>/g)].map((match) => match[0]);
  const jsonLdBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((match) => match[1]);

  assert(html.includes(`lang="${expectedLang}"`), `${file} has incorrect lang attribute`);
  assert(html.includes("<link rel=\"canonical\""), `${file} missing canonical link`);
  assert(html.includes("hreflang=\"en\""), `${file} missing English hreflang`);
  assert(html.includes("hreflang=\"pt-BR\""), `${file} missing pt-BR hreflang`);
  assert(jsonLdBlocks.length > 0, `${file} missing JSON-LD`);
  assert(html.includes(requiredText), `${file} missing required text: ${requiredText}`);
  assert(html.includes("assets/diagrams/geo-answer-pipeline.svg") || html.includes("../../assets/diagrams/geo-answer-pipeline.svg"), `${file} missing pipeline diagram reference`);
  assert(html.includes("geo-basics-social.png"), `${file} missing social preview image reference`);
  assert(html.includes("target=\"_blank\" rel=\"noopener\""), `${file} source links should open safely`);

  for (const block of jsonLdBlocks) {
    try {
      const data = JSON.parse(block);
      const graph = Array.isArray(data["@graph"]) ? data["@graph"] : [data];
      const types = graph.map((entry) => entry["@type"]);
      assert(types.includes("TechArticle"), `${file} JSON-LD missing TechArticle`);
      assert(types.includes("FAQPage"), `${file} JSON-LD missing FAQPage`);
    } catch (error) {
      failures.push(`${file} has invalid JSON-LD`);
    }
  }

  for (const anchor of anchors) {
    assert(ids.has(anchor), `${file} links to missing anchor #${anchor}`);
  }

  for (const link of externalLinks) {
    assert(link.includes("target=\"_blank\" rel=\"noopener\""), `${file} has unsafe external link: ${link}`);
  }
}

if (existsSync(join(root, "index.html"))) {
  validatePage("index.html", "en", "Generative Engine Optimization");
}

if (existsSync(join(root, "lang/pt-br/index.html"))) {
  validatePage("lang/pt-br/index.html", "pt-BR", "Otimização para Motores Generativos");
}

if (!quick) {
  const css = read("assets/css/site.css");
  const sitemap = read("sitemap.xml");
  const robots = read("robots.txt");

  validatePngDimensions("assets/images/geo-basics-social.png", 1200, 630);
  assert(!css.includes("border-radius: 999"), "CSS should avoid pill-heavy styling");
  assert(sitemap.includes("https://paladini.github.io/generative-engine-optimization-basic-guide/"), "sitemap missing canonical project URL");
  assert(robots.includes("Sitemap:"), "robots.txt missing sitemap directive");
}

if (failures.length) {
  console.error("Static validation failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Static validation passed${quick ? " (quick)" : ""}.`);
