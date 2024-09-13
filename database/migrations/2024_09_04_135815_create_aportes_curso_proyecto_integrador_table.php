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
        Schema::create('aportes_curso_proyecto_integrador', function (Blueprint $table) {
            $table->id('id_aportes_curso_proyecto_integrador');
            $table->unsignedBigInteger('id_saberes_habilidades');
            $table->unsignedBigInteger('id_estrategias_articulacion');
            $table->timestamps();

            $table->foreign('id_saberes_habilidades','sab_hab_fk')->references('id_saberes_habilidades')->on('saberes_habilidades'); //
            $table->foreign('id_estrategias_articulacion', 'est_art_fk')->references('id_estrategias_articulacion')->on('estrategias_articulacion'); //
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('aportes_curso_proyecto_integrador');
    }
};
