<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
    <link rel="icon" href="https://www.ugc.edu.co/bogota/templates/yootheme/cache/41/escudo-41a28286.png" type="image/png">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!-- Font Awesome CSS para los iconos -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body class="bg-light d-flex align-items-center justify-content-center" style="height: 100vh; background-image: url('/images/image6.png'); background-size: cover; background-position: center; background-repeat: no-repeat; background-attachment: fixed;">
    <div class="card shadow-lg" style="max-width: 400px; background-color: rgba(255, 255, 255, 0.9); border-radius: 20px;">
        <div class="card-header text-center bg-white border-0" style="border-top-left-radius: 20px; border-top-right-radius: 20px;">
            <img src="/images/logo.png" alt="Logo Universidad La Gran Colombia" style="max-height: 50px;">
        </div>
        <div class="card-body text-center">
            <p class="lead mb-4">Seleccione una opción para iniciar sesión</p>
            <!-- Botón para iniciar sesión con Google con icono de Google -->
            <a href="{{ route('auth.google') }}" class="btn btn-danger btn-lg btn-block mb-2">
                <i class="fab fa-google"></i> Iniciar sesión con Google
            </a>
            <!-- Botón para ingresar como Administrador con icono de usuario -->
            <a href="{{ route('select-format') }}" class="btn btn-primary btn-lg btn-block">
                <i class="fas fa-user-shield"></i> Ingresar como Administrador
            </a>
        </div>
    </div>
    <!-- Bootstrap JS y dependencias -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
