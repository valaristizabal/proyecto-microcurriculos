<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('microcurriculos', function (Blueprint $table) {
            $table->id('id_microcurriculo'); //id de la tabla
            $table->String('id_materia')->unique();  //código del microcurriculo como tal
            //tablas del sinu
            $table->string('cod_facultad');
            $table->string('cod_programa');


            $table->String('idioma');
            $table->String('nombre_curso');
            $table->date('fecha_ultima_actualizacion');
            $table->date('fecha_aprobacion');
            $table->String('cedula_elaboro')->nullable();
            $table->String('cedula_reviso')->nullable();
            $table->string('tipo_credito');
            $table->integer('nro_creditos');
            $table->integer('semestre');
            $table->text('prerrequisitos');
            $table->text('saberes_competencias_previas');
            $table->text('instrumentos_evaluacion');
            $table->text('perfil_docente');

            //las demás tablas
            $table->unsignedBigInteger('id_propositos_formativos');
            $table->unsignedBigInteger('id_competencias_especificas');
            $table->unsignedBigInteger('id_competencias_genericas');
            $table->unsignedBigInteger('id_consistencia_curricular');
            $table->unsignedBigInteger('id_aportes_curso_proyecto_integrador')->nullable();
            $table->unsignedBigInteger('id_plan_tematico');
            $table->unsignedBigInteger('id_medios_educativos');
            $table->unsignedBigInteger('id_material_apoyo');
            $table->unsignedBigInteger('id_plan_lector');
            $table->unsignedBigInteger('id_mecanismo_evaluacion');

             // Definición de las llaves foráneas
             $table->foreign('cod_facultad')->references('cod_facultad')->on('facultad'); //lista
             $table->foreign('cod_programa')->references('cod_programa')->on('programa'); //
             $table->foreign('cedula_elaboro')->references('cedula')->on('terceros'); //
             $table->foreign('cedula_reviso')->references('cedula')->on('terceros'); //
             $table->foreign('id_propositos_formativos')->references('id_propositos_formativos')->on('propositos_formativos');  //

             $table->foreign('id_competencias_especificas')->references('id_competencias_especificas')->on('competencias_especificas'); //
             $table->foreign('id_competencias_genericas')->references('id_competencias_genericas')->on('competencias_genericas'); //

             $table->foreign('id_consistencia_curricular')->references('id_consistencia_curricular')->on('consistencia_curricular'); //
             $table->foreign('id_aportes_curso_proyecto_integrador')->references('id_aportes_curso_proyecto_integrador')->on('aportes_curso_proyecto_integrador'); //
             $table->foreign('id_plan_tematico')->references('id_plan_tematico')->on('planes_tematicos'); //
             
             $table->foreign('id_medios_educativos')->references('id_medios_educativos')->on('medios_educativos'); //
             $table->foreign('id_material_apoyo')->references('id_material_apoyo')->on('material_apoyo'); //

             $table->foreign('id_plan_lector')->references('id_plan_lector')->on('planes_lectores');//
             $table->foreign('id_mecanismo_evaluacion')->references('id_mecanismo_evaluacion')->on('mecanismos_evaluacion');//

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('microcurriculos');
    }
};
