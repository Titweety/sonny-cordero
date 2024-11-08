document.getElementById('add-to-cart-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;

    const cartItems = document.getElementById('cart-items');
    const listItem = document.createElement('li');
    listItem.textContent = `${product} - Quantity: ${quantity}`;
    cartItems.appendChild(listItem);

    // Clear the input fields
    document.getElementById('product').value = '';
    document.getElementById('quantity').value = '';
});