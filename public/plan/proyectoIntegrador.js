function showProyectoIntegrador() {
    const content = `
    <div class="container mt-4">
        <h2 class="h4 mb-4">
            <i class="fas fa-project-diagram"></i> proyecto integrador
        </h2>
        <form id="proyecto-integrador-form" method="POST" action="/proyecto-integrador">
            <div class="form-group mb-3">
                <label for="estrategias-proyecto-integrador" class="form-label">
                    <i class="fas fa-tools"></i> estrategias para la construcción del proyecto integrador
                </label>
                <textarea name="estrategias_proyecto_integrador" class="form-control" id="estrategias-proyecto-integrador" placeholder="Describe las estrategias para la construcción del proyecto integrador" required></textarea>
            </div>

            <div class="form-group mb-3">
                <label for="tiempo-destinado" class="form-label">
                    <i class="fas fa-clock"></i> tiempo destinado para el desarrollo (semanas / horas)
                </label>
                <input type="text" name="tiempo_destinado" class="form-control" id="tiempo-destinado" placeholder="Semanas / Horas" required>
            </div>

            <div class="form-group mb-3">
                <label for="estrategias-evaluativas" class="form-label">
                    <i class="fas fa-tasks"></i> estrategias evaluativas
                </label>
                <textarea name="estrategias_evaluativas" class="form-control" id="estrategias-evaluativas" placeholder="Describe las estrategias evaluativas" required></textarea>
            </div>

            <div class="form-group text-right mt-4">
                <button type="button" class="btn btn-secondary" onclick="goBack()"><i class="fas fa-arrow-left"></i> volver</button>
                <button type="submit" class="btn btn-primary"><i class="fas fa-save"></i> guardar</button>
            </div>
        </form>
    </div>
    `;

    // Actualizar el contenido del elemento con ID 'content-section'
    document.getElementById("content-section").innerHTML = content;

    // Aquí puedes agregar lógica adicional si es necesario
    // Por ejemplo, inicializar plugins, validaciones adicionales, etc.
}
