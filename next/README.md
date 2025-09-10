This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## SASS Configuration & BEM Prefixes

This project uses a modular SASS architecture based on the 7-1 pattern. For class naming, we follow a BEM-inspired prefix convention to keep styles organized and maintainable:

- **c- (component):** For reusable, interactive or visual components.
  - Example: `.c-button`, `.c-modal`, `.c-button-demo`
- **o- (object):** For structural objects, wrappers, or containers that organize content.
  - Example: `.o-media`, `.o-container`, `.o-list`
- **l- (layout):** For classes managing the overall page or section layout.
  - Example: `.l-header`, `.l-footer`, `.l-grid`
- **u- (utility):** For utility classes that apply a single, quick rule (margin, padding, hide, etc.).
  - Example: `.u-mb-2`, `.u-hidden`, `.u-text-center`
- **t- (theme):** For theme or style variations (dark, light, color, etc.).
  - Example: `.t-dark`, `.t-light`, `.t-primary`

These prefixes help keep the codebase clear and scalable. For more details, see the SASS files in `src/app/assets/scss/`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
