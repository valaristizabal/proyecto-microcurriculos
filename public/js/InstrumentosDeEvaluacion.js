function showEvaluationInstruments() {
    const content = `
        <div class="container mt-4">
            <h2 class="h4 mb-4">
                <i class="fas fa-list-check"></i> Instrumentos de Evaluación
            </h2>
            <form id="instrumentos-evaluacion-form">
                <div class="form-group">
                    <label for="evaluation-rubric">
                        <i class="fas fa-list-check"></i> Rúbrica de evaluación de desempeños
                    </label>
                    <textarea class="form-control" id="evaluation-rubric" rows="3" placeholder="Ingrese la rúbrica de evaluación" oninput="guardarDatosInstrumentosEvaluacion()">Rúbrica de evaluación de desempeños (Esta rúbrica se desarrolla en el plan de aprendizaje)</textarea>
                </div>
                <div class="form-group text-right mt-4">
                    <button type="button" class="btn btn-secondary" onclick="showEvaluationMechanisms()">
                        <i class="fas fa-arrow-left"></i> Volver
                    </button>
                    <button type="button" class="btn btn-primary" onclick="showTeacherProfile()">
                        <i class="fas fa-arrow-right"></i> Siguiente
                    </button>
                </div>
            </form>
        </div>
    `;
    document.getElementById('content-section').innerHTML = content;
    updateActiveNavLink('instrumentos-evaluacion');
    cargarDatosInstrumentosEvaluacion();
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

function guardarDatosInstrumentosEvaluacion() {
    const evaluationRubric = document.getElementById('evaluation-rubric').value;

    // Almacena los datos en localStorage
    localStorage.setItem('evaluationRubric', evaluationRubric);

    console.log('Datos de instrumentos de evaluación guardados');
}

function cargarDatosInstrumentosEvaluacion() {
    const evaluationRubric = localStorage.getItem('evaluationRubric');
    
    if (evaluationRubric !== null) {
        document.getElementById('evaluation-rubric').value = evaluationRubric;
    }
}

