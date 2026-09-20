# Little Forest Nursery

A multi-page React + Vite site for Little Forest, a community tree nursery in Bomet County, Kenya. Built with JavaScript, Tailwind CSS v4, shadcn/ui-style components, and `react-router-dom`.

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

## Pages

- **`/`** — Home: just the hero (headline, mission blurb, two CTAs, three quick facts, and a 5-photo nursery carousel built with Embla).
- **`/about`** — About us: the social-enterprise description, a 4-item grid of what Little Forest grows and sells (indigenous seedlings, fruit trees, ornamental plants, organic forest honey), and a callout on growing your own little forest at home.
- **`/mission`** — Our mission: two pillars ("Raised for place", "Follow the journey") plus a pull quote.
- **`/nursery`** — The nursery shop: a filterable (All / Indigenous / Farm forestry / Food & garden) grid of all 12 seedlings, each with price, availability, local name, and ecological importance where relevant, wired to the cart — plus a "Sponsor a seedling" teaser banner at the bottom.
- **`/impact`** — Impact, in view + Rooted in Bomet: the planting-record steps and the "why Bomet" panel, side by side.
- **`/contact`** — Visit / contact: an embedded map, contact details, a WhatsApp link, and a contact form.
- **`/sponsor`** — Sponsor a Seedling: sponsorship packages (each with a "Sponsor via WhatsApp" button that pre-fills the package details), sponsor stories from past school/CBO plantings, and a "Coming soon" panel explaining that tracking a sponsored seedling requires account sign-in, which isn't built yet.

## Site-wide

- **Navbar** — sticky nav linking to every page, a mobile menu (Sheet), and a shopping cart drawer with quantity controls.
- **Floating WhatsApp button** — bottom-right, opens a chat with the nursery.
- **Floating help chat** — bottom-left FAQ widget with three common questions (how to purchase, what seedling sponsoring is, how to contact us), each answer includes a button that jumps to the basket, the Sponsor page, or the Contact page.
- **Footer** — sitemap links and nursery details.

## Routing

Uses `react-router-dom`. Nav and footer links use `Link` to the routes above. `ScrollToHash` (in `src/components/ScrollToHash.jsx`) scrolls to the top of each new page on navigation.

## Notes

- The cart is in-memory only (no backend yet) — "Sign in to follow a planting" and the order form are placeholders, as noted in the brief.
- Photos are placeholder images (`picsum.photos`) — swap the URLs in `src/data/seedlings.js`, `src/data/sponsors.js`, and `src/components/HeroCarousel.jsx` for real photography.
- Update the WhatsApp number in `src/lib/whatsapp.js` (`WHATSAPP_NUMBER`) — it's used everywhere WhatsApp is linked, including checkout, sponsorship inquiries, the floating button, and the contact page.
- Sponsorship tracking is intentionally not built yet — it needs accounts. The "Sign in to track a sponsorship" button on `/sponsor` is disabled as a placeholder until sign-in exists.
- The help chat's questions and answers live in `src/components/ChatWidget.jsx` (the `faqs` array).
- Colors, radius, and fonts (DM Sans / DM Serif Display) come from `src/index.css`, matching the theme you provided.
