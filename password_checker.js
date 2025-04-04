// Password Strength Checker
document.getElementById("password").addEventListener("input", function () {
    let password = this.value;
    let strengthText = document.getElementById("strength-text");
    let progressBar = document.getElementById("progress");
    let suggestionText = document.getElementById("suggestion-text");

    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[\W_]/.test(password)) strength++;

    let feedback = ["Very Weak", "Weak", "Medium", "Strong", "Very Strong"];
    let colors = ["red", "orange", "yellow", "#1abc9c", "green"];
    let progressWidth = ["10%", "25%", "50%", "75%", "100%"];

    strengthText.textContent = `Strength: ${feedback[strength]}`;
    strengthText.style.color = colors[strength];

    progressBar.style.width = progressWidth[strength];
    progressBar.style.background = colors[strength];

    if (strength < 3) {
        suggestionText.innerHTML = `Try using a mix of uppercase, lowercase, numbers, and special characters.<br>
        Example: <strong>${generateRandomPassword()}</strong>`;
    } else {
        suggestionText.innerHTML = "";
    }
});

// Show/Hide Password Toggle
document.getElementById("togglePassword").addEventListener("click", function () {
    let passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
});

// Generate a Strong Password
document.getElementById("generatePassword").addEventListener("click", function () {
    let newPassword = generateRandomPassword();
    let passwordField = document.getElementById("password");
    passwordField.value = newPassword;

    document.getElementById("strength-text").textContent = "Strength: Very Strong";
    document.getElementById("progress").style.width = "100%";
    document.getElementById("progress").style.background = "green";
});

// Copy to Clipboard
document.getElementById("copyPassword").addEventListener("click", function () {
    let passwordField = document.getElementById("password");
    navigator.clipboard.writeText(passwordField.value).then(() => {
        document.getElementById("copy-message").textContent = "Password copied!";
        setTimeout(() => {
            document.getElementById("copy-message").textContent = "";
        }, 5000);
    });
});

// Dark/Light Mode Toggle
document.getElementById("themeToggle").addEventListener("change", function () {
    document.body.classList.toggle("light-mode");
});

// Generate Random Password Function
function generateRandomPassword() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < 12; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}
