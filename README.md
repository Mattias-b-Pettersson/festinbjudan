# Festinbjudan 🎉

En interaktiv festinbjudan byggd med Vite. Klicka på bilden för att öppna inbjudan.

## Utveckling

```bash
# Installera dependencies
npm install

# Starta dev-server
npm run dev

# Bygg för produktion
npm run build
```

## Deploy till GitHub Pages

### Första gången:

1. Pusha projektet till GitHub
2. Gå till repository settings → Pages
3. Under "Source", välj "GitHub Actions"
4. GitHub Actions kommer automatiskt deploya vid varje push till main

### Efter första setup:

Sidan deployar automatiskt vid varje push till `main`-branchen.

Din sida kommer vara tillgänglig på: `https://<ditt-username>.github.io/festinbjudan/`

## Anpassa base path

Om ditt repository heter något annat än "festinbjudan", uppdatera `base` i `vite.config.js`:

```js
export default defineConfig({
  base: '/ditt-repo-namn/',
  // ...
})
```
