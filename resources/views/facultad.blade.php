<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Facultades</title>
    <link rel="icon" href="https://www.ugc.edu.co/bogota/templates/yootheme/cache/41/escudo-41a28286.png" type="image/png">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!-- FontAwesome para los íconos -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=swap">
    <!-- Incluir SweetAlert desde un CDN -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <link rel="stylesheet" href="{{ asset('css/botones.css') }}">
    <link rel="stylesheet" href="{{ asset('css/formulario.css') }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body>
    <div class="container mt-4">
        <h2>Facultades</h2>
        <button type="button" class="btn btn-success btn-guardar-facultad" onclick="mostrarOcultarFormulario()">Agregar nueva facultad</button>
        <button type="button" class="btn btn-secondary" onclick="window.location.href='/select-format'">Volver al panel de control</button>
        <br>
        <div id="form-section" style="display: none;">
            <!-- guardar de facultades -->
        </div>
        
        <br>
        <div id="content-section">
            <!-- contenido de facultades -->
        </div>

    </div>
    <script src="js/facultades.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            showFacultades();
        });
    </script>
</body>
</html>
