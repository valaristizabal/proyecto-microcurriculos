function showSupportMaterials() {
    const content = `
    <div class="container mt-4">
        <h2 class="h4 mb-4">
            <i class="fas fa-chalkboard-teacher"></i> plan de clase
        </h2>
        <form id="plan-de-clase-form" method="POST" action="/plan-de-clase">
            
            <div class="form-group mb-3">
                <label for="ejes-tematicos" class="form-label">
                    <i class="fas fa-project-diagram"></i> ejes temáticos
                </label>
                <textarea name="ejes_tematicos" class="form-control" id="ejes-tematicos" placeholder="Describe los ejes temáticos" required></textarea>
            </div>

            <div class="form-group mb-3">
                <label for="contenidos-subcontenidos" class="form-label">
                    <i class="fas fa-list"></i> contenidos y subcontenidos
                </label>
                <textarea name="contenidos_subcontenidos" class="form-control" id="contenidos-subcontenidos" placeholder="Describe los contenidos y subcontenidos" required></textarea>
            </div>

            <div class="form-group mb-3">
                <label for="tiempo-destinado" class="form-label">
                    <i class="fas fa-clock"></i> tiempo destinado para el desarrollo (semanas / horas)
                </label>
                <input type="text" name="tiempo_destinado" class="form-control" id="tiempo-destinado" placeholder="Semanas / Horas" required>
            </div>

            <div class="form-group mb-3">
                <label for="estrategias-formativas" class="form-label">
                    <i class="fas fa-chalkboard"></i> estrategias formativas
                </label>
                <textarea name="estrategias_formativas" class="form-control" id="estrategias-formativas" placeholder="Describe las estrategias formativas" required></textarea>
            </div>

            <div class="form-group mb-3">
                <label for="medios-educativos" class="form-label">
                    <i class="fas fa-flask"></i> medios educativos requeridos (laboratorios, software, salidas de campo, auditorio, otros)
                </label>
                <textarea name="medios_educativos" class="form-control" id="medios-educativos" placeholder="Describe los medios educativos requeridos" required></textarea>
            </div>

            <div class="form-group mb-3">
                <label for="recursos-fisicos-digitales" class="form-label">
                    <i class="fas fa-laptop"></i> recursos físicos/digitales que utilizará
                </label>
                <textarea name="recursos_fisicos_digitales" class="form-control" id="recursos-fisicos-digitales" placeholder="Describe los recursos físicos/digitales que utilizará" required></textarea>
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
