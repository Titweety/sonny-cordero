console.log("Login page loaded");

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login form submitted!');
});