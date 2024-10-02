document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    localStorage.setItem('usuario', JSON.stringify({ username, password }));

    window.location.href = 'index.html';
});