document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const priceButtons = document.querySelectorAll(".price-btn");
    const menuItems = document.querySelectorAll(".menu-item");

    function filterItems() {
        let selectedCategory = document.querySelector(".filter-btn.active")?.dataset.category || "all";
        let selectedPrice = document.querySelector(".price-btn.active")?.dataset.price || "";

        menuItems.forEach(item => {
            let matchesCategory = selectedCategory === "all" || item.dataset.category === selectedCategory;
            let matchesPrice = !selectedPrice || item.dataset.price === selectedPrice;

            if (matchesCategory && matchesPrice) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }

    filterButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            document.querySelector(".filter-btn.active")?.classList.remove("active");
            this.classList.add("active");
            filterItems();
        });
    });

    priceButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            document.querySelector(".price-btn.active")?.classList.remove("active");
            this.classList.add("active");
            filterItems();
        });
    });
});
let orderList = [];

function addToOrder(item) {
    // Add the item to the order
    orderList.push(item);
    displayOrder();
}

function removeFromOrder(item) {
    // Remove the item from the order
    orderList = orderList.filter(orderItem => orderItem !== item);
    displayOrder();
}

function clearOrder() {
    // Clear all items in the order
    orderList = [];
    displayOrder();
}

function displayOrder() {
    const orderItemsContainer = document.getElementById('order-items');
    orderItemsContainer.innerHTML = '';  // Clear current list

    if (orderList.length === 0) {
        orderItemsContainer.innerHTML = '<li>No items in the order</li>';
    } else {
        orderList.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `${item} <button onclick="removeFromOrder('${item}')">Remove</button>`;
            orderItemsContainer.appendChild(li);
        });
    }
}
// Function to handle Submit Order (save order and redirect)
function submitOrder() {
    if (orderList.length === 0) {
        alert("Please add items to your order before submitting.");
        return;
    }

    // Save the order data to localStorage
    localStorage.setItem("orderItems", JSON.stringify(orderList));

    // Redirect to the payment page (payment.html)
    window.location.href = "newpayment.html";
}