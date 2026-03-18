// ============================================================
//  SOLARHUB KENYA — Solar Equipment Store
//  app.ts  |  TypeScript Source File
//
//  👋 JUNIOR DEVELOPER GUIDE:
//  TypeScript is JavaScript with "types" added.
//  A "type" tells the code exactly what shape of data to expect.
//  e.g.  let name: string = "Jane"   ← name MUST be a string
//        let price: number = 15000   ← price MUST be a number
//  This catches mistakes BEFORE your code runs. Very powerful!
// ============================================================


// ── 1. INTERFACES ───────────────────────────────────────────
// An "interface" is like a blueprint — it defines the exact
// shape that an object MUST follow. If you miss a field or
// use the wrong type, TypeScript will warn you immediately.

interface Product {
  id: number;
  name: string;
  brand: string;
  category: "panels" | "inverters" | "batteries" | "accessories"; // Only these 4 values allowed!
  price: number;
  oldPrice?: number;         // The "?" means this field is OPTIONAL
  description: string;
  image: string;
  inStock: boolean;
  specs: Record<string, string>; // Record<K,V> = an object where keys are K and values are V
  warranty: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface Package {
  id: number;
  name: string;
  subtitle: string;
  price: number;
  icon: string;
  featured: boolean;
  features: string[];
}

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
}


// ── 2. REAL PRODUCT DATA (prices sourced from Kenya market 2026) ──
// This is a TypeScript array typed as Product[]
// The [] after a type means "array of that type"

