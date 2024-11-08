console.log("Product browsing page loaded");
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});