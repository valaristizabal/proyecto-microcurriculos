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
        Schema::create('cursos', function (Blueprint $table) {
            $table->string('cod_curso', 50);
            $table->string('curso', 255);
            $table->integer('activa');
            $table->string('modalidad', 100);
            $table->string('area_conocimiento', 255);
            $table->string('tipo_curso', 100);
            $table->string('cod_reglamento', 50);
            $table->integer('creditos'); 
            $table->string('codigo_externo', 50);
            $table->integer('horas_docente'); 
            $table->string('tipo_nota_gen', 50);
            $table->string('idioma_gen', 50);
            
            $table->timestamps(); 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('curso');
    }
};
