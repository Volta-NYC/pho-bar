# Claude Code Prompt — PhoBar Website Remodel

Build a gorgeous, modern Vietnamese restaurant website for **PhoBar**, a contemporary pho restaurant at 80 6th Avenue, Brooklyn, NY. The current site is Squarespace — decent photography but templated layout and clunky navigation. I want this to feel like a premium Brooklyn Vietnamese dining experience: tropical, bold, colorful, and mouth-watering. Use **Next.js (App Router) + Tailwind CSS + Framer Motion**.

---

## DESIGN DIRECTION

Think: tropical Vietnamese street food meets elevated Brooklyn dining. Lush botanical textures, vibrant food photography, and a bold typographic identity.

- **Color palette:** Warm cream/beige (#F0E8DA), deep tropical green (#2D5A3D), coral/salmon pink (#E87B6D), golden amber (#D4A853), charcoal black (#1A1A1A), pure white (#FFFFFF). The greens and corals come from their signature tropical leaf pattern.
- **Signature pattern:** Tropical banana leaf + bird of paradise floral pattern on cream background — this is PhoBar's most distinctive visual element. Use it as section dividers, hero overlays, or decorative borders. Pattern image URL: https://images.squarespace-cdn.com/content/v1/5b76d0a096e76f63489286a6/1550682551335-Q65DESGHGNKCDKX17UGC/palm.jpg
- **Typography:** Bold condensed sans-serif (Bebas Neue or Oswald) for headings — uppercase, heavy, wide letter-spacing. Something like Lora or Crimson Pro for body text. This matches their current brand voice.
- **Vibe:** Lush, tropical, and appetizing. Overhead food photography on warm wood tables with branded Vietnamese ceramic bowls (blue-and-white pattern). Neon sign accents. Think "Instagram-worthy pho spot."
- **Layout:** Full-bleed image sections, horizontal scroll for food gallery, parallax tropical pattern backgrounds, smooth animated menu tabs.

---

## SECTIONS TO BUILD

### 1. Navbar
- Center: PhoBar logo (black block with white text) — https://images.squarespace-cdn.com/content/v1/5b76d0a096e76f63489286a6/1550261220890-QIYPEZ8HXBZQ4ZPYYUIF/PhoBar_LOGO.png
- Left links: HOME, ABOUT, MENU, ORDER ONLINE
- Right links: LOCATIONS + HOURS, PRESS, CONTACT US
- All uppercase, wide letter-spacing (tracking-widest)
- Sticky on scroll with white/cream backdrop blur
- "ORDER ONLINE" as a highlighted CTA button
- Mobile: hamburger with full-screen overlay menu

### 2. Hero Section
- Full-viewport height
- Tropical leaf pattern as a thin decorative banner strip at the top (the palm.jpg pattern)
- Then a large full-width food photography carousel that auto-rotates between these 5 images:
  1. https://images.squarespace-cdn.com/content/v1/5b76d0a096e76f63489286a6/1561666195803-ES9JKULWEB1GTMCUV6P1/Pho_Bar-54.jpg
  2. https://images.squarespace-cdn.com/content/v1/5b76d0a096e76f63489286a6/1550683234205-HRVX0F8GNHIB8OKPDT73/crazy.jpg
  3. https://images.squarespace-cdn.com/content/v1/5b76d0a096e76f63489286a6/1550683036065-EZI38OFD1IH0LLP8UJ3O/1L2A7493.jpg
  4. https://images.squarespace-cdn.com/content/v1/5b76d0a096e76f63489286a6/1561666697596-BL14RJ249HPY268OB7SF/L1210243.jpg
  5. https://images.squarespace-cdn.com/content/v1/5b76d0a096e76f63489286a6/1550700383600-OGAV0KMCP4UWPR5IIKBM/IMG_4613_V2.jpg
- Above the carousel: announcement bar text "FREE DELIVERY! *Up to 5 miles, on orders above $30" with "ORDER ONLINE" button (bordered, uppercase)
- Smooth crossfade transition between carousel images (not a hard slide)
- Dots or progress bar indicator at the bottom

### 3. About Section
- White/cream background
- Heading: "ABOUT" (bold condensed uppercase)
- Body text: "PhoBar is a Vietnamese restaurant that serves contemporary cuisine with a focus on pho, a rich rice noodle soup that is ubiquitous in Vietnam. Incorporating thoughtful sourcing, quality ingredients, and refined culinary techniques to further amplify the bold flavors of Vietnam, the team aims to bring further awareness to the depth and complexity of the country's culinary traditions."
- Alongside or below: a large food photography image — use the overhead table spread: https://images.squarespace-cdn.com/content/v1/5b76d0a096e76f63489286a6/1550682152493-2TCABLOG6902PMRX3YSF/0f8403f849cc1c17b870e02f210bec20.jpg
- Fade-in on scroll

### 4. Featured Items / "Crazy Rich Broth" Section
- Black background section with bold white text
- Feature 2-3 signature items with large hero imagery
- Title options: "CRAZY RICH BROTH" or "SIGNATURE DISHES"
- Show: Saigon Phở ($16.95), Spicy Short Rib Phở ($23.95), DIY Pho Pot (if applicable)
- Large text + price overlay on food images
- CTA: "VIEW FULL MENU" button

### 5. Menu Section (THE BIG ONE)
- Tropical leaf pattern strip as a section divider at the top
- Large food image banner: https://images.squarespace-cdn.com/content/v1/5b76d0a096e76f63489286a6/1561667241719-WFBT427Y3AA32O3U5633/L1210395.jpg
- Section heading: "MENU"
- Horizontal tab bar for categories: Appetizers/Sides, Sets, Bánh Mì, Phở, Bún or Cơm, Drinks
- Tabs should be sticky when scrolling through menu items
- Each category section shows the category note/description in italic (e.g., the serving details and add-on prices)
- Menu items in a clean 2-column grid (desktop) / 1-column (mobile)
- Each item: Name (bold), description (lighter), price (right-aligned, golden amber color)
- Vietnamese diacritics must render properly (Phở, Bánh Mì, Bún, Cơm)
- Highlight "signature" items like Saigon Phở, Spicy Short Rib Phở, and Bun Bo Hue with a subtle gold border or star

**Full menu data — use ALL items from the extraction file. Here's the summary:**

**Appetizers (11 items):** $4.00–$11.95
**Sets (4 combos):** $16.00–$18.00
**Bánh Mì (7 sandwiches):** $8.95–$13.95
**Phở (12 soups):** $14.95–$23.95
**Bún/Cơm (12 rice/vermicelli):** $13.95–$24.95
**Drinks (9 items):** $2.00–$6.00

*(Copy the complete menu data from the extraction file into a menuData.ts file)*

### 6. Locations & Hours
- Split layout: map on one side, info on the other
- Address: 80 6th Avenue, Brooklyn, NY 11217
- Phone: (862) 310-6782
- Hours: Monday–Sunday, 11 AM – 9 PM
- Embed a Google Map or show a styled card
- Tropical pattern border or accent

### 7. Press / Social Proof
- Horizontal scrolling logos or quotes from press features
- Link to /press page content
- Instagram feed teaser: @phobarnyc with a "Follow Us" CTA

### 8. Contact Section
- Clean contact form: Email Address, Message, Submit
- Alongside: phone number, Instagram handle, and "pho-nomenal" tagline
- Press inquiries: phobarnyc@gmail.com

### 9. Footer
- Black background
- PhoBar logo (white version or inverted)
- Address: 80 6th Avenue, Brooklyn, NY 11217
- Phone: (862) 310-6782
- Hours: Mon–Sun, 11AM – 9PM
- Social icons: Facebook, Instagram, Yelp
  - FB: https://www.facebook.com/PhoBar-128359041278325/
  - IG: http://instagram.com/phobarnyc
  - Yelp: https://www.yelp.com/biz/phobar-new-york-2
- Links: Menu, Order Online, Contact Us, Press
- "© 2026 PhoBar. All rights reserved."
- Tropical leaf pattern as a thin decorative strip at the top of the footer

---

## TECHNICAL REQUIREMENTS

- **Framework:** Next.js 14+ with App Router
- **Styling:** Tailwind CSS v3+ with custom colors matching the brand palette
- **Animations:** Framer Motion — smooth carousel crossfades, scroll-triggered fade-ins, parallax on food images, tab switching animations
- **Fonts:** Google Fonts — Bebas Neue or Oswald (headings) + Lora or Crimson Pro (body). Vietnamese diacritics must work.
- **Images:** Use next/image with Squarespace CDN URLs. Set unoptimized={true}. These are high-res photos.
- **Responsive:** Mobile-first. Menu section is critical — single column, collapsible categories on mobile.
- **Performance:** Lazy load carousel images below fold. Use blur placeholders.
- **Accessibility:** Proper semantic HTML, alt text, keyboard navigation for menu tabs.
- **No backend** — static site. "Order Online" links to https://www.getsauce.com/order/phobar/menu

---

## FILE STRUCTURE

```
phobar/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ImageCarousel.tsx
│   ├── About.tsx
│   ├── FeaturedDishes.tsx
│   ├── Menu.tsx
│   ├── MenuCategory.tsx
│   ├── MenuItem.tsx
│   ├── MenuTabs.tsx
│   ├── LocationHours.tsx
│   ├── Press.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   └── menuData.ts (complete menu with all Vietnamese diacritics)
├── public/
│   └── (any local assets)
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## WHAT TO AVOID

- Generic Squarespace template feel — box layouts with no energy
- Missing Vietnamese diacritics (Phở not Pho, Bánh Mì not Banh Mi) — this matters
- Bright white sterile backgrounds everywhere — use the warm cream/beige as the base
- Ignoring the tropical pattern — it IS the brand, use it as a design motif throughout
- Cramped menu text — prices range $2–$25, give every item room to breathe
- Stock photos — use ONLY the real PhoBar photography from their Squarespace CDN
- Boring tab navigation for the menu — make it smooth, animated, and satisfying
- Forgetting the neon "Crazy" sign energy — that yellow neon is part of their identity
