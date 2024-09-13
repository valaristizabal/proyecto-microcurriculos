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
        Schema::create('resultados_aprendizaje_competencia_principal_curso', function (Blueprint $table) {
            $table->id('id_resultados_aprendizaje_competencia_principal_curso');
            $table->text('descripcion_resultados_aprendizaje_competencia_principal_curso');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('resultados_aprendizaje_competencia_principal_curso');
    }
};
