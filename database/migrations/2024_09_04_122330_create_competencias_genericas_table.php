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
        Schema::create('competencias_genericas', function (Blueprint $table) {
            $table->id('id_competencias_genericas');
            $table->unsignedBigInteger('id_descripcion_competencia_generica');
            $table->unsignedBigInteger('id_indicadores_competencia_generica');
            $table->timestamps();

            
            $table->foreign('id_descripcion_competencia_generica', 'desc_comp_gen_fk')->references('id_descripcion_competencia_generica')->on('descripcion_competencia_generica'); //
            $table->foreign('id_indicadores_competencia_generica','indc_comp_gen_fk')->references('id_indicadores_competencia_generica')->on('indicadores_competencia_generica'); //
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('competencias_genericas');
    }
};
