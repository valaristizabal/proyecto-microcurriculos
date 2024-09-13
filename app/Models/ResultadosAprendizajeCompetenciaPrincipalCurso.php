<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResultadosAprendizajeCompetenciaPrincipalCurso extends Model
{
    use HasFactory;

    protected $table = 'resultados_aprendizaje_competencia_principal_curso';
    protected $primaryKey = 'id_resultados_aprendizaje_competencia_principal_curso';

    protected $fillable = [
        'descripcion_resultados_aprendizaje_competencia_principal_curso',
    ];
}
