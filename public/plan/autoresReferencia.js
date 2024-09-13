function showAutoresYTextosDeReferencia() {
    const content = `
    <div class="container mt-4">
        <h2 class="h4 mb-4">
            <i class="fas fa-book-reader"></i> autores y textos de referencia
        </h2>
        <form id="autores-textos-referencia-form" method="POST" action="/autores-textos-referencia">
            <div class="form-group mb-3">
                <label for="otros-textos-referencia" class="form-label">
                    <i class="fas fa-book"></i> otros textos de referencia
                </label>
                <textarea name="otros_textos_referencia" class="form-control" id="otros-textos-referencia" placeholder="Describe otros textos de referencia" required></textarea>
            </div>
            <div class="form-group mb-3">
                <label for="recursos-red" class="form-label">
                    <i class="fas fa-globe"></i> recursos en red / otros
                </label>
                <textarea name="recursos_red" class="form-control" id="recursos-red" placeholder="Recursos en línea o adicionales" required></textarea>
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
}
