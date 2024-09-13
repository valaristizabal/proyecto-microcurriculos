function showCompetenciasEspecificas() {
    const content = `
        <div class="container mt-4">
            <h2 class="h4 mb-4">
                <i class="fas fa-tasks"></i> Competencias Específicas del Curso
            </h2>
            <form id="competencias-especificas-form">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="competencias-especificas" class="form-label">
                                <i class="fas fa-star"></i> Competencias Específicas
                            </label>
                            <textarea class="form-control" id="competencias-especificas" rows="4" placeholder="Ingrese competencias específicas" oninput="guardarDatoCompetenciasEspecificas('competencias-especificas', this.value)"></textarea>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="resultados-aprendizaje-competencias-especificas" class="form-label">
                                <i class="fas fa-book"></i> Resultados de Aprendizaje
                            </label>
                            <textarea class="form-control" id="resultados-aprendizaje-competencias-especificas" rows="4" placeholder="Ingrese resultados de aprendizaje" oninput="guardarDatoCompetenciasEspecificas('resultados-aprendizaje-competencias-especificas', this.value)"></textarea>
                        </div>
                    </div>
                </div>
                <div class="form-group text-right mt-4">
                    <button type="button" class="btn btn-secondary" onclick="showEducationalPurposes()">
                        <i class="fas fa-arrow-left"></i> Volver
                    </button>
                    <button type="button" class="btn btn-primary" onclick="showGenericCompetencies()">
                        <i class="fas fa-arrow-right"></i> Siguiente
                    </button>
                    <button type="button" class="btn btn-danger" onclick="clearCompetenciasEspecificasData()">
                        <i class="fas fa-eraser"></i> Limpiar campos
                    </button>
                </div>
            </form>
        </div>
    `;
    document.getElementById('content-section').innerHTML = content;
    cargarDatosCompetenciasEspecificas();
    updateActiveNavLink('competencias-especificas-curso');
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

function guardarDatoCompetenciasEspecificas(key, value) {
    localStorage.setItem(key, value);
    console.log("Elemento guardado:", key);
}

function cargarDatosCompetenciasEspecificas() {
    const competenciasEspecificas = localStorage.getItem('competencias-especificas');
    const resultadosAprendizajeCompetenciasEspecificas = localStorage.getItem('resultados-aprendizaje-competencias-especificas');

    if (competenciasEspecificas) document.getElementById('competencias-especificas').value = competenciasEspecificas;
    if (resultadosAprendizajeCompetenciasEspecificas) document.getElementById('resultados-aprendizaje-competencias-especificas').value = resultadosAprendizajeCompetenciasEspecificas;
}

function limpiarCamposCompetenciasEspecificas(){
    localStorage.removeItem('competencias-especificas');
    localStorage.removeItem('resultados-aprendizaje-competencias-especificas');

    // Restablecer el formulario de propósitos formativos
    document.getElementById('competencias-especificas-form').reset();

    // Mostrar un mensaje en la consola
    console.log('Datos de competencias especificas eliminados');
}
