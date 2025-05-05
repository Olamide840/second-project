document.addEventListener("DOMContentLoaded", function () {
    // Signup Form Handling
    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent page reload

            let username = document.getElementById("username").value.trim();
            let email = document.getElementById("email").value.trim();
            let password = document.getElementById("password").value.trim();

            // Basic validation
            if (username === "" || email === "" || password === "") {
                alert("All fields are required!");
                return;
            }

            if (password.length < 8) {
                alert("Password must be at least 8 characters long!");
                return;
            }

            if (username.length < 8) {
                alert("Username must be at least 8 characters long!");
                return;
            }

            

            // Store user data in localStorage
            localStorage.setItem("userEmail", email);
            localStorage.setItem("userPassword", password);

            alert("Signup successful! You can now login.");
            window.location.href = "auth1.html";
        });
    }

    // Login Form Handling
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let loginEmail = document.getElementById("login-email").value.trim();
            let loginPassword = document.getElementById("login-password").value.trim();

            // Retrieve stored data
            let storedEmail = localStorage.getItem("userEmail");
            let storedPassword = localStorage.getItem("userPassword");

            if (loginEmail === storedEmail && loginPassword === storedPassword) {
                alert("Login successful!");
                window.location.href = "news.html";
            } else {
                alert("Invalid email or password!");
            }
        });
    }

    // Theme Toggle (moved inside DOMContentLoaded)
    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
        themeToggle.addEventListener("change", function () {
            document.body.classList.toggle("light-mode");
        });
    }
});
