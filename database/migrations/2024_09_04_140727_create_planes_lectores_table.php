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
        Schema::create('planes_lectores', function (Blueprint $table) {
            $table->id('id_plan_lector');
            $table->string('texto_lectura_obligatoria')->default('N/A');
            $table->string('citacion_normas_APA')->default('N/A');
            $table->text('estrategia_seguimiento')->default('N/A');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('planes_lectores');
    }
};
