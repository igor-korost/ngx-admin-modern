### Ngx-Admin (Angular 11 + Nebular 7) – Cypress-ready lightweight fork

This fork upgrades the original **ngx-admin** template to **Angular 11.2** and **Nebular 7.0**, removes legacy polyfills and heavy demo features, and is tuned for UI automation with **Cypress**.

*Original repo:* <https://github.com/akveo/ngx-admin>

---

#### Key changes vs. upstream

| Area | Upstream | This fork |
|------|----------|-----------|
| Angular | 8.x | **11.2.14** |
| Nebular | 5.x | **7.0.5** |
| Build | legacy polyfills, ES5 bundle | modern browsers only, ES2015 bundle |
| Tables | `ng2-smart-table`, `NbTreeGrid` | (WIP) migrating to **Angular Material** `MatTable` / `MatTree` |
| Tests | Protractor | **Cypress 12** + page-object helpers |

---

#### Quick start

```bash
git clone https://github.com/igor-korost/ngx-admin-modern.git
cd ngx-admin-modern
npm install
ng serve          # dev server at http://localhost:4200
npm run cypress   # open Cypress UI

> Node ≥ 16 and npm ≥ 8 recommended.
