# Bitcoin Standard Explorer

An interactive guide to the principles, arguments, and ideas in Saifedean Ammous’s “The Bitcoin Standard”. Built with React, Vite, and Tailwind, featuring animated chapter cards and nested, expandable arguments.

## Tech Stack
- `react` + `react-router-dom` for UI and routing
- `vite` for fast dev/build
- `tailwindcss` (v4 style) for styling
- `@tailwindcss/postcss` + `autoprefixer` for CSS processing
- `framer-motion` for animations
- `recharts` for lightweight charts (future use)

## Quick Start
Prerequisites: Node.js `>=18`.

```bash
# Install dependencies
npm install

# Start dev server (prints the local URL, e.g. http://localhost:5173/ or :5174)
npm run dev

# Production build
npm run build

# Preview the production build locally
npm run preview
```

## Project Structure
```
bitcoin-standard-explorer/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.cjs
├── src/
│   ├── main.jsx          # App entry, imports global styles
│   ├── index.css         # Tailwind v4 import + theme tokens
│   ├── App.jsx           # Routes and top-level layout
│   ├── components/
│   │   ├── Hero.jsx      # Landing hero with animated heading
│   │   └── ChapterSummaries.jsx  # Responsive 1/2/3-column chapter grid
│   ├── pages/
│   │   └── ChapterDetail.jsx     # Nested arguments renderer w/ auto-normalizer
│   └── data/
│       ├── chapters.js
│       └── chapterKeyIdeas/
│           ├── chapter3.js
│           └── chapter4.js
└── public/
```

## Key Features
- Responsive Chapter Summaries grid
  - `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3` for 1/2/3 columns based on width.
- Nested arguments renderer
  - `ChapterDetail.jsx` auto-groups colon-suffixed bullets and renders explicit nested objects (`{ text, children }`).
  - Smooth expand/collapse with existing animations and centered layout.
- Structured chapter data
  - `src/data/chapterKeyIdeas/chapter3.js` and `chapter4.js` use a mix of flat strings and nested objects.
- Hero banner
  - Notice line styled larger, bold, and red.

## Internationalization (i18n)
- Enabled via `i18next` + `react-i18next` with browser language detection.
- Languages: `en`, `de` in `src/locales/`; config loaded in `src/main.jsx` from `src/i18n/config.js`.
- Use: `const { t, i18n } = useTranslation();` then `t('key')`; switch with `i18n.changeLanguage('de')`.
- Add language: create `src/locales/<lang>.json` and register it in `src/i18n/config.js`.
- Maintain translations: `npm run translate:check` generates `translation-report.json` (missing keys).

## Styling Setup (Tailwind v4 style)
- Global CSS uses the new import style:
  ```css
  /* src/index.css */
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Inter:wght@400;500;600&family=Open+Sans:wght@400;600&family=Montserrat:wght@500;600;700&display=swap');
  @import "tailwindcss";

  @theme {
    --color-bitcoin-orange: #F7931A;
    --color-title-color: #2D3748;
    --color-content-color: #4A5568;
    --color-description-color: #718096;
    --font-title: Merriweather, Georgia, serif;
    --font-content: Inter, system-ui, sans-serif;
    --font-description: Open Sans, system-ui, sans-serif;
  }
  ```
- PostCSS config:
  ```js
  // postcss.config.cjs
  const tailwindcss = require('@tailwindcss/postcss');

  module.exports = {
    plugins: [
      tailwindcss(),
      require('autoprefixer'),
    ],
  };
  ```

## Troubleshooting
- Tailwind classes don’t apply
  - Ensure `postcss.config.cjs` exists and includes `@tailwindcss/postcss`.
  - Restart the dev server after changing PostCSS/Tailwind config.
- Error: “It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin”
  - Install and configure `@tailwindcss/postcss` (see config above).
- Error: “@import must precede all other statements”
  - Keep the Google Fonts import at the very top of `src/index.css`.
- Error: “Unknown utility class `text-content-color`”
  - Use CSS variables via `@theme` in `index.css` and plain CSS where custom tokens are needed.
- Port in use
  - Vite will automatically pick another port (`5174`); use the URL printed in the terminal.

## Development Notes
- Animations use `framer-motion`.
- Routing is managed by `react-router-dom`.
- Data files are plain JS modules; feel free to add more chapters under `src/data/chapterKeyIdeas/` and wire them in `src/data/chapters.js`.

## Deployment
- Vercel-friendly setup (`vercel.json` present). Build with `npm run build` and deploy the `dist/` output.

## Contributing
- Keep changes focused and consistent with existing patterns.
- Run `npm run build` locally before opening PRs to catch regressions.

---
Questions or ideas? Open an issue or reach out — happy to iterate.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
