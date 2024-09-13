function showGuardarFacultades() {
    const formSection = document.getElementById('form-section');
    let formContent = `
        <div class="container mt-5 p-4 bg-white rounded shadow-sm">
            <h2 class="h4 mb-4 text-primary"><i class="fas fa-university"></i> Agregar nueva facultad</h2>
            <form id="facultad-form">
                <div class="form-group mb-3">
                    <label for="cod_facultad" class="form-label text-secondary">Código de facultad</label>
                    <input type="text" id="cod_facultad" class="form-control border border-primary" required>
                </div>
                <div class="form-group mb-3">
                    <label for="nom_facultad" class="form-label text-secondary">Nombre de facultad</label>
                    <input type="text" id="nom_facultad" class="form-control border border-primary" required>
                </div>
                <div class="form-group mb-4">
                    <label for="sede" class="form-label text-secondary">Sede de la facultad</label>
                    <select name="sede" class="form-control border border-primary custom-select" id="sede" required>
                        <option value="ARMENIA">ARMENIA</option>
                        <option value="BOGOTÁ">BOGOTÁ</option>
                        <option value="MEDELLÍN">MEDELLÍN</option>
                    </select>
                </div>
                <div class="d-flex justify-content-end">
                    <button type="button" class="btn btn-outline-secondary mr-2" onclick="mostrarOcultarFormulario()">
                        <i class="fas fa-times"></i> Cancelar
                    </button>
                    <button type="button" class="btn btn-primary" onclick="guardarFacultad()">
                        <i class="fas fa-save"></i> Guardar
                    </button>
                </div>
            </form>
        </div>
    `;
    formSection.innerHTML = formContent;
}
function guardarFacultad() {
    const codFacultad = document.getElementById('cod_facultad').value.trim();
    const nomFacultad = document.getElementById('nom_facultad').value.trim();
    const sede = document.getElementById('sede').value.trim().toUpperCase();

    if (!codFacultad || !nomFacultad || !sede) {
        Swal.fire({
            icon: 'warning',
            title: 'Campos incompletos',
            text: 'Por favor, complete todos los campos.',
        });
        return;
    }

    fetch('/gestion-facultades/guardar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': getCSRFToken()
        },
        body: JSON.stringify({
            cod_facultad: codFacultad,
            nom_facultad: nomFacultad,
            sede: sede
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            Swal.fire({
                icon: 'success',
                title: 'Facultad guardada',
                text: 'La facultad se guardó correctamente.',
            });
            showFacultades(); 
            mostrarOcultarFormulario();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un problema al guardar la facultad.',
            });
        }
    })
    .catch(error => console.error('Error:', error));
}

function mostrarOcultarFormulario() {
    const formSection = document.getElementById('form-section');

    if (formSection.style.display === 'block' || formSection.style.display === '') {
        formSection.style.display = 'none';
    } else {
        showGuardarFacultades();
        formSection.style.display = 'block';
    }
}

function showFacultades() {
    fetch('/gestion-facultades')
        .then(response => response.json())
        .then(data => {
            const contentSection = document.getElementById('content-section');
            let content = "";

            if (data.length > 0) {
                content += `
                    <div class="row mb-3">
                        <div class="col">
                            <input type="text" id="filter-cod_facultad" class="form-control" placeholder="Filtrar por ID de la facultad">
                        </div>
                        <div class="col">
                            <input type="text" id="filter-nom_facultad" class="form-control" placeholder="Filtrar por Nombre de la facultad">
                        </div>
                        <div class="col">
                            <input type="text" id="filter-sede" class="form-control" placeholder="Filtrar por sede">
                        </div>
                    </div>
                `;
                content += '<table class="table table-striped">';
                content += '<thead><tr><th>Id facultad</th><th>Facultad</th><th>Sede</th><th>Acciones</th></tr></thead>';
                content += '<tbody id="facultades-table-body">';

                data.forEach(item => {
                    content += `<tr>
                        <td>${item.cod_facultad}</td> 
                        <td>${item.nom_facultad}</td>
                        <td>${item.sede}</td>
                        <td>
                            <div class="d-flex">
                                <button class="btn btn-sm btn-danger mr-2" onclick="eliminarFacultad('${item.cod_facultad}')"> 
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                                <button class="btn btn-sm btn-warning" onclick="showEditarFacultad('${item.cod_facultad}')">
                                    <i class="fas fa-edit"></i>
                                </button>
                            </div>
                        </td>
                    </tr>`;
                });

                content += '</tbody></table>';
            } else {
                content += '<p>No hay facultades registradas.</p>';
            }

            contentSection.innerHTML = content;
            filtrarFacultades();
        })
        .catch(error => console.error('Error:', error));
}


