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
        Schema::create('planes_tematicos', function (Blueprint $table) {
            $table->id('id_plan_tematico');
            $table->unsignedBigInteger('id_ejes_tematicos');
            $table->string('nombre_plan_tematico');
            $table->text('observacion');
            $table->timestamps();

            $table->foreign('id_ejes_tematicos')->references('id_ejes_tematicos')->on('ejes_tematicos');//
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('planes_tematicos');
    }
};
