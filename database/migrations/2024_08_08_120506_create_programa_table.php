<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('programa', function (Blueprint $table) {
            $table->string('cod_programa')->primary();
            $table->string('nom_programa_academico');
            $table->string('cod_facultad')->nullable();
            $table->string('estado')->nullable();
            $table->string('tipo')->nullable();
            $table->timestamps();

            $table->foreign('cod_facultad')->references('cod_facultad')->on('facultad')->onDelete('set null');
        });

        DB::table('programa')->insert([
            ['cod_programa' => 'A111', 'nom_programa_academico' => 'DERECHO', 'cod_facultad' => 'A1', 'estado' => 'ACTIVO', 'tipo' => 'PREGRADO'],
            ['cod_programa' => 'A121', 'nom_programa_academico' => 'GOBIERNO Y RELACIONES INTERNACIONALES', 'cod_facultad' => 'A1', 'estado' => 'ACTIVO', 'tipo' => 'PREGRADO'],
            ['cod_programa' => 'A131', 'nom_programa_academico' => 'COMUNICACION SOCIAL Y PERIODISMO', 'cod_facultad' => 'A1', 'estado' => 'ACTIVO', 'tipo' => 'PREGRADO'],
            ['cod_programa' => 'A211', 'nom_programa_academico' => 'ECONOMIA', 'cod_facultad' => 'A2', 'estado' => 'INACTIVO', 'tipo' => 'PREGRADO'],
            ['cod_programa' => 'A213', 'nom_programa_academico' => 'ECONOMIA Y FINANZAS INTERNACIONALES', 'cod_facultad' => 'A2', 'estado' => 'ACTIVO', 'tipo' => 'PREGRADO'],
            ['cod_programa' => 'A221', 'nom_programa_academico' => 'ADMINISTRACION DE EMPRESAS', 'cod_facultad' => 'A2', 'estado' => 'ACTIVO', 'tipo' => 'PREGRADO'],
            ['cod_programa' => 'A231', 'nom_programa_academico' => 'CONTADURIA PUBLICA', 'cod_facultad' => 'A2', 'estado' => 'ACTIVO', 'tipo' => 'PREGRADO'],
            ['cod_programa' => 'A241', 'nom_programa_academico' => 'PROFESIONAL EN LENGUAS EXTRANJERAS', 'cod_facultad' => 'A2', 'estado' => 'ACTIVO', 'tipo' => 'PREGRADO'],
            ['cod_programa' => 'A311', 'nom_programa_academico' => 'INGENIERIA AGROINDUSTRIAL', 'cod_facultad' => 'A3', 'estado' => 'ACTIVO', 'tipo' => 'PREGRADO'],
            ['cod_programa' => 'A341', 'nom_programa_academico' => 'INGENIERIA GEOGRAFICA Y AMBIENTAL', 'cod_facultad' => 'A3', 'estado' => 'ACTIVO', 'tipo' => 'PREGRADO'],
            ['cod_programa' => 'A351', 'nom_programa_academico' => 'INGENIERIA CIVIL', 'cod_facultad' => 'A3', 'estado' => 'ACTIVO', 'tipo' => 'PREGRADO'],
            ['cod_programa' => 'A411', 'nom_programa_academico' => 'ARQUITECTURA', 'cod_facultad' => 'A4', 'estado' => 'ACTIVO', 'tipo' => 'PREGRADO'],
            ['cod_programa' => 'A511', 'nom_programa_academico' => 'ETICO Y HUMANISTICO', 'cod_facultad' => null, 'estado' => null, 'tipo' => null],
            ['cod_programa' => 'A512', 'nom_programa_academico' => 'BIENESTAR', 'cod_facultad' => null, 'estado' => null, 'tipo' => null],
            ['cod_programa' => 'A521', 'nom_programa_academico' => 'MEDICINA VETERINARIA Y ZOOTECNIA', 'cod_facultad' => null, 'estado' => null, 'tipo' => null],
            ['cod_programa' => 'A611', 'nom_programa_academico' => 'DERECHO PUBLICO', 'cod_facultad' => null, 'estado' => null, 'tipo' => null],
            ['cod_programa' => 'A621', 'nom_programa_academico' => 'DIRECCION DE ORGANIZACIONES', 'cod_facultad' => null, 'estado' => null, 'tipo' => null],
            ['cod_programa' => 'A711', 'nom_programa_academico' => 'DERECHO ADMINISTRATIVO', 'cod_facultad' => null, 'estado' => 'POSGRADO', 'tipo' => 'POSGRADO'],
            ['cod_programa' => 'A712', 'nom_programa_academico' => 'DERECHO DE FAMILIA', 'cod_facultad' => null, 'estado' => 'POSGRADO', 'tipo' => 'POSGRADO'],
            ['cod_programa' => 'A715', 'nom_programa_academico' => 'DERECHO PENAL Y CRIMINOLOGIA', 'cod_facultad' => null, 'estado' => 'POSGRADO', 'tipo' => 'POSGRADO'],
            ['cod_programa' => 'A717', 'nom_programa_academico' => 'DERECHO LABORAL Y SEGURIDAD SOCIAL', 'cod_facultad' => null, 'estado' => 'POSGRADO', 'tipo' => 'POSGRADO'],
            ['cod_programa' => 'A732', 'nom_programa_academico' => 'GESTION AMBIENTAL', 'cod_facultad' => null, 'estado' => 'POSGRADO', 'tipo' => 'POSGRADO'],
            ['cod_programa' => 'A742', 'nom_programa_academico' => 'GESTION Y CONSTRUCCION DE EDIFICACIONES', 'cod_facultad' => null, 'estado' => 'POSGRADO', 'tipo' => 'POSGRADO'],
            ['cod_programa' => 'A754', 'nom_programa_academico' => 'DERECHO CONSTITUCIONAL', 'cod_facultad' => null, 'estado' => 'POSGRADO', 'tipo' => 'POSGRADO'],
            ['cod_programa' => 'A797', 'nom_programa_academico' => 'GERENCIA TRIBUTARIA', 'cod_facultad' => null, 'estado' => 'POSGRADO', 'tipo' => 'POSGRADO'],
            ['cod_programa' => 'A821', 'nom_programa_academico' => 'INGLES', 'cod_facultad' => null, 'estado' => null, 'tipo' => null],
            ['cod_programa' => 'A822', 'nom_programa_academico' => 'PORTUGUES', 'cod_facultad' => null, 'estado' => null, 'tipo' => null],
            ['cod_programa' => 'A823', 'nom_programa_academico' => 'ITALIANO', 'cod_facultad' => null, 'estado' => null, 'tipo' => null],
            ['cod_programa' => 'A824', 'nom_programa_academico' => 'ESPAÑOL PARA EXTRANJEROS', 'cod_facultad' => null, 'estado' => null, 'tipo' => null],
            ['cod_programa' => 'A825', 'nom_programa_academico' => 'FRANCES', 'cod_facultad' => null, 'estado' => null, 'tipo' => null],
            ['cod_programa' => 'A831', 'nom_programa_academico' => 'SUFICIENCIA EN INFORMATICA', 'cod_facultad' => null, 'estado' => null, 'tipo' => null],
            ['cod_programa' => 'A851', 'nom_programa_academico' => 'DERECHO DE FAMILIA CURSOS LIBRES', 'cod_facultad' => null, 'estado' => null, 'tipo' => null],
            ['cod_programa' => 'A855', 'nom_programa_academico' => 'DERECHO LABORAL Y SEGURIDAD SOCIAL CURSOS LIBRES', 'cod_facultad' => null, 'estado' => null, 'tipo' => null],
            ['cod_programa' => 'A856', 'nom_programa_academico' => 'DERECHO CONSTITUCIONAL CURSOS LIBRES', 'cod_facultad' => null, 'estado' => null, 'tipo' => null],
            ['cod_programa' => 'A859', 'nom_programa_academico' => 'DERECHO PENAL Y CRIMINOLOGIA CURSOS LIBRES', 'cod_facultad' => null, 'estado' => null, 'tipo' => null],
            ['cod_programa' => 'A860', 'nom_programa_academico' => 'DERECHO ADMINISTRATIVO CURSOS LIBRES', 'cod_facultad' => null, 'estado' => null, 'tipo' => null],
            ['cod_programa' => 'A862', 'nom_programa_academico' => 'GESTION Y CONSTRUCCION DE EDIFICACIONES CURSOS LIBRES', 'cod_facultad' => null, 'estado' => null, 'tipo' => null],
            ['cod_programa' => 'A864', 'nom_programa_academico' => 'GESTION AMBIENTAL CURSOS LIBRES', 'cod_facultad' => null, 'estado' => null, 'tipo' => null],
            ['cod_programa' => 'A865', 'nom_programa_academico' => 'DIRECCION DE ORGANIZACIONES CURSOS LIBRES', 'cod_facultad' => null, 'estado' => null, 'tipo' => null],
            ['cod_programa' => 'A871', 'nom_programa_academico' => 'INMERSION', 'cod_facultad' => null, 'estado' => null, 'tipo' => null],
        ]);
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Eliminar la clave foránea antes de eliminar la tabla
        Schema::table('programa', function (Blueprint $table) {
            $table->dropForeign(['cod_facultad']);
        });

        Schema::dropIfExists('programa');
    }
};
