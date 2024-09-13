<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MecanismosEvaluacion extends Model
{
    use HasFactory;

    protected $table = 'mecanismos_evaluacion';
    protected $primaryKey = 'id_mecanismo_evaluacion';
    protected $fillable = [
        'id_resultados_aprendizaje_mecanismo_evaluacion',
        'id_descripcion_mecanismo_evaluacion',
    ];

    public function resultadosAprendizajeMecanismoEvaluacion()
    {
        return $this->belongsTo(ResultadosAprendizajeMecanismoEvaluacion::class, 'id_resultados_aprendizaje_mecanismo_evaluacion');
    }

    public function descripcionMecanismoEvaluacion()
    {
        return $this->belongsTo(DescripcionMecanismoEvaluacion::class, 'id_descripcion_mecanismo_evaluacion');
    }
}
