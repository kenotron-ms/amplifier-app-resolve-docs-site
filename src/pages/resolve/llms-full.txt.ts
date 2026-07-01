// Serves /resolve/llms-full.txt — the entire Resolve documentation corpus
// concatenated into one plain-text fetch for AI agents. Built at compile time
// from the Resolve content collection so it never drifts from the site.
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

// Rough ordering so the golden paths and concepts come first.
const ORDER = [
  "resolve/index",
  "resolve/get-started/first-resolver",
  "resolve/get-started/reality-check",
  "resolve/get-started/concepts",
  "resolve/build/resolver-protocol",
  "resolve/build/manifest",
  "resolve/build/events",
  "resolve/build/a2ui",
  "resolve/build/pipelines",
  "resolve/build/viewports",
  "resolve/use/api",
  "resolve/use/instance-specs",
  "resolve/use/auth",
  "resolve/use/reality-check",
  "resolve/architecture/overview",
  "resolve/architecture/lifecycle",
  "resolve/architecture/containers",
  "resolve/architecture/deployment",
];

const rank = (id: string) => {
  const key = id.replace(/\.(md|mdx)$/, "");
  const i = ORDER.indexOf(key);
  return i === -1 ? ORDER.length : i;
};

export const GET: APIRoute = async () => {
  const docs = await getCollection("docs", ({ id }) => id.startsWith("resolve/"));
  docs.sort((a, b) => rank(a.id) - rank(b.id));

  const header =
    "# Amplifier Resolve — Full Documentation Corpus\n\n" +
    "> The complete Resolve documentation, concatenated for AI agents. Source of\n" +
    "> truth: https://docs.ampbox.io/resolve/ . Sections are separated by ---.\n\n";

  const body = docs
    .map((d) => {
      const title = d.data.title ?? d.id;
      const desc = d.data.description ? `\n${d.data.description}\n` : "\n";
      return `\n---\n\n# ${title}\n${desc}\n${d.body ?? ""}\n`;
    })
    .join("\n");

  return new Response(header + body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
