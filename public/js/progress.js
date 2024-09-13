document.addEventListener('DOMContentLoaded', (event) => {
    // Crear una barra de progreso
    var bar = new ProgressBar.Line('#progressBar', {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#4caf50',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
    });

    // Función para actualizar la barra de progreso
    function updateProgressBar(percentage) {
        bar.animate(percentage / 100);  // Número entre 0.0 y 1.0
    }

    // Ejemplo de cómo usar la función (puedes eliminar este ejemplo en producción)
    updateProgressBar(50);
});
