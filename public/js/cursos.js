function showGuardarCursos() {
    const formSection = document.getElementById('form-section');
    let formContent = `
        <div class="container mt-5 p-4 bg-white rounded shadow-sm">
            <h2 class="h4 mb-4 text-primary"><i class="fas fa-book"></i> Agregar nuevo curso</h2>
            <form id="curso-form">
                <div class="form-group mb-3">
                    <label for="cod_curso" class="form-label text-secondary">Código del curso</label>
                    <input type="text" id="cod_curso" class="form-control border border-primary" required>
                </div>
                <div class="form-group mb-3">
                    <label for="curso" class="form-label text-secondary">Nombre del curso</label>
                    <input type="text" id="curso" class="form-control border border-primary" required>
                </div>
                <div class="form-group mb-3">
                    <label for="activa" class="form-label text-secondary">Curso Activo</label>
                    <select name="curso-activo" class="form-control border border-primary custom-select" id="curso_activo" required>
                        <option value=1>SÍ</option>
                        <option value=0>NO</option>
                    </select>
                </div>
                <div class="form-group mb-3">
                    <label for="modalidad" class="form-label text-secondary">Modalidad</label>
                    <select name="modalidad" class="form-control border border-primary custom-select" id="modalidad" required>
                        <option value="PRESENCIAL">PRESENCIAL</option>
                        <option value="VIRTUAL">VIRTUAL</option>
                        <option value="MIXTO">MIXTO</option>
                    </select>
                </div>
                <div class="form-group mb-3">
                    <label for="area_conocimiento" class="form-label text-secondary">Área de Conocimiento</label>
                    <input type="text" id="area_conocimiento" class="form-control border border-primary">
                </div>
                <div class="form-group mb-3">
                    <label for="tipo_curso" class="form-label text-secondary">Tipo de Curso</label>
                    <input type="text" id="tipo_curso" class="form-control border border-primary">
                </div>
                <div class="form-group mb-3">
                    <label for="cod_reglamento" class="form-label text-secondary">Código de Reglamento</label>
                    <input type="text" id="cod_reglamento" class="form-control border border-primary">
                </div>
                <div class="form-group mb-3">
                    <label for="creditos" class="form-label text-secondary">Créditos</label>
                    <input type="number" id="creditos" class="form-control border border-primary">
                </div>
                <div class="form-group mb-3">
                    <label for="codigo_externo" class="form-label text-secondary">Código Externo</label>
                    <input type="text" id="codigo_externo" class="form-control border border-primary">
                </div>
                <div class="form-group mb-3">
                    <label for="horas_docente" class="form-label text-secondary">Horas de Docente</label>
                    <input type="number" id="horas_docente" class="form-control border border-primary">
                </div>
                <div class="form-group mb-3">
                    <label for="tipo_nota_gen" class="form-label text-secondary">Tipo de Nota General</label>
                    <input type="text" id="tipo_nota_gen" class="form-control border border-primary">
                </div>
                <div class="form-group mb-3">
                    <label for="idioma_gen" class="form-label text-secondary">Idioma General</label>
                    <input type="text" id="idioma_gen" class="form-control border border-primary">
                </div>
                <div class="d-flex justify-content-end">
                    <button type="button" class="btn btn-outline-secondary mr-2" onclick="mostrarOcultarFormulario()">
                        <i class="fas fa-times"></i> Cancelar
                    </button>
                    <button type="button" class="btn btn-primary" onclick="guardarCurso()">
                        <i class="fas fa-save"></i> Guardar
                    </button>
                </div>
            </form>
        </div>
    `;
    formSection.innerHTML = formContent;
}

function mostrarOcultarFormulario() {
    const formSection = document.getElementById('form-section');

    if (formSection.style.display === 'block' || formSection.style.display === '') {
        formSection.style.display = 'none';
    } else {
        showGuardarCursos();
        formSection.style.display = 'block';
    }
}

