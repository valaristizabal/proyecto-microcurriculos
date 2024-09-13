function showRubricaEvaluacion() {
    const content = `
    <div class="container mt-4">
        <h2 class="h4 mb-4">
            <i class="fas fa-clipboard-check"></i> RÚBRICA DE EVALUACIÓN
        </h2>
        <form id="rubrica-evaluacion-form" method="POST" action="/rubrica-evaluacion">
            
            <div class="form-group mb-3">
                <label for="competencias-especificas" class="form-label">
                    <i class="fas fa-tasks"></i> Competencias Específicas
                </label>
                <textarea name="competencias_especificas" class="form-control" id="competencias-especificas" placeholder="Describe las competencias específicas" required></textarea>
            </div>

            <div class="form-group mb-3">
                <label for="resultados-aprendizaje" class="form-label">
                    <i class="fas fa-graduation-cap"></i> Resultados de Aprendizaje
                </label>
                <textarea name="resultados_aprendizaje" class="form-control" id="resultados-aprendizaje" placeholder="Describe los resultados de aprendizaje" required></textarea>
            </div>

            <div class="form-group mb-3">
                <label for="nivel-1" class="form-label">
                    <i class="fas fa-times-circle"></i> Nivel 1: No cumple
                </label>
                <textarea name="nivel_1" class="form-control" id="nivel-1" placeholder="Describe el nivel 1: No cumple" required></textarea>
            </div>

            <div class="form-group mb-3">
                <label for="nivel-2" class="form-label">
                    <i class="fas fa-exclamation-circle"></i> Nivel 2: Parcialmente
                </label>
                <textarea name="nivel_2" class="form-control" id="nivel-2" placeholder="Describe el nivel 2: Parcialmente" required></textarea>
            </div>

            <div class="form-group mb-3">
                <label for="nivel-3" class="form-label">
                    <i class="fas fa-check-circle"></i> Nivel 3: Satisfactorio
                </label>
                <textarea name="nivel_3" class="form-control" id="nivel-3" placeholder="Describe el nivel 3: Satisfactorio" required></textarea>
            </div>

            <div class="form-group mb-3">
                <label for="nivel-4" class="form-label">
                    <i class="fas fa-star"></i> Nivel 4: Sobresaliente
                </label>
                <textarea name="nivel_4" class="form-control" id="nivel-4" placeholder="Describe el nivel 4: Sobresaliente" required></textarea>
            </div>

            <div class="form-group mb-3">
                <label for="mecanismo-evaluacion" class="form-label">
                    <i class="fas fa-clipboard-list"></i> Mecanismo de Evaluación
                </label>
                <textarea name="mecanismo_evaluacion" class="form-control" id="mecanismo-evaluacion" placeholder="Describe el mecanismo de evaluación" required></textarea>
            </div>

            <div class="form-group text-right mt-4">
                <button type="button" class="btn btn-secondary" onclick="goBack()"><i class="fas fa-arrow-left"></i> Volver</button>
                <button type="submit" class="btn btn-primary"><i class="fas fa-save"></i> Guardar</button>
            </div>
        </form>
    </div>
    `;

    // Actualizar el contenido del elemento con ID 'content-section'
    document.getElementById("content-section").innerHTML = content;

    // Aquí puedes agregar lógica adicional si es necesario
}
