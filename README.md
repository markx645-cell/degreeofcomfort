# Degree 3 Trades — Home Services Website

A premium, SEO-optimized marketing site for a home-services company (HVAC, plumbing, electrical), built with Next.js 15 and statically exported.

## Stack

- **Next.js 15** (App Router) with `output: 'export'` — static HTML at build time
- **Tailwind CSS** for styling
- **TypeScript**
- Content lives in flat files under [`/content`](./content) — no database

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/services` + `/services/[slug]` | Services listing and detail pages |
| `/blog` + `/blog/[slug]` | Blog listing and article pages |

## Editing your brand

All company details (name, tagline, phone numbers, addresses, hours, licenses, social links)
live in **[`content/site.ts`](./content/site.ts)**. Change them there and the whole site updates.

- Services: [`content/services.ts`](./content/services.ts)
- Blog posts: [`content/posts.ts`](./content/posts.ts)
- Homepage sections (testimonials, offers): [`content/home.ts`](./content/home.ts)

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # outputs static site to /out
```

## SEO

Auto-generated sitemap and robots, canonical URLs, Open Graph / Twitter meta, and JSON-LD
structured data (LocalBusiness, Service, BlogPosting, BreadcrumbList, FAQPage) on the relevant pages.
