function showThematicPlan() {
    const content = `
    <div class="container mt-4">
        <h2 class="h4 mb-4">
            <i class="fas fa-tasks"></i> Competencias específicas
        </h2>
        <form id="competencias-especificas-form" method="POST" action="/competencias-especificas">
            <div class="row">
                <div class="col-md-6 form-group mb-3">
                    <label for="competencias-especificas" class="form-label">
                        <i class="fas fa-check-circle"></i> Competencias específicas
                    </label>
                    <textarea name="competencias_especificas" class="form-control" id="competencias-especificas" placeholder="Describa las competencias específicas a desarrollar" required></textarea>
                </div>
                <div class="col-md-6 form-group mb-3">
                    <label for="resultados-aprendizaje" class="form-label">
                        <i class="fas fa-chart-line"></i> Resultados de aprendizaje
                    </label>
                    <textarea name="resultados_aprendizaje" class="form-control" id="resultados-aprendizaje" placeholder="Describa los resultados de aprendizaje relacionados" required></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 form-group mb-3">
                    <label for="conocimientos-previos" class="form-label">
                        <i class="fas fa-brain"></i> Competencias y conocimientos previos requeridos
                    </label>
                    <textarea name="conocimientos_previos" class="form-control" id="conocimientos-previos" placeholder="Describa las competencias y conocimientos previos requeridos" required></textarea>
                </div>
                <div class="col-md-6 form-group mb-3">
                    <label for="estrategia-evaluacion" class="form-label">
                        <i class="fas fa-clipboard-check"></i> Estrategia de evaluación de saberes previos
                    </label>
                    <textarea name="estrategia_evaluacion" class="form-control" id="estrategia-evaluacion" placeholder="Describa la estrategia de evaluación de saberes previos" required></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 form-group mb-3">
                    <label for="ejes-tematicos" class="form-label">
                        <i class="fas fa-book-open"></i> Ejes temáticos
                    </label>
                    <textarea name="ejes_tematicos" class="form-control" id="ejes-tematicos" placeholder="Describa los ejes temáticos" required></textarea>
                </div>
                <div class="col-md-8 form-group mb-3">
                    <label for="contenidos-subcontenidos" class="form-label">
                        <i class="fas fa-list-ul"></i> Contenidos y subcontenidos
                    </label>
                    <textarea name="contenidos_subcontenidos" class="form-control" id="contenidos-subcontenidos" placeholder="Describa los contenidos y subcontenidos" required></textarea>
                </div>
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
