# coco-stack.com (static site)

## Local dev

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`

## Deploy (cost-effective)

### Cloudflare Pages

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output: `dist`
- Node version: use current LTS

Point DNS:

- `www` -> CNAME to the Cloudflare Pages hostname
- Root `coco-stack.com` -> use Cloudflare Pages root/apex instructions (usually CNAME flattening in Cloudflare DNS)

### Vercel

- Framework preset: `Astro`
- Build command: `npm run build`
- Output: `dist`

## Editing content

- Add posts in:
  - `src/content/playground/`
  - `src/content/research/`
  - `src/content/apps/`

Each file is Markdown with frontmatter (`title`, `description`, `pubDate`, `tags`).