const PRODUCTS: Product[] = [
  // ── SOLAR PANELS ──────────────────────────────────────────
  {
    id: 1,
    name: "Jinko Tiger 405W Monocrystalline Panel",
    brand: "Jinko Solar",
    category: "panels",
    price: 9250,
    oldPrice: 10500,
    description: "World's #1 solar panel brand. 21.5% efficiency with PERC cell technology. Handles Kenya's tropical heat exceptionally well. Low-light performance for cloudy days.",
    image: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=500&q=80",
    inStock: true,
    warranty: "25 Years Linear Performance",
    specs: {
      "Wattage": "405W",
      "Efficiency": "21.5%",
      "Cell Type": "Monocrystalline PERC",
      "Voltage (Voc)": "49.5V",
      "Dimensions": "1722 × 1134 × 30mm",
      "Weight": "20.5 kg",
    }
  },
  {
    id: 2,
    name: "Longi Hi-MO 550W Bifacial Panel",
    brand: "Longi Solar",
    category: "panels",
    price: 12500,
    oldPrice: 14000,
    description: "Bifacial design captures sunlight from both sides, boosting output by up to 25% vs monofacial panels. Perfect for commercial rooftops and ground mounts.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&q=80",
    inStock: true,
    warranty: "30 Years Performance",
    specs: {
      "Wattage": "550W",
      "Efficiency": "22.1%",
      "Cell Type": "Bifacial Mono PERC",
      "Voltage (Voc)": "52.7V",
      "Dimensions": "2256 × 1133 × 35mm",
      "Weight": "27 kg",
    }
  },
  {
    id: 3,
    name: "Canadian Solar 300W Polycrystalline",
    brand: "Canadian Solar",
    category: "panels",
    price: 7800,
    oldPrice: 9000,
    description: "Budget-friendly polycrystalline panel. 15-17% efficiency. Excellent value for large installations where roof space is not a constraint. Proven in Kenyan climate.",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=500&q=80",
    inStock: true,
    warranty: "25 Years",
    specs: {
      "Wattage": "300W",
      "Efficiency": "16.8%",
      "Cell Type": "Polycrystalline",
      "Voltage (Voc)": "38.4V",
      "Dimensions": "1956 × 992 × 40mm",
      "Weight": "22.5 kg",
    }
  },
  {
    id: 4,
    name: "Trina Vertex 670W Premium Panel",
    brand: "Trina Solar",
    category: "panels",
    price: 13350,
    description: "Kenya's top-of-the-range commercial panel. 670W output per panel means fewer panels needed for large systems. Ideal for businesses, hotels and schools.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&q=80",
    inStock: true,
    warranty: "25 Years",
    specs: {
      "Wattage": "670W",
      "Efficiency": "22.4%",
      "Cell Type": "N-Type Monocrystalline",
      "Voltage (Voc)": "58.1V",
      "Dimensions": "2384 × 1303 × 35mm",
      "Weight": "35 kg",
    }
  },

  // ── INVERTERS ─────────────────────────────────────────────
  {
    id: 5,
    name: "Growatt 3kW Hybrid Inverter",
    brand: "Growatt",
    category: "inverters",
    price: 65000,
    oldPrice: 75000,
    description: "Smart hybrid inverter — combines solar, battery, and KPLC grid in one unit. Built-in 60A MPPT charge controller. Ideal for 2–3 bedroom homes wanting full solar + backup.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&q=80",
    inStock: true,
    warranty: "5 Years",
    specs: {
      "Capacity": "3kW / 3000W",
      "Type": "Hybrid (Solar + Battery + Grid)",
      "MPPT": "Built-in 60A MPPT",
      "Battery Voltage": "24V / 48V",
      "AC Output": "220V / 50Hz",
      "Efficiency": "up to 98%",
    }
  },
  {
    id: 6,
    name: "Deye 5kW Hybrid Inverter",
    brand: "Deye",
    category: "inverters",
    price: 98000,
    oldPrice: 115000,
    description: "Premium 5kW hybrid inverter trusted by thousands of Kenyan homes. Supports Lithium & Lead-Acid batteries. WiFi monitoring included. Best value for 3–4 bedroom homes.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    inStock: true,
    warranty: "5 Years",
    specs: {
      "Capacity": "5kW / 5000W",
      "Type": "Hybrid",
      "MPPT Channels": "2 × 80A MPPT",
      "Battery Voltage": "48V",
      "Max PV Input": "1000V DC",
      "Monitoring": "WiFi + App",
    }
  },
  {
    id: 7,
    name: "MUST 1.5kVA 12V Pure Sine Inverter",
    brand: "MUST",
    category: "inverters",
    price: 21000,
    description: "Entry-level inverter for small homes and shops. 1500W pure sine wave output — safe for all electronics. Built-in 60A MPPT. Perfect starter solar system component.",
    image: "https://images.unsplash.com/photo-1503514160465-ab7a02d90d3e?w=500&q=80",
    inStock: true,
    warranty: "2 Years",
    specs: {
      "Capacity": "1500VA / 1500W",
      "Type": "Pure Sine Wave",
      "MPPT": "Built-in 60A",
      "Battery": "12V",
      "AC Input": "145V–280V",
      "Output Frequency": "50Hz",
    }
  },

  // ── BATTERIES ─────────────────────────────────────────────
  {
    id: 8,
    name: "Ritar 200AH 12V Deep Cycle Battery",
    brand: "Ritar",
    category: "batteries",
    price: 38000,
    oldPrice: 44000,
    description: "Most popular battery in Kenya. AGM sealed — no acid spillage, maintenance-free. 200AH gives 4–6 hours backup for a typical home. Ideal for budget-conscious buyers.",
    image: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=500&q=80",
    inStock: true,
    warranty: "1 Year",
    specs: {
      "Capacity": "200AH",
      "Voltage": "12V",
      "Type": "AGM Deep Cycle",
      "Lifespan": "5–7 years",
      "Cycles": "1200+ cycles",
      "Weight": "58 kg",
    }
  },
  {
    id: 9,
    name: "Dyness 5kWh Lithium-Ion Battery",
    brand: "Dyness",
    category: "batteries",
    price: 120500,
    oldPrice: 145000,
    description: "Premium lithium battery — best long-term investment. 6000+ charge cycles (vs 1200 for AGM). 95% usable capacity. 15-year lifespan. No maintenance required. Wall-mounted.",
    image: "https://images.unsplash.com/photo-1601600576337-c1d8a0d1373c?w=500&q=80",
    inStock: true,
    warranty: "10 Years",
    specs: {
      "Capacity": "5kWh",
      "Type": "Lithium-Ion (LiFePO4)",
      "Lifespan": "15+ years",
      "Cycles": "6000+",
      "Usable Capacity": "95%",
      "Weight": "48 kg",
    }
  },
  {
    id: 10,
    name: "Trojan T-105 6V Deep Cycle Battery",
    brand: "Trojan",
    category: "batteries",
    price: 18500,
    description: "Classic flooded deep cycle battery. Used in solar systems worldwide for decades. High discharge depth. Pair two in series for 12V, four for 24V systems.",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80",
    inStock: false,
    warranty: "1 Year",
    specs: {
      "Capacity": "225AH",
      "Voltage": "6V",
      "Type": "Flooded Deep Cycle",
      "Lifespan": "4–6 years",
      "Cycles": "1500+",
      "Weight": "29 kg",
    }
  },

  // ── ACCESSORIES ───────────────────────────────────────────
  {
    id: 11,
    name: "Goldenmax 30A MPPT Charge Controller",
    brand: "Goldenmax",
    category: "accessories",
    price: 8000,
    description: "Standalone MPPT charge controller for off-grid systems. Maximises solar harvest by 30% vs PWM type. Supports 12V and 24V battery banks. LCD display.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=500&q=80",
    inStock: true,
    warranty: "1 Year",
    specs: {
      "Rated Current": "30A",
      "Max PV Voltage": "100V DC",
      "Battery": "12V / 24V",
      "Type": "MPPT",
      "Display": "LCD",
      "Efficiency": "98%",
    }
  },
  {
    id: 12,
    name: "Solar Mounting Structure (4 Panels)",
    brand: "Aluminium Pro",
    category: "accessories",
    price: 12000,
    description: "Heavy-duty aluminium rooftop mounting rails for 4 panels. Withstands 120 km/h wind. Compatible with iron-sheet and concrete roofs. Adjustable tilt 15°–45°.",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=500&q=80",
    inStock: true,
    warranty: "10 Years",
    specs: {
      "Panels Supported": "4 panels",
      "Material": "Anodized Aluminium",
      "Wind Resistance": "120 km/h",
      "Tilt Range": "15° – 45°",
      "Roof Type": "Iron Sheet & Concrete",
      "Weight": "12 kg",
    }
  },
];

