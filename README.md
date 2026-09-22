# Manish's — website

A hand-built static site. No framework, no build step, no dependencies. Open
`index.html` in a browser and it runs.

```
manishs-website/
├── index.html           Home
├── about.html           About
├── products.html        Catalogue — filter, search, lead gate
├── product.html         Product detail — one page, driven by ?p=<slug>
├── testimonials.html    Reviews
├── contact.html         Enquiry form, contact details, location
├── README.md            this file
└── assets/
    ├── css/style.css    the whole design system, one file
    ├── js/data.js       ← all editable content lives here
    ├── js/main.js       behaviour
    └── img/             photography
```

## Running it

Double-clicking `index.html` works for a quick look, but `product.html` reads
its slug from the URL, so use a local server to see everything behave properly:

```bash
cd manishs-website
python3 -m http.server 8000     # then open http://localhost:8000
```

To publish: upload the whole folder to any host. Netlify, Vercel, GitHub Pages,
Cloudflare Pages or ordinary cPanel hosting all serve it as-is. There is nothing
to build.

## Editing the content

**Almost everything you will want to change is in `assets/js/data.js`.** It is
plain JavaScript with comments, and you do not need to touch HTML to use it.

- `SITE` — phone, email, address, hours, WhatsApp number, maps link, socials.
  Fill these in and they update in the footer, the contact page, the menu and
  every WhatsApp button at once. Leave a field bracketed and it shows as a
  visible placeholder rather than breaking.
- `PRODUCTS` — the catalogue. Each entry automatically gets a card on
  `products.html`, its own page at `product.html?p=<slug>`, and a slot in the
  related-products row. Add an object, it appears. Delete one, it disappears.
- `CATEGORIES` — the four filter buttons.
- `FEATURED_REVIEW`, `REVIEWS`, `TRADE_REVIEWS` — the testimonials page.

Adding a product:

```js
{
  slug: 'kishmish',                       // becomes product.html?p=kishmish
  name: 'Kishmish', category: 'dry-fruits-nuts', group: 'Dried fruits',
  tagline: 'One short line', origin: 'GCC',
  image: 'assets/img/p-kishmish.png',     // leave '' for a photo placeholder
  lede: 'A sentence or two.', body: 'A little more detail.',
  bestFor: 'Sweets', packing: '10 kg cartons',
  storage: 'Cool and airtight.', recipe: 'Something to try.',
  uses: ['Kheer', 'Baking']
}
```

## The lead gate

Clicking any product opens a modal asking for name and phone. Nothing about the
product is written into the page until those are given — the detail is rendered
by JavaScript *after* the form is submitted, so it is not sitting in the HTML
waiting to be read. The unlock is remembered in `localStorage` for 30 days, per
device. The brochure button uses the same gate.

**Two things to know before you launch it.**

Search engines will not see the product pages. Googlebot does not fill in forms,
so it gets the gate and nothing else — the catalogue will not rank, and for a
trading business that loses the channel where buyers search "medjool dates
wholesale". The fix is server-side: serve the full page to crawlers, gate it for
humans. That needs a backend; it cannot be done in static files.

Anyone who can open developer tools can read `data.js` directly. Client-side
gating raises the effort, it does not make the data private. If the product
details are genuinely confidential, they must live behind a server.

To soften the gate to brochures only, remove `data-gated` from the product card
markup in `assets/js/main.js` (in `productCard()`) and delete
`data-requires-access="true"` from the `<body>` tag of `product.html`.

## The forms

Both the gate and the enquiry form validate properly and then save to
`localStorage` — they do **not** send anything anywhere. That is deliberate:
static files cannot email. To make them live, point them at whichever backend
you prefer. In `assets/js/main.js` the two places to change are the
`store.set(LEADS_KEY, …)` call in `gate.submit()` and `store.set('manishs.enquiries', …)`
in `initEnquiryForm()`. Replace each with a `fetch()` to your endpoint —
Formspree, Basin, a Google Apps Script, or your own server.

Until then you can read what has been captured by opening the browser console:

```js
JSON.parse(localStorage.getItem('manishs.leads'))
JSON.parse(localStorage.getItem('manishs.enquiries'))
```

## The design system

One breakpoint set, one stylesheet, no separate mobile pages — the layouts
reflow between 390px and 1440px+. Tokens are CSS custom properties at the top of
`style.css`, so a rebrand is a handful of values.

| Token | Value | Use |
|---|---|---|
| `--emerald` | `#1e5841` | Anchor sections, primary buttons, headings |
| `--emerald-deep` | `#143d2d` | Footer |
| `--gold` | `#b08d57` | Hairlines, rules, fills — **not** small text |
| `--gold-text` | `#7a5c30` | Small caps and captions on ivory |
| `--gold-display` | `#8a6a3a` | Large gold numerals and italic subtitles |
| `--pale-gold` | `#d9c29b` | Body text on emerald |
| `--ivory` | `#f5f0e1` | Page ground |
| `--ivory-deep` | `#efe8d6` | Alternate bands |
| `--ink` / `--ink-muted` | `#2a2620` / `#5f584c` | Body and secondary text |

Antique Gold `#b08d57` reaches only 2.7:1 on ivory, which fails WCAG AA for
text. That is why the two darker golds exist. Keep `#b08d57` for lines and
fills, never for words.

Type is Cormorant Garamond 500 for display and Manrope for everything else,
loaded from Google Fonts. Sizes use `clamp()` so they scale with the viewport
rather than jumping at breakpoints.

## Accessibility

Real `<button>`, `<a>` and `<label>` elements throughout. Skip link, visible
focus rings, `aria-current` on the active nav item, focus trapped inside the
modal and returned when it closes, Escape to close, 44px minimum tap targets,
and `prefers-reduced-motion` honoured for the marquee and scroll reveals.

## Still to fill in

Anything in `[SQUARE BRACKETS]`. At the time of writing that is: phone, email,
address, opening hours, the maps link, the WhatsApp number, origins for the
seeds and spices lines, every testimonial, and photos for the seeds and
speciality packs (those show a dashed placeholder until you add them).

Tested in current Chrome, Firefox, Safari and Edge. No IE support.
"# manishskirana" 
