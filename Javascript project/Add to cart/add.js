const products = [
  { id: 1, name: "Strawberry", price: 200, image: "Images/strawberry.jpeg"},
  { id: 2, name: "Apple", price: 200, image: "Images/apple.jpeg" },
  { id: 3, name: "Graphes", price: 200, image: "Images/graphes.jpeg" },
  { id: 4, name: "Kiwi", price: 190, image: "Images/kiwi.jpeg" },
  { id: 5, name: "Pomogrenande", price: 230, image: "Images/pomo.jpeg" },
  { id: 6, name: "Litchi", price: 200, image: "Images/litchi.jpeg" },
];

let cart = [];

function renderProducts() {
  const container = document.getElementById("product-list");
  container.innerHTML = "";
  products.forEach(product => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}" />
        <h4>${product.name}</h4>
        <p>$${product.price}</p>
        <button style="color:white; background-color:red; border:none; font-size:22px; border-radius:22px; padding:8px 12px; margin:8px 0px;" onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(productId) {
  const item = cart.find(p => p.id === productId);
  if (item) {
    item.qty++;
  } else {
    const product = products.find(p => p.id === productId);
    cart.push({ ...product, qty: 1 });
  }
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  renderCart();
}

function clearCart() {
  cart = [];
  renderCart();
}

function renderCart() {
  const container = document.getElementById("cart-items");
  container.innerHTML = "";
  cart.forEach(item => {
    container.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" />
        <div>
          <div>${item.name}</div>
          <div>$${item.price} × ${item.qty} = $${item.price * item.qty}</div>
        </div>
        <button onclick="removeFromCart(${item.id})" style="margin-left:auto; padding: 8px 12px; font-size:15px;">Remove</button>
      </div>
    `;
  });
}

renderProducts();
