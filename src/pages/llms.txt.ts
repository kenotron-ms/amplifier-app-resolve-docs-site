// Serves /llms.txt — the ecosystem-level agent index following the llms.txt
// convention (https://llmstxt.org/). Curated links, not a crawl dump.
import type { APIRoute } from "astro";

const BODY = `# Amplifier Documentation

> Documentation for the Amplifier ecosystem — build, run, and operate AI agent
> platforms. Every page is Markdown-first and agent-readable. Full corpora are
> available per product as llms-full.txt.

## Products

- [Resolve](https://docs.ampbox.io/resolve/): Autonomous code-generation platform — write resolvers, submit instances, stream events, verify with reality checks.
- [Core (coming soon)](https://docs.ampbox.io/core/): The Amplifier kernel.
- [Foundation (coming soon)](https://docs.ampbox.io/foundation/): Bundles and behaviors.

## Resolve — full corpus for agents

- [Resolve full text](https://docs.ampbox.io/resolve/llms-full.txt): The entire Resolve documentation concatenated into one fetch.

## Resolve — Get Started

- [Your First Resolver](https://docs.ampbox.io/resolve/get-started/first-resolver/): Zero to a running custom resolver.
- [Run a Reality Check](https://docs.ampbox.io/resolve/get-started/reality-check/): Verify generated software against acceptance criteria.
- [Core Concepts](https://docs.ampbox.io/resolve/get-started/concepts/): Instances, resolvers, viewports, pipelines, events.

## Resolve — Build a Resolver

- [Resolver Protocol](https://docs.ampbox.io/resolve/build/resolver-protocol/)
- [manifest.json Reference](https://docs.ampbox.io/resolve/build/manifest/)
- [Event Vocabulary](https://docs.ampbox.io/resolve/build/events/)
- [A2UI Schema](https://docs.ampbox.io/resolve/build/a2ui/)
- [DOT Pipelines](https://docs.ampbox.io/resolve/build/pipelines/)
- [Viewports](https://docs.ampbox.io/resolve/build/viewports/)

## Resolve — Use the Platform

- [REST API Reference](https://docs.ampbox.io/resolve/use/api/)
- [Authoring Instance Specs](https://docs.ampbox.io/resolve/use/instance-specs/)
- [Auth Model](https://docs.ampbox.io/resolve/use/auth/)
- [Reality Check](https://docs.ampbox.io/resolve/use/reality-check/)

## Resolve — Architecture & Ops

- [Platform Architecture](https://docs.ampbox.io/resolve/architecture/overview/)
- [Instance Lifecycle](https://docs.ampbox.io/resolve/architecture/lifecycle/)
- [Container & Data Model](https://docs.ampbox.io/resolve/architecture/containers/)
- [Deployment (Single VM)](https://docs.ampbox.io/resolve/architecture/deployment/)
`;

export const GET: APIRoute = () =>
  new Response(BODY, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
