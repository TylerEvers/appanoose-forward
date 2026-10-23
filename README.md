# Appanoose Forward

A static, client-side routed SPA for [appanooseforward.org](https://appanooseforward.org), served as Cloudflare Workers Static Assets. It uses plain HTML, CSS, and JavaScript; Wrangler handles local preview and deployment.

The page text is starter copy, not approved organizational information. Replace it before launch.

## Requirements

- Node.js 20 or later
- npm
- A Cloudflare account with `appanooseforward.org` added as an active zone

## Run locally

```sh
npm ci
npm run dev
```

Open the local URL printed by Wrangler. Client-side routes (`/`, `/measure`, `/faq`, `/vote`, `/sources`, and `/contact`) are handled by `js/main.js`; Wrangler's single-page application fallback serves `index.html` when a route is opened directly.

## Deploy

Authenticate Wrangler with the Cloudflare account that owns the domain, then deploy:

```sh
npx wrangler login
npm run deploy
```

The Worker name is `appanoose-forward`. Deployment uploads the site files from the repository root; `.assetsignore` keeps source and development files out of the public asset bundle.

## Connect the domain

1. Confirm `appanooseforward.org` is added to the same Cloudflare account and its nameservers are active on Cloudflare.
2. Deploy the Worker at least once.
3. In the Cloudflare dashboard, open **Workers & Pages**, select **appanoose-forward**, then open **Settings → Domains & Routes**.
4. Choose **Add → Custom Domain**, enter `appanooseforward.org`, and complete the setup. Cloudflare provisions the DNS record and TLS certificate for the custom domain.
5. Visit `https://appanooseforward.org/` and verify that `/measure`, `/faq`, `/vote`, `/sources`, and `/contact` also load when opened directly.

If the domain is not available in the custom-domain selector, check that its zone is active in this account and that you have permission to manage its DNS.

## Dev preview on GitHub Pages

The `.github/workflows/gh-pages-preview.yml` workflow publishes a read-only preview of this
site to GitHub Pages on every push to `main` (and via manual dispatch), separate from the
production Cloudflare deployment above. GitHub Pages serves project sites from a subpath
(`https://<owner>.github.io/<repo>/`) rather than the domain root, so the workflow copies
`index.html`, `css/`, and `js/` into a build output and:

- Prefixes root-absolute `href`/`src` attributes with the repository name so assets and
  in-app links resolve correctly under the subpath.
- Sets the `BASE_PATH` constant in `js/main.js`'s build output so client-side route matching
  strips that subpath before comparing against `routes`. The constant is empty (a no-op) in
  the committed source, which is only used for the production root deployment.
- Adds a `noindex` meta tag so this placeholder-content preview isn't indexed by search engines.
- Copies the built `index.html` to `404.html` so GitHub Pages serves the SPA shell for deep
  links (`/<repo>/faq`, etc.), since Pages has no server-side rewrite rules.

Enable Pages once per repository under **Settings → Pages → Build and deployment → Source:
GitHub Actions**; the workflow handles every deploy after that.

## Before launch

- Replace all starter/placeholder copy in `index.html` and the route templates in `js/main.js`
  with approved, verified information, including the measure name/number, election date,
  registration deadline, timeline, FAQ answers, voting links, and sources.
- Update the page titles and descriptions in `js/main.js` and the initial metadata in `index.html`.
- Keep `sitemap.xml`, the canonical URLs, and `robots.txt` aligned with the public routes and production domain.
- Add only approved public contact details. Do not put credentials, private information, or form secrets in this static site.
- Check the pages at mobile and desktop widths, including keyboard navigation.

## Project files

- `index.html` — SPA shell and initial metadata
- `css/styles.css` — responsive styling and accessibility states
- `js/main.js` — client-side routes, navigation, and route-aware metadata
- `wrangler.jsonc` — Cloudflare Worker and static asset configuration
- `robots.txt`, `sitemap.xml` — crawler guidance for the production domain
