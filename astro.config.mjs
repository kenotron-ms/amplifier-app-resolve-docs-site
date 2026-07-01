// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// Amplifier Resolve documentation — docs.resolve.amplifier.ms
export default defineConfig({
  site: "https://docs.resolve.amplifier.ms",
  integrations: [
    starlight({
      title: "Amplifier Resolve Documentation",
      description:
        "Documentation for Amplifier Resolve — the autonomous code-generation platform. Build resolvers, submit instances, stream events, verify results.",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/microsoft/amplifier-resolve",
        },
      ],
      // Agent-readable outputs: /llms.txt (index) and /resolve/llms-full.txt (full corpus)
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "Resolve",
          collapsed: false,
          items: [
            {
              label: "Get Started",
              items: [
                { label: "What is Resolve?", link: "/resolve/" },
                { label: "Golden Path: Your First Resolver", link: "/resolve/get-started/first-resolver/" },
                { label: "Golden Path: Run a Reality Check", link: "/resolve/get-started/reality-check/" },
                { label: "Core Concepts", link: "/resolve/get-started/concepts/" },
              ],
            },
            {
              label: "Build a Resolver",
              items: [
                { label: "Resolver SDK", link: "/resolve/build/sdk/" },
                { label: "Resolver Protocol", link: "/resolve/build/resolver-protocol/" },
                { label: "manifest.json Reference", link: "/resolve/build/manifest/" },
                { label: "Event Vocabulary", link: "/resolve/build/events/" },
                { label: "A2UI Schema", link: "/resolve/build/a2ui/" },
                { label: "DOT Pipelines", link: "/resolve/build/pipelines/" },
                { label: "Viewports", link: "/resolve/build/viewports/" },
              ],
            },
            {
              label: "Use the Platform",
              items: [
                { label: "REST API Reference", link: "/resolve/use/api/" },
                { label: "Authoring Instance Specs", link: "/resolve/use/instance-specs/" },
                { label: "Auth Model", link: "/resolve/use/auth/" },
                { label: "Reality Check", link: "/resolve/use/reality-check/" },
              ],
            },
            {
              label: "Architecture & Ops",
              items: [
                { label: "Platform Architecture", link: "/resolve/architecture/overview/" },
                { label: "Instance Lifecycle", link: "/resolve/architecture/lifecycle/" },
                { label: "Container & Data Model", link: "/resolve/architecture/containers/" },
                { label: "Deployment (Single VM)", link: "/resolve/architecture/deployment/" },
              ],
            },
          ],
        },
        {
          label: "For AI Agents",
          items: [
            { label: "llms.txt index", link: "/llms.txt", attrs: { target: "_blank" } },
            { label: "Full corpus (llms-full.txt)", link: "/resolve/llms-full.txt", attrs: { target: "_blank" } },
          ],
        },
      ],
    }),
  ],
});