// ── 3. COMPLETE PACKAGES ─────────────────────────────────────
const PACKAGES: Package[] = [
  {
    id: 1,
    name: "Starter Home",
    subtitle: "1–2 Bedroom | Lighting + Phones + TV",
    price: 85000,
    icon: "🏡",
    featured: false,
    features: [
      "2× Jinko 405W Solar Panels",
      "MUST 1.5kW Hybrid Inverter",
      "1× Ritar 200AH Battery",
      "30A MPPT Charge Controller",
      "Mounting Structure & Cables",
      "Professional Installation",
    ]
  },
  {
    id: 2,
    name: "Family Home",
    subtitle: "3–4 Bedroom | Full Home Coverage",
    price: 285000,
    icon: "🏠",
    featured: true,
    features: [
      "6× Jinko 405W Solar Panels",
      "Deye 5kW Hybrid Inverter",
      "2× Ritar 200AH Batteries",
      "Built-in 80A MPPT",
      "Mounting Structure & Wiring",
      "Professional Installation",
      "2-Year Free Maintenance",
    ]
  },
  {
    id: 3,
    name: "Business / SME",
    subtitle: "Shops, Offices, Schools",
    price: 550000,
    icon: "🏢",
    featured: false,
    features: [
      "12× Trina 670W Panels",
      "Deye 10kW 3-Phase Inverter",
      "Dyness 10kWh Lithium Battery",
      "Advanced WiFi Monitoring",
      "Commercial Mounting System",
      "Professional Installation",
      "5-Year Free Maintenance",
    ]
  },
];


// ── 4. CART STATE ────────────────────────────────────────────
// This is where we store what the user has added to the cart.
// "let" means this variable can be re-assigned (unlike "const")

let cart: CartItem[] = [];


// ── 5. DOM HELPER ────────────────────────────────────────────
// A small generic function to select HTML elements safely.
// The <T extends HTMLElement> is a "generic" — it tells TypeScript
// what KIND of element to expect back (input vs button etc.)

function getEl<T extends HTMLElement>(id: string): T {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Element #${id} not found`);
  return el as T;
}


// ── 6. FORMAT PRICE ──────────────────────────────────────────
// Simple utility function that formats a number as Kenyan Shillings
// e.g.  formatPrice(9250)  →  "KSh 9,250"

