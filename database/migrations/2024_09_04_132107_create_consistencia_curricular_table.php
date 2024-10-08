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
        Schema::create('consistencia_curricular', function (Blueprint $table) {
            $table->id('id_consistencia_curricular');
            $table->text('horizontal');
            $table->text('vertical');
            $table->text('transversal');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('consistencia_curricular');
    }
};
