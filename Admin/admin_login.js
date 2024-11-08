document.getElementById('admin-login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    loginAdmin(username, password);
});

function loginAdmin(username, password) {
    console.log(`Logging in with username: ${username} and password: ${password}`);
}