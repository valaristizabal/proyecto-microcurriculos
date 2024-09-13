function showReadingPlan() {
    const content = `
        <div class="container mt-4">
            <h2 class="h4 mb-4">
                <i class="fas fa-book-reader"></i> Plan Lector
            </h2>
            <form id="plan-lector-form">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="lectura-obligatoria">
                                <i class="fas fa-book-open"></i> Textos de Lectura Obligatoria
                            </label>
                            <textarea class="form-control" id="lectura-obligatoria" rows="4" placeholder="Ingrese los textos de lectura obligatoria" oninput="guardarDatosPlanLector('lectura-obligatoria', this.value)"></textarea>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="estrategias-seguimiento">
                                <i class="fas fa-tachometer-alt"></i> Estrategias de Seguimiento
                            </label>
                            <textarea class="form-control" id="estrategias-seguimiento" rows="4" placeholder="Ingrese las estrategias de seguimiento" oninput="guardarDatosPlanLector('estrategias-seguimiento', this.value)"></textarea>
                        </div>
                    </div>
                </div>
                <div class="form-group text-right mt-4">
                    <button type="button" class="btn btn-secondary" onclick="showSupportMaterials()">
                        <i class="fas fa-arrow-left"></i> Volver
                    </button>
                    <button type="button" class="btn btn-primary" onclick="showEvaluationMechanisms()">
                        <i class="fas fa-arrow-right"></i> Siguiente
                    </button>
                    <button type="button" class="btn btn-danger" onclick="limpiarDatosPlanLector()">
                        <i class="fas fa-eraser"></i> Limpiar campos
                    </button>
                </div>
            </form>
        </div>
    `;
    document.getElementById('content-section').innerHTML = content;
    cargarDatosPlanLector(); // Llamar a la función para cargar datos
    updateActiveNavLink('plan-lector'); // Llamar a la función para actualizar el enlace activo
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

function guardarDatosPlanLector(key, value) {
    localStorage.setItem(key, value);
    console.log("Elemento guardado:", key);
}

function cargarDatosPlanLector() {
    const lecturaObligatoria = localStorage.getItem('lectura-obligatoria');
    const estrategiasSeguimiento = localStorage.getItem('estrategias-seguimiento');

    if (lecturaObligatoria) document.getElementById('lectura-obligatoria').value = lecturaObligatoria;
    if (estrategiasSeguimiento) document.getElementById('estrategias-seguimiento').value = estrategiasSeguimiento;
}

function limpiarDatosPlanLector() {
    localStorage.removeItem('lectura-obligatoria');
    localStorage.removeItem('estrategias-seguimiento');

    // Restablecer el formulario de plan lector
    document.getElementById('plan-lector-form').reset();

    // Mostrar un mensaje en la consola
    console.log('Datos del plan lector eliminados');
}
