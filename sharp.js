// script.js
let orderList = [];

function addToOrder(item) {
    orderList.push(item);
    displayOrder();
}

function removeFromOrder(item) {
    orderList = orderList.filter(orderItem => orderItem !== item);
    displayOrder();
}

function clearOrder() {
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
