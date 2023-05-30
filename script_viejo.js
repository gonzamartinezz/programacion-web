document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los botones de "Agregar al carrito"
    var addToCartButtons = document.querySelectorAll('.add-to-cart');
  
    // Array para almacenar los productos del carrito
    var cartItems = [];
  
    // Obtener el elemento del contador del carrito
    var cartCounter = document.getElementById('cart-counter');
  
    // Manejar el evento de clic en los botones de "Agregar al carrito"
    addToCartButtons.forEach(function(button) {
      button.addEventListener('click', function(event) {
        // Obtener información del producto
        var productCard = event.target.closest('.card');
        var productTitle = productCard.querySelector('.card-title').textContent;
        var productDescription = productCard.querySelector('.card-text').textContent;
  
        // Crear un objeto de producto
        var product = {
          title: productTitle,
          description: productDescription
        };
  
        // Agregar el producto al carrito
        cartItems.push(product);
  
        // Actualizar el contador del carrito en el DOM
        cartCounter.textContent = cartItems.length;
      });
    });
  });