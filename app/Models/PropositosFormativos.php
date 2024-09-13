<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PropositosFormativos extends Model
{
    use HasFactory;
    
    protected $table = 'propositos_formativos';
    protected $primaryKey = 'id_propositos_formativos';
    protected $fillable = [
        'id_competencias_graduado_asociadas_curso',
        'id_resultados_aprendizaje_graduado_asociados_curso',
        'id_resultados_aprendizaje_competencia_principal_curso',
        'aporte_perfil_graduado',
        'competencia_principal_curso',
    ];

    public function competenciasGraduadoAsociadasCurso()
    {
        return $this->belongsTo(CompetenciasGraduadoAsociadasCurso::class, 'id_competencias_graduado_asociadas_curso');
    }

    public function resultadosAprendizajeGraduadoAsociadosCurso()
    {
        return $this->belongsTo(ResultadosAprendizajeGraduadoAsociadosCurso::class, 'id_resultados_aprendizaje_graduado_asociados_curso');
    }

    public function resultadosAprendizajeCompetenciaPrincipalCurso()
    {
        return $this->belongsTo(ResultadosAprendizajeCompetenciaPrincipalCurso::class, 'id_resultados_aprendizaje_competencia_principal_curso');
    }
}
