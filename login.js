document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'user' && password === 'pass123') {
        alert('Login successful');
        window.location.href = 'queries.html'; // Redirect to chatbot page
    } else {
        alert('Invalid username or password');
    }
});
