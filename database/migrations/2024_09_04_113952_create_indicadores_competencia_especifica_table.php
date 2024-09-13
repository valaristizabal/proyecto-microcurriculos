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
        Schema::create('indicadores_competencia_especifica', function (Blueprint $table) {
            $table->id('id_indicadores_competencia_especifica');
            $table->text('descripcion_indicadores_competencia_especifica');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('indicadores_competencia_especifica');
    }
};