function formatPrice(amount: number): string {
  return `KSh ${amount.toLocaleString("en-KE")}`;
}


// ── 7. RENDER PRODUCTS ───────────────────────────────────────
// This function builds the product cards dynamically from our data.
// "filter" is typed as a union type — only specific strings allowed.

function renderProducts(filter: "all" | "panels" | "inverters" | "batteries" | "accessories" = "all"): void {
  const grid = getEl<HTMLDivElement>("productsGrid");

  // Filter the products array based on selected category
  const filtered: Product[] = filter === "all"
    ? PRODUCTS
    : PRODUCTS.filter((p: Product) => p.category === filter);

  // Build quantity options HTML (1 through 10)
  const qtyOptions: string = Array.from({ length: 10 }, (_, i) =>
    `<option value="${i + 1}">${i + 1} unit${i > 0 ? "s" : ""}</option>`
  ).join("");

  // Map each product to a card HTML string, then join and inject
  grid.innerHTML = filtered.map((product: Product) => `
    <div class="product-card" data-id="${product.id}">
      <div class="product-img-wrap">
        <img src="${product.image}" alt="${product.name}" loading="lazy"/>
        <span class="product-cat-badge">${product.category}</span>
        ${product.inStock
          ? `<span class="in-stock-badge">✓ In Stock</span>`
          : `<span class="in-stock-badge" style="background:#e53e3e;color:#fff">Out of Stock</span>`
        }
      </div>
      <div class="product-body">
        <div class="product-brand">${product.brand}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-desc">${product.description.substring(0, 100)}...</div>
        <div class="product-price-row">
          <span class="product-price">${formatPrice(product.price)}</span>
          ${product.oldPrice ? `<span class="product-price-old">${formatPrice(product.oldPrice)}</span>` : ""}
        </div>
        <div class="product-actions">
          <select class="qty-select" id="qty-${product.id}" aria-label="Select quantity">
            ${qtyOptions}
          </select>
          <button
            class="add-cart-btn"
            onclick="addToCart(${product.id})"
            ${!product.inStock ? "disabled style='opacity:0.5;cursor:not-allowed'" : ""}
          >
            <i class="fas fa-cart-plus"></i> Add to Cart
          </button>
        </div>
        <button class="more-info-btn" onclick="openModal(${product.id})">
          <i class="fas fa-info-circle"></i> More Info & Specs
        </button>
      </div>
    </div>
  `).join("");
}


// ── 8. RENDER PACKAGES ───────────────────────────────────────
function renderPackages(): void {
  const grid = getEl<HTMLDivElement>("packagesGrid");

  grid.innerHTML = PACKAGES.map((pkg: Package) => `
    <div class="package-card ${pkg.featured ? "featured" : ""}">
      ${pkg.featured ? `<div class="featured-tag">⭐ Most Popular</div>` : ""}
      <div class="pkg-icon">${pkg.icon}</div>
      <div class="pkg-name">${pkg.name}</div>
      <div class="pkg-sub">${pkg.subtitle}</div>
      <div class="pkg-price">${formatPrice(pkg.price)} <span>/complete</span></div>
      <ul class="pkg-features">
        ${pkg.features.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join("")}
      </ul>
      <button class="btn-green" style="width:100%;justify-content:center" onclick="enquirePackage('${pkg.name}')">
        Get This Package <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  `).join("");
}


// ── 9. CART FUNCTIONS ────────────────────────────────────────

function addToCart(productId: number): void {
  // Find the product from our data array using its id
  const product: Product | undefined = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  // Read the quantity the user selected from the dropdown
  const qtySelect = document.getElementById(`qty-${productId}`) as HTMLSelectElement;
  const quantity: number = qtySelect ? parseInt(qtySelect.value, 10) : 1;

  // Check if this product is already in the cart
  const existingIndex: number = cart.findIndex((item: CartItem) => item.product.id === productId);

  if (existingIndex >= 0) {
    // Product already in cart — just increase the quantity
    cart[existingIndex].quantity += quantity;
  } else {
    // New product — push a new CartItem object into the array
    cart.push({ product, quantity });
  }

  updateCartUI();
  openCart();
}

