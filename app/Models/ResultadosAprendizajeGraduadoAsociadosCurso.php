<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResultadosAprendizajeGraduadoAsociadosCurso extends Model
{
    use HasFactory;

    protected $table = "resultados_aprendizaje_graduado_asociados_curso";
    protected $primaryKey = "id_resultados_aprendizaje_graduado_asociados_curso";

    protected $fillable = [
        "descripcion_resultados_aprendizaje_graduado_asociados_curso",
    ];
}
