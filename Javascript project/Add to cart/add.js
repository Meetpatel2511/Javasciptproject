// This array contains objects representing products with their id, name, price, and image URL.

const products = [
  { id: 1, name: "Strawberry", price: 200, image: "https://tse4.mm.bing.net/th?id=OIP.Ldk7SBzi9GGCT5CAz-v-OQHaHe&pid=Api&P=0&h=220" },
  { id: 2, name: "Pineapple", price: 320, image: "https://tse1.mm.bing.net/th?id=OIP.EpFdgqynDIJsDkqPPzW6mgHaLH&pid=Api&P=0&h=220" },
  { id: 3, name: "Mango", price: 280, image: "https://tse3.mm.bing.net/th?id=OIP.efC-mzyd_KKG8PrbkXWsqgHaJQ&pid=Api&P=0&h=220" },
  { id: 4, name: "Dodo", price: 300, image: "https://tse2.mm.bing.net/th?id=OIP.Fz-M07VklWL1IFoEvBf9HwHaJk&pid=Api&P=0&h=220" },
  { id: 5, name: "jamrug", price: 300, image: "https://tse3.mm.bing.net/th?id=OIP.xHic7q301RESALOX2NWywAHaIZ&pid=Api&P=0&h=220" },
  { id: 6, name: "watermelon", price: 300, image: "https://tse1.mm.bing.net/th?id=OIP.BhRSH6iwyWCxqCo1jgWoBwHaLG&pid=Api&P=0&h=220" },
  { id: 7, name: "Mixed fruits", price: 300, image: "https://nutplanet.in/wp-content/uploads/2019/11/ALO-FRUIT-MIXED-FRUIT-JUICE-1lt-front.jpg" },
  { id: 8, name: "juice", price: 300, image: "https://sb-assets.sgp1.cdn.digitaloceanspaces.com/product/main_image/28438/c9d67133-0dcb-4916-b9af-5673b0a26874.png" }
];

// Cart array to hold selected products

let cart = [];

function renderProducts() {
  const container = document.getElementById("product-list");
  container.innerHTML = "";
  products.forEach(product => {
    container.innerHTML += `
      <div class="col-md-3">
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <h6 class="mt-2">${product.name}</h6>
          <p>$${product.price}</p>
          <button style="background-color: red; border-radius:22px; font-size:18px; border:none; " class="btn btn-dark btn-sm" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      </div>
    `;
  });
}

// This function adds a product to the cart. If the product is already in the cart, it increases the quantity.

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const item = cart.find(p => p.id === productId);
  if (item) {
    item.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  renderCart();
}

// This function changes the quantity of a product in the cart. If the quantity is less than or equal to 0, it removes the product from the cart.

function changeQty(productId, delta) {
  const item = cart.find(p => p.id === productId);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(p => p.id !== productId);
    }
  }
  renderCart();
}

// This function removes a product from the cart.

function removeFromCart(productId) {
  cart = cart.filter(p => p.id !== productId);
  renderCart();
}

// This function clears the cart by setting it to an empty array and re-rendering the cart.
// It also updates the cart count displayed on the page.

function renderCart() {
  const container = document.getElementById("cart-items");
  container.innerHTML = "";
  let total = 0;
  let count = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    count += item.qty;
    container.innerHTML += `
    <div class="cart-item bg-dark-subtle p-2 rounded mb-2">
      <img src="${item.image}" class="rounded" />
      <div class="flex-grow-1">
        <div class="fw-bold">${item.name}</div>
        <small>$${item.price} × ${item.qty}</small>
      </div>
      <div class="d-flex flex-column align-items-end">
        <div class="mb-1">
          <button class="btn btn-sm btn-warning me-1" onclick="changeQty(${item.id}, -1)">−</button>
          <button class="btn btn-sm btn-success" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
        <button class="btn btn-sm btn-danger mt-1" onclick="removeFromCart(${item.id})">Remove</button>
      </div>
    </div>
  `;
  });

  // Update the cart total and count displayed on the page

  document.getElementById("cart-total").textContent = total.toFixed(2);
  document.getElementById("cart-count").textContent = count;
}

renderProducts();