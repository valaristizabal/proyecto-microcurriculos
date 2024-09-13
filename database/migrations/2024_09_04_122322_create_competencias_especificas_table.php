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
        Schema::create('competencias_especificas', function (Blueprint $table) {
            $table->id('id_competencias_especificas');
            $table->unsignedBigInteger('id_descripcion_competencia_especifica');
            $table->unsignedBigInteger('id_indicadores_competencia_especifica');
            $table->timestamps();

            
            $table->foreign('id_descripcion_competencia_especifica', 'desc_comp_esp_fk')->references('id_descripcion_competencia_especifica')->on('descripcion_competencia_especifica'); //
            $table->foreign('id_indicadores_competencia_especifica','indc_comp_esp_fk')->references('id_indicadores_competencia_especifica')->on('indicadores_competencia_especifica'); //
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('competencias_especificas');
    }
};
