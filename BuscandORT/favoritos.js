// Al cargar la página, mostramos los favoritos guardados en localStorage
window.onload = function() {
    cargaraFavoritos();
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

function redirigirAula() {
    const selectFavoritos = document.getElementById('favoritos');
    const aulaSeleccionada = selectFavoritos.value;
    
    if (aulaSeleccionada) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        const aulaInfo = favoritos.find(aula => aula.nombre === aulaSeleccionada);

        if (aulaInfo) {
            const { piso, imagen } = aulaInfo;
            alert(`El aula ${aulaSeleccionada} está en el piso ${piso}.`);
            // Aquí puedes mostrar la imagen del plano si deseas
            const planoImg = document.getElementById('plano');
            planoImg.src = imagen;
            planoImg.style.display = 'block'; // Asegúrate de que el contenedor de imagen esté visible
        }
    }
}
function guardarAFavoritos() {
    const aula = document.getElementById('aula').value;
    let piso, imagen;

    // Define la lógica para determinar el piso y la imagen según el aula
    switch (aula) {
        case 'L001':
            piso = '0 (planta baja)';
            imagen = 'images/plano_piso0.jpg';
            break;
        case 'L101':
            piso = '1';
            imagen = 'images/plano_piso1.jpg';
            break;
        // Agrega más casos según sea necesario
        default:
            return; // Si no se encuentra el aula, no hagas nada
    }

    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    favoritos.push({ nombre: aula, piso: piso, imagen: imagen });
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    alert('Aula agregada a favoritos');
}