function removeFromCart(productId: number): void {
  // Filter out the item that matches the given id
  cart = cart.filter((item: CartItem) => item.product.id !== productId);
  updateCartUI();
}

function updateCartUI(): void {
  const badge = getEl<HTMLSpanElement>("cartBadge");
  const itemsContainer = getEl<HTMLDivElement>("cartItems");
  const emptyMsg = getEl<HTMLDivElement>("cartEmpty");
  const footer = getEl<HTMLDivElement>("cartFooter");
  const totalEl = getEl<HTMLElement>("cartTotal");

  // Total number of items (sum all quantities)
  const totalCount: number = cart.reduce((sum: number, item: CartItem) => sum + item.quantity, 0);
  badge.textContent = String(totalCount);

  if (cart.length === 0) {
    emptyMsg.style.display = "block";
    footer.style.display = "none";
    // Clear all cart item elements
    Array.from(itemsContainer.querySelectorAll(".cart-item")).forEach(el => el.remove());
    return;
  }

  emptyMsg.style.display = "none";
  footer.style.display = "block";

  // Build the cart items HTML
  const itemsHTML: string = cart.map((item: CartItem) => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.product.image}" alt="${item.product.name}"/>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.product.name}</div>
        <div class="cart-item-qty">Qty: ${item.quantity} × ${formatPrice(item.product.price)}</div>
      </div>
      <div class="cart-item-price">${formatPrice(item.product.price * item.quantity)}</div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.product.id})" aria-label="Remove">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  `).join("");

  // Replace only the cart-item divs, keep the empty message div
  Array.from(itemsContainer.querySelectorAll(".cart-item")).forEach(el => el.remove());
  emptyMsg.insertAdjacentHTML("afterend", itemsHTML);

  // Calculate and display total
  const total: number = cart.reduce((sum: number, item: CartItem) => {
    return sum + (item.product.price * item.quantity);
  }, 0);
  totalEl.textContent = formatPrice(total);
}

