    function showIdentification() {
        const currentDate = new Date().toISOString().split("T")[0];
        const content = `
            <div class="container mt-4">
                <h2 class="h4 mb-4">
                <i class="fas fa-id-badge"></i> Identificación
                </h2>
                <form id="identification-form" method="POST" action="/identificaciones">
                <div class="row">
                    <div class="col-md-6 form-group mb-3">
                        <label for="codigo" class="form-label">
                            <i class="fas fa-barcode"></i> Código
                        </label>
                        <div class="d-flex align-items-center">
                            <select name="idioma" class="form-control custom-select w-auto me-1" id="codigo-parte-uno" onchange="guardarDatoIdentificacion('codigo-parte-uno', this.value)" required>
                                <option value="seleccion">Seleccione sede</option>
                                <option value="ARM">ARM</option>
                                <option value="BOG">BOG</option>
                                <option value="MED">MED</option>
                            </select>
                            <label for="codigo" class="form-label mx-1">-</label>
                            <select name="programa" class="form-control custom-select w-auto me-1" id="codigo-parte-dos" onchange="guardarDatoIdentificacion('codigo-parte-dos', this.value)" required>
                                <option value="seleccion">Seleccione programa</option>
                                <option value="111">111</option>
                                <option value="169">169</option>
                                <option value="---">---</option>
                            </select>
                            <label for="codigo" class="form-label mx-1">-</label>
                            <input type="number" name="materia" class="form-control custom-input" id="codigo-parte-final" placeholder="Código materia entre 1 y 99" min="1" max="99" step="1" onchange="guardarDatoIdentificacion('codigo-parte-tres', this.value)" required>
                        </div>
                    </div>
                    <div class="col-md-6 form-group mb-3">
                        <label for="codigo-completo" class="form-label">
                            <i class="fas fa-barcode"></i> Código Completo
                        </label>
                        <input type="text" name="codigo-completo" class="form-control custom-input" id="codigo-completo" oninput="guardarDatoIdentificacion('codigo-completo',  this.value)" readonly>
                    </div>
                </div>
                    <div class="row">
                        <div class="col-md-6 form-group mb-3">
                            <label for="facultad" class="form-label">
                                <i class="fas fa-university"></i> Facultad
                            </label>                            
                            <select name="facultad" class="form-control custom-select" id="facultad" onchange="guardarDatoIdentificacion('facultad', this.value)" required>
                                <!-- Opciones se llenarán dinámicamente -->
                            </select>
                        </div>
                        <div class="col-md-6 form-group mb-3">
                            <label for="programa" class="form-label">
                                <i class="fas fa-graduation-cap"></i> Programa
                            </label>
                            <select name="programa" class="form-control custom-select" id="programa" onchange="guardarDatoIdentificacion('programa', this.value)" required>
                            </select>
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
                            <label for="fecha-ultima-actualizacion" class="form-label">
                                <i class="fas fa-sync-alt"></i> Fecha última actualización
                            </label>
                            <input type="date" name="fecha_ultima_actualizacion" class="form-control" id="fecha-ultima-actualizacion" value="${currentDate}" onchange="guardarDatoIdentificacion('fecha-ultima-actualizacion', this.value)" readonly>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 form-group mb-3">
                            <label for="fecha-aprobacion" class="form-label">
                                <i class="fas fa-check-circle"></i> Fecha aprobación del Comité Curricular
                            </label>
                            <input type="date" name="fecha_aprobacion_comite_curricular" class="form-control" id="fecha-aprobacion" oninput="guardarDatoIdentificacion('fecha-aprobacion', this.value)" required>
                        </div>
                        <div class="col-md-6 form-group mb-3">
                            <label for="semestre" class="form-label">
                                <i class="fas fa-calendar-alt"></i> Semestre
                            </label>
                            <select class="form-control" id="semestre" onchange="guardarDatoIdentificacion('semestre', this.value)" required>
                                <option value="seleccion">Seleccione el semestre</option>
                                <option value="1">Semestre 1</option>
                                <option value="2">Semestre 2</option>
                                <option value="3">Semestre 3</option>
                                <option value="4">Semestre 4</option>
                                <option value="5">Semestre 5</option>
                                <option value="6">Semestre 6</option>
                                <option value="7">Semestre 7</option>
                                <option value="8">Semestre 8</option>
                                <option value="9">Semestre 9</option>
                                <option value="10">Semestre 10</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 form-group mb-3">
                            <label for="tipo-credito" class="form-label">
                                <i class="fas fa-credit-card"></i> Tipo de crédito
                            </label>
                            <select name="tipo_credito" class="form-control custom-select" id="tipo-credito" onchange="guardarDatoIdentificacion('tipo-credito', this.value)"  required>
                                <option value="seleccion">Seleccione el tipo de crédito</option>
                                <option value="teorico">Teórico</option>  
                                <option value="practico">Práctico</option>
                                <option value="teorico-practico">Teórico-Práctico</option>
                            </select>
                        </div>
                        <div class="col-md-6 form-group mb-3">
                            <label for="numero-credito" class="form-label">
                                <i class="fas fa-coins"></i> Número de créditos
                            </label>
                            <select name="numero_credito" class="form-control custom-select" id="numero-credito" onchange="guardarDatoIdentificacion('numero-credito', this.value)"  required>
                                <option value="seleccion">Seleccione el número de créditos</option>
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
                            <label for="prerrequisitos" class="form-label">
                                <i class="fas fa-tasks"></i> Prerrequisitos
                            </label>
                            <textarea name="prerrequisitos" class="form-control" id="prerrequisitos" placeholder="Prerrequisitos" oninput="guardarDatoIdentificacion('prerrequisitos',this.value)" required></textarea>
                        </div>
                        <div class="col-md-6 form-group mb-3">
                            <label for="saberes-competencias" class="form-label">
                                <i class="fas fa-brain"></i> Saberes y Competencias
                            </label>
                            <textarea name="saberes_y_competencias" class="form-control" id="saberes-competencias" placeholder="Saberes y Competencias" oninput="guardarDatoIdentificacion('saberes-competencias', this.value)" required></textarea>
                        </div>
                    </div>
                    <div class="row">          
                        <div class="col-md-6 form-group mb-3">
                            <label for="elaborado-por" class="form-label">
                                <i class="fas fa-user-edit"></i> Elaborado por
                            </label>
                            <input type="text" name="elaborado_por" class="form-control" id="elaborado-por" placeholder="Elaborado por" oninput="guardarDatoIdentificacion('elaborado-por',this.value)" required>
                        </div>      
                        <div class="col-md-6 form-group mb-3">
                            <label for="idioma" class="form-label">
                                <i class="fas fa-language"></i> Idioma
                            </label>
                            <div id="alerta-idioma" style="display: none; color: red; margin-bottom: 10px;">
                                Por favor, selecciona un idioma válido.
                            </div>
                            <select name="idioma" class="form-control custom-select" id="idioma" onchange="guardarDatoIdentificacion('idioma', this.value)"  required>
                                <option value="seleccion">Seleccione el idioma</option>
                                <option value="espanol">Español</option>
                                <option value="ingles">Inglés</option>
                                <option value="frances">Frances</option>
                                <option value="portugues">Portugues</option>
                                <option value="lenguajedeseñas">Lenguaje de señas</option>
                            </select>
                        </div>                     
                    </div>
                    <div class="form-group text-right mt-4">
                        <button type="button" class="btn btn-secondary" onclick="goBack()"><i class="fas fa-arrow-left"></i>Volver</button>
                        <button type="button" class="btn btn-primary" onclick="showEducationalPurposes()"><i class="fas fa-arrow-right"></i>Siguiente</button>
                        <button type="button" class="btn btn-danger" onclick="limpiarCamposIdentificacion()"><i class="fas fa-eraser"></i>Limpiar campos</button>
                    </div>
                    </div>
                </form>
            </div>
        `;
        // Actualizar el contenido del elemento con ID 'content-section'
        document.getElementById("content-section").innerHTML = content;
        loadFacultades();
        loadProgramas();
        cargarDatosIdentificacion();
        updateActiveNavLink("identificacion");
        // Validación para el campo "codigo-parte-final" usando SweetAlert
        const codigoParteFinal = document.getElementById('codigo-parte-final');

        codigoParteFinal.addEventListener('input', function (e) {
            const value = e.target.value;



            // Convertir el valor a número entero
            const numericValue = parseInt(value, 10);

            // Verificar si el valor no es un número, es menor que 1 o mayor que 99
            if (isNaN(numericValue) || numericValue < 1 || numericValue > 99) {
                swal({
                    title: "Valor fuera de rango",
                    text: "El código de materia debe ser numerico entre 1 y 99.",
                    icon: "error",
                    button: "Aceptar",
                }).then(() => {
                    e.target.value = ''; // Limpia el valor si está fuera del rango o no es un número
                });
            }
});

        // Agregar los event listeners después de inyectar el contenido
        document.getElementById('codigo-parte-uno').addEventListener('input', updateCodigoCompleto);
        document.getElementById('codigo-parte-dos').addEventListener('input', updateCodigoCompleto);
        document.getElementById('codigo-parte-final').addEventListener('input', updateCodigoCompleto);
    }
    function updateActiveNavLink(section) {
        // Elimina la clase 'active-custom' de todos los enlaces de navegación
        document.querySelectorAll(".main-sidebar .nav-link").forEach((link) => {
            link.classList.remove("active-custom");
        });

        // Agrega la clase 'active-custom' al enlace correspondiente
        const activeLink = document.querySelector(
            `.main-sidebar .nav-link[data-section="${section}"]`
        );
        if (activeLink) {
            activeLink.classList.add("active-custom");
        } else {
            console.error(`No se encontró el enlace para la sección: ${section}`);
        }
    }

    function guardarDatoIdentificacion(key, value) {
        var selectElement = document.getElementById(key);
        var alerta = document.getElementById("alerta-idioma");
    
        // Verificar si el valor es la opción predeterminada
        if (value === "seleccion") {
            // Mostrar alerta en el div arriba de la sección
            alerta.style.display = "block";
            alerta.innerText = "Por favor, selecciona un idioma válido.";
    
            // Agregar borde rojo para resaltar el campo
            selectElement.style.borderColor = "red";
        } else {
            // Guardar en localStorage si el valor es válido
            localStorage.setItem(key, value);
    
            // Ocultar la alerta si la selección es válida
            alerta.style.display = "none";
    
            // Restablecer borde si la selección es válida
            selectElement.style.borderColor = "";
            console.log(`Idioma guardado: ${key} = ${value}`);
        }
    }
    
    
    
    function cargarDatosIdentificacion(){
        
        const codigoParteUno = localStorage.getItem('codigo-parte-uno');
        const codigoParteDos = localStorage.getItem('codigo-parte-dos');
        const codigoParteTres = localStorage.getItem('codigo-parte-tres');
        const codigoCompleto = localStorage.getItem('codigo-completo');
        const facultad = localStorage.getItem('facultad');
        const programa = localStorage.getItem('programa');
        const nombreCurso = localStorage.getItem('nombre-curso');
        const fechaUltimaActualizacion = localStorage.getItem('fecha-ultima-actualizacion');
        const fechaAprobacion = localStorage.getItem('fecha-aprobacion');
        const semestre = localStorage.getItem('semestre');
        const tipoCredito = localStorage.getItem('tipo-credito');
        const numeroCreditos = localStorage.getItem('numero-credito');
        const prerrequisitos = localStorage.getItem('prerrequisitos');
        const saberesCompetencias = localStorage.getItem('saberes-competencias');
        const elaboradoPor = localStorage.getItem('elaborado-por');
        const idioma = localStorage.getItem('idioma');

        if(codigoParteUno) document.getElementById('codigo-parte-uno').value = codigoParteUno;
        if(codigoParteDos) document.getElementById('codigo-parte-dos').value = codigoParteDos;
        if(codigoParteTres) document.getElementById('codigo-parte-final').value = codigoParteTres;
        if(codigoCompleto) document.getElementById('codigo-completo').value = codigoCompleto;
        updateCodigoCompleto();
        if(facultad) document.getElementById('facultad').value = facultad;
        if(programa) document.getElementById('programa').value = programa;
        if(nombreCurso) document.getElementById('nombre-curso').value = nombreCurso;
        if(fechaUltimaActualizacion) document.getElementById('fecha-ultima-actualizacion').value = fechaUltimaActualizacion;
        if(fechaAprobacion) document.getElementById('fecha-aprobacion').value = fechaAprobacion;
        if(semestre) document.getElementById('semestre').value = semestre;
        if(tipoCredito) document.getElementById('tipo-credito').value = tipoCredito;
        if(numeroCreditos) document.getElementById('numero-credito').value = numeroCreditos;
        if(prerrequisitos) document.getElementById('prerrequisitos').value = prerrequisitos;
        if(saberesCompetencias) document.getElementById('saberes-competencias').value = saberesCompetencias;
        if(elaboradoPor) document.getElementById('elaborado-por').value = elaboradoPor;
        if(idioma) document.getElementById('idioma').value = idioma;
    }

    function limpiarCamposIdentificacion() {
        // Eliminar los elementos específicos de identificación del localStorage
        localStorage.removeItem('codigo-parte-uno');
        localStorage.removeItem('codigo-parte-dos');
        localStorage.removeItem('codigo-parte-tres');
        localStorage.removeItem('codigo-completo');
        localStorage.removeItem('facultad');
        localStorage.removeItem('programa');
        localStorage.removeItem('nombre-curso');
        localStorage.removeItem('fecha-ultima-actualizacion');
        localStorage.removeItem('fecha-aprobacion');
        localStorage.removeItem('semestre');
        localStorage.removeItem('tipo-credito');
        localStorage.removeItem('numero-credito');
        localStorage.removeItem('prerrequisitos');
        localStorage.removeItem('saberes-competencias');
        localStorage.removeItem('elaborado-por');
        localStorage.removeItem('idioma');
    
        // Restablecer el formulario de identificación
        document.getElementById('identification-form').reset();
    
        // Mostrar un mensaje en la consola
        console.log('Datos de identificación eliminados');
    }

    function loadFacultades() {
        fetch("/facultades")
            .then((response) => response.json())
            .then((data) => {
                const facultadSelect = document.getElementById("facultad");
                const defaultOption = document.createElement("option");
                defaultOption.value = "seleccion";
                defaultOption.textContent = "Seleccione una facultad";
                facultadSelect.appendChild(defaultOption);
                data.forEach((facultad) => {
                    const option = document.createElement("option");
                    option.value = facultad.cod_facultad;
                    option.textContent = facultad.nom_facultad;
                    facultadSelect.appendChild(option);
                });
                cargarDatosIdentificacion();
            })
            .catch((error) => console.error("Error fetching facultades:", error));
    }

    function loadProgramas() {
        fetch("/programas")
            .then((response) => response.json())
            .then((data) => {
                const programaSelect = document.getElementById("programa");
                const defaultOption = document.createElement("option");
                defaultOption.value = "seleccion";
                defaultOption.textContent = "Seleccione un programa";
                programaSelect.appendChild(defaultOption);
                data.forEach((programa) => {
                    const option = document.createElement("option");
                    option.value = programa.cod_programa;
                    option.textContent = programa.nom_programa_academico;
                    programaSelect.appendChild(option);
                });
                cargarDatosIdentificacion();
            })
            .catch((error) => console.error("Error fetching programas:", error));
    }


    // generar codigo completo


    function updateCodigoCompleto() {
        const codigoParteUno = document.getElementById("codigo-parte-uno").value;
        const codigoParteDos = document.getElementById("codigo-parte-dos").value;
        const codigoParteFinal = document.getElementById("codigo-parte-final").value;

        const codigoCompleto = `${codigoParteUno}${codigoParteDos}${codigoParteFinal}`;
        document.getElementById("codigo-completo").value = codigoCompleto;
    }

    // Llama a esta función cuando se cambien los valores del código
    document.querySelectorAll('#codigo-parte-uno, #codigo-parte-dos, #codigo-parte-final').forEach(element => {
        element.addEventListener('input', updateCodigoCompleto);
    });


