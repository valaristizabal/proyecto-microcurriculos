function showThematicPlan() {
    const content = `
        <div class="container mt-4">
            <h2 class="h4 mb-4">
                <i class="fas fa-list-alt"></i> Plan Temático
            </h2>
            <form id="plan-tematico-form">
                <div class="plan-tematico">
                    <div class="form-group mb-3">
                        <label for="nombre-plan-tematico" class="form-label">
                            <i class="fas fa-book"></i> Nombre del plan temático
                        </label>
                        <input type="text" name="nombre_plan_tematico" class="form-control" id="nombre-plan-tematico" placeholder="Nombre del plan temático" required oninput="guardarDatosPlanTematico('nombre-plan-tematico', this.value)">
                    </div>
                    <div class="form-group">
                        <label for="ejes-tematicos">
                            <i class="fas fa-tasks"></i> Ingrese las actividades del plan temático enumeradas
                        </label>
                        <textarea class="form-control" id="ejes-tematicos" rows="10" placeholder="Ingrese las actividades del plan temático enumeradas usando la numeración jerárquica (ej. 1, 1.1, 2.1, ...)" oninput="guardarDatosPlanTematico('ejes-tematicos', this.value)"></textarea>
                    </div>
                </div>
                <div class="form-group">
                    <label for="observacion">
                        <i class="fas fa-comment-dots"></i> Ingrese la observación final
                    </label>
                    <textarea class="form-control" id="observacion" rows="3" placeholder="Ingrese la observación final" oninput="guardarDatosPlanTematico('observacion', this.value)"></textarea>
                </div>
                <div class="form-group text-right mt-4">
                    <button type="button" class="btn btn-secondary" onclick="showCourseContributions()">
                        <i class="fas fa-arrow-left"></i> Volver
                    </button>
                    <button type="button" class="btn btn-primary" onclick="showEducationalMedia()">
                        <i class="fas fa-arrow-right"></i> Siguiente
                    </button>
                    <button type="button" class="btn btn-danger" onclick="limpiarCamposPlanTematico()">
                        <i class="fas fa-eraser"></i> Limpiar campos
                    </button>
                </div>
            </form>
        </div>
    `;
    document.getElementById('content-section').innerHTML = content;
    cargarDatosPlanTematico();
    updateActiveNavLink('plan-tematico');
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

function guardarDatosPlanTematico(key, value) {
    localStorage.setItem(key, value);
    console.log("Elemento guardado:", key);
}


function cargarDatosPlanTematico() {
    const nombrePlanTematico = localStorage.getItem('nombre-plan-tematico');
    const ejesTematicos = localStorage.getItem('ejes-tematicos');
    const observacion = localStorage.getItem('observacion');

    if (nombrePlanTematico) document.getElementById('nombre-plan-tematico').value = nombrePlanTematico;
    if (ejesTematicos) document.getElementById('ejes-tematicos').value = ejesTematicos;
    if (observacion) document.getElementById('observacion').value = observacion;
}

function limpiarCamposPlanTematico() {
    localStorage.removeItem('nombre-plan-tematico');
    localStorage.removeItem('ejes-tematicos');
    localStorage.removeItem('observacion');

    // Restablecer el formulario del plan temático
    document.getElementById('plan-tematico-form').reset();

    // Mostrar un mensaje en la consola
    console.log('Datos del plan temático eliminados');
}

