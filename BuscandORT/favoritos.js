// Al cargar la página, mostramos los favoritos guardados en localStorage
window.onload = function() {
    cargarFavoritos();
};

// Función para cargar las aulas favoritas desde localStorage y mostrarlas en el menú desplegable
function cargarFavoritos() {
    const selectFavoritos = document.getElementById('menu-favoritos');
    selectFavoritos.innerHTML = '<option value="">Selecciona un aula favorita</option>'; // Limpiar menú

    // Obtener las aulas favoritas del localStorage
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    // Agregar cada aula favorita como una opción en el menú desplegable
    favoritos.forEach(favorito => {
        const option = document.createElement('option');
        option.value = favorito;
        option.textContent = favorito;
        selectFavoritos.appendChild(option);
    });

    // Llamar a mostrarPiso() cuando se selecciona una opción en el menú
    selectFavoritos.addEventListener('change', function() {
        const aulaSeleccionada = selectFavoritos.value;
        if (aulaSeleccionada) {
            // Establecer el valor del input 'aula' para que mostrarPiso() lo recoja correctamente
            document.getElementById('aula').value = aulaSeleccionada;
            mostrarPiso(); // Llama a mostrarPiso para mostrar el piso y plano
        }
    });
}