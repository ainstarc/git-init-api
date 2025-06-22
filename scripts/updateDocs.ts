import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import { GIT_DOCS_HTML_DIR } from "../src/config";

const DOCS_BASE = "https://git-scm.com/docs";

// --- Ensure directory exists
function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// --- Get all command names from git-scm/docs
async function getAllCommands(): Promise<string[]> {
  const res = await fetch(DOCS_BASE);
  const html = await res.text();
  const regex = /href="\/docs\/git-([a-z0-9\-]+)"/gi;
  const commands = new Set<string>();

  let match: any;
  while ((match = regex.exec(html)) !== null) {
    commands.add(match[1]);
  }

  return Array.from(commands);
}

// --- Fetch and save each Git command HTML
export async function fetchAndSaveGitHTMLDocs() {
  ensureDir(GIT_DOCS_HTML_DIR);

  const commands = await getAllCommands();
  console.log(`📄 Downloading HTML for ${commands.length} Git commands...`);

  for (const cmd of commands) {
    const url = `${DOCS_BASE}/git-${cmd}`;
    const savePath = path.join(GIT_DOCS_HTML_DIR, `git-${cmd}.html`);

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Failed: ${res.status}`);

      const html = await res.text();
      fs.writeFileSync(savePath, html, "utf-8");

      console.log(`✅ Saved: ${cmd}`);
    } catch (err) {
      console.warn(`⚠️  Skipped ${cmd}: ${(err as Error).message}`);
    }
  }

  console.log("📦 Git HTML docs download complete.");
}

// --- Run if called directly
if (require.main === module) {
  fetchAndSaveGitHTMLDocs().catch((err) => {
    console.error("🚨 Error:", err);
    process.exit(1);
  });
}
