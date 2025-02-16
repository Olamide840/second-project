// Retrieve order items from localStorage
let orderItems = JSON.parse(localStorage.getItem("orderItems")) || [];

function displayOrderSummary() {
    const orderItemsContainer = document.getElementById("order-items-summary");

    if (orderItems.length === 0) {
        orderItemsContainer.innerHTML = "<li>No items in the order</li>";
    } else {
        orderItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            orderItemsContainer.appendChild(li);
        });
    }
}

// Call this function to display the order summary when the page loads
displayOrderSummary();

// Handle form submission
document.getElementById("payment-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById("name").value;
    const accountNumber = document.getElementById("account-number").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;

    // Here, you would typically send the data to a server for processing.
    // For now, let's log the data to the console as an example:
    console.log("Payment Info:", {
        name: name,
        accountNumber: accountNumber,
        address: address,
        phone: phone,
    });

    // Clear the order from localStorage after completing the order
    localStorage.removeItem("orderItems");

    // Redirect to a confirmation page or thank you page
    window.location.href = "newthankyou.html";
});
