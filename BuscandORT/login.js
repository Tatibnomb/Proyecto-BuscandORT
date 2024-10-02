document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));

    if (usuarioGuardado && usuarioGuardado.username === username && usuarioGuardado.password === password) {
        window.location.href = 'index.html';
    } else {
        document.getElementById('mensaje').textContent = 'Usuario o contraseña incorrectos.';
    }
});