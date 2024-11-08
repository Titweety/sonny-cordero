document.addEventListener('DOMContentLoaded', function() {
    const productsTableBody = document.querySelector('#products-table tbody');
    const addProductButton = document.querySelector('#add-product');

    // Example products data
    const products = [
        { id: 1, name: 'Product 1', price: '39,999.00', stock: 100 },
        { id: 2, name: 'Product 2', price: '45,999.00', stock: 50 },
        { id: 3, name: 'Product 3', price: '47,999.00', stock: 75 }
    ];

    // Function to render products in the table
    function renderProducts() {
        productsTableBody.innerHTML = ''; // Clear existing rows
        products.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.stock}</td>
                <td>
                    <button onclick="editProduct(${product.id})">Edit</button>
                    <button onclick="deleteProduct(${product.id})">Delete</button>
                </td>
            `;
            productsTableBody.appendChild(row);
        });
    }

    // Function to edit a product
    window.editProduct = function(productId) {
        alert(`Edit product ID: ${productId}`);
        // Implement the edit functionality here
    };

    // Function to delete a product
    window.deleteProduct = function(productId) {
        alert(`Delete product ID: ${productId}`);
        // Implement the delete functionality here
    };

    // Function to add a new product
    addProductButton.addEventListener('click', function() {
        alert('Add new product');
        // Implement the add functionality here
    });

    // Render products on page load
    renderProducts();
});