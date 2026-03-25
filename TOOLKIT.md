# ☀️ Getting Started with TypeScript in a Real-World Web Project
## A Beginner's Guide — SolarHub Kenya Capstone

**Student:** Abigael Cherono
**School:** Moringa School
**Capstone Project:** SolarHub Kenya — Solar Equipment E-Commerce Website
**Technology Explored:** TypeScript
**Submission Date:** 2025

---

## 1. Title & Objective

### What technology did I choose?
**TypeScript** — a statically-typed superset of JavaScript developed and maintained by Microsoft. TypeScript compiles down to plain JavaScript that runs in any browser.

### Why did I choose it?
I chose TypeScript because:
- It is one of the most in-demand skills in the 2025/2026 job market for frontend and full-stack developers
- As a junior developer, I wanted to understand *why* bugs happen before they reach the browser — TypeScript catches errors at compile time, not runtime
- My project (SolarHub Kenya) involves complex data structures — product catalogues, shopping carts, forms — and TypeScript's type system makes managing that complexity much safer and more readable
- It builds directly on JavaScript knowledge, so the learning curve is gradual rather than starting from scratch

### What is the end goal?
Build a fully functional solar equipment e-commerce website called **SolarHub Kenya** that:
- Displays 12 real solar products with genuine Kenya 2026 KSh prices
- Allows users to filter products by category
- Lets customers add items to a cart using a quantity combobox
- Shows a full specifications modal per product
- Sends a formatted WhatsApp order from the cart
- Includes a contact and quote enquiry form

The project proves that TypeScript can be used effectively in a real-world, single-file frontend project — without any framework like React or Angular.

---

## 2. Quick Summary of the Technology

### What is TypeScript?
TypeScript is JavaScript with **types** added on top. It was created by Microsoft in 2012 and has become one of the most popular languages in the world.

In plain JavaScript, you can write:
```javascript
let price = "nine thousand";  // Oops — should be a number
price * 2;                     // This will silently fail at runtime
```

In TypeScript, the same mistake is caught immediately:
```typescript
let price: number = "nine thousand";
// ❌ Error: Type 'string' is not assignable to type 'number'
```

TypeScript is **not a new language** — it compiles (transforms) into regular JavaScript. The browser never sees TypeScript directly; it only ever runs the compiled `.js` file.

### Where is TypeScript used?
- **Frontend**: React, Angular, Vue apps
- **Backend**: Node.js with Express
- **Full-stack**: Next.js, NestJS
- **Mobile**: React Native
- **Desktop**: Electron apps

### One real-world example
**Airbnb** migrated their entire frontend codebase to TypeScript and reported catching 38% of their bugs at compile time before the code ever shipped to users. Microsoft's own VS Code editor is written entirely in TypeScript.

---

## 3. System Requirements

| Requirement | Details |
|---|---|
| **Operating System** | Windows 10/11, macOS 10.15+, or Ubuntu 20.04+ |
| **Code Editor** | Visual Studio Code (strongly recommended) |
| **Node.js** | Version 18 LTS or higher |
| **npm** | Comes bundled with Node.js |
| **TypeScript Compiler** | Installed globally via npm |
| **Browser** | Chrome, Firefox, or Edge (any modern browser) |
| **Internet** | Required for Google Fonts and Font Awesome CDN |

### Check if you already have Node.js
Open a terminal and run:
```bash
node --version
# Expected: v18.x.x or higher

npm --version
# Expected: 9.x.x or higher
```

