// Productos de ejemplo: cambia nombres, precios, descripciones e imágenes aquí.
const products = [
  { id: 1, name: "HARIBO Goldbears", category: "Gomitas", description: "Ositos frutales de textura suave, con sabores clásicos para compartir.", detail: "Bolsa · 140 g · sabores frutales", price: 3.50, emoji: "🐻", color: "rose", badge: "Clásico", url: "https://www.haribo.com/en-us/products/goldbears", image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=900&q=85" },
  { id: 2, name: "Ritter Sport Leche", category: "Chocolates", description: "Chocolate con leche de sabor intenso y notas cremosas de cacao fino.", detail: "Tableta · 100 g · chocolate con leche", price: 4.25, emoji: "🍫", color: "peach", badge: "Selección", url: "https://www.ritter-sport.com/product/fine-milk-chocolate", image: "https://images.unsplash.com/photo-1548907040-4d42c4c5f6c8?auto=format&fit=crop&w=900&q=85" },
  { id: 3, name: "OREO Original", category: "Mix", description: "Dos galletas de cacao con un centro cremoso: un clásico para acompañar con leche.", detail: "Paquete familiar · galleta de cacao y crema", price: 4.75, emoji: "🍪", color: "blue", badge: "Favorito", url: "https://www.oreo.com/products/oreo-cookie", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=85" },
  { id: 4, name: "Mix de gomitas", category: "Gomitas", description: "Una selección colorida de dulces frutales ideal para compartir.", detail: "Mix surtido · sabores frutales", price: 5.50, emoji: "🍬", color: "mint", badge: "Para compartir", image: "https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?auto=format&fit=crop&w=900&q=85" },
  { id: 5, name: "Choco crujiente", category: "Chocolates", description: "Chocolate de leche con una textura delicada y un final crujiente.", detail: "Tableta · cacao y leche", price: 4.75, emoji: "🍫", color: "yellow", badge: "Nuevo", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85" },
  { id: 6, name: "Nubes de fresa", category: "Gomitas", description: "Dulces suaves y esponjosos con un delicado toque frutal.", detail: "Bolsa · surtido de temporada", price: 3.25, emoji: "🍥", color: "lilac", badge: "", image: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&w=900&q=85" },
  { id: 7, name: "Paleta frutal", category: "Paletas", description: "Una paleta de colores vivos y sabor dulce para disfrutar a cualquier hora.", detail: "Unidad · sabor frutal", price: 2.00, emoji: "🍭", color: "rose", badge: "", image: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&w=900&q=85" },
  { id: 8, name: "Galletas para compartir", category: "Mix", description: "Galletas crujientes que combinan perfecto con café, leche o helado.", detail: "Paquete · ideal para compartir", price: 3.00, emoji: "🍪", color: "yellow", badge: "", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=85" },
  { id: 9, name: "M&M'S Chocolate", category: "Chocolates", description: "Grageas de chocolate con leche y una cubierta crujiente de colores.", detail: "Bolsa · chocolate con leche", price: 3.75, emoji: "🍫", color: "blue", badge: "Colorido", url: "https://www.mms.com/en-us", image: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&w=900&q=85" },
  { id: 10, name: "Ferrero Rocher", category: "Chocolates", description: "Avellana, chocolate y una capa crujiente en un bocado especial.", detail: "Bombón · avellana y chocolate", price: 6.50, emoji: "🍬", color: "yellow", badge: "Especial", url: "https://www.ferrerorocher.com/us/en/our-products/ferrero-rocher", image: "https://images.unsplash.com/photo-1548907040-4d42c4c5f6c8?auto=format&fit=crop&w=900&q=85" },
  { id: 11, name: "Sour Patch Kids", category: "Gomitas", description: "Gomitas suaves con una primera nota ácida y un final dulce.", detail: "Bolsa · gomitas frutales ácidas", price: 3.95, emoji: "🍬", color: "mint", badge: "Ácido y dulce", url: "https://www.sourpatchkids.com/products", image: "https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?auto=format&fit=crop&w=900&q=85" },
  { id: 12, name: "Skittles Original", category: "Mix", description: "Caramelos masticables con una selección de sabores frutales.", detail: "Bolsa · variedad frutal", price: 3.50, emoji: "🌈", color: "lilac", badge: "Frutal", url: "https://www.skittles.com/products/skittles-original", image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=900&q=85" },
  { id: 13, name: "Lindt Lindor", category: "Chocolates", description: "Chocolate con un centro suave que se derrite lentamente.", detail: "Bombón · chocolate con leche", price: 7.25, emoji: "🍫", color: "peach", badge: "Premium", url: "https://www.lindtusa.com/lindor-milk-chocolate-truffles", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85" },
  { id: 14, name: "Chupa Chups", category: "Paletas", description: "Una paleta clásica para disfrutar despacio, con sabores frutales.", detail: "Unidad · sabores variados", price: 1.75, emoji: "🍭", color: "rose", badge: "Clásico", url: "https://www.chupachups.com/", image: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&w=900&q=85" },
  { id: 15, name: "Toblerone", category: "Chocolates", description: "Chocolate suizo con miel y nougat de almendra para un sabor distintivo.", detail: "Barra · chocolate, miel y almendra", price: 5.75, emoji: "🍫", color: "yellow", badge: "Importado", url: "https://www.toblerone.com/", image: "https://images.unsplash.com/photo-1548907040-4d42c4c5f6c8?auto=format&fit=crop&w=900&q=85" },
  { id: 16, name: "Selección para regalar", category: "Mix", description: "Una combinación de favoritos dulces, preparada para compartir o regalar.", detail: "Caja surtida · selección de temporada", price: 12.00, emoji: "🎁", color: "lilac", badge: "Regalo", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=85" },
];

// Estado del catálogo y carrito.
let selectedCategory = "Todos";
let searchTerm = "";
const cart = new Map();
const money = new Intl.NumberFormat("es", { style: "currency", currency: "USD" });

const productGrid = document.querySelector("#product-grid");
const emptyMessage = document.querySelector("#empty-message");
const searchInput = document.querySelector("#product-search");
const categoryList = document.querySelector("#category-list");
const categoryCascade = document.querySelector("#category-cascade");
const cartDrawer = document.querySelector("#cart-drawer");
const cartOverlay = document.querySelector("#cart-overlay");
const toast = document.querySelector("#toast");
let toastTimer;

// Dibuja las tarjetas según la categoría y búsqueda seleccionadas.
function renderProducts() {
  const matchingProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
    const matchesSearch = `${product.name} ${product.category} ${product.description}`.toLocaleLowerCase("es").includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  productGrid.innerHTML = matchingProducts.map((product) => `
    <article class="product-card" style="--card-index:${matchingProducts.indexOf(product)}">
      <div class="product-art ${product.color}">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
        ${product.image
          ? `<img class="product-photo" src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.remove()">`
          : `<span class="product-emoji" role="img" aria-label="${product.name}">${product.emoji}</span>`}
      </div>
      <div class="product-info">
        <p class="product-category">${product.category}</p>
        <h3>${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <p class="product-detail">${product.detail}</p>
        <div class="product-bottom">
          <span class="product-price">${money.format(product.price)}</span>
          <div class="product-actions">${product.url ? `<a class="product-link" href="${product.url}" target="_blank" rel="noopener noreferrer" aria-label="Ver información de ${product.name}">Info ↗</a>` : ""}<button class="add-button" type="button" data-add="${product.id}" aria-label="Agregar ${product.name} al carrito">+</button></div>
        </div>
      </div>
    </article>
  `).join("");
  emptyMessage.hidden = matchingProducts.length > 0;
  document.querySelector("#product-total").textContent = `${matchingProducts.length} ${matchingProducts.length === 1 ? "antojo" : "antojos"}`;
}

// Actualiza el contador y el contenido del carrito.
function renderCart() {
  const itemCount = [...cart.values()].reduce((sum, quantity) => sum + quantity, 0);
  const subtotal = [...cart.entries()].reduce((sum, [id, quantity]) => {
    const product = products.find((item) => item.id === id);
    return sum + product.price * quantity;
  }, 0);
  document.querySelector("#cart-count").textContent = itemCount;
  document.querySelector("#cart-subtotal").textContent = money.format(subtotal);
  document.querySelector("#cart-empty").hidden = itemCount > 0;
  document.querySelector("#cart-footer").hidden = itemCount === 0;
  document.querySelector("#cart-items").innerHTML = [...cart.entries()].map(([id, quantity]) => {
    const product = products.find((item) => item.id === id);
    return `
      <article class="cart-row">
        <div class="cart-thumb ${product.color}" aria-hidden="${product.image ? "false" : "true"}">
          ${product.image ? `<img class="cart-photo" src="${product.image}" alt="${product.name}">` : product.emoji}
        </div>
        <div class="cart-row-copy"><h3>${product.name}</h3><p>${money.format(product.price)}</p></div>
        <div class="quantity-control" aria-label="Cantidad de ${product.name}">
          <button type="button" data-quantity="${id}" data-change="-1" aria-label="Quitar uno">−</button>
          <span>${quantity}</span>
          <button type="button" data-quantity="${id}" data-change="1" aria-label="Agregar uno">+</button>
        </div>
      </article>
    `;
  }).join("");
}

// Abre o cierra el panel lateral del carrito.
function setCartOpen(isOpen) {
  cartDrawer.classList.toggle("open", isOpen);
  cartDrawer.setAttribute("aria-hidden", String(!isOpen));
  cartOverlay.hidden = !isOpen;
  document.body.classList.toggle("cart-open", isOpen);
  if (isOpen) document.querySelector("#close-cart").focus();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

// Interacciones del catálogo.
categoryList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  selectedCategory = button.dataset.category;
  categoryList.querySelector(".active").classList.remove("active");
  button.classList.add("active");
  showCategoryCascade(selectedCategory);
  renderProducts();
});

// A breve salpicadura decorativa en todos los controles al seleccionarlos.
document.addEventListener("click", (event) => {
  const control = event.target.closest("button, .primary-button");
  if (!control) return;
  control.querySelector(".honey-splash")?.remove();
  const splash = document.createElement("span");
  splash.className = "honey-splash";
  splash.setAttribute("aria-hidden", "true");
  const drops = [
    [-24, 34, -32], [-15, 48, -18], [-7, 30, 24], [4, 52, 38],
    [13, 39, -38], [23, 55, 22], [30, 32, 42], [-31, 51, -25],
    [-2, 61, -12], [19, 27, 15],
  ];
  splash.innerHTML = drops.map(([x, y, rotation], index) =>
    `<i class="honey-drop" style="--drop-x:${x}px;--drop-y:${y}px;--drop-rotation:${rotation}deg;--drop-delay:${(index % 5) * 55}ms;--drop-size:${5 + index % 3}px;--drop-height:${(5 + index % 3) * 1.6}px"></i>`
  ).join("");
  control.append(splash);
  window.setTimeout(() => splash.remove(), 2000);
});

// Mantiene una cascada continua anclada al fondo de la pantalla.
function showCategoryCascade(category) {
  const sweets = {
    Todos: ["🍬", "🍫", "🍭", "🍰", "🍪", "🍡"],
    Gomitas: ["🍬", "🐻", "🍓", "🍇", "🍊", "🍬"],
    Chocolates: ["🍫", "🍫", "🍫", "🍫", "🍫", "🍫"],
    Paletas: ["🍭", "🍭", "🍭", "🍭", "🍭", "🍭"],
    Mix: ["🍬", "🍫", "🍭", "🍰", "🍪", "🍡"],
  }[category] || ["🍬", "🍫", "🍭", "🍰", "🍪", "🍡"];
  const fallDistance = window.innerHeight + 100;
  const isSmallScreen = window.matchMedia("(max-width: 600px)").matches;
  const count = isSmallScreen ? 10 : Math.min(28, Math.max(14, Math.ceil(window.innerWidth / 65)));
  categoryCascade.style.setProperty("--cascade-height", `${window.innerHeight}px`);
  categoryCascade.classList.add("is-active");
  categoryCascade.innerHTML = Array.from({ length: count }, (_, index) => {
    const sweet = sweets[index % sweets.length];
    const position = ((index * 37) % 97) + 1;
    const duration = isSmallScreen ? 9 + (index % 4) * .8 : 8 + (index % 5) * .7;
    const size = isSmallScreen ? 13 + (index % 3) * 3 : 17 + (index % 3) * 5;
    const startY = (index * 17) % 92;
    return `<span class="cascade-sweet" style="--cascade-x:${position}%;--cascade-y:${startY}vh;--cascade-delay:-${index % 6}s;--fall-distance:${fallDistance}px;--fall-duration:${duration}s;--cascade-size:${size}px">${sweet}</span>`;
  }).join("");
}

searchInput.addEventListener("input", () => {
  searchTerm = searchInput.value.trim().toLocaleLowerCase("es");
  renderProducts();
});

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (!button) return;
  const product = products.find((item) => item.id === Number(button.dataset.add));
  cart.set(product.id, (cart.get(product.id) || 0) + 1);
  renderCart();
  showToast(`${product.name} se agregó a tu carrito ♡`);
});

// Interacciones del carrito.
document.querySelector("#cart-items").addEventListener("click", (event) => {
  const button = event.target.closest("[data-quantity]");
  if (!button) return;
  const id = Number(button.dataset.quantity);
  const nextQuantity = (cart.get(id) || 0) + Number(button.dataset.change);
  if (nextQuantity <= 0) cart.delete(id);
  else cart.set(id, nextQuantity);
  renderCart();
});

document.querySelector("#open-cart").addEventListener("click", () => setCartOpen(true));
document.querySelector("#close-cart").addEventListener("click", () => setCartOpen(false));
document.querySelector("#continue-shopping").addEventListener("click", () => setCartOpen(false));
cartOverlay.addEventListener("click", () => setCartOpen(false));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && cartDrawer.classList.contains("open")) setCartOpen(false);
});
document.querySelector("#checkout-button").addEventListener("click", () => {
  showToast("¡Gracias! Escríbenos para coordinar tu pedido ♡");
});

// Estado inicial de la tienda.
renderProducts();
renderCart();
showCategoryCascade(selectedCategory);
