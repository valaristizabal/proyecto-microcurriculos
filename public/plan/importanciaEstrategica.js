function showConsistencyCurricular() {
    const content = `
    <div class="container mt-4">
        <h2 class="h4 mb-4">
            <i class="fas fa-lightbulb"></i> Importancia estratégica
        </h2>
        <form id="importancia-estrategica-form" method="POST" action="/importancia-estrategica y competencia principal">
            <div class="form-group mb-3">
                <label for="importancia-estrategica" class="form-label">
                    <i class="fas fa-book"></i> Importancia estratégica del curso para alcanzar los resultados de aprendizaje del graduado
                </label>
                <textarea name="importancia_estrategica" class="form-control" id="importancia-estrategica" placeholder="Describe la importancia estratégica del curso" required></textarea>
            </div>
            <div class="form-group mb-3">
                <label for="competencia-principal" class="form-label">
                    <i class="fas fa-trophy"></i> Competencia principal del curso
                </label>
                <textarea name="competencia_principal" class="form-control" id="competencia-principal" placeholder="Describe la competencia principal del curso" required></textarea>
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
}