function showCursos() {
    fetch('/gestion-cursos')
        .then(response => response.json())
        .then(data => {
            const contentSection = document.getElementById('content-section');
            let content = "";

            if (data.length > 0) {
                content += `
                    <div class="row mb-3">
                        <div class="col">
                            <input type="text" id="filter-cod_curso" class="form-control" placeholder="Filtrar por Código de curso">
                        </div>
                        <div class="col">
                            <input type="text" id="filter-curso" class="form-control" placeholder="Filtrar por Nombre del curso">
                        </div>
                        <div class="col">
                            <input type="text" id="filter-modalidad" class="form-control" placeholder="Filtrar por Modalidad">
                        </div>
                    </div>
                `;
                content += '<table class="table table-striped">';
                content += '<thead><tr><th>Código de curso</th><th>Curso</th><th>Modalidad</th><th>Acciones</th></tr></thead>';
                content += '<tbody id="cursos-table-body">';

                data.forEach(item => {
                    content += `<tr>
                        <td>${item.cod_curso}</td> 
                        <td>${item.curso}</td>
                        <td>${item.modalidad}</td>
                        <td>
                            <div class="d-flex">
                                <button class="btn btn-sm btn-danger mr-2" onclick="eliminarCurso('${item.cod_curso}')"> 
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                                <button class="btn btn-sm btn-warning" onclick="showEditarCurso('${item.cod_curso}')">
                                    <i class="fas fa-edit"></i>
                                </button>
                            </div>
                        </td>
                    </tr>`;
                });

                content += '</tbody></table>';
            } else {
                content += '<p>No hay cursos registrados.</p>';
            }

            contentSection.innerHTML = content;
            filtrarCursos();
        })
        .catch(error => console.error('Error:', error));
}

function guardarCurso() {
    const codCurso = document.getElementById('cod_curso').value.trim();
    const curso = document.getElementById('curso').value.trim();
    const activa = document.getElementById('curso_activo').checked ? 1 : 0;
    const modalidad = document.getElementById('modalidad').value.trim().toUpperCase();
    const areaConocimiento = document.getElementById('area_conocimiento').value.trim();
    const tipoCurso = document.getElementById('tipo_curso').value.trim();
    const codReglamento = document.getElementById('cod_reglamento').value.trim();
    const creditos = document.getElementById('creditos').value.trim();
    const codigoExterno = document.getElementById('codigo_externo').value.trim();
    const horasDocente = document.getElementById('horas_docente').value.trim();
    const tipoNotaGen = document.getElementById('tipo_nota_gen').value.trim();
    const idiomaGen = document.getElementById('idioma_gen').value.trim();

    // Verificar que los campos obligatorios estén completos
    if (!codCurso || !curso || !modalidad) {
        Swal.fire({
            icon: 'warning',
            title: 'Campos incompletos',
            text: 'Por favor, complete todos los campos obligatorios.',
        });
        return;
    }

    // Enviar datos al servidor
    fetch('/gestion-cursos/guardar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            //'X-CSRF-TOKEN': getCSRFToken()  // Asegúrate de tener una función que obtenga el token CSRF
        },
        body: JSON.stringify({
            cod_curso: codCurso,
            curso: curso,
            activa: activa,
            modalidad: modalidad,
            area_conocimiento: areaConocimiento,
            tipo_curso: tipoCurso,
            cod_reglamento: codReglamento,
            creditos: creditos,
            codigo_externo: codigoExterno,
            horas_docente: horasDocente,
            tipo_nota_gen: tipoNotaGen,
            idioma_gen: idiomaGen
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            Swal.fire({
                icon: 'success',
                title: 'Curso guardado',
                text: 'El curso se guardó correctamente.',
            });
            showCursos();  // Asegúrate de tener una función para mostrar la lista de cursos
            mostrarOcultarFormulario();  // Ocultar el formulario después de guardar
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un problema al guardar el curso.',
            });
        }
    })
    .catch(error => console.error('Error:', error));
}
