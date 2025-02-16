document.getElementById('login').addEventListener('click', function(event){
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (!email){alert('Please Fill in your email to Login.');return;}
    if (!password){
        alert('Please fill in your password to Login');return;
    }
    else{
        alert('Login Successful.');return;
    }
    window.location.href = 'homepage.html';
});