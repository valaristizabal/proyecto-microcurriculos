function showMecanismosEvaluacion() {
    const content = `
    <div class="container mt-4">
        <h2 class="h4 mb-4">
            <i class="fas fa-check-square"></i> MECANISMOS E INSTRUMENTOS DE EVALUACIÓN
        </h2>
        <form id="mecanismos-evaluacion-form" method="POST" action="/mecanismos-evaluacion">
            
            <div class="form-group mb-3">
                <label for="competencias-esperadas" class="form-label">
                    <i class="fas fa-tasks"></i> Competencias esperadas (específicas y genéricas)
                </label>
                <textarea name="competencias_esperadas" class="form-control" id="competencias-esperadas" placeholder="Describe las competencias específicas y genéricas esperadas" required></textarea>
            </div>

            <div class="form-group mb-3">
                <label for="resultados-aprendizaje" class="form-label">
                    <i class="fas fa-graduation-cap"></i> Resultados de Aprendizaje
                </label>
                <textarea name="resultados_aprendizaje" class="form-control" id="resultados-aprendizaje" placeholder="Describe los resultados de aprendizaje" required></textarea>
            </div>

            <div class="form-group mb-3">
                <label for="mecanismo-evaluacion" class="form-label">
                    <i class="fas fa-clipboard-list"></i> Mecanismo de evaluación del Resultado de Aprendizaje
                </label>
                <textarea name="mecanismo_evaluacion" class="form-control" id="mecanismo-evaluacion" placeholder="Describe el mecanismo de evaluación" required></textarea>
            </div>

            <div class="form-group mb-3">
                <label for="instrumento-evaluacion" class="form-label">
                    <i class="fas fa-pencil-alt"></i> Instrumento de evaluación del Resultado de Aprendizaje
                </label>
                <textarea name="instrumento_evaluacion" class="form-control" id="instrumento-evaluacion" placeholder="Describe el instrumento de evaluación" required></textarea>
            </div>

            <div class="form-group mb-3">
                <label for="fecha-evaluacion" class="form-label">
                    <i class="fas fa-calendar-alt"></i> Fecha de la evaluación
                </label>
                <input type="date" name="fecha_evaluacion" class="form-control" id="fecha-evaluacion" required>
            </div>

            <div class="form-group mb-3">
                <label for="tiempo-destinado" class="form-label">
                    <i class="fas fa-hourglass-half"></i> Tiempo destinado para la evaluación
                </label>
                <input type="text" name="tiempo_destinado" class="form-control" id="tiempo-destinado" placeholder="Semanas / horas" required>
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
