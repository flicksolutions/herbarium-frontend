# Herbarium

This website is a purely static build with a client-side search component. It is hosted by Github and was developed by [Sebastian Flick](https://github.com/flicksolutions) and [Peter Dängeli](https://github.com/pdaengeli) of the [Data Science Lab](https://github.com/dsl-unibe-ch) using Svelte and Svelte-Kit.

All the metadata for the herbarium is contained in this JSON: [src/lib/data.json](https://github.com/DHBern/herbarium-frontend/blob/main/src/lib/data.json)

## Developing

If you want to run this locally installe dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create the static production version of this app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
