# THE ARC Initiative — Website (v1)

Frontend for **THE ARC Initiative**, a registered charitable organisation providing free surgeries and hospital care. Built with Vite, React, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

| Path | Purpose |
|------|---------|
| `src/data/` | **All editable copy** — stats, testimonials, contact, donate details, etc. |
| `src/types/` | TypeScript interfaces for data shapes |
| `src/components/sections/` | Page sections (Hero, About, Stories, …) |
| `src/components/ui/` | Reusable UI (buttons, logo, placeholders) |
| `src/components/layout/` | Navbar and footer |
| `src/utils/validateHelpRequest.ts` | Help form validation (frontend only) |

## Replacing placeholders

Search the repo for `PLACEHOLDER` to find registration numbers, bank/UPI details, contact info, and image slots.

- **Text & numbers:** edit files under `src/data/`
- **Photos:** replace `PlaceholderImage` usage in section components with `<img src="..." alt="..." />`, or add images under `public/` and reference them from data files
- **Founder photo:** `src/components/sections/About.tsx`
- **Story photos:** `src/components/sections/Stories.tsx`

## Brand colours (Tailwind)

- Primary blue: `arc-blue` (#1E5AA8)
- Soft background: `arc-soft` (#F1F7FD)
- Text: `arc-navy` (#12263F)
- Donate accent: `arc-amber` (#F59E0B)
- Verified: `arc-green` (#2E9E6B)

## Visual features (v1.1)

- Hero: lazy-loaded 3D heart (`@react-three/fiber`) with SVG fallback on mobile / low-power devices
- Motion: `framer-motion` parallax icons, testimonial tilt (disabled when `prefers-reduced-motion`)
- Edit floating icon positions in `src/data/floatingIcons.ts`

## Not yet implemented

- Help form backend / API submission
- Payment gateway for donations