function getCSRFToken() {
    return document.querySelector('meta[name="csrf-token"]').getAttribute('content');
}

function showEditarFacultad(codFacultad) {
    fetch(`/get-facultad/${codFacultad}`)
        .then(response => response.json())
        .then(data => {
            const formSection = document.getElementById('form-section');
            let formContent = `
            <div class="container mt-4">
                <h2 classs="h4 mb-4">Editar Facultad</h2>
                <form id="facultad-form">
                    <input type="hidden" id="edit_cod_facultad" value="${data.cod_facultad}">   
                    <div class="form-group">
                        <label for="edit_nom_facultad" class="form-label">Nombre de Facultad</label>
                        <input type="text" id="edit_nom_facultad" class="form-control" value="${data.nom_facultad}" required>
                    </div>
                    <div class="form-group">
                        <label for="sede" class="form-label">Sede de la facultad</label>
                        <select name="sede" class="form-control custom-select" id="sede" required>
                            <option value="armenia" ${data.sede === 'ARMENIA' ? 'selected' : ''}>ARMENIA</option>
                            <option value="bogota" ${data.sede === 'BOGOTÁ' ? 'selected' : ''}>BOGOTÁ</option>
                            <option value="medellin" ${data.sede === 'MEDELLÍN' ? 'selected' : ''}>MEDELLÍN</option>
                        </select>
                    </div>                    
                    <button type="button" class="btn btn-primary" onclick="guardarCambiosFacultad()">Guardar Cambios</button>
                    <button type="button" class="btn btn-secondary" onclick="mostrarOcultarFormulario()">Cancelar</button>
                </form>
            </div>
            `;

            formSection.innerHTML = formContent;
            formSection.style.display = 'block';
        })
        .catch(error => console.error('Error:', error));
}

function guardarCambiosFacultad() {
    const codFacultad = document.getElementById('edit_cod_facultad').value;
    const nomFacultad = document.getElementById('edit_nom_facultad').value;
    const sede = document.getElementById('sede').value;

    fetch('/actualizar-facultad', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        },
        body: JSON.stringify({
            cod_facultad: codFacultad,
            nom_facultad: nomFacultad,
            sede: sede
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('facultad-form').reset();
            mostrarOcultarFormulario(); 
            showFacultades();  
        } else {
            console.error('Error al actualizar la facultad');
        }
    })
    .catch(error => console.error('Error:', error));
}

function eliminarFacultad(codFacultad) {
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
            fetch(`/gestion-facultades/eliminar/${codFacultad}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': getCSRFToken()
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    Swal.fire(
                        'Eliminado!',
                        'La facultad ha sido eliminada.',
                        'success'
                    )
                    showFacultades();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'No se pudo eliminar la facultad.',
                    });
                }
            })
            .catch(error => console.error('Error:', error));
        }
    })
}

function filtrarFacultades() {
    const filters = [
        { inputId: 'filter-cod_facultad', columnIndex: 0 },
        { inputId: 'filter-nom_facultad', columnIndex: 1 },
        { inputId: 'filter-sede', columnIndex: 2 }
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