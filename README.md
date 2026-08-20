# Bruno Ilponse — CV site

Personal CV / portfolio site built with Vue 3 and Vite.

## Recommended IDE Setup

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
