function showEvaluationMechanisms() {
    const content = `
        <div class="container mt-4">
            <h2 class="h4 mb-4">
                <i class="fas fa-clipboard-check"></i> Mecanismos de Evaluación
            </h2>
            <form id="mecanismos-evaluacion-form">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="resultados-aprendizaje">
                                <i class="fas fa-graduation-cap"></i> Resultados de Aprendizaje
                            </label>
                            <textarea class="form-control" id="resultados-aprendizaje" rows="4" placeholder="Ingrese los resultados de aprendizaje" oninput="guardarDatosMecanismosEvaluacion('resultados-aprendizaje', this.value)"></textarea>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="mecanismos-evaluacion">
                                <i class="fas fa-check-circle"></i> Mecanismos de Evaluación
                            </label>
                            <textarea class="form-control" id="mecanismos-evaluacion" rows="4" placeholder="Ingrese los mecanismos de evaluación" oninput="guardarDatosMecanismosEvaluacion('mecanismos-evaluacion', this.value)"></textarea>
                        </div>
                    </div>
                </div>
                <div class="form-group text-right mt-4">
                    <button type="button" class="btn btn-secondary" onclick="showReadingPlan()">
                        <i class="fas fa-arrow-left"></i> Volver
                    </button>
                    <button type="button" class="btn btn-primary" onclick="showEvaluationInstruments()">
                        <i class="fas fa-arrow-right"></i> Siguiente
                    </button>
                    <button type="button" class="btn btn-danger" onclick="limpiarDatosMecanismosEvaluacion()">
                        <i class="fas fa-eraser"></i> Limpiar campos
                    </button>
                </div>
            </form>
        </div>
    `;
    document.getElementById('content-section').innerHTML = content;
    cargarDatosMecanismosEvaluacion(); // Llamar a la función para cargar datos
    updateActiveNavLink('mecanismos-evaluacion'); // Llamar a la función para actualizar el enlace activo
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

function guardarDatosMecanismosEvaluacion(key, value) {
    localStorage.setItem(key, value);
    console.log("Elemento guardado:", key);
}

function cargarDatosMecanismosEvaluacion() {
    const resultadosAprendizaje = localStorage.getItem('resultados-aprendizaje');
    const mecanismosEvaluacion = localStorage.getItem('mecanismos-evaluacion');

    if (resultadosAprendizaje) document.getElementById('resultados-aprendizaje').value = resultadosAprendizaje;
    if (mecanismosEvaluacion) document.getElementById('mecanismos-evaluacion').value = mecanismosEvaluacion;
}

function limpiarDatosMecanismosEvaluacion() {
    localStorage.removeItem('resultados-aprendizaje');
    localStorage.removeItem('mecanismos-evaluacion');

    // Restablecer el formulario de mecanismos de evaluación
    document.getElementById('mecanismos-evaluacion-form').reset();

    // Mostrar un mensaje en la consola
    console.log('Datos de mecanismos de evaluación eliminados');
}