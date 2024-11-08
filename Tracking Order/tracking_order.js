document.getElementById('tracking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const orderId = document.getElementById('order-id').value;
    
    // Simulate fetching tracking details (replace with actual API call if necessary)
    const trackingDetails = {
        orderId,
        status: 'In Transit',
        estimatedDelivery: '2024-11-15',
        courier: 'UPS'
    };

    const trackingDetailsDiv = document.getElementById('tracking-details');
    trackingDetailsDiv.innerHTML = `
        <p>Order ID: ${trackingDetails.orderId}</p>
        <p>Status: ${trackingDetails.status}</p>
        <p>Estimated Delivery: ${trackingDetails.estimatedDelivery}</p>
        <p>Courier: ${trackingDetails.courier}</p>
    `;
});