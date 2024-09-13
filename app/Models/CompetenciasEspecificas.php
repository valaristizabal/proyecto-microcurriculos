<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompetenciasEspecificas extends Model
{
    use HasFactory;
    
    protected $table = 'competencias_especificas';
    protected $primaryKey = 'id_competencias_especificas';
    protected $fillable = [
        'id_descripcion_competencia_especifica',
        'id_indicadores_competencia_especifica',
    ];

    public function descripcionCompetenciaEspecifica()
    {
        return $this->belongsTo(DescripcionCompetenciaEspecifica::class, 'id_descripcion_competencia_especifica');
    }

    public function indicadoresCompetenciaEspecifica()
    {
        return $this->belongsTo(IndicadoresCompetenciaEspecifica::class, 'id_indicadores_competencia_especifica');
    }
}
