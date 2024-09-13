function showEducationalPurposes() {
    const content = `
        <div class="container mt-4">
            <h2 class="h4 mb-4">
            <i class="fas fa-bullseye"></i> Propósitos Formativos
            </h2>
            <div class="text-right mb-3">
                <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#verbsModal">
                    <i class="fas fa-lightbulb"></i> Ver Verbos Sugeridos
                </button>
            </div>
            <form id="educational-purposes-form">
                <div class="form-group mb-3">
                    <label for="competencias-graduado" class="form-label">
                        <i class="fas fa-graduation-cap"></i> Competencias del graduado asociadas al curso
                    </label>
                    <textarea class="form-control" id="competencias-graduado" rows="4" placeholder="Ingrese competencias" oninput="guardarDatoPropositosFormativos('competencias-graduado', this.value)" required></textarea>
                    <small class="form-text text-muted">Describe las competencias que los graduados deben haber desarrollado al finalizar el curso.</small>
                </div>
                <div class="form-group mb-3">
                    <label for="resultados-aprendizaje-graduado" class="form-label">
                        <i class="fas fa-book-reader"></i> Resultados de Aprendizaje del Graduado que se relacionan con el curso
                    </label>
                    <textarea class="form-control" id="resultados-aprendizaje-graduado" rows="4" placeholder="Ingrese resultados de aprendizaje" oninput="guardarDatoPropositosFormativos('resultados-aprendizaje-graduado', this.value)" required></textarea>
                    <small class="form-text text-muted">Indica los resultados de aprendizaje esperados que se relacionan con el curso.</small>
                </div>
                <div class="form-group mb-3">
                    <label for="aporte-curso-perfil-graduado" class="form-label">
                        <i class="fas fa-contribution"></i> ¿De qué manera el curso aportará al Perfil del Graduado?
                    </label>
                    <textarea class="form-control" id="aporte-curso-perfil-graduado" rows="4" placeholder="Ingrese aportes del curso" oninput="guardarDatoPropositosFormativos('aporte-curso-perfil-graduado', this.value)" required></textarea>
                    <small class="form-text text-muted">Explica cómo el curso contribuye al perfil general del graduado.</small>
                </div>
                <div class="form-group mb-3">
                    <label for="competencia-principal" class="form-label">
                        <i class="fas fa-trophy"></i> Competencia Principal del curso
                    </label>
                    <textarea class="form-control" id="competencia-principal" rows="4" placeholder="Ingrese competencia principal" oninput="guardarDatoPropositosFormativos('competencia-principal',  this.value)" required></textarea>
                    <small class="form-text text-muted">Define la competencia principal que el curso pretende desarrollar.</small>
                </div>
                <div class="form-group mb-3">
                    <label for="resultados-competencia-principal" class="form-label">
                        <i class="fas fa-chart-line"></i> Resultados de aprendizaje asociados a la competencia principal del curso
                    </label>
                    <textarea class="form-control" id="resultados-competencia-principal" rows="4" placeholder="Ingrese resultados de competencia" oninput="guardarDatoPropositosFormativos('resultados-competencia-principal',  this.value)" required></textarea>
                    <small class="form-text text-muted">Especifica los resultados de aprendizaje relacionados con la competencia principal del curso.</small>
                </div>
                <div class="form-group text-right mt-4">
                    <button type="button" class="btn btn-secondary" onclick="showIdentification()">
                        <i class="fas fa-arrow-left"></i> Volver
                    </button>
                    <button type="button" class="btn btn-primary" onclick="showCompetenciasEspecificas()">
                        <i class="fas fa-arrow-right"></i> Siguiente
                    </button>
                    <button type="button" class="btn btn-danger" onclick="limpiarCamposPropositosFormativos()">
                        <i class="fas fa-eraser"></i> Limpiar campos
                    </button>
                </div>
            </form>
        </div>

        <!-- Modal for Suggested Verbs -->
        <div class="modal fade" id="verbsModal" tabindex="-1" role="dialog" aria-labelledby="verbsModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="verbsModalLabel">
                            <i class="fas fa-lightbulb"></i> Verbos Sugeridos para Propósitos Formativos
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-4">
                                <ul class="list-unstyled">
                                    <li><i class="fas fa-check"></i> Analizar</li>
                                    <li><i class="fas fa-check"></i> Evaluar</li>
                                    <li><i class="fas fa-check"></i> Diseñar</li>
                                    <li><i class="fas fa-check"></i> Implementar</li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                <ul class="list-unstyled">
                                    <li><i class="fas fa-check"></i> Investigar</li>
                                    <li><i class="fas fa-check"></i> Sintetizar</li>
                                    <li><i class="fas fa-check"></i> Aplicar</li>
                                    <li><i class="fas fa-check"></i> Comprender</li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                <ul class="list-unstyled">
                                    <li><i class="fas fa-check"></i> Crear</li>
                                    <li><i class="fas fa-check"></i> Desarrollar</li>
                                    <li><i class="fas fa-check"></i> Interpretar</li>
                                    <li><i class="fas fa-check"></i> Innovar</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                            <i class="fas fa-times"></i> Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.getElementById('content-section').innerHTML = content;
    cargarDatosPropositosFormativos();
    updateActiveNavLink('propositos-formativos');
}


function updateActiveNavLink(section) {
    document.querySelectorAll('.main-sidebar .nav-link').forEach(link => {
        link.classList.remove('active-custom');
    });
    const activeLink = document.querySelector(`.main-sidebar .nav-link[data-section="${section}"]`);
    if (activeLink) {
        activeLink.classList.add('active-custom');
    } else {
        console.error(`No se encontró el enlace para la sección: ${section}`);
    }
}

function guardarDatoPropositosFormativos(key, value) {
    localStorage.setItem(key, value);
    console.log("Elemento guardado:", key);
}

function cargarDatosPropositosFormativos() {
    const competenciasGraduado = localStorage.getItem('competencias-graduado');
    const resultadosAprendizajeGraduado = localStorage.getItem('resultados-aprendizaje-graduado');
    const aporteCursoPerfilGraduado = localStorage.getItem('aporte-curso-perfil-graduado');
    const competenciaPrincipal = localStorage.getItem('competencia-principal');
    const resultadosCompetenciaPrincipal = localStorage.getItem('resultados-competencia-principal');

    if (competenciasGraduado) document.getElementById('competencias-graduado').value = competenciasGraduado;
    if (resultadosAprendizajeGraduado) document.getElementById('resultados-aprendizaje-graduado').value = resultadosAprendizajeGraduado;
    if (aporteCursoPerfilGraduado) document.getElementById('aporte-curso-perfil-graduado').value = aporteCursoPerfilGraduado;
    if (competenciaPrincipal) document.getElementById('competencia-principal').value = competenciaPrincipal;
    if (resultadosCompetenciaPrincipal) document.getElementById('resultados-competencia-principal').value = resultadosCompetenciaPrincipal;
}

function limpiarCamposPropositosFormativos() {
    // Eliminar los elementos específicos de propósitos formativos del localStorage
    localStorage.removeItem('competencias-graduado');
    localStorage.removeItem('resultados-aprendizaje-graduado');
    localStorage.removeItem('aporte-curso-perfil-graduado');
    localStorage.removeItem('competencia-principal');
    localStorage.removeItem('resultados-competencia-principal');

    // Restablecer el formulario de propósitos formativos
    document.getElementById('educational-purposes-form').reset();

    // Mostrar un mensaje en la consola
    console.log('Datos de propósitos formativos eliminados');
}
