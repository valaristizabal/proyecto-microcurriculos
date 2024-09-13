function showSupportMaterials() {
    const content = `
        <div class="container mt-4">
            <h2 class="h4 mb-4">
                <i class="fas fa-book-open"></i> Material de Apoyo
            </h2>
            <form id="material-apoyo-form">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="bibliografia">
                                <i class="fas fa-book"></i> Bibliografía
                            </label>
                            <textarea class="form-control" id="bibliografia" rows="4" placeholder="Ingrese la bibliografía del material de apoyo" oninput="guardarDatosMaterialApoyo('bibliografia', this.value)"></textarea>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="ubicacion">
                                <i class="fas fa-map-marker-alt"></i> Ubicación
                            </label>
                            <textarea class="form-control" id="ubicacion" rows="4" placeholder="Ingrese la ubicación del material de apoyo" oninput="guardarDatosMaterialApoyo('ubicacion', this.value)"></textarea>
                        </div>
                    </div>
                </div>
                <div class="form-group text-right mt-4">
                    <button type="button" class="btn btn-secondary" onclick="showEducationalMedia()">
                        <i class="fas fa-arrow-left"></i> Volver
                    </button>
                    <button type="button" class="btn btn-primary" onclick="showReadingPlan()">
                        <i class="fas fa-arrow-right"></i> Siguiente
                    </button>
                    <button type="button" class="btn btn-danger" onclick="limpiarDatosMaterialApoyo()">
                        <i class="fas fa-eraser"></i> Limpiar campos
                    </button>
                </div>
            </form>
        </div>
    `;
    document.getElementById('content-section').innerHTML = content;
    cargarDatosMaterialApoyo(); // Llamar a la función para cargar datos
    updateActiveNavLink('material-apoyo'); // Llamar a la función para actualizar el enlace activo
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

function guardarDatosMaterialApoyo(key, value) {
    localStorage.setItem(key, value);
    console.log("Elemento guardado:", key);
}

function cargarDatosMaterialApoyo() {
    const bibliografia = localStorage.getItem('bibliografia');
    const ubicacion = localStorage.getItem('ubicacion');

    if (bibliografia) document.getElementById('bibliografia').value = bibliografia;
    if (ubicacion) document.getElementById('ubicacion').value = ubicacion;
}

function limpiarDatosMaterialApoyo() {
    localStorage.removeItem('bibliografia');
    localStorage.removeItem('ubicacion');

    // Restablecer el formulario de material de apoyo
    document.getElementById('material-apoyo-form').reset();

    // Mostrar un mensaje en la consola
    console.log('Datos de material de apoyo eliminados');
}
