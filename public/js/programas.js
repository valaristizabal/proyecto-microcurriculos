
function mostrarOcultarFormulario() {
    const formSection = document.getElementById('form-section');

    if (formSection.style.display === 'block' || formSection.style.display === '') {
        formSection.style.display = 'none';
    } else {
        showGuardarProgramas();
        formSection.style.display = 'block';
    }
}

function showGuardarProgramas(){
    const formSection = document.getElementById('form-section');
    let formContent = `
        <div class="container mt-4">
            <h2 class="h4 mb-4">Agregar nuevo programa</h2>
            <form id="programa-form">
                <div class="form-group">
                    <label for="facultad" class="form-label">Facultad</label>
                    <select name="facultad" class="form-control custom-select" id="facultad" required>
                        <!-- Opciones se llenarán dinámicamente -->
                    </select>
                </div>
                <div class="form-group">
                    <label for="cod_programa" class="form-label">Código del programa</label>
                    <input type="text" id="cod_programa" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="nom_programa_academico" class="form-label">Nombre del programa academico</label>
                    <input type="text" id="nom_programa_academico" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="estado" class="form-label">Estado</label>
                    <select name="estado" class="form-control custom-select" id="estado" required>
                        <option value="ACTIVO">ACTIVO</option>
                        <option value="INACTIVO">INACTIVO</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="tipo" class="form-label">Tipo</label>
                    <select name="tipo" class="form-control custom-select" id="tipo" required>
                        <option value="PREGRADO">PREGRADO</option>
                        <option value="POSGRADO">POSGRADO</option>
                        <option value="FORMACION-CONTINUA">FORMACIÓN CONTINÚA</option>
                        <option value="CENTRO-LENGUAS">CENTRO DE LENGUAS</option>
                    </select>
                </div>
                <button type="button" class="btn btn-primary" onclick="guardarPrograma()">Guardar</button>
                <button type="button" class="btn btn-secondary" onclick="mostrarOcultarFormulario()">Cancelar</button>
            </form>
        </div>
    `;
    
    formSection.innerHTML = formContent;
    loadFacultades();
}
function guardarPrograma() {
    const codPrograma = document.getElementById('cod_programa').value.trim();
    const nomProgramaAcademico = document.getElementById('nom_programa_academico').value.trim();
    const codFacultad = document.getElementById('facultad').value.trim();
    const estado = document.getElementById('estado').value.trim();
    const tipo = document.getElementById('tipo').value.trim();

    if (!codPrograma || !nomProgramaAcademico || !codFacultad || !estado || !tipo) {
        Swal.fire({
            icon: 'warning',
            title: 'Campos incompletos',
            text: 'Por favor, complete todos los campos antes de guardar.',
        });
        return;
    }

    fetch('/guardar-programa', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        },
        body: JSON.stringify({
            cod_programa: codPrograma,
            nom_programa_academico: nomProgramaAcademico,
            cod_facultad: codFacultad,
            estado: estado,
            tipo: tipo
        })
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(text => { throw new Error(text) });
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            Swal.fire({
                icon: 'success',
                title: 'Guardado',
                text: 'Programa guardado correctamente',
            }).then(() => {
                showProgramas(); 
                mostrarOcultarFormulario(); 
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error al guardar el programa.',
            });
        }
    })
    .catch(error => {
        console.error('Error:', error.message || error);
        Swal.fire({
            icon: 'error',
            title: 'Ocurrió un error',
            text: `Ocurrió un error: ${error.message || error}`,
        });
    });
}

function showProgramas() {
    fetch('/gestion-programas')
        .then(response => response.json())
        .then(data => {
            const contentSection = document.getElementById('content-section');
            let content = "";

            if (data.length > 0) {
                content += `
                    <div class="row mb-3">
                        <div class="col">
                            <input type="text" id="filter-cod_programa" class="form-control" placeholder="Filtrar por ID del programa">
                        </div>
                        <div class="col">
                            <input type="text" id="filter-nom_programa_academico" class="form-control" placeholder="Filtrar por Nombre del programa">
                        </div>
                        <div class="col">
                            <input type="text" id="filter-cod_facultad" class="form-control" placeholder="Filtrar por Facultad">
                        </div>
                        <div class="col">
                            <input type="text" id="filter-estado" class="form-control" placeholder="Filtrar por Estado">
                        </div>
                        <div class="col">
                            <input type="text" id="filter-tipo" class="form-control" placeholder="Filtrar por Tipo">
                        </div>
                    </div>
                `;

                content += '<table class="table table-striped">';
                content += '<thead><tr><th>Id programa</th><th>Programa academico</th><th>Facultad</th><th>Estado</th><th>Tipo</th><th>Acciones</th></tr></thead>';
                content += '<tbody id="programas-table-body">';

                data.forEach(item => {
                    content += `<tr>
                        <td>${item.cod_programa}</td> 
                        <td>${item.nom_programa_academico}</td>
                        <td>${item.cod_facultad}</td>
                        <td>${item.estado}</td>
                        <td>${item.tipo}</td>
                        <td>
                            <div class="d-flex">
                                <button class="btn btn-sm btn-danger mr-2" onclick="eliminarPrograma('${item.cod_programa}')"> 
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                                <button class="btn btn-sm btn-warning" onclick="showEditarPrograma('${item.cod_programa}')">
                                    <i class="fas fa-edit"></i>
                                </button>
                            </div>
                        </td>
                    </tr>`;
                });

                content += '</tbody></table>';
            } else {
                content += '<p>No hay programas registrados.</p>';
            }

            contentSection.innerHTML = content;
            filtrarProgramas();
            
        })
        .catch(error => console.error('Error:', error));
}

