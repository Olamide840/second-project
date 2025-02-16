function selectPayment(method) {
    const options = document.querySelectorAll('.payment-option');
    options.forEach(option => option.classList.remove('selected'));

    const selectedOption = document.querySelector(`.payment-option:nth-child(${getPaymentMethodIndex(method)})`);
    selectedOption.classList.add('selected');

    displayAdditionalInfo(method);
}

function getPaymentMethodIndex(method) {
    const methods = {
        'bank-transfer': 1,
        'atm': 2,
        'paypal': 3,
        'cash-app': 4,
        'credit-card': 5
    };
    return methods[method];
}

function displayAdditionalInfo(method) {
    const infoSections = document.querySelectorAll('.payment-method-info');
    infoSections.forEach(section => section.style.display = 'none');

    const selectedInfo = document.getElementById(`${method}-info`);
    if (selectedInfo) {
        selectedInfo.style.display = 'block';
    }

    document.getElementById('additional-info').style.display = 'block';
}

function submitPayment() {
    const selectedOption = document.querySelector('.payment-option.selected');
    if (selectedOption) {
        // Hide the payment options and show the confirmation message
        document.getElementById('payment-form').style.display = 'none';
        document.getElementById('confirmation-message').style.display = 'block';
        
        // Generate a fake confirmation ID
        const confirmationId = 'ORD-' + Math.floor(Math.random() * 1000000);
        document.getElementById('confirmation-id').textContent = confirmationId;
    } else {
        alert('Please select a payment option before proceeding.');
    }
}