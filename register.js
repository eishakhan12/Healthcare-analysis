document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    alert(`Registration successful! Username: ${username}, Email: ${email}`);
    window.location.href = 'login.html'; // Redirect to login page after registration
});

