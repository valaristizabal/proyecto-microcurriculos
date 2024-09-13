function showDocenteInfo() {
    const currentDate = new Date().toISOString().split("T")[0];
    const content = `
    <div class="container mt-4">
        <h2 class="h4 mb-4">
            <i class="fas fa-user-tie"></i> Información del docente
        </h2>
        <form id="docente-form" method="POST" action="/informacion-docente">
            <div class="row">
                <div class="col-md-6 form-group mb-3">
                    <label for="nombre-completo" class="form-label">
                        <i class="fas fa-user"></i> Nombre completo
                    </label>
                    <input type="text" name="nombre_completo" class="form-control" id="nombre-completo" placeholder="Nombre completo del docente" required>
                </div>
                <div class="col-md-6 form-group mb-3">
                    <label for="telefono" class="form-label">
                        <i class="fas fa-phone"></i> Teléfono o WhatsApp
                    </label>
                    <input type="tel" name="telefono" class="form-control" id="telefono" placeholder="Teléfono o WhatsApp" required>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 form-group mb-3">
                    <label for="email" class="form-label">
                        <i class="fas fa-envelope"></i> E-mail
                    </label>
                    <input type="email" name="email" class="form-control" id="email" placeholder="Correo electrónico" required>
                </div>
                <div class="col-md-6 form-group mb-3">
                    <label for="formacion-academica" class="form-label">
                        <i class="fas fa-graduation-cap"></i> Formación académica
                    </label>
                    <textarea name="formacion_academica" class="form-control" id="formacion-academica" placeholder="Formación académica" required></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 form-group mb-3">
                    <label for="fecha-ultima-actualizacion" class="form-label">
                        <i class="fas fa-sync-alt"></i> Fecha de la última actualización
                    </label>
                    <input type="date" name="fecha_ultima_actualizacion" class="form-control" id="fecha-ultima-actualizacion" required>
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
