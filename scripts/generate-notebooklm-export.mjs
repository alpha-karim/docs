#!/usr/bin/env node
/**
 * Regenerates notebooklm-export.md from Mintlify MDX sources.
 * Usage: node scripts/generate-notebooklm-export.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DOCS_JSON = path.join(ROOT, "docs.json");
const AGENTS_MD = path.join(ROOT, "AGENTS.md");
const OUTPUT = path.join(ROOT, "notebooklm-export.md");

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function write(file, content) {
  fs.writeFileSync(file, content, "utf8");
}

function collectPagesFromNav(navigation) {
  const pages = [];
  for (const tab of navigation.tabs ?? []) {
    for (const group of tab.groups ?? []) {
      for (const page of group.pages ?? []) {
        pages.push(page);
      }
    }
  }
  return pages;
}

function pageToFile(page) {
  if (page === "index") return path.join(ROOT, "index.mdx");
  return path.join(ROOT, `${page}.mdx`);
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };
  const metaBlock = match[1];
  const body = match[2];
  const meta = {};
  for (const line of metaBlock.split("\n")) {
    const m = line.match(/^(\w+):\s*"(.*)"\s*$/);
    if (m) meta[m[1]] = m[2];
  }
  return { meta, body };
}

function extractTerminology(agentsMd) {
  const start = agentsMd.indexOf("## Terminology");
  if (start === -1) return "";
  const rest = agentsMd.slice(start);
  const end = rest.indexOf("\n## ");
  const section = end === -1 ? rest : rest.slice(0, end);
  return section.replace(/^## Terminology[^\n]*\n\n/, "").trim();
}

function convertMintlifyComponents(body) {
  let out = body;

  // <Steps> … </Steps>
  out = out.replace(/<Steps>([\s\S]*?)<\/Steps>/g, (_, inner) => {
    const steps = [...inner.matchAll(/<Step title="([^"]*)">\s*([\s\S]*?)<\/Step>/g)];
    return steps
      .map((m, i) => `${i + 1}. **${m[1]}** — ${m[2].trim()}`)
      .join("\n");
  });

  // <CardGroup> … </CardGroup>
  out = out.replace(/<CardGroup[^>]*>([\s\S]*?)<\/CardGroup>/g, (_, inner) => {
    const cards = [...inner.matchAll(/<Card title="([^"]*)"[^>]*>\s*([\s\S]*?)<\/Card>/g)];
    return cards.map((m) => `- **${m[1]}:** ${m[2].trim()}`).join("\n");
  });

  for (const tag of ["Warning", "Note", "Tip"]) {
    const re = new RegExp(`<${tag}>\\s*([\\s\\S]*?)\\s*<\\/${tag}>`, "g");
    out = out.replace(re, (_, content) => `**${tag}:** ${content.trim()}`);
  }

  // Strip any remaining simple JSX tags
  out = out.replace(/<\/?[A-Za-z][^>]*>/g, "");

  // Normalize internal doc links to plain text labels where helpful
  out = out.replace(/\[([^\]]+)\]\(\/alpharelay\/[^)]+\)/g, "$1");
  out = out.replace(/\[([^\]]+)\]\(\/[^)]+\)/g, "$1");

  // Collapse excessive blank lines
  out = out.replace(/\n{3,}/g, "\n\n").trim();

  return out;
}

function buildExport() {
  const docsJson = JSON.parse(read(DOCS_JSON));
  const pages = collectPagesFromNav(docsJson.navigation);
  const terminology = extractTerminology(read(AGENTS_MD));
  const generatedAt = new Date().toISOString().slice(0, 10);

  const sections = [];

  sections.push(`# AlphaRelay Operator Documentation — NotebookLM Export`);
  sections.push("");
  sections.push(`Generated on ${generatedAt} by \`scripts/generate-notebooklm-export.mjs\`.`);
  sections.push("");
  sections.push("**Web app:** https://www.alpha-relay.com");
  sections.push("**Pilot app (APK):** https://www.alpha-relay.com/download.html");
  sections.push("");
  sections.push("---");
  sections.push("");
  sections.push("## Terminology (match the product UI)");
  sections.push("");
  sections.push(terminology);
  sections.push("");
  sections.push("---");
  sections.push("");

  for (const page of pages) {
    const file = pageToFile(page);
    if (!fs.existsSync(file)) {
      console.warn(`skip missing page: ${page} (${file})`);
      continue;
    }
    const { meta, body } = parseFrontmatter(read(file));
    const title = meta.title || page;
    const converted = convertMintlifyComponents(body);

    sections.push(`## ${title}`);
    sections.push("");
    sections.push(converted);
    sections.push("");
    sections.push("---");
    sections.push("");
  }

  const content = sections.join("\n").replace(/\n---\n\n$/, "\n");
  write(OUTPUT, content);
  console.log(`Wrote ${OUTPUT} (${pages.length} pages)`);
}

buildExport();
