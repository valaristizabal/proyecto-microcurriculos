<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('facultad', function (Blueprint $table) {
            $table->string('cod_facultad')->primary();
            $table->string('nom_facultad');
            $table->timestamps();
        });

        // Insertar los datos
        DB::table('facultad')->insert([
            ['cod_facultad' => 'A1', 'nom_facultad' => 'FACULTAD DE DERECHO Y CIENCIAS POLÍTICAS Y SOCIALES'],
            ['cod_facultad' => 'A2', 'nom_facultad' => 'FACULTAD DE CIENCIAS ECONÓMICAS Y EMPRESARIALES'],
            ['cod_facultad' => 'A3', 'nom_facultad' => 'FACULTAD DE INGENIERÍAS'],
            ['cod_facultad' => 'A4', 'nom_facultad' => 'FACULTAD DE ARQUITECTURA'],
            ['cod_facultad' => 'A5', 'nom_facultad' => 'FACULTAD DE CIENCIAS DE LA EDUCACIÓN'],
            ['cod_facultad' => 'A6', 'nom_facultad' => 'FACULTAD DE LA VIDA'],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('facultad');
    }
};
