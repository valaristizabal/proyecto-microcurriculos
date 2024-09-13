function showEducationalMedia() {
    const content = `
        <div class="container mt-4">
            <h2 class="h4 mb-4">
                <i class="fas fa-chalkboard-teacher"></i> Medios Educativos
            </h2>
            <form id="medios-educativos-form">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="recurso-educativo">
                                <i class="fas fa-bookmark"></i> Tipo de Recurso
                            </label>
                            <textarea class="form-control" id="recurso-educativo" rows="4" placeholder="Ingrese el tipo de recurso educativo" oninput="guardarDatosMediosEducativos('recurso-educativo', this.value)"></textarea>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="ubicacion-convenio">
                                <i class="fas fa-location-arrow"></i> Ubicación o Convenio
                            </label>
                            <textarea class="form-control" id="ubicacion-convenio" rows="4" placeholder="Ingrese la ubicación o convenio del recurso educativo" oninput="guardarDatosMediosEducativos('ubicacion-convenio', this.value)"></textarea>
                        </div>
                    </div>  
                </div>
                <div class="form-group text-right mt-4">
                    <button type="button" class="btn btn-secondary" onclick="showThematicPlan()">
                        <i class="fas fa-arrow-left"></i> Volver
                    </button>
                    <button type="button" class="btn btn-primary" onclick="showSupportMaterials()">
                        <i class="fas fa-arrow-right"></i> Siguiente
                    </button>
                    <button type="button" class="btn btn-danger" onclick="limpiarDatosMediosEducativos()">
                        <i class="fas fa-eraser"></i> Limpiar campos
                    </button>
                </div>
            </form>
        </div>
    `;
    document.getElementById('content-section').innerHTML = content;
    cargarDatosMediosEducativos(); // Llamar a la función para cargar datos
    updateActiveNavLink('medios-educativos');
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

function guardarDatosMediosEducativos(key, value) {
    localStorage.setItem(key, value);
    console.log("Elemento guardado:", key);
}

function cargarDatosMediosEducativos() {
    const recursoEducativo = localStorage.getItem('recurso-educativo');
    const ubicacionConvenio = localStorage.getItem('ubicacion-convenio');

    if (recursoEducativo) document.getElementById('recurso-educativo').value = recursoEducativo;
    if (ubicacionConvenio) document.getElementById('ubicacion-convenio').value = ubicacionConvenio;
}

function limpiarDatosMediosEducativos() {
    localStorage.removeItem('recurso-educativo');
    localStorage.removeItem('ubicacion-convenio');

    // Restablecer el formulario de medios educativos
    document.getElementById('medios-educativos-form').reset();

    // Mostrar un mensaje en la consola
    console.log('Datos de medios educativos eliminados');
}
