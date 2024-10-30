# Next.js Boilerplate

## Created to provide an **absolute standardized approach** across all personal projects. Inspired by the [Next.js Enterprise Boilerplate](https://github.com/Blazity/next-enterprise)

### Built using a clean [`create-next-app@latest`](https://nextjs.org/docs/getting-started/installation) (v14 at the time of creation) App Router, TypeScript, ESLint, Tailwind CSS and a `/src` directory

### It is constantly updated (as new versions of each dependency are released) by comparing all files with freshly installed versions and going through _getting started_ guides over and over to find and resolve differences

### _Feel free to use, contribute and improve_

---

### Features

- Next.js
- File-based metadata placeholders (favicon.ico, icon.svg, apple-icon.png, opengraph-image.png, twitter-image.png, robots.txt, sitemap.xml)
- Predefined styles in index.css and layout.tsx files to achieve more native like app experience (overscroll-behavior, safe area padding, user-select, pointer-event, webkit-touch-callout touch-action, viewport-fit for fullscreen PWA in iOS)
- Custom not-found page with redirect to home
- Startup (splash) images placeholders
- Configured metadata placeholder in layout.tsx
- TypeScript
- ESLint
- Jest (--passWithNoTests)
- Tailwind CSS (with `tailwindcss-safe-area` plugin)
- React Aria Components (with RouterProvider, `tailwindcss-react-aria-components` plugin for Tailwind CSS)
- Index CSS file with app-global styles
- Framer Motion (with predefined config, which includes reduced motion on user preference, custom spring animation as default animation and rest delta with rest speed set to `0.0001` to achieve smoother animations ending)
- Architectural methodology: Feature Sliced Design
- Git Conventional Commits with commitlint and husky
- PWA: @ducanh2912/next-pwa, pre-configured manifest.json and HTML meta tags & splash screens for iOS.
- SEO: OG, Facebook, Twitter and other meta tags
- Placeholder file-based icons
- Default Not found page with redirect to homepage
- Next.js Bundle Analyzer
- Next.js Google Analytics
- MEND Renovate (with recommended and best-practices configs, automerge on weekends, pin dependencies)

### Getting Started

1. Click on 'Use this template' button, then choose 'Create a new repository'
2. Run `npm i` to install dependencies (pinned)
3. Run `npm run prepare` (for husky)
4. Run `npm run dev` to start development server
5. Replace all 'Next.js Boilerplate' text's in layout.tsx and manifest.webmanifest, update metadataBase in layout.tsx
6. Remove all unnecessary items at your discretion
7. Optionally enable Google Analytics by entering your tag into `gaId` prop in layout.tsx
