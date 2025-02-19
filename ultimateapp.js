
document.getElementById('Login').addEventListener('click', function(event){
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    if(!email, !password){alert('Please kindly fill in your credentials correctly.');return;}
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {alert('Invalid email format');return;}
    if (password.length < 8 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) { alert('Password must be at least 8 characters, contain at least one lowercase letter, one uppercase letter, and one number!');return;} 
    else{alert('Login Successful.')}
    window.location.href = 'ultimate.html';
});
document.getElementById('show-password1').addEventListener('change', function(event) { var passwordField = document.getElementById('password'); if (this.checked) {passwordField.type = 'text';} else {passwordField.type = 'password';}});
document.getElementById('show-password').addEventListener('change', function(event) { var passwordField = document.getElementById('password1'); if (this.checked) {passwordField.type = 'text';} else {passwordField.type = 'password';}});
 

document.getElementById('register-btn').addEventListener('click', function(){
    event.preventDefault();
    document.getElementById('register-form').style.display = 'block';
});