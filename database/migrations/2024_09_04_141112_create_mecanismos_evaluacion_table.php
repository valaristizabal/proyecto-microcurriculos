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
        Schema::create('mecanismos_evaluacion', function (Blueprint $table) {
            $table->id('id_mecanismo_evaluacion');
            $table->unsignedBigInteger('id_resultados_aprendizaje_mecanismo_evaluacion');
            $table->unsignedBigInteger('id_descripcion_mecanismo_evaluacion');
            $table->timestamps();

            $table->foreign('id_resultados_aprendizaje_mecanismo_evaluacion', 'res_apr_mec_ev_fk')->references('id_resultados_aprendizaje_mecanismo_evaluacion')->on('resultados_aprendizaje_mecanismo_evaluacion');
            $table->foreign('id_descripcion_mecanismo_evaluacion', 'desc_mec_ev_fk')->references('id_descripcion_mecanismo_evaluacion')->on('descripcion_mecanismo_evaluacion');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mecanismos_evaluacion');
    }
};
