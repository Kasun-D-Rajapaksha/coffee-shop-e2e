# coffee-shop-e2e

Cypress end-to-end tests for the [Ember & Cream](https://github.com/Kasun-D-Rajapaksha/coffee-shop) static coffee shop site.

**Default target (CI):** [https://kasun-d-rajapaksha.github.io/coffee-shop/](https://kasun-d-rajapaksha.github.io/coffee-shop/)

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

GitHub Actions runs Cypress on every push and pull request to `main` (see `.github/workflows/cypress.yml`).

## Related repos

- Site: [Kasun-D-Rajapaksha/coffee-shop](https://github.com/Kasun-D-Rajapaksha/coffee-shop)
