# coffee-shop-e2e

Cypress end-to-end tests for the [Ember & Cream](https://github.com/Kasun-D-Rajapaksha/coffee-shop) static coffee shop site.

**Production URL:** [https://kasun-d-rajapaksha.github.io/coffee-shop/](https://kasun-d-rajapaksha.github.io/coffee-shop/)

**Primary CI** runs from the [coffee-shop](https://github.com/Kasun-D-Rajapaksha/coffee-shop) repo: it serves the site under test locally, runs this Cypress suite, and deploys to GitHub Pages only when tests pass (see `coffee-shop/.github/workflows/ci-cd.yml`).

## Prerequisites

- Node.js 20+
- npm

## Install

```bash
npm install
```

## Run tests

Against GitHub Pages (default):

```bash
npm run test:e2e
```

Interactive runner:

```bash
npm run test:e2e:open
```

Against a local static server (from the site repo):

```bash
# In coffee-shop/: python3 -m http.server 8080
npm run test:e2e:local
```

Override the base URL:

```bash
CYPRESS_BASE_URL=https://your-preview.example/ npm run test:e2e
```

## Specs

| File | Coverage |
|------|----------|
| `smoke.cy.js` | Page load, title, hero, critical assets |
| `navigation.cy.js` | Desktop nav, hero CTAs, footer year, maps link |
| `menu-tabs.cy.js` | All seven menu category tabs and panels |
| `mobile-nav.cy.js` | Hamburger menu on mobile viewport |
| `theme.cy.js` | Dark mode toggle and `localStorage` |

## CI

| Pipeline | When it runs | What it tests |
|----------|----------------|---------------|
| [coffee-shop CI/CD](https://github.com/Kasun-D-Rajapaksha/coffee-shop/blob/main/.github/workflows/ci-cd.yml) | PR and push to `main` on the site repo | The commit/PR site code at `http://127.0.0.1:8080` |
| [Production smoke](.github/workflows/cypress.yml) | Weekly and manual dispatch | Live GitHub Pages |

Local default (`npm run test:e2e`) targets production Pages unless you set `CYPRESS_BASE_URL` or use `npm run test:e2e:local`.

## Related repos

- Site: [Kasun-D-Rajapaksha/coffee-shop](https://github.com/Kasun-D-Rajapaksha/coffee-shop)
