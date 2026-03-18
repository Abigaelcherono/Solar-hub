 Solar-hub
☀️ SolarHub Kenya — Solar Equipment E-Commerce Website

> A full-featured solar energy e-commerce platform built for the Kenyan market. Browse, filter, and order premium solar panels, inverters, batteries and accessories — all priced in KSh with real market prices.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active-27AE60?style=for-the-badge)
![Kenya](https://img.shields.io/badge/Market-Kenya-006600?style=for-the-badge)

---

 🌍 About The Project

**SolarHub Kenya** is a conservation-themed solar energy e-commerce website designed to make clean, renewable energy accessible to every Kenyan home and business. The platform showcases real solar products at genuine Kenya market prices (KSh), allows customers to add items to a cart, enquire about complete packages, and contact the seller directly via WhatsApp.

The site is built entirely with **HTML, CSS, and TypeScript** — no frameworks, no dependencies — making it lightweight, fast, and beginner-friendly to understand and extend.

> 🌱 *"Kenya has some of Africa's strongest sunlight year-round. Going solar is one of the smartest financial and environmental decisions you can make."*

---

 ✨ Features

- ☀️ **12 Real Products** — Solar panels, inverters, batteries & accessories with actual Kenya 2026 market prices in KSh
- 🛒 **Add to Cart with Quantity Combobox** — Select quantity (1–10 units) before adding any product to cart
- 🗂️ **Category Filtering** — Filter products by Panels, Inverters, Batteries, or Accessories instantly
- 📋 **Product Info Modal** — Full specs sheet, detailed description and WhatsApp enquiry for each product
- 📦 **Ready-to-Install Packages** — 3 bundled packages (Starter Home, Family Home, Business) with full inclusions
- 📞 **Contact & Quote Form** — Clients submit their details and interest area to get a personalised quote
- 🟢 **WhatsApp Checkout** — Cart sends a formatted order message directly to the seller's WhatsApp
- 📱 **Fully Responsive** — Works perfectly on mobile, tablet, and desktop
- 🌿 **Environmental Green Theme** — Rich forest green gradients, animated hero, floating solar panel visual
- ⚡ **Scroll Animations & Hover Effects** — Smooth transitions, card lifts, and a floating hero image

---

📂 Project Structure

```
solar-hub/
├── index.html       ←  Full page structure (Nav, Hero, Products, Packages, Contact, Footer)
├── style.css        ←  All styling — green theme, grid layouts, animations, responsive design
├── app.ts           ←  TypeScript source — interfaces, data, cart logic, DOM manipulation
├── app.js           ←  Compiled JavaScript — browser reads this (auto-generated from app.ts)
├── app.js.map       ←  Source map — links app.js back to app.ts for debugging
└── tsconfig.json    ←  TypeScript compiler configuration
```

> ✏️ **Always edit `app.ts`** — never edit `app.js` directly. Run `tsc --watch` and the JS updates automatically every time you save.

---

 🚀 Getting Started

Prerequisites

| Tool | Purpose | Download |
|---|---|---|
| VS Code | Code editor | [code.visualstudio.com](https://code.visualstudio.com) |
| Node.js (LTS) | Runs the TypeScript compiler | [nodejs.org](https://nodejs.org) |
| TypeScript | Compiles `.ts` → `.js` | Install via npm (see below) |
| Live Server | Runs website in browser | VS Code extension |

Installation & Setup

1. Clone the repository**
```bash
git clone https://github.com/your-username/solar-hub.git
cd solar-hub
```

2. Install TypeScript globally**
```bash
npm install -g typescript
```

3. Verify TypeScript is installed**
```bash
tsc --version
# Should print: Version 5.x.x
```

4. Open in VS Code**
```bash
code .
```

5. Start the TypeScript compiler in watch mode**
```bash
tsc --watch
```
> This auto-compiles `app.ts` → `app.js` every time you save. You should see `Found 0 errors. Watching for file changes.`

6. Run the website
- Right-click `index.html` in the VS Code sidebar
- Select "Open with Live Server"
- Site opens at `http://127.0.0.1:5500/index.html`

---

🛒 How the Shopping Flow Works

```
Browse Products
      ↓
Select Quantity (combobox: 1–10 units)
      ↓
Click "Add to Cart"
      ↓
Cart Sidebar Opens (shows items + total in KSh)
      ↓
Click "Proceed to Order"
      ↓
WhatsApp opens with a pre-filled order message
      ↓
Seller confirms availability & arranges delivery
```

---

 🧰 VS Code Extensions Needed

| Extension | Author | Priority | Purpose |
|---|---|---|---|
| Live Server | Ritwick Dey | 🔴 Must Have | Runs and auto-refreshes the site |
| Prettier | Prettier | 🔴 Must Have | Auto-formats code |
| ESLint | Microsoft | 🔴 Must Have | Catches TypeScript errors |
| Error Lens | Alexander | 🟡 Very Useful | Shows errors inline on the line |
| Path Intellisense | Christian Kohler | 🟡 Very Useful | Auto-suggests file paths |
| CSS Peek | Pranay Prakash | 🟡 Very Useful | Jump to CSS from HTML class names |
| Auto Rename Tag | Jun Han | 🟢 Nice to Have | Renames closing HTML tags automatically |
| IntelliSense for CSS | Zignd | 🟢 Nice to Have | Suggests CSS class names in HTML |

---

🧠 TypeScript Concepts Used

This project is an excellent learning reference for the following TypeScript concepts:

| Concept | Example in `app.ts` |
|---|---|
| **Interface** | `interface Product { id: number; name: string; }` |
| **Typed Arrays** | `const PRODUCTS: Product[]` |
| **Union Types** | `category: "panels" \| "inverters" \| "batteries"` |
| **Optional Fields** | `oldPrice?: number` — the `?` means it may or may not exist |
| **Generic Functions** | `getEl<HTMLInputElement>("id")` |
| **Typed Parameters** | `function addToCart(id: number): void` |
| **Type Assertion** | `el as HTMLSelectElement` |
| **Record Type** | `specs: Record<string, string>` |
| **Array Methods** | `.find()`, `.filter()`, `.map()`, `.reduce()` — all typed |
| **DOM Events** | `addEventListener("click", (e: MouseEvent) => {})` |
| **Void Return Type** | `function renderProducts(): void` — returns nothing |

---

 📦 Products in the Catalogue

Solar Panels
| Product | Brand | Price (KSh) |
|---|---|---|
| Jinko Tiger 405W Monocrystalline | Jinko Solar | 9,250 |
| Longi Hi-MO 550W Bifacial | Longi Solar | 12,500 |
| Canadian Solar 300W Polycrystalline | Canadian Solar | 7,800 |
| Trina Vertex 670W Premium | Trina Solar | 13,350 |

Inverters
| Product | Brand | Price (KSh) |
|---|---|---|
| Growatt 3kW Hybrid Inverter | Growatt | 65,000 |
| Deye 5kW Hybrid Inverter | Deye | 98,000 |
| MUST 1.5kVA Pure Sine Inverter | MUST | 21,000 |

Batteries
| Product | Brand | Price (KSh) |
|---|---|---|
| Ritar 200AH 12V Deep Cycle | Ritar | 38,000 |
| Dyness 5kWh Lithium-Ion | Dyness | 120,500 |
| Trojan T-105 6V Deep Cycle | Trojan | 18,500 |

Accessories
| Product | Brand | Price (KSh) |
|---|---|---|
| Goldenmax 30A MPPT Controller | Goldenmax | 8,000 |
| Solar Mounting Structure (4 panels) | Aluminium Pro | 12,000 |

---

🎨 Color Palette

```css
/* Environmental Green Theme */
--green-deep:    #0A3A1E   /* Dark forest — hero background   */
--green-forest:  #145A32   /* Forest green — nav, headers     */
--green-mid:     #1E8449   /* Mid green — buttons, accents    */
--green-bright:  #27AE60   /* Bright green — highlights       */
--green-light:   #A9DFBF   /* Light green — text on dark bg   */
--green-pale:    #EAFAF1   /* Pale green — section backgrounds*/
--gold:          #F0B429   /* Gold — prices, hero stats, CTAs */
```

---

 📋 Future Improvements

- [ ] Backend integration (Node.js + Express) to store orders and contact form submissions
- [ ] User accounts so customers can track past orders
- [ ] M-Pesa payment integration for direct checkout
- [ ] Admin dashboard to manage product stock and prices
- [ ] Product reviews and ratings section
- [ ] Delivery cost calculator by county
- [ ] Solar savings calculator (enter your KPLC bill → see how much you'd save)
- [ ] Blog section with solar guides for Kenyan homeowners

---

 🤝 Contributing

Pull requests are welcome! To contribute:

1. Fork the repository
2. Create your branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes in `app.ts` (not `app.js`)
4. Compile and verify no errors
   ```bash
   tsc --watch
   ```
5. Commit your changes
   ```bash
   git commit -m "Add: your feature description"
   ```
6. Push and open a Pull Request
   ```bash
   git push origin feature/your-feature-name
   ```

---

 📬 Contact & Order

SolarHub Kenya

| Platform | Contact |
|---|---|
| 📱 WhatsApp | [0715 430 376](https://wa.me/254715430376) |
| 📸 Instagram | [@abigael cherono](https://instagram.com/abigaelcherono) |
| 👤 Facebook | [Abigael Cherono](https://facebook.com/abigaelcherono) |

> Nationwide delivery across Kenya. Installation available in major towns.

---

 📄 License

This project is licensed under the **MIT License** — free to use, modify, and build upon.

```
MIT License © 2025 SolarHub Kenya · Abigael Cherono
```

---

<div align="center">

Built with 💚 and ☀️ by Abigael Cherono

Empowering Kenya with clean, affordable solar energy — one rooftop at a time.

⭐ If this project helped you, give it a star on GitHub!

</div>
