// script.js

document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    let cart = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const item = button.getAttribute('data-item');
            const price = parseFloat(button.getAttribute('data-price'));

            addToCart(item, price);
            displayCart();
        });
    });

    function addToCart(item, price) {
        cart.push({ item, price });
    }

    function displayCart() {
        cartItemsList.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.item} - $${item.price.toFixed(2)}`;
            cartItemsList.appendChild(li);
            total += item.price;
        });

        cartTotal.textContent = `$${total.toFixed(2)}`;
    }
});
