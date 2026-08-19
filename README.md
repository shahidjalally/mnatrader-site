# MNA Trader

The responsive static website for [mnatrader.com](https://mnatrader.com), deployed to GitHub Pages through GitHub Actions.

## Local preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`. The workflow uploads the static site and deploys it to GitHub Pages. The custom domain is defined in `CNAME`.
