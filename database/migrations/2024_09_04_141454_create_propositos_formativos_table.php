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
        Schema::create('propositos_formativos', function (Blueprint $table) {
            $table->id('id_propositos_formativos');
            $table->unsignedBigInteger('id_competencias_graduado_asociadas_curso');
            $table->unsignedBigInteger('id_resultados_aprendizaje_graduado_asociados_curso');
            $table->unsignedBigInteger('id_resultados_aprendizaje_competencia_principal_curso');
            $table->text('aporte_perfil_graduado');
            $table->text('competencia_principal_curso');
            $table->timestamps();

            // Definir claves foráneas con nombres cortos
            $table->foreign('id_competencias_graduado_asociadas_curso', 'comp_grad_asociadas_fk')
                ->references('id_competencias_graduado_asociadas_curso')
                ->on('competencias_graduado_asociadas_curso');


            $table->foreign('id_resultados_aprendizaje_graduado_asociados_curso', 'res_grad_asociadas_fk')
                ->references('id_resultados_aprendizaje_graduado_asociados_curso')
                ->on('resultados_aprendizaje_graduado_asociados_curso');

            $table->foreign('id_resultados_aprendizaje_competencia_principal_curso', 'res_competencia_fk')
                ->references('id_resultados_aprendizaje_competencia_principal_curso')
                ->on('resultados_aprendizaje_competencia_principal_curso');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('propositos_formativos');
    }
};
