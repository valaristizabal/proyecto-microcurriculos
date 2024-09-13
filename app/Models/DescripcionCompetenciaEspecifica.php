<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DescripcionCompetenciaEspecifica extends Model
{
    use HasFactory;

    protected $table = "descripcion_competencia_especifica";
    protected $primaryKey = "id_descripcion_competencia_especifica";
 
    protected $fillable = [
         "descripcion_competencia_especifica",
    ];
}
