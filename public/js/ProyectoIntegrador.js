function showCourseContributions() {
    const content = `
        <div class="container mt-4">
            <h2 class="h4 mb-4">
            <i class="fas fa-project-diagram"></i> Aportes del Curso al Proyecto Integrador
            </h2>
            <form id="proyecto-integrador-form">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="saberes-habilidades">
                                <i class="fas fa-brain"></i> Saberes y habilidades
                            </label>
                            <textarea class="form-control" id="saberes-habilidades" rows="4" placeholder="Ingrese los saberes y habilidades aportados por el curso" oninput="guardarDatoProyectoIntegrador('saberes-habilidades', this.value)"></textarea>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="estrategias-articulacion">
                                <i class="fas fa-puzzle-piece"></i> Estrategias de articulación
                            </label>
                            <textarea class="form-control" id="estrategias-articulacion" rows="4" placeholder="Ingrese las estrategias de articulación del curso" oninput="guardarDatoProyectoIntegrador('estrategias-articulacion', this.value)"></textarea>
                        </div>
                    </div>
                </div>
                <div class="form-group text-right mt-4">
                    <button type="button" class="btn btn-secondary" onclick="showConsistencyCurricular()">
                        <i class="fas fa-arrow-left"></i> Volver
                    </button>
                    <button type="button" class="btn btn-primary" onclick="showThematicPlan()">
                        <i class="fas fa-arrow-right"></i> Siguiente
                    </button>
                    <button type="button" class="btn btn-danger" onclick="limpiarDatosProyectoIntegrador()">
                        <i class="fas fa-eraser"></i> Limpiar campos
                    </button>
                </div>
            </form>
        </div>
    `;
    document.getElementById('content-section').innerHTML = content;
    cargarDatosProyectoIntegrador();
    updateActiveNavLink('aportes-curso-proyecto-integrador');
}


function updateActiveNavLink(section) {
    // Elimina la clase 'active' de todos los enlaces de navegación
    document.querySelectorAll('.main-sidebar .nav-link').forEach(link => {
        link.classList.remove('active-custom');
    });

    // Agrega la clase 'active' al enlace correspondiente
    const activeLink = document.querySelector(`.main-sidebar .nav-link[data-section="${section}"]`);
    if (activeLink) {
        activeLink.classList.add('active-custom');
    } else {
        console.error(`No se encontró el enlace para la sección: ${section}`);
    }
}

function guardarDatoProyectoIntegrador(key, value) {
    localStorage.setItem(key, value);
    console.log("Elemento guardado:", key);
}

function cargarDatosProyectoIntegrador() {
    const saberesHabilidades = localStorage.getItem('saberes-habilidades');
    const estrategiasArticulacion = localStorage.getItem('estrategias-articulacion');

    if (saberesHabilidades) document.getElementById('saberes-habilidades').value = saberesHabilidades;
    if (estrategiasArticulacion) document.getElementById('estrategias-articulacion').value = estrategiasArticulacion;
}

function limpiarDatosProyectoIntegrador() {
    localStorage.removeItem('saberes-habilidades');
    localStorage.removeItem('estrategias-articulacion');

    // Restablecer el formulario de proyecto integrador
    document.getElementById('proyecto-integrador-form').reset();

    // Mostrar un mensaje en la consola
    console.log('Datos del proyecto integrador eliminados');
}