If you see `command not found`, download Node.js from [nodejs.org](https://nodejs.org) and install the **LTS** version.

---

## 4. Installation & Setup Instructions

### Step 1 — Install Visual Studio Code
1. Go to [code.visualstudio.com](https://code.visualstudio.com)
2. Download for your operating system
3. Run the installer with all default settings

### Step 2 — Install these VS Code Extensions
Open VS Code → click the Extensions icon (four squares on the left sidebar) → search and install each:

| Extension | Author | Why You Need It |
|---|---|---|
| Live Server | Ritwick Dey | Auto-refreshes browser on save |
| Prettier | Prettier | Formats code automatically |
| ESLint | Microsoft | Catches TypeScript errors live |
| Error Lens | Alexander | Shows errors inline on each line |
| Path Intellisense | Christian Kohler | Auto-suggests file paths |

### Step 3 — Install TypeScript globally
Open a terminal (in VS Code: press `` Ctrl + ` ``):
```bash
npm install -g typescript
```

Verify it installed correctly:
```bash
tsc --version
# Expected output: Version 5.x.x
```

### Step 4 — Create your project folder
```bash
mkdir solar-hub
cd solar-hub
```

### Step 5 — Create the TypeScript config file
Create a file called `tsconfig.json` in your project folder with this content:
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["ES2017", "DOM"],
    "strict": false,
    "sourceMap": true,
    "noEmitOnError": true
  },
  "files": ["app.ts"]
}
```

> ⚠️ **Important:** Use `"files"` not `"include"` — this avoids a common error where TypeScript accidentally excludes your own files (see Section 7 for this error and fix).

### Step 6 — Clone or download the project
```bash
git clone https://github.com/your-username/solar-hub.git
```
Or download the ZIP and extract it into your project folder.

### Step 7 — Start the TypeScript compiler in watch mode
```bash
tsc --watch
```

You should see:
```
Found 0 errors. Watching for file changes.
```

This means TypeScript is now watching `app.ts` and will automatically compile it to `app.js` every time you save.

### Step 8 — Open the website in your browser
- In VS Code, right-click `index.html` in the Explorer sidebar
- Select **"Open with Live Server"**
- Your browser opens at `http://127.0.0.1:5500/index.html`

> ✅ You should now see the SolarHub Kenya website fully rendered with green theme, product grid, and navigation.

---

## 5. Minimal Working Example

### What does this example do?
This is a stripped-down version of the SolarHub product display — the "Hello World" of the project. It defines a typed `Product` interface, creates one product object, and renders it to the DOM using TypeScript.

This example demonstrates the three core TypeScript concepts used throughout the full project: **interfaces**, **typed variables**, and **typed functions**.

### Create a file called `hello-solar.ts`:

```typescript
// ── STEP 1: Define an Interface ──────────────────────────────
// An interface is a blueprint — it tells TypeScript exactly
// what shape every Product object must have.
// If you forget a required field, TypeScript will warn you!

interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}


// ── STEP 2: Create a typed array of products ─────────────────
// The ": Product[]" tells TypeScript this array must only
// contain objects that match the Product interface above.

const products: Product[] = [
  {
    id: 1,
    name: "Jinko Tiger 405W Solar Panel",
    price: 9250,
    inStock: true
  },
  {
    id: 2,
    name: "Deye 5kW Hybrid Inverter",
    price: 98000,
    inStock: true
  },
  {
    id: 3,
    name: "Ritar 200AH Deep Cycle Battery",
    price: 38000,
    inStock: false
  }
];


// ── STEP 3: A typed utility function ─────────────────────────
// ": string" after the brackets = this function MUST return a string
// "amount: number" = the parameter MUST be a number

function formatPrice(amount: number): string {
  return `KSh ${amount.toLocaleString("en-KE")}`;
}


// ── STEP 4: A function that renders products to the DOM ───────
// ": void" means this function returns nothing

function renderProducts(): void {
  const container = document.getElementById("app");
  if (!container) return;

  container.innerHTML = products
    .map((p: Product) => `
      <div style="border:1px solid green; padding:16px; margin:10px; border-radius:8px">
        <h3>${p.name}</h3>
        <p>Price: <strong>${formatPrice(p.price)}</strong></p>
        <p>Status: ${p.inStock ? "✅ In Stock" : "❌ Out of Stock"}</p>
      </div>
    `)
    .join("");
}


// ── STEP 5: Run when the page loads ──────────────────────────
document.addEventListener("DOMContentLoaded", renderProducts);
```

### Create a matching `hello-solar.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <title>Hello Solar — TypeScript Test</title>
</head>
<body>
  <h1>☀️ SolarHub — TypeScript Hello World</h1>
  <div id="app">Loading products...</div>

  <!-- Link the COMPILED JS file, not the .ts file -->
  <script src="hello-solar.js"></script>
</body>
</html>
```

### Compile and run:
```bash
tsc hello-solar.ts --target ES2017 --lib ES2017,DOM
```
Then open `hello-solar.html` with Live Server.

### Expected Output:
You will see three product cards rendered on the page, each showing:
```
Jinko Tiger 405W Solar Panel
Price: KSh 9,250
Status: ✅ In Stock

Deye 5kW Hybrid Inverter
Price: KSh 98,000
Status: ✅ In Stock

Ritar 200AH Deep Cycle Battery
Price: KSh 38,000
Status: ❌ Out of Stock
```

> 🎉 If you see this, TypeScript is working correctly on your machine!

---

## 6. AI Prompt Journal

The following prompts were used during development via **[ai.moringaschool.com](https://ai.moringaschool.com)** to learn TypeScript and build SolarHub Kenya.

---

### Prompt 1
**Prompt used:**
> *"I am a junior developer who knows JavaScript. Explain TypeScript interfaces and typed arrays to me using a solar products example with real Kenya KSh prices."*

**AI's response summary:**
The AI explained that an interface acts like a contract — if a `Product` interface requires a `price: number` field, you cannot accidentally assign a string like `"nine thousand"` to it. It scaffolded the first `Product` interface and showed how `const products: Product[]` enforces that every item in the array must match that shape. This was the foundation of the entire `app.ts` file.

**Evaluation:**
Extremely helpful. The Kenya-specific framing (KSh prices) made the explanation concrete and directly applicable to the project. The AI's example was almost production-ready and required very little modification.

---

### Prompt 2
**Prompt used:**
> *"Create a TypeScript function that filters an array of products by category. The category should only allow the values: panels, inverters, batteries, accessories. Use a union type."*

**AI's response summary:**
The AI introduced **union types** — the `|` operator that restricts a variable to only a set of allowed values. It produced the `renderProducts(filter: "all" | "panels" | "inverters" | "batteries" | "accessories")` function signature used in the project. It also explained that this prevents typos — if you write `"batery"` instead of `"batteries"`, TypeScript will catch it immediately.

**Evaluation:**
Very helpful. Without this prompt I would have used a plain `string` type, which would have lost all the safety benefits TypeScript provides for the filter logic.

---

### Prompt 3
**Prompt used:**
> *"Write a TypeScript generic function that safely selects an HTML element by ID and returns it as a specific element type. Explain what generics mean."*

**AI's response summary:**
The AI explained generics using the analogy of a "typed container" — `<T extends HTMLElement>` means "T can be any HTML element type." It produced the `getEl<T>` helper function used throughout the project to avoid repetitive casting. It also showed the difference between `getEl<HTMLSelectElement>` and `getEl<HTMLInputElement>` for different form elements.

**Evaluation:**
Helpful but initially confusing. Required a follow-up prompt (see Prompt 4) to fully understand the syntax.

---

### Prompt 4
**Prompt used:**
> *"I don't understand the syntax function getEl<T extends HTMLElement>. Can you explain what each part means word by word, as if I have never seen generics before?"*

**AI's response summary:**
The AI broke down the syntax character by character:
- `function getEl` → the function name
- `<T>` → "I am accepting a type variable called T — you tell me what it is when you call the function"
- `extends HTMLElement` → "T must be some kind of HTML element — not a number or string"
- `(id: string)` → the actual parameter — the element's ID
- `: T` → "I will return back whatever type T you specified"

**Evaluation:**
This was the most valuable prompt of the project. The word-by-word breakdown made generics click. This is a concept that many tutorials skip over but is essential for TypeScript DOM work.

---

### Prompt 5
**Prompt used:**
> *"Create a TypeScript shopping cart system. The cart should be an array of CartItem objects. Each CartItem has a product and a quantity. Include addToCart, removeFromCart, and a function to calculate the total price in KSh."*

**AI's response summary:**
The AI produced the full cart system including the `CartItem` interface, the `let cart: CartItem[]` state variable, and all three functions with correct TypeScript types. It also introduced `Array.reduce()` with types — `cart.reduce((sum: number, item: CartItem) => sum + item.product.price * item.quantity, 0)` — which was used directly in the final project.

**Evaluation:**
Excellent. The `reduce()` example was particularly educational as it showed how TypeScript types flow through higher-order array methods.

---

### Prompt 6
**Prompt used:**
> *"My tsconfig.json is showing this error: 'No inputs were found in config file. Specified include paths were [app.ts] and exclude paths were [.]'. How do I fix this?"*

**AI's response summary:**
The AI explained that using `"include"` together with `"outDir": "."` causes TypeScript to auto-generate `"exclude": ["."]` — which paradoxically excludes the entire current folder, including `app.ts` itself. The fix was to replace `"include"` with `"files"` and remove `"outDir"` and `"rootDir"` since the source and output files are in the same folder.

**Evaluation:**
Critical. This was a real blocking error encountered during development. The AI diagnosed and fixed it correctly on the first attempt. The explanation of *why* the error happens was more valuable than just the fix.

---

### Prompt 7
**Prompt used:**
> *"Generate a complete environmental green CSS theme for a solar energy website. Use CSS custom properties (variables) for all colors. Include gradients of green, a dark forest hero section, and gold as an accent color for prices."*

**AI's response summary:**
The AI produced the full `:root` block with 9 green CSS variables ranging from `--green-deep: #0A3A1E` to `--green-pale: #EAFAF1`, plus `--gold: #F0B429` for prices and CTAs. It also suggested the `Bebas Neue` display font for headings — a bold choice that gave the site its distinctive environmental-yet-commercial character.

**Evaluation:**
Very helpful for design decisions. Suggesting Bebas Neue instead of a generic sans-serif was an unexpected improvement that significantly elevated the visual quality of the final site.

---

### Reflection: How AI Improved Productivity and Clarity

Using AI throughout this project fundamentally changed how I approach learning a new technology. Key observations:

1. **Speed of concept acquisition** — Concepts that would take hours to find in documentation (like TypeScript generics) were explained in minutes with project-specific examples. Estimated time saved: 6–8 hours.

2. **Error resolution** — The `tsconfig.json` error (Prompt 6) could have taken hours to debug alone. The AI not only fixed it but explained the underlying mechanism, which means I can prevent the same error in future projects.

3. **Prompt refinement matters** — My initial prompts were too vague. "Explain TypeScript" gave generic answers. "Explain TypeScript interfaces using a Kenya solar products example" gave immediately usable code. Specificity is the skill.

4. **AI as a pair programmer, not a replacement** — The AI could not test the code, understand the visual design I had in mind, or know that the site was for a Kenyan audience. Those decisions required human judgment. The AI accelerated execution; thinking remained mine.

5. **Limitation observed** — On Prompt 3, the AI assumed I understood generic syntax. When I didn't, I had to ask a follow-up (Prompt 4). AI does not always calibrate to your actual knowledge level — you have to actively ask it to slow down.

---

## 7. Common Issues & Fixes

### Error 1 — tsconfig.json: "No inputs were found"

**Error message:**
```
No inputs were found in config file 'tsconfig.json'.
Specified 'include' paths were '["app.ts"]' and 'exclude' paths were '["."]'.
```

**Why it happens:**
Using `"include": ["app.ts"]` with `"outDir": "."` causes TypeScript to auto-add `"exclude": ["."]` — which excludes the entire current directory, including your `app.ts` file itself.

**Fix:**
Replace `"include"` with `"files"` and remove `"outDir"` and `"rootDir"`:
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["ES2017", "DOM"],
    "strict": false,
    "sourceMap": true,
    "noEmitOnError": true
  },
  "files": ["app.ts"]
}
```

**Reference:** [TypeScript tsconfig docs — files vs include](https://www.typescriptlang.org/tsconfig#files)

---

### Error 2 — `tsc` command not found

**Error message:**
```
tsc: command not found
```

**Why it happens:**
TypeScript has not been installed globally on your machine, or Node.js is not installed.

**Fix:**
```bash
# Step 1 — Install Node.js first from nodejs.org
# Step 2 — Then install TypeScript globally
npm install -g typescript

# Step 3 — Verify
tsc --version
```

**Reference:** [TypeScript installation guide](https://www.typescriptlang.org/download)

---

### Error 3 — `Property 'entries' does not exist on type 'ObjectConstructor'`

**Error message:**
```
app.ts error TS2550: Property 'entries' does not exist on type 'ObjectConstructor'.
Do you need to change your target library?
```

**Why it happens:**
`Object.entries()` is an ES2017 feature. If your `tsconfig.json` targets an older version (like `ES5` or `ES6`) without including the right library, TypeScript doesn't know the method exists.

**Fix:**
Update your `tsconfig.json` compiler options:
```json
"target": "ES2017",
"lib": ["ES2017", "DOM"]
```

**Reference:** [TypeScript lib compiler option](https://www.typescriptlang.org/tsconfig#lib)

---

### Error 4 — Website is blank / products not showing

**Why it happens:**
The browser is reading `app.js` but you edited `app.ts` without recompiling. Or the `tsc --watch` process was not running.

**Fix:**
1. Check that `tsc --watch` is running in your VS Code terminal
2. Save `app.ts` again — the watch process should compile it
3. Check the browser console (`F12` → Console) for any JavaScript errors
4. Make sure `index.html` links to `app.js` not `app.ts`:
```html
<script src="app.js"></script>  ✅ Correct
<script src="app.ts"></script>  ❌ Wrong — browsers cannot run .ts files
```

---

### Error 5 — `Cannot find element #productsGrid`

**Error message (in browser console):**
```
Uncaught Error: Element #productsGrid not found
```

**Why it happens:**
The JavaScript ran before the HTML finished loading, so the `div#productsGrid` element didn't exist yet when the script tried to find it.

**Fix:**
Make sure your initialization code is wrapped in a `DOMContentLoaded` event listener:
```typescript
// ✅ Correct — waits for HTML to fully load first
document.addEventListener("DOMContentLoaded", (): void => {
  renderProducts();
});

// ❌ Wrong — runs immediately, before HTML is ready
renderProducts();
```

---

### Error 6 — Live Server not working

**Why it happens:**
The Live Server extension is not installed, or the port is blocked.

**Fix:**
1. Open VS Code → Extensions → search `Live Server` → install
2. Right-click `index.html` → "Open with Live Server"
3. If port 5500 is blocked, change it in VS Code settings: search `liveServer.settings.port` and change to `3000`

**Reference:** [Live Server VS Code Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

---

## 8. References

### Official Documentation
| Resource | URL |
|---|---|
| TypeScript Official Docs | [typescriptlang.org/docs](https://www.typescriptlang.org/docs/) |
| TypeScript Handbook (Beginner) | [typescriptlang.org/docs/handbook/intro.html](https://www.typescriptlang.org/docs/handbook/intro.html) |
| TypeScript Playground (test code online) | [typescriptlang.org/play](https://www.typescriptlang.org/play) |
| tsconfig Reference | [typescriptlang.org/tsconfig](https://www.typescriptlang.org/tsconfig) |
| MDN Web Docs — DOM API | [developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) |

### Video Tutorials
| Resource | URL |
|---|---|
| TypeScript Full Course for Beginners — Traversy Media | [youtube.com/watch?v=BCg4U1FzODs](https://www.youtube.com/watch?v=BCg4U1FzODs) |
| TypeScript in 100 Seconds — Fireship | [youtube.com/watch?v=zQnBQ4tB3ZA](https://www.youtube.com/watch?v=zQnBQ4tB3ZA) |
| TypeScript Crash Course — Net Ninja | [youtube.com/watch?v=2pZmKW9-I_k](https://www.youtube.com/watch?v=2pZmKW9-I_k) |
| TypeScript Generics Explained — Matt Pocock | [youtube.com/watch?v=dLPgQRbVquo](https://www.youtube.com/watch?v=dLPgQRbVquo) |

### Helpful Blog Posts & Articles
| Resource | URL |
|---|---|
| TypeScript for JavaScript Developers — Microsoft | [typescriptlang.org/docs/handbook/typescript-in-5-minutes.html](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) |
| Understanding TypeScript Interfaces | [digitalocean.com/community/tutorials/typescript-interfaces](https://www.digitalocean.com/community/tutorials/typescript-interfaces) |
| TypeScript Generics — A Visual Guide | [ui.dev/typescript-generics](https://ui.dev/typescript-generics) |
| tsconfig.json: files vs include | [stackoverflow.com/questions/44379979](https://stackoverflow.com/questions/44379979) |

### Tools Used
| Tool | URL |
|---|---|
| Visual Studio Code | [code.visualstudio.com](https://code.visualstudio.com) |
| Node.js | [nodejs.org](https://nodejs.org) |
| Google Fonts | [fonts.google.com](https://fonts.google.com) |
| Font Awesome Icons | [fontawesome.com](https://fontawesome.com) |
| Unsplash (product images) | [unsplash.com](https://unsplash.com) |
| AI Learning Assistant | [ai.moringaschool.com](https://ai.moringaschool.com) |

---

## Appendix — Project File Structure

```
solar-hub/
├── index.html          ←  HTML structure (nav, hero, products, packages, contact, footer)
├── style.css           ←  CSS (green theme, grid layouts, animations, responsive design)
├── app.ts              ←  TypeScript SOURCE — always edit this file
├── app.js              ←  Compiled JavaScript — auto-generated, never edit directly
├── app.js.map          ←  Source map for debugging
├── tsconfig.json       ←  TypeScript compiler settings
├── README.md           ←  GitHub project documentation
└── DESCRIPTION.md      ←  Short and long project descriptions
```

---

## Appendix — Key TypeScript Concepts Quick Reference

```typescript
// 1. Interface — defines the shape of an object
interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;      // ? = optional field
}

// 2. Typed array
const products: Product[] = [];

// 3. Union type — only specific values allowed
type Category = "panels" | "inverters" | "batteries";

// 4. Typed function
function formatPrice(amount: number): string {
  return `KSh ${amount.toLocaleString("en-KE")}`;
}

// 5. Generic function
function getEl<T extends HTMLElement>(id: string): T {
  return document.getElementById(id) as T;
}

// 6. Type assertion — tell TypeScript "trust me, I know the type"
const input = document.getElementById("name") as HTMLInputElement;

// 7. Record type — object with specific key/value types
const specs: Record<string, string> = {
  "Wattage": "405W",
  "Efficiency": "21.5%"
};

// 8. void return type — function returns nothing
function renderProducts(): void {
  // does work but returns nothing
}
```

---

*Capstone submission — Moringa School · 2025 · Abigael Cherono*
*"TypeScript doesn't just make code safer — it makes thinking clearer."*
