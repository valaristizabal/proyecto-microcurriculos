<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Seleccionar Formato - Universidad La Gran Colombia</title>
    <link rel="icon" href="https://www.ugc.edu.co/bogota/templates/yootheme/cache/41/escudo-41a28286.png" type="image/png">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!-- FontAwesome para los íconos -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head><body class="bg-light d-flex align-items-center justify-content-center" style="height: 100vh; position: relative;">

    <!-- Contenedor de la imagen de fondo con desenfoque y degradado oscuro -->
    <div style="position: absolute; 
                top: 0; 
                left: 0; 
                width: 100%; 
                height: 100%; 
                background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://www.postgradoutp.edu.pe/blog/wp-content/uploads/2018/10/4-1-770x515-1.webp'); 
                background-size: cover; 
                background-position: center; 
                background-repeat: no-repeat; 
                background-attachment: fixed; 
                filter: blur(3px); 
                z-index: 1;">
    </div>
    <!-- Contenido principal -->
    <div class="card shadow-lg border-0" style="max-width: 600px; border-radius: 20px; z-index: 2; position: relative;">
        <div class="card-header text-center bg-dark text-white" style="border-top-left-radius: 20px; border-top-right-radius: 20px; font-size: 1.75rem; font-weight: bold;">
            Universidad La Gran Colombia Seccional Armenia
        </div>

        <div class="card-body text-center" style="background-color: #f8f9fa;">
            <h4 style="font-weight: 600; color: #333;">Seleccione el tipo de acción que desea realizar</h4> <br>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <a href="{{ url('/dashboard') }}" class="btn btn-lg btn-block text-white" style="background-color: #28a745; border-radius: 10px; font-size: 1.25rem;">
                        <i class="fas fa-file-alt mr-2"></i> Microcurrículo
                    </a>
                    <p class="text-muted mt-2">
                        Gestione los microcurrículos de los cursos.
                    </p>
                </div>
                <div class="col-md-6 mb-3">
                    <a href="{{ url('/dashboard-plan-aprendizaje') }}" class="btn btn-lg btn-block text-white" style="background-color: #6c757d; border-radius: 10px; font-size: 1.25rem;">
                        <i class="fas fa-book mr-2"></i> Plan de Aprendizaje
                    </a>
                    <p class="text-muted mt-2">
                        Organice y estructure los planes de aprendizaje.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!-- Bootstrap JS y dependencias -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <!-- FontAwesome -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.min.js"></script>
</body>
</html>

