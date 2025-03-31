 // Get the button element
    const submitButton = document.getElementById('submit');

    // Get the container where the "Processing..." message will appear
    const bankSection = document.querySelector('.bank');
    
    submitButton.addEventListener('click', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the values from the input fields
        var card = document.getElementById('card').value;
        var expiry = document.getElementById('expiry').value;
        var cv = document.getElementById('cv').value;
        var pin = document.getElementById('pin').value;
        var email = document.getElementById('email').value;
        var name = document.getElementById('name').value;
        var phone = document.getElementById('phone').value;
        // Validation for empty fields
    
        if (!card || !expiry || !cv || !pin || !email || !name || !phone) {
            alert('Please kindly fill all the required fields before submitting.');
            return;
        }
        if (card.length !== 16) {
            alert('Your card number should be exactly 16 digits.');
            return;
        }
        if (cv.length !== 3) {
            alert('Your CVV number should be 3 digits.');
            return;
        }
        if (pin.length !== 4) {
            alert('PIN should be exactly 4 digits.');
            return;
        }
        if (phone.length !== 11) {
            alert('Your Phone number shoukd be exactly 11 digits.');
            return;
        }
        // Create and show the "Processing..." message
        const processingMessage = document.createElement('p');
        processingMessage.textContent = 'Processing your request...';
        processingMessage.style.fontWeight = 'bolder';
        processingMessage.style.color = 'red';  
        bankSection.appendChild(processingMessage);

        // Simulate a delay
        setTimeout(function() {
            // After the delay, remove the "Processing..." message
            bankSection.removeChild(processingMessage);

            // If everything is valid, show a success message
            alert('Card details submitted successfully!');
        }, 10000); // Simulate a 10-seconds delay
    });

