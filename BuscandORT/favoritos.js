// Al cargar la página, mostramos los favoritos guardados en localStorage
window.onload = function() {
    cargarFavoritos();
};

// Función para cargar las aulas favoritas desde localStorage
function cargarFavoritos() {
    const selectFavoritos = document.getElementById('favoritos');
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    favoritos.forEach(favorito => {
        const option = document.createElement('option');
        option.value = favorito;
        option.textContent = favorito;
        selectFavoritos.appendChild(option);
    });
}

// Función para redirigir a la página de consulta con el aula seleccionada
function redirigirAula() {
    const selectFavoritos = document.getElementById('favoritos');
    const aulaSeleccionada = selectFavoritos.value;

    if (aulaSeleccionada) {
        // Redirigir a la página de consulta con el aula seleccionada
        window.location.href = `index.html?aula=${aulaSeleccionada}`;
    }
}