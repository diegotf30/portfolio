# Deploy — diego.tf on GitHub Pages

## 1. In the repo (already done)

- `public/CNAME` → contains `diego.tf`. GitHub reads this on every deploy and keeps the custom domain set.
- `.github/workflows/deploy.yml` → builds Astro and deploys on every push to `main`.

## 2. In GitHub

Settings → Pages → **Source: GitHub Actions**.
After the first successful run, Settings → Pages → Custom domain should already read `diego.tf`.
Tick **Enforce HTTPS** once the cert is issued (can take ~15 min after DNS propagates).

## 3. In DNS (your registrar for `diego.tf`)

Apex domain needs **A + AAAA** records — a CNAME is not allowed at the apex.

| Type  | Name / Host | Value              | TTL  |
| ----- | ----------- | ------------------ | ---- |
| A     | `@`         | `185.199.108.153`  | 3600 |
| A     | `@`         | `185.199.109.153`  | 3600 |
| A     | `@`         | `185.199.110.153`  | 3600 |
| A     | `@`         | `185.199.111.153`  | 3600 |
| AAAA  | `@`         | `2606:50c0:8000::153` | 3600 |
| AAAA  | `@`         | `2606:50c0:8001::153` | 3600 |
| AAAA  | `@`         | `2606:50c0:8002::153` | 3600 |
| AAAA  | `@`         | `2606:50c0:8003::153` | 3600 |
| CNAME | `www`       | `diegotf30.github.io.` | 3600 |

Zone-file form, if your registrar takes a paste:

```
@     3600  IN  A      185.199.108.153
@     3600  IN  A      185.199.109.153
@     3600  IN  A      185.199.110.153
@     3600  IN  A      185.199.111.153
@     3600  IN  AAAA   2606:50c0:8000::153
@     3600  IN  AAAA   2606:50c0:8001::153
@     3600  IN  AAAA   2606:50c0:8002::153
@     3600  IN  AAAA   2606:50c0:8003::153
www   3600  IN  CNAME  diegotf30.github.io.
```

Verify:

```bash
dig +short diego.tf A
dig +short www.diego.tf CNAME
```

## Local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
```

Content (both languages) lives in one file: `src/i18n.ts`.
