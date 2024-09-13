<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompetenciasGenericas extends Model
{
    use HasFactory;

    protected $table = 'competencias_genericas';
    protected $primaryKey = 'id_competencias_genericas';
    protected $fillable = [
        'id_descripcion_competencia_generica',
        'id_indicadores_competencia_generica',
    ];

    public function descripcionCompetenciaGenerica()
    {
        return $this->belongsTo(DescripcionCompetenciaGenerica::class, 'id_descripcion_competencia_generica');
    }

    public function indicadoresCompetenciaGenerica()
    {
        return $this->belongsTo(IndicadoresCompetenciaGenerica::class, 'id_indicadores_competencia_generica');
    }
}
