<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" href="https://www.ugc.edu.co/bogota/templates/yootheme/cache/41/escudo-41a28286.png" type="image/png">
    <title>Dashboard - Microcurrículo</title>
    <!-- AdminLTE CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.1.0/css/adminlte.min.css">
    <!-- FontAwesome para los íconos -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=swap">
    <link rel="stylesheet" href="{{ asset('css/dashboard.css') }}">
    <link rel="stylesheet" href="{{ asset('css/botones.css') }}">
    <link rel="stylesheet" href="{{ asset('css/formulario.css') }}">

    <!-- sweetalert2 -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
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
                        <li class="user-header" style="background-color: #28a745;">
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
                <span class="brand-text font-weight-light">Microcurriculo</span>
            </a>

            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Sidebar user panel (optional) -->

                <!-- Sidebar Menu -->
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                        <li class="nav-item">
                            <a href="#" class="nav-link" data-section="identificacion" onclick="showIdentification()">
                                <i class="nav-icon fas fa-id-badge"></i>
                                <p>Identificación</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-section="propositos-formativos" onclick="showEducationalPurposes()">
                                <i class="nav-icon fas fa-bullseye"></i>
                                <p>Propósitos Formativos</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-section="competencias-especificas-curso" onclick="showCompetenciasEspecificas()">
                                <i class="nav-icon fas fa-tasks"></i>
                                <p>Competencias Específicas del Curso</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-section="competencias-genericas-transversales" onclick="showGenericCompetencies()">
                                <i class="nav-icon fas fa-lightbulb"></i>
                                <p>Competencias Genéricas Transversales</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-section="consistencia-curricular" onclick="showConsistencyCurricular()">
                                <i class="nav-icon fas fa-book"></i>
                                <p>Consistencia Curricular</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-section="aportes-curso-proyecto-integrador" onclick="showCourseContributions()">
                                <i class="nav-icon fas fa-project-diagram"></i>
                                <p>Aportes del Curso al Proyecto Integrador</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-section="plan-tematico" onclick="showThematicPlan()">
                                <i class="nav-icon fas fa-list-alt"></i>
                                <p>Plan Temático</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-section="medios-educativos" onclick="showEducationalMedia()">
                                <i class="nav-icon fas fa-chalkboard-teacher"></i>
                                <p>Medios Educativos</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-section="material-apoyo" onclick="showSupportMaterials()">
                                <i class="nav-icon fas fa-book-open"></i>
                                <p>Material de Apoyo</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-section="plan-lector" onclick="showReadingPlan()">
                                <i class="nav-icon fas fa-book-reader"></i>
                                <p>Plan Lector</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-section="mecanismos-evaluacion" onclick="showEvaluationMechanisms()">
                                <i class="nav-icon fas fa-clipboard-check"></i>
                                <p>Mecanismos de Evaluación</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-section="instrumentos-evaluacion" onclick="showEvaluationInstruments()">
                                <i class="nav-icon fas fa-poll-h"></i>
                                <p>Instrumentos de Evaluación</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-section="perfil-docente" onclick="showTeacherProfile()" data-action="teacher-profile">
                                <i class="nav-icon fas fa-user-tie"></i>
                                <p>Perfil del Docente</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link historial-link" onclick="showManageIdentification()">
                                <i class="nav-icon fas fa-history"></i>
                                <p>Historial</p>
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
                            <h1 class="m-0">Microcurrículo</h1>
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
                                <div id="progress-bar" class="progress-bar" role="progressbar" style="width: 0%; background-color: #4CAF50 !important;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
                            </div>

                            <!-- Sección de bienvenida -->
                            <section id="content-section">
                                <div class="welcome-section">
                                    <h2 class="h4">Bienvenido al Dashboard de Microcurrículo</h2>
                                    <p>En esta sección, puedes gestionar y revisar todos los aspectos relacionados con el microcurrículo. Explora las secciones a continuación para obtener una visión general y acceder a las herramientas más importantes.</p>
                                </div>

                                {{-- <!-- Panel de estadísticas -->
                                <div class="statistics-section mt-4">
                                    <h3 class="h5">Estadísticas Rápidas</h3>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="card text-white bg-success mb-3">
                                                <div class="card-body">
                                                    <h5 class="card-title">Microcurrículos Completados</h5>
                                                    <p class="card-text">-/- Completados</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="card text-white bg-info mb-3">
                                                <div class="card-body">
                                                    <h5 class="card-title">Microcurrículos en Progreso</h5>
                                                    <p class="card-text">Progreso</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="card text-white bg-warning mb-3">
                                                <div class="card-body">
                                                    <h5 class="card-title">Pendientes de Revisión</h5>
                                                    <p class="card-text"> Pendientes</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> --}}
                                <!-- Sección de tareas pendientes -->
                                {{-- <div class="tasks-section mt-4">
                                    <h3 class="h5">Tareas Pendientes</h3>
                                    <ul class="list-group">
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            Revisar microcurrículo de Derecho
                                            <span class="badge badge-primary badge-pill">Pendiente</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            Completar microcurrículo de Historia
                                            <span class="badge badge-warning badge-pill">En Progreso</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            Enviar feedback para microcurrículo de Ciencias
                                            <span class="badge badge-success badge-pill">Completado</span>
                                        </li>
                                    </ul>
                                </div> --}}

                                {{-- <div class="quick-links-section mt-4">
                                    <h3 class="h5">Enlaces Rápidos</h3>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <a href="#" class="btn btn-outline-primary btn-block" onclick="showIdentification()">Crear Nuevo Microcurrículo</a>
                                        </div>
                                        <div class="col-md-4">
                                            <a href="#" class="btn btn-outline-secondary btn-block">Revisar Microcurrículos</a>
                                        </div>
                                        <div class="col-md-4">
                                            <a href="#" class="btn btn-outline-success btn-block">Estadísticas Generales</a>
                                        </div>
                                    </div>
                                </div> --}}


                            </section>
                        </div>

                        <!-- Columna de ayuda -->
                        <div class="col-md-4 d-none d-md-block">
                            <div class="help-section">
                                <h5><i class="fas fa-info-circle"></i> Ayuda</h5>
                                <p>Selecciona una sección para ver la ayuda correspondiente.</p>
                                <div class="help-content mt-3">
                                    <p><strong>¿Cómo comenzar?</strong></p>
                                    <p>Para empezar, selecciona una sección del menú lateral para gestionar el microcurrículo. Usa los enlaces rápidos para realizar acciones frecuentes.</p>
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
    <script src="js/helpContent.js"></script>
    <script src="js/PerfilUsuario.js"></script>
    <script src="js/identificacion.js"></script>
    <script src="js/Visualizar.js"></script>
    <script src="js/tipoCredito.js"></script>
    <script src="js/PropositosFormativos.js"></script>
    <script src="js/CompetenciasEspecificas.js"></script>
    <script src="js/CompetenciasGenericas.js"></script>
    <script src="js/ConsistenciaCurricular.js"></script>
    <script src="js/ProyectoIntegrador.js"></script>
    <script src="js/PlanTematico.js"></script>
    <script src="js/MediosEducativos.js"></script>
    <script src="js/MaterialDeApoyo.js"></script>
    <script src="js/PlanLector.js"></script>
    <script src="js/MecanismosDeEvaluacion.js"></script>
    <script src="js/InstrumentosDeEvaluacion.js"></script>
    <script src="js/PerfilDocente.js"></script>
    <script src="js/dashboard.js"></script>
    <!-- ayuda dinamica -->
    <script src="js/searchFilter.js"></script>

    <script>
        document.getElementById('brand-link').addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento por defecto del enlace
            location.reload(); // Recarga la página
        });
    </script>
</body>

</html>