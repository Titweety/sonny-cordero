document.addEventListener('DOMContentLoaded', function() {
    const ordersTableBody = document.querySelector('#orders-table tbody');

    // Example orders data
    const orders = [
        { id: 1, customer: 'Paolo', status: 'Pending', total: '40,069.00' },
        { id: 2, customer: 'Ronel', status: 'Shipped', total: '46,119.00' },
        { id: 3, customer: 'Kurtlvy', status: 'Delivered', total: '48,069.00' }
    ];

    // Function to render orders in the table
    function renderOrders() {
        ordersTableBody.innerHTML = ''; // Clear existing rows
        orders.forEach(order => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${order.id}</td>
                <td>${order.customer}</td>
                <td>${order.status}</td>
                <td>${order.total}</td>
                <td>
                    <button onclick="updateOrderStatus(${order.id})">Update Status</button>
                    <button onclick="deleteOrder(${order.id})">Delete</button>
                </td>
            `;
            ordersTableBody.appendChild(row);
        });
    }

    // Function to update order status
    window.updateOrderStatus = function(orderId) {
        alert(`Update status for order ID: ${orderId}`);
        // Implement the update status functionality here
    };

    // Function to delete an order
    window.deleteOrder = function(orderId) {
        alert(`Delete order ID: ${orderId}`);
        // Implement the delete functionality here
    };

    // Render orders on page load
    renderOrders();
});