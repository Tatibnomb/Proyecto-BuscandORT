window.onload = function() {
    cargarRecientes();
};

function cargarRecientes() {
    const selectRecientes = document.getElementById('recientes');
    const recientes = JSON.parse(localStorage.getItem('recientes')) || [];

    recientes.forEach(aula => {
        const option = document.createElement('option');
        option.value = aula;
        option.textContent = aula;
        selectRecientes.appendChild(option);
    });
}

function redirigirAulaReciente() {
    const selectRecientes = document.getElementById('recientes');
    const aulaSeleccionada = selectRecientes.value;

    if (aulaSeleccionada) {
        window.location.href = `index.html?aula=${aulaSeleccionada}`;
    }
}