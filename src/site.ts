export const SITE = {
  name: "Coco Stack",
  domain: "coco-stack.com",
  url: "https://coco-stack.com",
  email: "hello@coco-stack.com",
  calLink: "https://cal.com/laji-coco-stack/30min",
  tagline:
    "One person's quest to make AI actually useful. Research, builds, and honest notes from the trenches.",
  links: {
    linkedin: "https://www.linkedin.com/in/lajiraj/",
    github: "https://github.com/lajirajg",
    medium: "https://medium.com/@lajirajs",
    x: "https://x.com/lajiraj",
    substack: ""
  },
  learning: {
    useAI: [
      // { title: "Example Resource", url: "https://...", source: "Google", tags: ["Beginner"] },
    ] as { title: string; url: string; source: string; tags: string[] }[],
    buildWithAI: [
      // { title: "Example Resource", url: "https://...", source: "Anthropic", tags: ["LLM"] },
    ] as { title: string; url: string; source: string; tags: string[] }[],
  },
  medium: [
    {
      title: "Reasoning in LLMs: From Fast Intuition to Slow Deliberation",
      url: "https://medium.com/@lajirajs/reasoning-in-llms-from-fast-intuition-to-slow-deliberation-ae283ad5ba8b",
      date: "May 2025",
      tags: ["LLM", "Reasoning", "Chain-of-Thought"],
      category: "mine"
    },
    {
      title: "Demystifying Agentic Systems",
      url: "https://medium.com/@lajirajs/demystifying-agentic-systems-7b644cf76dd7",
      date: "Jan 2025",
      tags: ["Agents", "Architecture", "Enterprise"],
      category: "mine"
    },
    {
      title: "Agentic AI: Redefining the Future of Enterprise Workflows",
      url: "https://medium.com/@lajirajs/agentic-ai-redefining-the-future-of-enterprise-workflows-a93020f34f52",
      date: "Dec 2024",
      tags: ["Agentic AI", "Enterprise", "Automation"],
      category: "mine"
    }
  ]
} as const;
