let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById('cart-count').textContent = cartCount;
}

// Exemplo: Supondo que você tenha botões de adicionar ao carrinho com a classe 'add-to-cart-btn'
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});
