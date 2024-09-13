<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResultadosAprendizajeMecanismoEvaluacion extends Model
{
    use HasFactory;

    protected $table = 'resultados_aprendizaje_mecanismo_evaluacion';
    protected $primaryKey = 'id_resultados_aprendizaje_mecanismo_evaluacion';
    protected $fillable = [
        'descripcion_resultados_aprendizaje_mecanismo_evaluacion',
    ];
}
