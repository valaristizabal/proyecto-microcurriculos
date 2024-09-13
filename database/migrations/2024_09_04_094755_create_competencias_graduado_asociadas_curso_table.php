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
        Schema::create('competencias_graduado_asociadas_curso', function (Blueprint $table) {
            $table->id('id_competencias_graduado_asociadas_curso');
            $table->text('descripcion_competencias_graduado_asociadas_curso');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('competencias_graduado_asociadas_curso');
    }
};
