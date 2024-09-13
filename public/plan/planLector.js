function showPlanLector() {
    const content = `
    <div class="container mt-4">
        <h2 class="h4 mb-4">
            <i class="fas fa-book-reader"></i> PLAN LECTOR ADSCRITO AL MAPA BIBLIOGRÁFICO
        </h2>
        <form id="plan-lector-form" method="POST" action="/plan-lector">
            
            <div class="form-group mb-3">
                <label for="textos-mapa-bibliografico" class="form-label">
                    <i class="fas fa-book"></i> Textos del Mapa Bibliográfico
                </label>
                <textarea name="textos_mapa_bibliografico" class="form-control" id="textos-mapa-bibliografico" placeholder="Describe los textos del mapa bibliográfico" required></textarea>
            </div>

            <div class="form-group mb-3">
                <label for="estrategias-lectura" class="form-label">
                    <i class="fas fa-lightbulb"></i> Estrategias de Lectura
                </label>
                <textarea name="estrategias_lectura" class="form-control" id="estrategias-lectura" placeholder="Describe las estrategias de lectura" required></textarea>
            </div>

            <div class="form-group mb-3">
                <label for="estrategias-evaluacion-lectura" class="form-label">
                    <i class="fas fa-clipboard-check"></i> Estrategias de Evaluación de Lectura
                </label>
                <textarea name="estrategias_evaluacion_lectura" class="form-control" id="estrategias-evaluacion-lectura" placeholder="Describe las estrategias de evaluación de lectura" required></textarea>
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
