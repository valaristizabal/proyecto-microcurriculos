function showEducationalMedia() {
    const content = `
    <div class="container mt-4">
        <h2 class="h4 mb-4">
            <i class="fas fa-tasks"></i> Competencias genéricas
        </h2>
        <form id="competencias-genericas-form" method="POST" action="/competencias-genericas">
            <div class="form-group mb-3">
                <label for="competencias-genericas" class="form-label">
                    <i class="fas fa-clipboard-check"></i> Competencias genéricas
                </label>
                <textarea name="competencias_genericas" class="form-control" id="competencias-genericas" placeholder="Describe las competencias genéricas" required></textarea>
            </div>
            <div class="form-group mb-3">
                <label for="resultados-competencias-genericas" class="form-label">
                    <i class="fas fa-chart-line"></i> Resultados de aprendizaje asociados a las competencias genéricas
                </label>
                <textarea name="resultados_competencias_genericas" class="form-control" id="resultados-competencias-genericas" placeholder="Describe los resultados de aprendizaje asociados" required></textarea>
            </div>
            <div class="form-group mb-3">
                <label for="ejes-tematicos-competencias-genericas" class="form-label">
                    <i class="fas fa-book-open"></i> Ejes temáticos y contenidos que apoyarán el desarrollo de competencias genéricas
                </label>
                <textarea name="ejes_tematicos_competencias_genericas" class="form-control" id="ejes-tematicos-competencias-genericas" placeholder="Describe los ejes temáticos y contenidos" required></textarea>
            </div>
            
            <!-- Competencias específicas -->
            <div class="form-group mb-3">
                <label for="competencia-escrita" class="form-label">
                    <i class="fas fa-pen-alt"></i> Escrita
                </label>
                <textarea name="competencia_escrita" class="form-control" id="competencia-escrita" placeholder="Describe la competencia escrita" required></textarea>
            </div>
            
            <div class="form-group mb-3">
                <label for="lectura-critica" class="form-label">
                    <i class="fas fa-book-reader"></i> Lectura crítica
                </label>
                <textarea name="lectura_critica" class="form-control" id="lectura-critica" placeholder="Describe la competencia de lectura crítica" required></textarea>
            </div>
            
            <div class="form-group mb-3">
                <label for="razonamiento-cuantitativo" class="form-label">
                    <i class="fas fa-calculator"></i> Razonamiento cuantitativo
                </label>
                <textarea name="razonamiento_cuantitativo" class="form-control" id="razonamiento-cuantitativo" placeholder="Describe la competencia de razonamiento cuantitativo" required></textarea>
            </div>
            
            <div class="form-group mb-3">
                <label for="competencias-ciudadanas" class="form-label">
                    <i class="fas fa-users"></i> Competencias ciudadanas
                </label>
                <textarea name="competencias_ciudadanas" class="form-control" id="competencias-ciudadanas" placeholder="Describe las competencias ciudadanas" required></textarea>
            </div>

            <div class="form-group mb-3">
                <label for="ingles" class="form-label">
                    <i class="fas fa-globe"></i> Inglés
                </label>
                <textarea name="ingles" class="form-control" id="ingles" placeholder="Describe las competencias de inglés" required></textarea>
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
    // Por ejemplo, inicializar plugins, validaciones adicionales, etc.
}
