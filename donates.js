document.querySelector('.preferred-payment-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission

    const paymentName = document.getElementById('payment-name').value;
    const paymentDetails = document.getElementById('payment-details').value;

    // Display a confirmation message
    alert(`Thank you! We have received your preferred payment method: ${paymentName}. We will review it shortly.`);

    // Optionally redirect to the main payment page or a success page
    window.location.href = "payment-success.html";  // Redirect to a success page
});
