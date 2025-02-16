document.getElementById('show-password').addEventListener('change', function(event) { var passwordField = document.getElementById('password'); if (this.checked) {passwordField.type = 'text';} else {passwordField.type = 'password';}});
document.getElementById('continue').addEventListener('click', function(event) {event.preventDefault(); 
var firstName = document.getElementById('firstName').value;
var lastName = document.getElementById('lastName').value;
var email = document.getElementById('email').value;
var username = document.getElementById('username').value;
var phone = document.getElementById('phone').value;
var password = document.getElementById('password').value;

if (!firstName || !email || !password || !lastName || !phone || !username) {alert('Please fill in all required field');return;}
if (!/^\d{3}\d{3}\d{5}$/.test(phone)) { alert('Invalid mobile number format(XXXXXXXX)');return;}
if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {alert('Invalid email format');return;}
if (password.length < 8 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) { alert('Password must be at least 8 characters, contain at least one lowercase letter, one uppercase letter, and one number!');return;} 
alert('Registration successful!');
window.location.href = 'thankyou.html';
event.preventDefault();
});
