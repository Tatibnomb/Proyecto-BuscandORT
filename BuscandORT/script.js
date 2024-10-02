function verificarEntrada() {
    const aula = document.getElementById('aula').value;
    const menuAsistentes = document.getElementById('menu-asistentes');
    
    if (aula.toLowerCase() === 'ofc. asistentes') {
        menuAsistentes.style.display = 'block';
        document.getElementById('resultado').innerHTML = '';
        document.getElementById('plano').style.display = 'none';
    } else {
        menuAsistentes.style.display = 'none';
        document.getElementById('resultado').innerHTML = '';
        document.getElementById('plano').style.display = 'none';
    }
}

function mostrarPiso() {
    const aula = document.getElementById('aula').value;
    const menuAsistentes = document.getElementById('menu-asistentes');
    let piso;
    let imagen;

    if (aula.toLowerCase() === 'ofc. asistentes') {
        menuAsistentes.style.display = 'block';
        return;
    } else {
        menuAsistentes.style.display = 'none';
    }

    switch (aula) {
        case 'L001':
        case 'L002':
        case 'Ofc. asistentes':
        case 'Admisión':
        case 'L004':
        case 'L006':
        case 'L007':
        case 'L008':
        case 'Coord. Cs. Sociales':
        case 'Coord. Ed. Judía':
        case 'Ofc. asistentes':
        case 'L009':
        case 'L010':
        case 'Baños':
        case 'Templo':
        case 'L011':
        case 'Aula de robótica educ.':
        case 'Ofc. inglés':
        case 'Lab. campus':
        case 'L014':
        case 'Comedor alumnos':
        case 'DAT':
        case 'Cancha':
            piso = '0 (planta baja)';
            imagen = 'images/plano_piso0.jpg';
            break;
        case 'Lab. humanidades':
        case 'Ofc. humanidades':
        case 'L101':
        case 'L102':
        case 'L103':
        case 'L104':
        case 'L105':
        case 'L106':
        case 'L107':
        case 'L108':
        case 'L109':
        case 'Dirección de estudios y pedagogía':
        case 'Sala de docentes 2.0':
        case 'L111':
        case 'Dirección educativa del nivel medio':
        case 'L112':
        case 'L113':
        case 'L114':
        case 'L115':
        case 'Ofc. asistentes 1° año':
        case 'Baños prof.':
        case 'Coordinación operativa':
        case 'Baños hombres':
        case 'Baños disc.':
        case 'L116':
        case 'Coord. 1° año':
        case 'L117':
        case 'L118':
        case 'L119':
        case 'L120':
        case 'L121':
            piso = '1';
            imagen = 'images/plano_piso1.jpg';
            break;
        case 'L5':
        case 'Ofc.':
        case 'L200':
        case 'L201':
        case 'L202':
        case 'L203':
        case 'L204':
        case 'L205':
        case 'L206':
        case 'L207':
        case 'L208':
        case 'Ofc.':
        case 'Ofc.':
        case 'Sala prof.':
        case 'L1':
        case 'L2':
        case 'L3':
        case 'L4':
        case 'Pañol TIC':
        case 'L213':
        case 'Ofc.':
        case 'Baño mixto':
        case 'L214':
        case 'L215':
        case 'L216':
        case 'L217':
            piso = '2';
            imagen = 'images/plano_piso2.jpg';
            break;
        case 'Secretaría docente':
        case 'Ofc. de alumnos':
        case 'L300':
        case 'L301':
        case 'L302':
        case 'L303':
        case 'L304':
        case 'L305':
        case 'L306':
        case 'L307':
        case 'L308':
        case 'Baños':
        case 'Ofc. asistentes':
        case 'Lab.':
        case 'L309':
        case 'L310':
        case 'Ofc. asistentes':
        case 'L311':
        case 'L312':
        case 'Radio':
        case 'L313':
        case 'L314':
        case 'Pañol medios':
        case 'Ofc. medios':
        case 'Control TV':
        case 'Estudio TV':
            piso = '3';
            imagen = 'images/plano_piso3.jpg';
            break;
        default:
            piso = null;
            imagen = null;
            break;
    }

    const resultadoDiv = document.getElementById('resultado');
    const planoImg = document.getElementById('plano');

    if (piso && imagen) {
        resultadoDiv.innerHTML = `<p>El aula ${aula} está en el piso ${piso}.</p>`;
        planoImg.src = imagen;
        planoImg.style.display = 'block';
    } else {
        resultadoDiv.innerHTML = `<p>Aula no encontrada. Por favor ingrese un número de aula válido.</p>`;
        planoImg.style.display = 'none';
    }
}

function mostrarPlanoOficina() {
    const oficina = document.getElementById('asistentes').value;
    const planoImg = document.getElementById('plano');
    const resultadoDiv = document.getElementById('resultado');
    let imagen;
    let piso;

    switch (oficina) {
        case 'Ofc. asistentes 1er año':
            piso = '1';
            imagen = 'images/plano_piso1.jpg';
            break;
        case 'Ofc. asistentes 2do año PB':
            piso = '0 (planta baja)';
            imagen = 'images/plano_piso0.jpg';
            break;
        case 'Ofc. asistentes 2do año 2do piso':
            piso = '2';
            imagen = 'images/plano_piso2.jpg';
            break;
        case 'Ofc. asistentes de Humanidades':
            piso = '1';
            imagen = 'images/plano_piso1.jpg';
            break;
        case 'Ofc. asistentes de TIC':
            piso = '2';
            imagen = 'images/plano_piso2.jpg';
            break;
        case 'Ofc. asistentes de Medios':
            piso = '3';
            imagen = 'images/plano_piso3.jpg';
            break;
        default:
            imagen = null;
            piso = null;  // Si no se encuentra oficina, no hay piso.
            break;
    }
    
    if (imagen && piso) {
        resultadoDiv.innerHTML = `<p>La ${oficina} está en el piso ${piso}.</p>`;  // Mostrar el piso en el <p>
        planoImg.src = imagen;
        planoImg.style.display = 'block';
    } else {
        resultadoDiv.innerHTML = `<p>Oficina no encontrada. Por favor seleccione una oficina válida.</p>`;
        planoImg.style.display = 'none';
    }
}
function guardarAFavoritos() {
    const aula = document.getElementById('aulaInput').value;

    // Obtener favoritos existentes en localStorage
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    // Evitar duplicados
    if (!favoritos.includes(aula)) {
        favoritos.push(aula);
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        alert('Aula agregada a favoritos');
    } else {
        alert('El aula ya está en favoritos');
    }
}