function loadFacultades(selectedCodFacultad = null) {
    fetch("/gestion-facultades")
        .then((response) => response.json())
        .then((data) => {
            const facultadSelect = document.getElementById('facultad');
            facultadSelect.innerHTML = ''; 
            
            data.forEach((facultad) => {
                const option = document.createElement('option');
                option.value = facultad.cod_facultad;
                option.textContent = facultad.nom_facultad;
                
                if (facultad.cod_facultad === selectedCodFacultad) {
                    option.selected = true;
                }
                
                facultadSelect.appendChild(option);
            });
        })
        .catch((error) => console.error('Error:', error));
}

function showEditarPrograma(codPrograma) {
    fetch(`/get-programa/${codPrograma}`)
        .then(response => response.json())
        .then(data => {
            const formSection = document.getElementById('form-section');
            let formContent = `
            <div class="container mt-4">
                <h2 classs="h4 mb-4">Editar Programa</h2>
                <form id="programa-form">
                    <input type="hidden" id="edit_cod_programa" value="${data.cod_programa}">   
                    <div class="form-group">
                        <select name="facultad" class="form-control custom-select" id="facultad" required>
                                
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="edit_nom_programa_academico" class="form-label">Nombre del programa</label>
                        <input type="text" id="edit_nom_programa_academico" class="form-control" value="${data.nom_programa_academico}" required>
                    </div>
                    <div class="form-group">
                        <label for="edit_estado" class="form-label">Estado del programa</label>
                        <select name="edit_estado" class="form-control custom-select" id="edit_estado" required>
                            <option value="activo" ${data.estado === 'ACTIVO' ? 'selected' : ''}>ACTIVO</option>
                            <option value="inactivo" ${data.estado === 'INACTIVO' ? 'selected' : ''}>INACTIVO</option>
                        </select>
                    </div>  
                    <div class="form-group">
                        <label for="edit_tipo" class="form-label">Tipo de programa</label>
                        <select name="edit_tipo" class="form-control custom-select" id="edit_tipo" required>
                            <option value="pregrado" ${data.tipo === 'PREGRADO' ? 'selected' : ''}>PREGRADO</option>
                            <option value="posgrago" ${data.tipo === 'POSGRADO' ? 'selected' : ''}>POSGRADO</option>
                            <option value="formacion-continua" ${data.tipo === 'FORMACIÓN CONTINUA' ? 'selected' : ''}>FORMACIÓN CONTINUA</option>
                            <option value="activo" ${data.tipo === 'CENTRO DE LENGUAS' ? 'selected' : ''}>CENTRO DE LENGUAS</option>1
                        </select>
                    </div>                  
                    <button type="button" class="btn btn-primary" onclick="guardarCambiosProgramas()">Guardar Cambios</button>
                    <button type="button" class="btn btn-secondary" onclick="mostrarOcultarFormulario()">Cancelar</button>
                </form>
            </div>
            `;

            formSection.innerHTML = formContent;
            formSection.style.display = 'block';
            loadFacultades(data.cod_facultad);
        })
        .catch(error => console.error('Error:', error));
}

function guardarCambiosProgramas() {
    const codPrograma = document.getElementById('edit_cod_programa').value;
    const codFacultadPrograma = document.getElementById('facultad').value;
    const nomProgramaAcademico = document.getElementById('edit_nom_programa_academico').value;
    const estado = document.getElementById('edit_estado').value;
    const tipo = document.getElementById('edit_tipo').value;

    fetch('/actualizar-programa', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            //'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        },
        body: JSON.stringify({
            cod_programa: codPrograma,
            nom_programa_academico: nomProgramaAcademico,
            cod_facultad: codFacultadPrograma,
            estado: estado,
            tipo: tipo
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('programa-form').reset();
            mostrarOcultarFormulario(); 
            showProgramas();  
        } else {
            console.error('Error al actualizar la facultad');
        }
    })
    .catch(error => console.error('Error:', error));
}


function eliminarPrograma(codPrograma) {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "No podrás revertir esta acción",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`/gestion-programa/eliminar/${codPrograma}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    //'X-CSRF-TOKEN': getCSRFToken()
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    Swal.fire(
                        'Eliminado!',
                        'El programa ha sido eliminado.',
                        'success'
                    )
                    showProgramas();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'No se pudo eliminar el programa.',
                    });
                }
            })
            .catch(error => console.error('Error:', error));
        }
    })
}

function filtrarProgramas() {
    const filters = [
        { inputId: 'filter-cod_programa', columnIndex: 0 },
        { inputId: 'filter-nom_programa_academico', columnIndex: 1 },
        { inputId: 'filter-cod_facultad', columnIndex: 2 },
        { inputId: 'filter-estado', columnIndex: 3 },
        { inputId: 'filter-tipo', columnIndex: 4 }
    ];

    filters.forEach(filter => {
        document.getElementById(filter.inputId).addEventListener('keyup', function () {
            const filterValue = this.value.toLowerCase();
            const tableRows = document.querySelectorAll('#content-section table tbody tr'); // Asegúrate de que este selector apunte a tu tabla correcta

            tableRows.forEach(row => {
                const cellValue = row.cells[filter.columnIndex].textContent.toLowerCase();
                row.style.display = cellValue.startsWith(filterValue) ? '' : 'none'; // Cambia includes a startsWith
            });
        });
    });
}

