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
        option.value = favorito.nombre; // Asegúrate de que `nombre` es el campo correcto
        option.textContent = favorito.nombre;
        selectFavoritos.appendChild(option);
    });
}