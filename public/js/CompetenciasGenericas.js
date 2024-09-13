function showGenericCompetencies() {
    const content = `
 <div class="container mt-4">
            <h2 class="h4 mb-4">
                <i class="fas fa-lightbulb"></i> Competencias Genéricas Transversales
            </h2>
            <form id="competencias-genericas-form">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="competencias-genericas-1" class="form-label">
                                <i class="fas fa-briefcase"></i> Competencia Genérica
                            </label>
                            <textarea class="form-control smaller-textarea" id="competencias-genericas-1" rows="3" placeholder="Ingrese una competencia genérica" oninput="guardarDatoGenerico('competencias-genericas-1', this.value)"></textarea>
                        </div>
                        <button type="button" class="btn btn-outline-secondary btn-sm mt-2" onclick="addCompetencia()">
                            <i class="fas fa-plus"></i> Añadir Competencia
                        </button>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="resultados-aprendizaje-1" class="form-label">
                                <i class="fas fa-graduation-cap"></i> Resultado de Aprendizaje
                            </label>
                            <textarea class="form-control smaller-textarea" id="resultados-aprendizaje-generico-1" rows="3" placeholder="Ingrese un resultado de aprendizaje" oninput="guardarDatoGenerico('resultados-aprendizaje-generico-1', this.value)"></textarea>
                        </div>
                        <button type="button" class="btn btn-outline-secondary btn-sm mt-2" onclick="addResultado()">
                            <i class="fas fa-plus"></i> Añadir Resultado
                        </button>
                    </div>
                </div>
                <div class="form-group text-right mt-4">
                    <button type="button" class="btn btn-secondary" onclick="showCompetenciasEspecificas()">
                        <i class="fas fa-arrow-left"></i> Volver
                    </button>
                    <button type="button" class="btn btn-primary" onclick="showConsistencyCurricular()">
                        <i class="fas fa-arrow-right"></i> Siguiente
                    </button>
                    <button type="button" class="btn btn-danger" onclick="clearCompetenciasGenericasData()">
                        <i class="fas fa-eraser"></i> Limpiar campos
                    </button>
                </div>
            </form>
        </div>
    `;
    document.getElementById('content-section').innerHTML = content;
    loadCompetenciasGenericasData();
    updateActiveNavLink('competencias-genericas-transversales');
}

function addCompetencia() {
    const competenciasDiv = document.createElement('div');
    competenciasDiv.classList.add('form-group', 'mt-3');
    competenciasDiv.innerHTML = `
        <div class="input-group">
            <textarea class="form-control smaller-textarea" rows="3" placeholder="Ingrese una competencia genérica adicional"></textarea>
            <div class="input-group-append">
                <button class="btn btn-outline-danger btn-sm" type="button" onclick="removeField(this)">Eliminar</button>
            </div>
        </div>
    `;
    document.getElementById('competencias-genericas-form').querySelector('.col-md-6').appendChild(competenciasDiv);
}

function addResultado() {
    const resultadosDiv = document.createElement('div');
    resultadosDiv.classList.add('form-group', 'mt-3');
    resultadosDiv.innerHTML = `
        <div class="input-group">
            <textarea class="form-control smaller-textarea" rows="3" placeholder="Ingrese un resultado de aprendizaje adicional"></textarea>
            <div class="input-group-append">
                <button class="btn btn-outline-danger btn-sm" type="button" onclick="removeField(this)">Eliminar</button>
            </div>
        </div>
    `;
    document.getElementById('competencias-genericas-form').querySelector('.col-md-6:last-child').appendChild(resultadosDiv);
}

function removeField(button) {
    button.closest('.form-group').remove();
}


function guardarDatoGenerico(key, value) {
    localStorage.setItem(key, value);
    console.log("Elemento guardado:", key);
}

// Cargar datos desde localStorage
function loadCompetenciasGenericasData() {
    const competenciasGenericas = localStorage.getItem('competencias-genericas-1');
    const resultadosAprendizajeGenerica = localStorage.getItem('resultados-aprendizaje-generico-1');

    if (competenciasGenericas) document.getElementById('competencias-genericas-1').value = competenciasGenericas;
    if (resultadosAprendizajeGenerica) document.getElementById('resultados-aprendizaje-generico-1').value = resultadosAprendizajeGenerica;
}

// Limpiar campos y localStorage
function clearCompetenciasGenericasData() {
    localStorage.removeItem('competencias-genericas-1');
    localStorage.removeItem('resultados-aprendizaje-generico-1');
    document.getElementById('competencias-genericas-form').reset();
    console.log('Datos de competencias genéricas eliminados.');
}
