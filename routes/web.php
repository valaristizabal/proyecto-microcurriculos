<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\CursoController;
use App\Http\Controllers\FacultadController;
use App\Http\Controllers\MicrocurriculosController;
use App\Http\Controllers\ProgramaController;

// Ruta predeterminada para la página de inicio de sesión
Route::view('/', 'auth.login')->name('login');

Route::get('auth/google', [LoginController::class, 'redirectToGoogle'])->name('auth.google');
Route::get('google/callback', [LoginController::class, 'handleGoogleCallback']);

// Rutas adicionales
Route::get('/select-format', function () {
    return view('select-format');
})->name('select-format');

Route::get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');

Route::get('/dashboard-plan-aprendizaje', function () {
    return view('dashboard-plan-aprendizaje');
})->name('dashboard-plan-aprendizaje');

Route::get('/facultad', function () {
    return view('facultad');
})->name('facultad');

Route::get('/identificacion', function () {
    return view('identificacion');
})->name('identificacion');

// Ruta para la vista "programa"
Route::get('/programa', function () {
    return view('programa');
})->name('programa');

Route::get('/curso', function () {
    return view('curso');
})->name('curso');

Route::get('/select-format-user', function () {
    return view('select-format-user');
})->name('select-format-user');


// para gestionar facultades
Route::post('/gestion-facultades/guardar', [FacultadController::class, 'guardarFacultad']);
Route::get('/gestion-facultades', [FacultadController::class, 'showFacultades']);
Route::delete('/gestion-facultades/eliminar/{cod_facultad}', [FacultadController::class, 'eliminarFacultades']);
Route::get('/get-facultad/{codFacultad}', [FacultadController::class, 'getFacultad']);
Route::post('/actualizar-facultad', [FacultadController::class, 'updateFacultad']);

//para gestionar programas

Route::get('/gestion-programas', [ProgramaController::class, 'showProgramas']);

// para mostrar sección con la info de las tablas
Route::get('/facultades', [FacultadController::class, 'showFacultades'])->name('facultades');
Route::get('/programas', [ProgramaController::class, 'showProgramas'])->name('programas');
Route::get('/get-programa/{codPrograma}', [ProgramaController::class, 'getPrograma']);
Route::post('/guardar-programa', [ProgramaController::class, 'guardarPrograma']);
Route::post('/actualizar-programa', [ProgramaController::class, 'updatePrograma']);
Route::delete('/gestion-programa/eliminar/{cod_programa}', [ProgramaController::class, 'eliminarPrograma']);

Route::get('/gestion-cursos', [CursoController::class, 'showCursos']);
Route::post('/gestion-cursos/guardar', [CursoController::class, 'guardarCurso']);

Route::post('/guardar-microcurriculo', [MicrocurriculosController::class, 'guardarMicrocurriculo']);