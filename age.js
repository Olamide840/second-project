function calculateAge() {
    let dob = document.getElementById("dob").value;
    if (!dob) {
        document.getElementById("result").textContent = "Please enter your date of birth.";
        return;
    }
    let birthDate = new Date(dob);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    let dayDiff = today.getDate() - birthDate.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }
    document.getElementById("result").textContent = `You are ${age} years old.`;
}

function calculate(operator) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("results").textContent = "Please enter valid numbers.";
        return;
    }
    let results;
    switch (operator) {
        case '+': results = num1 + num2; break;
        case '-': results = num1 - num2; break;
        case '*': results = num1 * num2; break;
        case '/': 
        if (num2 === 0) {
            document.getElementById("results").textContent = "Cannot divide by Zero.";
            return;
        }
        results = num1 / num2;
        break;
    }
    document.getElementById("results").textContent = `Result: ${results}`;
}