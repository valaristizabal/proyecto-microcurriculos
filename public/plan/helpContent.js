// Contenido de ayuda
const helpContent = {
    'identificacion1': `
        <h5><i class="fas fa-info-circle"></i> Ayuda: Identificación</h5>
        <p>Encuentra información útil sobre cómo llenar la sección de Identificación:</p>
        <div class="help-item"><i class="fas fa-tag"></i>
        <p><strong>Código:</strong> El código se compone de tres partes:</p>
        <ul>
            <li>Seccional: Selecciona la ubicación (ej. "ARM", "BOG", "MED").</li>
            <!-- Añadir más detalles -->
        </ul>
    `,
    // Agregar más secciones de ayuda aquí...
};

// Función para actualizar el contenido de ayuda
function updateHelpContent(section) {
    const helpSection = document.querySelector('.help-section');
    helpSection.innerHTML = helpContent[section] || '<h5><i class="fas fa-info-circle"></i> Ayuda</h5><p>No hay información de ayuda disponible para esta sección.</p>';
}

// Agregar el evento click a los enlaces del menú lateral
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const section = this.getAttribute('data-section');
        updateHelpContent(section);
    });
});
