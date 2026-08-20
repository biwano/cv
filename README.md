# Bruno Ilponse — CV site

Personal CV / portfolio site built with Vue 3 and Vite.

## Setup

```sh
npm install
cp .env.example .env
```

Edit `.env` with your values (see below). `.env` is gitignored.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Dev server (Vite `--host`) |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | ESLint |

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `VITE_SITE_URL` | For production builds | Absolute site origin **without** a trailing slash (e.g. `https://example.com`). Substituted into Open Graph / Twitter meta tags in `index.html` at build time. |
| `VITE_WEB3FORMS_ACCESS_KEY` | For the contact form | [Web3Forms](https://web3forms.com/) access key. Restrict the key to your domain in the Web3Forms dashboard. |

## Deploy

1. Set env vars in the build environment (at least `VITE_SITE_URL` for correct social previews).
2. Run `npm run build`.
3. Serve the contents of `dist/` as a static site.

### History-mode rewrite

Vue Router uses `createWebHistory`, so the host must serve `index.html` for unknown paths. Without this, deep links (`/skills`, `/career`, etc.) fail on refresh or direct open.

**nginx**

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

**Apache** (`.htaccess` in the site root)

```apache
FallbackResource /index.html
```

**Netlify** (`public/_redirects`)

```
/*    /index.html   200
```

**Vercel / Cloudflare Pages** — enable the SPA / single-page fallback so all routes rewrite to `index.html`.
