function showManageIdentification() {
    fetch('/identificaciones')
        .then(response => response.json())
        .then(data => {
            const contentSection = document.getElementById('content-section');
            let content = '<h2 class="h4">Historial</h2>';
            
            if (data.length > 0) {
                content += '<table class="table table-striped">';
                content += '<thead><tr><th>Facultad</th><th>Programa</th><th>Nombre del Curso</th><th>Elaborado Por</th><th>Fecha Última Actualización</th><th>Fecha Aprobación</th><th>Idioma</th><th>Código</th><th>Acciones</th></tr></thead>';
                content += '<tbody>';
                
                data.forEach(item => {
                    content += `<tr>
                        <td>${item.facultad}</td>
                        <td>${item.programa}</td>
                        <td>${item.nombre_del_curso}</td>
                        <td>${item.elaborado_por}</td>
                        <td>${item.fecha_ultima_actualizacion}</td>
                        <td>${item.fecha_aprobacion_comite_curricular}</td>
                        <td>${item.idioma}</td>
                        <td>${item.codigo}</td>
                        <td>
                            <div class="d-flex">
                                <button class="btn btn-sm btn-danger mr-2" onclick="deleteIdentification(${item.id})">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                                <button class="btn btn-sm btn-warning" onclick="editIdentification(${item.id})">
                                    <i class="fas fa-edit"></i>
                                </button>
                            </div>
                        </td>
                    </tr>`;
                });

                content += '</tbody></table>';
            } else {
                content += '<p>No hay identificaciones registradas.</p>';
            }

            contentSection.innerHTML = content;
        })
        .catch(error => console.error('Error:', error));
}

// Functions to handle delete and edit actions
function deleteIdentification(id) {
    if (confirm('¿Estás seguro de que deseas eliminar esta identificación?')) {
        fetch(`/identificaciones/${id}`, {
            method: 'DELETE',
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Identificación eliminada exitosamente.');
                showManageIdentification();
            } else {
                alert('Error al eliminar la identificación.');
            }
        })
        .catch(error => console.error('Error:', error));
    }
}

function editIdentification(id) {
    // Lógica para editar la identificación
    // Podrías mostrar un formulario con los datos de la identificación para editarlos
}
