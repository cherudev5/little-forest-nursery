# Little Forest Nursery

A React + Vite site for Little Forest, a community tree nursery in Bomet County, Kenya. Built with JavaScript, Tailwind CSS v4, and shadcn/ui-style components.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## What's included

- **Navbar** — sticky nav with links to each section, a mobile menu (Sheet), and a shopping cart drawer with quantity controls.
- **Hero** — headline, mission blurb, two CTAs, three quick facts, and a 5-photo carousel of the nursery (built with Embla).
- **Our mission** — two pillars ("Raised for place", "Follow the journey") plus a pull quote.
- **Nursery shop** — filterable (All / Indigenous / Farm forestry / Food & garden) grid of all 12 seedlings — the shop favorites plus the wider indigenous species — each with price, availability, local name, ecological importance, and "Add to order," wired to the cart.
- **Impact, in view + Rooted in Bomet** — the planting-record steps and the "why Bomet" panel, side by side.
- **Sponsor a seedling teaser** — a homepage banner linking to the full Sponsor page.
- **Visit / contact** — an embedded map, contact details, a WhatsApp link, and a contact form. A floating WhatsApp button is also available site-wide.
- **Footer** — sitemap links and nursery details.
- **Sponsor a Seedling page** (`/sponsor`) — its own route with:
  - Sponsorship packages (single seedling, classroom grove, CBO restoration plot, custom/corporate), each with a "Sponsor via WhatsApp" button that pre-fills the package details.
  - Sponsor stories — cards of past school and CBO plantings, with quotes and seedling counts.
  - A "Coming soon" panel explaining that tracking a sponsored seedling's planting location and progress will be available once account sign-in is built — matching the note already on the homepage's Impact section.

## Routing

Uses `react-router-dom`. `/` renders the homepage sections; `/sponsor` renders the Sponsor page. Nav and footer links use `Link` so cross-page anchors (e.g. `/#nursery` from the Sponsor page) work correctly, and `ScrollToHash` (in `src/components/ScrollToHash.jsx`) smooth-scrolls to the right section after navigation.

## Notes

- The cart is in-memory only (no backend yet) — "Sign in to follow a planting" and the order form are placeholders, as noted in the brief.
- Sponsor package pricing and destinations live in `src/data/sponsors.js`, along with the sponsor stories — replace the story quotes/photos with real ones as they come in.
- Sponsorship tracking is intentionally not built yet — it needs accounts. The "Sign in to track a sponsorship" button on `/sponsor` is disabled as a placeholder until sign-in exists.
- Photos are placeholder images (`picsum.photos`) — swap the URLs in `src/data/seedlings.js` and `src/components/HeroCarousel.jsx` for real nursery photography.
- Update the WhatsApp number and map query in `src/components/WhatsAppButton.jsx` and `src/components/sections/Contact.jsx`.
- Colors, radius, and fonts (DM Sans / DM Serif Display) come from `src/index.css`, matching the theme you provided.
