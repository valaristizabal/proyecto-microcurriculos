function showIdentification() {
    const currentDate = new Date().toISOString().split("T")[0];
    const content = `
       <div class="container mt-4">
    <h2 class="h4 mb-4">
        <i class="fas fa-id-badge"></i> Identificación del Curso
    </h2>
    
        <!-- Primer menú desplegable estilizado para filtrar secciones -->
<form class="form-inline ml-3">

    <div class="input-group input-group-sm mb-2">
        <div class="input-group-prepend">
            <label class="input-group-text bg-dark text-white" for="section-filter-sede">
                <i class="fas fa-filter mr-2"></i>Filtrar
            </label>
        </div>
        <select class="form-control custom-select bg-light" id="section-filter-sede">
            <option value="all" selected>Filtrar por sede</option>
            <option value="section1">ARM</option>
            <option value="section2">BOG</option>
            <!-- Agrega más opciones según tus secciones -->
        </select>
    </div>

    <div class="input-group input-group-sm mb-2">
        <div class="input-group-prepend">
            <label class="input-group-text bg-dark text-white" for="filter-programa">
                <i class="fas fa-filter mr-2"></i>Filtrar
            </label>
        </div>
        <input type="text" class="form-control bg-light" id="filter-programa" placeholder="Filtrar por programa">
    </div>

    <div class="input-group input-group-sm mb-2">
        <div class="input-group-prepend">
            <label class="input-group-text bg-dark text-white" for="filter-curso">
                <i class="fas fa-filter mr-2"></i>Filtrar
            </label>
        </div>
        <input type="text" class="form-control bg-light" id="filter-curso" placeholder="Filtrar por curso">
    </div>
</form>

    <form id="identification-form" method="POST" action="/identificaciones">
      <div class="row">
        <!-- Campo Facultad -->
        <div class="col-md-6 form-group mb-3">
            <label for="facultad" class="form-label">
                <i class="fas fa-university"></i> Facultad
            </label>
            <input type="text" name="facultad" class="form-control" id="facultad" placeholder="Facultad" oninput="guardarDatoIdentificacion('facultad', this.value)" required>
        </div>
        <!-- Campo Programa -->
        <div class="col-md-6 form-group mb-3">
            <label for="programa" class="form-label">
                <i class="fas fa-graduation-cap"></i> Programa
            </label>
            <input type="text" name="programa" class="form-control" id="programa" placeholder="Programa" oninput="guardarDatoIdentificacion('programa', this.value)" required>
        </div>
    </div>
        <div class="row">
            <div class="col-md-6 form-group mb-3">
                <label for="nombre-curso" class="form-label">
                    <i class="fas fa-book"></i> Nombre del curso
                </label>
                <input type="text" name="nombre_del_curso" class="form-control" id="nombre-curso" placeholder="Nombre del curso" oninput="guardarDatoIdentificacion('nombre-curso', this.value)" required>
            </div>
            <div class="col-md-6 form-group mb-3">
                <label for="numero-credito" class="form-label">
                    <i class="fas fa-coins"></i> Número de créditos
                </label>
                <select name="numero_credito" class="form-control custom-select" id="numero-credito" onchange="guardarDatoIdentificacion('numero-credito', this.value)" required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 form-group mb-3">
                <label for="intensidad-horaria-presencial" class="form-label">
                    <i class="fas fa-clock"></i> Intensidad Horaria Presencial/Semana
                </label>
                <input type="number" name="intensidad_horaria_presencial" class="form-control" id="intensidad-horaria-presencial" placeholder="Horas por semana" oninput="guardarDatoIdentificacion('intensidad-horaria-presencial', this.value)" required>
            </div>
            <div class="col-md-6 form-group mb-3">
                <label for="cursos-prerrequisitos" class="form-label">
                    <i class="fas fa-tasks"></i> Cursos que son Pre-requisitos
                </label>
                <textarea name="cursos_prerrequisitos" class="form-control" id="cursos-prerrequisitos" placeholder="Prerrequisitos" oninput="guardarDatoIdentificacion('cursos-prerrequisitos', this.value)" required></textarea>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 form-group mb-3">
                <label for="intensidad-horaria-trabajo-independiente" class="form-label">
                    <i class="fas fa-clock"></i> Intensidad Horaria Trabajo Independiente/Semana
                </label>
                <input type="number" name="intensidad_horaria_trabajo_independiente" class="form-control" id="intensidad-horaria-trabajo-independiente" placeholder="Horas por semana" oninput="guardarDatoIdentificacion('intensidad-horaria-trabajo-independiente', this.value)" required>
            </div>
            <div class="col-md-6 form-group mb-3">
                <label for="requisito-para" class="form-label">
                    <i class="fas fa-check-circle"></i> Requisito Para (este curso se convierte en pre-requisito para…)
                </label>
                <textarea name="requisito_para" class="form-control" id="requisito-para" placeholder="Cursos para los que este es un pre-requisito" oninput="guardarDatoIdentificacion('requisito-para', this.value)" required></textarea>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 form-group mb-3">
                <label for="semestre" class="form-label">
                    <i class="fas fa-calendar-alt"></i> Semestre
                </label>
                <select class="form-control" id="semestre" onchange="guardarDatoIdentificacion('semestre', this.value)" required>
                    <option value="semestre1">Semestre 1</option>
                    <option value="semestre2">Semestre 2</option>
                    <option value="semestre3">Semestre 3</option>
                    <option value="semestre4">Semestre 4</option>
                    <option value="semestre5">Semestre 5</option>
                    <option value="semestre6">Semestre 6</option>
                    <option value="semestre7">Semestre 7</option>
                    <option value="semestre8">Semestre 8</option>
                    <option value="semestre9">Semestre 9</option>
                    <option value="semestre10">Semestre 10</option>
                </select>
            </div>
            <div class="col-md-6 form-group mb-3">
                <label for="nucleo-formacion" class="form-label">
                    <i class="fas fa-graduation-cap"></i> Núcleo de Formación
                </label>
                <input type="text" name="nucleo_formacion" class="form-control" id="nucleo-formacion" placeholder="Núcleo de Formación" oninput="guardarDatoIdentificacion('nucleo-formacion', this.value)" required>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 form-group mb-3">
                <label for="area" class="form-label">
                    <i class="fas fa-chart-area"></i> Área
                </label>
                <input type="text" name="area" class="form-control" id="area" placeholder="Área" oninput="guardarDatoIdentificacion('area', this.value)" required>
            </div>
            <div class="col-md-6 form-group mb-3">
                <label for="link-tutorias" class="form-label">
                    <i class="fas fa-link"></i> Link de Tutorías
                </label>
                <input type="url" name="link_tutorias" class="form-control" id="link-tutorias" placeholder="Link de Tutorías" oninput="guardarDatoIdentificacion('link-tutorias', this.value)">
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 form-group mb-3">
                <label for="horario-tutorias" class="form-label">
                    <i class="fas fa-calendar"></i> Horario de Tutorías
                </label>
                <input type="text" name="horario_tutorias" class="form-control" id="horario-tutorias" placeholder="Horario de Tutorías" oninput="guardarDatoIdentificacion('horario-tutorias', this.value)">
            </div>
            <div class="col-md-6 form-group mb-3">
                <label for="tipo-curso" class="form-label">
                    <i class="fas fa-book-open"></i> Tipo de Curso
                </label>
                <select name="tipo_curso" class="form-control custom-select" id="tipo-curso" onchange="guardarDatoIdentificacion('tipo-curso', this.value)" required>
                    <option value="teorico">Teórico</option>
                    <option value="practico">Práctico</option>
                    <option value="teorico-practico">Teórico-Práctico</option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 form-group mb-3">
                <label for="periodo-academico" class="form-label">
                    <i class="fas fa-calendar-alt"></i> Período Académico
                </label>
                <input type="text" name="periodo_academico" class="form-control" id="periodo-academico" placeholder="Período Académico" oninput="guardarDatoIdentificacion('periodo-academico', this.value)" required>
            </div>
        </div>
        <div class="form-group text-right mt-4">
            <button type="button" class="btn btn-secondary" onclick="goBack()"><i class="fas fa-arrow-left"></i> Volver</button>
            <button type="button" class="btn btn-primary" onclick="showEducationalPurposes()"><i class="fas fa-arrow-right"></i> Siguiente</button>
            <button type="button" class="btn btn-danger" onclick="limpiarCamposIdentificacion()"><i class="fas fa-eraser"></i> Limpiar campos</button>
        </div>
    </form>
</div>

    `;
       // Actualizar el contenido del elemento con ID 'content-section'
       document.getElementById("content-section").innerHTML = content;

       // Aquí puedes agregar lógica adicional si es necesario
       // Por ejemplo, inicializar plugins, validaciones adicionales, e
  
}

