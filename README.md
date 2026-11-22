# ridhuan.dev

Personal portfolio for Ridhuan — Software Engineer, Backend & Cloud Engineering.

A fully static single-page site built with **React 19 + TypeScript**, **Vite**, **Tailwind CSS v4** and **Lucide** icons. There's no backend, database or paid service, so it deploys to **Cloudflare** for free.

---

## 1. Install dependencies

Requires **Node.js 20.19+ or 22.12+** (check with `node -v`).

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173). Changes reload instantly.

## 3. Build for production

```bash
npm run build     # type-checks, then outputs static files to ./dist
npm run preview   # serves ./dist locally to check the production build
npm run lint      # ESLint
```

## 4. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
# Create an empty repo on github.com first (e.g. "portfolio"), then:
git remote add origin https://github.com/mAtwAe/portfolio.git
git push -u origin main
```

## 5. Deploy to Cloudflare

The repo includes [`wrangler.jsonc`](wrangler.jsonc), which deploys `./dist` as a **Cloudflare Worker with static assets**. That's Cloudflare's current recommended way to host static sites, and it's free.

1. Sign in at https://dash.cloudflare.com.
2. Go to **Workers & Pages → Create → Import a repository**, and pick this GitHub repo.
3. Use these settings:

   | Setting        | Value                |
   | -------------- | -------------------- |
   | Project name   | `ridhuan-dev` (must match `name` in `wrangler.jsonc`) |
   | Build command  | `npm run build`      |
   | Deploy command | `npx wrangler deploy` |

4. Deploy. You'll get a `*.workers.dev` URL, and every push to `main` redeploys automatically.

> If you rename the Worker in the dashboard, update `name` in `wrangler.jsonc` to match.

## 6. Connect your Namecheap domain (`ridhuan.dev`)

The simplest and most reliable option is to let Cloudflare manage DNS for the domain:

1. In the Cloudflare dashboard, click **Add a domain**, enter `ridhuan.dev` and choose the **Free** plan.
2. Cloudflare shows you **two nameservers** (e.g. `xxx.ns.cloudflare.com`).
3. In **Namecheap → Domain List → ridhuan.dev → Manage → Nameservers**, choose **Custom DNS** and enter the two Cloudflare nameservers. Save.
4. Wait for the domain to show as **Active** in Cloudflare. This usually takes minutes, but can take up to 24 hours.
5. Open the Worker → **Settings → Domains & Routes → Add → Custom domain**, and add `ridhuan.dev`. Repeat for `www.ridhuan.dev` if you want it.
6. Cloudflare creates the DNS records and the HTTPS certificate automatically.

> `.dev` domains are HSTS-preloaded, so they **only work over HTTPS**. Cloudflare handles this for you.

Optional: redirect `www` → apex with **Rules → Redirect Rules** in the Cloudflare dashboard.

## 7. Update your personal information

Almost all content lives in **[`src/data/portfolio.ts`](src/data/portfolio.ts)**:

| What                               | Where in `portfolio.ts`                     |
| ---------------------------------- | ------------------------------------------- |
| Name, title, tagline, location     | `profile`                                   |
| Availability badge in the hero     | `profile.availability` (set `''` to hide)   |
| GitHub / LinkedIn / email          | `profile.social` (an empty string hides it) |
| About text and focus cards         | `about`                                     |
| Certifications                     | `certifications`                            |
| Skill categories                   | `skillCategories`                           |
| Projects                           | `projects`                                  |
| Work history                       | `experience`                                |

**Projects:** each project supports `status` (`'professional' | 'completed' | 'in-development' | 'planned'`), plus optional `repoUrl` and `demoUrl`. Links only appear when you set them, so the site never shows a broken link.

SEO metadata (title, description, Open Graph, structured data) is in [`index.html`](index.html). If you change your name or title, update it there too. The social preview image is `public/og-image.png` (1200×630).

## 8. Add your resume PDF

Put your resume at:

```
public/resume.pdf
```

The filename must be exactly `resume.pdf`. The navbar, hero and contact buttons all link to `/resume.pdf`. Commit and push, and Cloudflare redeploys automatically.

---

## Project structure

```
public/            favicon.svg, og-image.png, robots.txt, sitemap.xml, _headers, resume.pdf (add yours)
src/
  components/
    layout/        Navbar, Footer
    sections/      Hero, About, Skills, Projects, Experience, Contact
    ui/            SectionHeading, ProjectCard, SkillBadge, SocialLinks, CodeCard, Reveal, BrandIcons
  data/
    portfolio.ts   ← all editable content
  App.tsx
  main.tsx
  index.css        Tailwind theme tokens and shared utilities
```

## Accessibility and performance notes

- Semantic landmarks, a logical heading order, a skip link, visible focus rings, and an accessible mobile menu (closes with Escape).
- Scroll-reveal and smooth scrolling are turned off when the user has `prefers-reduced-motion` set.
- Fonts (Inter, JetBrains Mono) are self-hosted through Fontsource, so there are no third-party requests.
- No animation library: reveals use `IntersectionObserver` and CSS.
- `public/_headers` sets long-term caching for hashed assets and basic security headers (Cloudflare applies `_headers` to static assets).