function openCart(): void {
  getEl("cartSidebar").classList.add("open");
  getEl("cartOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart(): void {
  getEl("cartSidebar").classList.remove("open");
  getEl("cartOverlay").classList.remove("open");
  document.body.style.overflow = "";
}


// ── 10. PRODUCT MODAL ────────────────────────────────────────
function openModal(productId: number): void {
  const product: Product | undefined = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const content = getEl<HTMLDivElement>("modalContent");

  // Build specs table rows
  const specsHTML: string = Object.entries(product.specs)
    .map(([key, value]: [string, string]) => `
      <div class="spec-row">
        <span>${key}</span>
        <span>${value}</span>
      </div>
    `).join("");

  content.innerHTML = `
    <img class="modal-img" src="${product.image}" alt="${product.name}"/>
    <div class="modal-body">
      <div class="modal-brand">${product.brand} · ${product.category.toUpperCase()}</div>
      <div class="modal-name">${product.name}</div>
      <div class="modal-price">${formatPrice(product.price)}</div>
      <div class="modal-desc">${product.description}</div>
      <div class="modal-specs">
        <h4>Technical Specifications</h4>
        ${specsHTML}
      </div>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <button class="btn-green" onclick="addToCart(${product.id}); closeModal()">
          <i class="fas fa-cart-plus"></i> Add to Cart
        </button>
        <a href="https://wa.me/254715430376?text=Hello! I'm interested in the ${encodeURIComponent(product.name)}" 
           target="_blank" 
           style="display:inline-flex;align-items:center;gap:8px;background:#25D366;color:#fff;padding:13px 20px;border-radius:8px;text-decoration:none;font-weight:800;font-size:0.9rem">
          <i class="fab fa-whatsapp"></i> Ask on WhatsApp
        </a>
      </div>
      <p style="font-size:0.78rem;color:#888;margin-top:12px">
        🔒 Warranty: ${product.warranty} · Nationwide delivery available
      </p>
    </div>
  `;

  getEl("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(): void {
  getEl("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}


// ── 11. PACKAGE ENQUIRY ──────────────────────────────────────
function enquirePackage(packageName: string): void {
  // Scroll to contact section and pre-fill the interest dropdown
  const contactSection = document.getElementById("contact");
  if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });

  setTimeout(() => {
    const select = getEl<HTMLSelectElement>("cinterest");
    select.value = "Complete Home System";
    const msg = getEl<HTMLTextAreaElement>("cmessage");
    msg.value = `Hi! I'm interested in the ${packageName} package. Please send me more details and a quote.`;
  }, 600);
}


// ── 12. FILTER TABS ──────────────────────────────────────────
function setupFilterTabs(): void {
  const tabs = document.querySelectorAll<HTMLButtonElement>(".tab");

  tabs.forEach((tab: HTMLButtonElement) => {
    tab.addEventListener("click", () => {
      // Remove active from all tabs
      tabs.forEach(t => t.classList.remove("active"));
      // Add active to clicked tab
      tab.classList.add("active");

      // Get the filter value from the data-filter attribute
      const filter = tab.dataset.filter as "all" | "panels" | "inverters" | "batteries" | "accessories";
      renderProducts(filter);
    });
  });
}


// ── 13. NAV & SCROLL EFFECTS ─────────────────────────────────
function setupNav(): void {
  const hamburger = getEl<HTMLButtonElement>("hamburger");
  const navLinks = getEl<HTMLUListElement>("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Close nav when a link is clicked (mobile)
  navLinks.querySelectorAll("a").forEach((link: Element) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}


// ── 14. CART EVENTS ──────────────────────────────────────────
function setupCartEvents(): void {
  getEl("cartBtn").addEventListener("click", openCart);
  getEl("cartClose").addEventListener("click", closeCart);
  getEl("cartOverlay").addEventListener("click", closeCart);

  getEl("checkoutBtn").addEventListener("click", () => {
    if (cart.length === 0) return;

    // Build a WhatsApp message with all cart items
    const itemsList: string = cart.map((item: CartItem) =>
      `• ${item.quantity}× ${item.product.name} @ ${formatPrice(item.product.price)} each`
    ).join("%0A"); // %0A is URL-encoded newline

    const total: number = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const message: string = `Hello SolarHub!%0A%0AI'd like to order:%0A${itemsList}%0A%0ATotal: ${formatPrice(total)}%0A%0APlease confirm availability and delivery.`;

    window.open(`https://wa.me/254715430376?text=${message}`, "_blank");
  });
}


// ── 15. MODAL EVENTS ─────────────────────────────────────────
function setupModalEvents(): void {
  getEl("modalCloseBtn").addEventListener("click", closeModal);
  getEl("modalOverlay").addEventListener("click", (e: MouseEvent) => {
    if ((e.target as HTMLElement).id === "modalOverlay") closeModal();
  });
}


// ── 16. CONTACT FORM ─────────────────────────────────────────
function setupContactForm(): void {
  const form = getEl<HTMLFormElement>("contactForm");

  form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    // Read and type-check all form values into a ContactForm object
    const data: ContactForm = {
      name:     (getEl<HTMLInputElement>("cname")).value.trim(),
      phone:    (getEl<HTMLInputElement>("cphone")).value.trim(),
      email:    (getEl<HTMLInputElement>("cemail")).value.trim(),
      interest: (getEl<HTMLSelectElement>("cinterest")).value,
      message:  (getEl<HTMLTextAreaElement>("cmessage")).value.trim(),
    };

    // Basic validation
    if (!data.name || !data.phone || !data.interest) {
      alert("Please fill in your Name, Phone, and Area of Interest.");
      return;
    }

    // Show success message
    getEl("contactFormWrap").innerHTML = `
      <div class="contact-success">
        ✅ <strong>Message received!</strong><br/>
        Thank you, <strong>${data.name}</strong>!<br/>
        Our solar expert will contact you at <strong>${data.phone}</strong> within 24 hours.
      </div>
    `;
  });
}


// ── 17. INITIALISE EVERYTHING ─────────────────────────────────
// This runs when the DOM (the HTML page) has fully loaded.
// "DOMContentLoaded" fires before images finish — ideal for scripts.

document.addEventListener("DOMContentLoaded", (): void => {
  renderProducts();        // Draw product grid
  renderPackages();        // Draw packages section
  setupFilterTabs();       // Attach filter tab events
  setupNav();              // Hamburger menu
  setupCartEvents();       // Cart open/close/checkout
  setupModalEvents();      // Product info modal
  setupContactForm();      // Contact form submission
});
