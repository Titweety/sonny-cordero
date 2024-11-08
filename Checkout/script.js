console.log("Checkout page loaded");

document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Order placed successfully!');
});