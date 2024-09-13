<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DescripcionCompetenciaGenerica extends Model
{
    use HasFactory;

    protected $table = "descripcion_competencia_generica";
    protected $primaryKey = "id_descripcion_competencia_generica";
 
    protected $fillable = [
         "descripcion_competencia_generica",
    ];
}
