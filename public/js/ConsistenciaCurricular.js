function showConsistencyCurricular() {
    const content = `
        <div class="container mt-4">
            <h2 class="h4 mb-4">
            <i class="fas fa-book"></i> Consistencia Curricular
            </h2>
            <form id="consistencia-curricular-form">
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-6 form-group mb-3">
                            <label for="horizontal" class="form-label">
                                <i class="fas fa-arrows-alt-h"></i> Horizontal
                            </label>
                            <textarea class="form-control" id="horizontal" rows="4" placeholder="Ingrese la consistencia curricular horizontal" oninput="guardarDatoConsistenciaCurricular('horizontal', this.value)"></textarea>
                        </div>
                            
                        <div class="col-md-6 form-group mb-3">
                            <label for="vertical" class="form-label">
                                <i class="fas fa-arrows-alt-v"></i> Vertical
                            </label>
                            <textarea class="form-control" id="vertical" rows="4" placeholder="Ingrese la consistencia curricular vertical" oninput="guardarDatoConsistenciaCurricular('vertical', this.value)"></textarea>
                        </div>
                            
                        <div class="col-md-6 form-group mb-3">
                            <label for="transversal" class="form-label">
                                <i class="fas fa-exchange-alt"></i> Transversal
                            </label>
                            <textarea class="form-control" id="transversal" rows="4" placeholder="Ingrese la consistencia curricular transversal" oninput="guardarDatoConsistenciaCurricular('transversal', this.value)"></textarea>
                        </div>
                    </div>
                </div>
                <div class="form-group text-right mt-4">
                    <button type="button" class="btn btn-secondary" onclick="showGenericCompetencies()">
                        <i class="fas fa-arrow-left"></i> Volver
                    </button>
                    <button type="button" class="btn btn-primary" onclick="showCourseContributions()">
                        <i class="fas fa-arrow-right"></i> Siguiente
                    </button>
                    <button type="button" class="btn btn-danger" onclick="limpiarCamposConsistenciaCurricular()">
                        <i class="fas fa-eraser"></i> Limpiar campos
                    </button>
                </div>
            </form>
        </div>
    `;
    document.getElementById('content-section').innerHTML = content;
    cargarDatosConsistenciaCurricular();
    updateActiveNavLink('consistencia-curricular');
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

function guardarDatoConsistenciaCurricular(key, value) {
    localStorage.setItem(key, value);
    console.log("Elemento guardado:", key);
}

function cargarDatosConsistenciaCurricular() {
    const horizontal = localStorage.getItem('horizontal');
    const vertical = localStorage.getItem('vertical');
    const transversal = localStorage.getItem('transversal');

    if (horizontal) document.getElementById('horizontal').value = horizontal;
    if (vertical) document.getElementById('vertical').value = vertical;
    if (transversal) document.getElementById('transversal').value = transversal;
}

function limpiarCamposConsistenciaCurricular() {
    localStorage.removeItem('horizontal');
    localStorage.removeItem('vertical');
    localStorage.removeItem('transversal');

    // Restablecer el formulario de consistencia curricular
    document.getElementById('consistencia-curricular-form').reset();

    // Mostrar un mensaje en la consola
    console.log('Datos de consistencia curricular eliminados');
}
