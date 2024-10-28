document.addEventListener('DOMContentLoaded', () => {
    const aulas = ['L001', 'L002', 'Ofc. asistentes', 'Admisión', 'L004', 'L006', 'L007', 'L008', 'Coord. Cs. Sociales', 'Coord. Ed. Judía','Ofc. asistentes', 'L009','L010','Baños','Templo','L011','Aula de robótica educ.','Ofc. inglés','Lab. campus','L014','Comedor alumnos','DAT','Cancha','Lab. humanidades', 'Ofc. humanidades', 'L101', 'L102', 'L103', 'L104', 'L105', 'L106', 'L107', 'L108', 'L109', 'Dirección de estudios y pedagogía', 'Sala de docentes 2.0', 'L111', 'Dirección educativa del nivel medio', 'L112', 'L113', 'L114', 'L115', 'Ofc. asistentes 1° año', 'Baños prof.', 'Coordinación operativa', 'Baños hombres', 'Baños disc.', 'L116', 'Coord. 1° año', 'L117', 'L118', 'L119', 'L120', 'L121', 'L5', 'Ofc.', 'L200', 'L201', 'L202', 'L203', 'L204', 'L205', 'L206', 'L207', 'L208', 'Ofc.', 'Ofc.', 'Sala prof.', 'L1', 'L2', 'L3', 'L4', 'Pañol TIC', 'L213', 'Ofc.', 'Baño mixto', 'L214', 'L215', 'L216', 'L217', 'Secretaría docente', 'Ofc. de alumnos', 'L300', 'L301', 'L302', 'L303', 'L304', 'L305', 'L306', 'L307', 'L308', 'Baños', 'Ofc. asistentes', 'Lab.', 'L309', 'L310', 'Ofc. asistentes', 'L311', 'L312', 'Radio', 'L313', 'L314', 'Pañol medios', 'Ofc. medios', 'Control TV', 'Estudio TV']; // Lista de aulas
    const listaAulas = document.getElementById('listaAulas');
    const favoritosSelect = document.getElementById('favoritosSelect');
    
    let aulasFavoritas = JSON.parse(localStorage.getItem('favoritos')) || [];
    console.log('Favoritos cargados:', aulasFavoritas);

    // Crear la lista de aulas con estrellas
    aulas.forEach(aula => {
        const li = document.createElement('li');
        li.textContent = aula;

        const estrella = document.createElement('span');
        estrella.innerHTML = '★'; // Estrella vacía
        estrella.classList.add('estrella');
        if (aulasFavoritas.includes(aula)) {
            estrella.classList.add('seleccionada');
        }

        estrella.addEventListener('click', () => {
            if (estrella.classList.contains('seleccionada')) {
                eliminarDeFavoritos(aula, estrella);
            } else {
                agregarAFavoritos(aula, estrella);
            }
        });

        li.appendChild(estrella);
        listaAulas.appendChild(li);
    });

    function actualizarFavoritosSelect() {
        favoritosSelect.innerHTML = '<option>Selecciona un aula</option>';
        aulasFavoritas.forEach(aula => {
            const option = document.createElement('option');
            option.value = aula;
            option.textContent = aula;
            favoritosSelect.appendChild(option);
        });
    }

    function agregarAFavoritos(aula, estrella) {
        aulasFavoritas.push(aula);
        localStorage.setItem('favoritos', JSON.stringify(aulasFavoritas));
        estrella.classList.add('seleccionada');
        actualizarFavoritosSelect();
        guardarEnFavoritosJson(aulasFavoritas);
    }

    function eliminarDeFavoritos(aula, estrella) {
        aulasFavoritas = aulasFavoritas.filter(favAula => favAula !== aula);
        localStorage.setItem('favoritos', JSON.stringify(aulasFavoritas));
        estrella.classList.remove('seleccionada');
        actualizarFavoritosSelect();
        guardarEnFavoritosJson(aulasFavoritas);
    }

    // Simular guardado en favoritos.json (función que en una implementación real sería un fetch a un backend)
    function guardarEnFavoritosJson(aulasFavoritas) {
        const favoritosJson = JSON.stringify(aulasFavoritas);
        console.log('Guardado en favoritos.json:', favoritosJson);
        // Aquí iría una petición fetch o AJAX para guardar en el servidor
        // fetch('/guardar-favoritos', { method: 'POST', body: favoritosJson });
    }

    // Inicializar el select con los favoritos actuales
    actualizarFavoritosSelect();
});