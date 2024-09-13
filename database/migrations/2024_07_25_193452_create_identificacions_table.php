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
        Schema::create('identificacion', function (Blueprint $table) {
            $table->id();
            $table->string('facultad');
            $table->string('programa');
            $table->string('nombre_del_curso');
            $table->string('elaborado_por');
            $table->date('fecha_ultima_actualizacion');
            $table->date('fecha_aprobacion_comite_curricular');
            $table->string('idioma');
            $table->string('codigo');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('identificacion');
    }
};
