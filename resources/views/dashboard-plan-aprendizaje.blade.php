<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" href="https://www.ugc.edu.co/bogota/templates/yootheme/cache/41/escudo-41a28286.png" type="image/png">
    <title>Dashboard - Plan de Aprendizaje</title>
    <!-- AdminLTE CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.1.0/css/adminlte.min.css">
    <!-- FontAwesome para los íconos -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=swap">
    <link rel="stylesheet" href="{{ asset('css/plan.css') }}">
    <link rel="stylesheet" href="{{ asset('css/botonesaprendizaje.css') }}">
    <link rel="stylesheet" href="{{ asset('css/formulario.css') }}">

    <!-- sweetalert -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"></script>
</head>

<body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
        <!-- Navbar -->
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <!-- Left navbar links -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                </li>
            </ul>
            <!-- Botón de Volver -->
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-12 text-right">
                        <a href="{{ route('select-format') }}" class="btn btn-secondary" style="padding: 2px 10px; font-size: 1rem;">
                            <i class="fas fa-tachometer-alt"></i> Panel de Control
                        </a>
                    </div>
                </div>
            </div>
            


            <!-- Right navbar links -->
            <ul class="navbar-nav ml-auto">
                <!-- Sección de perfil -->
                <li class="nav-item dropdown user-menu">
                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
                        <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" class="user-image img-circle elevation-2" alt="User Image">
                        <span class="d-none d-md-inline">Maicol García</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <!-- Cambiar color de fondo a verde -->
                        <li class="user-header" style="background-color: #323533; color: white">
                            <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" class="img-circle elevation-2" alt="User Image">
                            <p>
                                Maicol García - Web Developer
                                <small>Miembro desde Nov. 2023</small>
                            </p>
                        </li>
                        <!-- Menu Footer-->
                        <li class="user-footer">
                            <a href="{{ route('login') }}" class="btn btn-default btn-flat float-right">Cerrar sesión</a>
                        </li>
                    </ul>
                </li>

                <li class="nav-item">
                    <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                        <i class="fas fa-expand-arrows-alt"></i>
                    </a>
                </li>
            </ul>
        </nav>




        <!-- /.navbar -->

        <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <!-- Brand Logo -->
            <a href="#" id="brand-link" class="brand-link">
                <img src="https://cdn-icons-png.flaticon.com/128/942/942799.png" alt="Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
                <span class="brand-text font-weight-light">Plan de Aprendizaje</span>
            </a>

            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Sidebar user panel (optional) -->

                <!-- Sidebar Menu -->
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                        <li class="nav-item">
                            <a href="#" class="nav-link" data-section="identificacion1" onclick="showIdentification()">
                                <i class="nav-icon fas fa-id-badge"></i>
                                <p>Identificacion del Curso</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-section="informacion-docente" onclick="showDocenteInfo()">
                                <i class="nav-icon fas fa-lightbulb"></i>
                                <p>Informacion del Docente</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-section="importancia-estrategica" onclick="showConsistencyCurricular()">
                                <i class="nav-icon fas fa-book"></i>
                                <p>Importancia Estrategica y Competencia Principal</p>
                            </a>
                        </li>

                        <!-- se han unido las dos secciones importancia estrategica y competencia principal por lo tanto esta seccion sobra -->
                        <!-- <li class="nav-item">
                            <a href="#" class="nav-link" data-section="aportes-curso-proyecto-integrador" onclick="showCourseContributions()">
                                <i class="nav-icon fas fa-project-diagram"></i>
                                <p>Competencia Principal</p>
                            </a>
                        </li> -->


                        <li class="nav-item">
                            <a href="#" class="nav-link" data-section="competencias-especificas" onclick="showThematicPlan()">
                                <i class="nav-icon fas fa-list-alt"></i>
                                <p>Competencias Especificas</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-section="competencias-genericas" onclick="showEducationalMedia()">
                                <i class="nav-icon fas fa-chalkboard-teacher"></i>
                                <p>Competencias Genericas</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-section="plan-clase" onclick="showSupportMaterials()">
                                <i class="nav-icon fas fa-book-open"></i>
                                <p>Plan de Clase</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-section="proyecto-integrador" onclick="showProyectoIntegrador()">
                                <i class="nav-icon fas fa-book-reader"></i>
                                <p>Proyecto Integrador</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-section="evalucacion-resultados" onclick="showMecanismosEvaluacion()">
                                <i class="nav-icon fas fa-clipboard-check"></i>
                                <p> Evaluación de Resultados</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-section="rubrica-evaluacion" onclick="showRubricaEvaluacion()">
                                <i class="nav-icon fas fa-poll-h"></i>
                                <p>Rubrica de Evaluación</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-section="plan-lector" onclick="showPlanLector()">
                                <i class="nav-icon fas fa-user-tie"></i>
                                <p>Plan Lector</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link"  data-section="autores-textos" onclick="showAutoresYTextosDeReferencia()">
                                <i class="nav-icon fas fa-history"></i>
                                <p>Autores y Textos</p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
        <!-- Contenido principal -->
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Plan de Aprendizaje</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-8">
                            <!-- Sección de progreso -->
                            <div class="progress" style="height: 30px; margin: 20px;">
                                <div id="progress-bar" class="progress-bar" role="progressbar" style="width: 0%; background-color: #181e18 !important;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
                            </div>

                            <!-- Sección de bienvenida -->
                            <section id="content-section">
                                <div class="welcome-section">
                                    <h2 class="h4">Bienvenido al Dashboard de Plan de Aprendizaje</h2>
                                    <p>En esta sección, puedes gestionar y revisar todos los aspectos relacionados con el microcurrículo. Explora las secciones a continuación para obtener una visión general y acceder a las herramientas más importantes.</p>
                                </div>


                            </section>
                        </div>

                        <!-- Columna de ayuda -->
                        <div class="col-md-4 d-none d-md-block">
                            <div class="help-section">
                                <h5><i class="fas fa-info-circle"></i> Ayuda</h5>
                                <p>Selecciona una sección para ver la ayuda correspondiente.</p>
                                <div class="help-content mt-3">
                                    <p><strong>¿Cómo comenzar?</strong></p>
                                    <p>Para empezar, selecciona una sección del menú lateral para gestionar el plan de aprendizaje. Usa los enlaces rápidos para realizar acciones frecuentes.</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <!-- Bootstrap 4 -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js"></script>
    <!-- AdminLTE App -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.1.0/js/adminlte.min.js"></script>
    <!-- Archivo JS personalizado -->
    <script src="plan/identificacionCurso.js"></script>
    <script src="plan/informacionDocente.js"></script>
    <script src="plan/competenciasEspecificas.js"></script>
    <script src="plan/importanciaEstrategica.js"></script>
    <script src="plan/competenciasGenericas.js"></script>
    <script src="plan/planDeClase.js"></script>
    <script src="plan/proyectoIntegrador.js"></script>
    <script src="plan/evaluacionResultados.js"></script>
    <script src="plan/rubricaEvaluacion.js"></script>
    <script src="plan/planLector.js"></script>
    <script src="plan/autoresReferencia.js"></script>
<!-- ayuda dinamica -->
    <script src="plan/helpContent.js"></script>

    <script>
        document.getElementById('brand-link').addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento por defecto del enlace
            location.reload(); // Recarga la página
        });
    </script>
</body>

</html>