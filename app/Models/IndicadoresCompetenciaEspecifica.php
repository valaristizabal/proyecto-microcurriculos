<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IndicadoresCompetenciaEspecifica extends Model
{
    use HasFactory;

    protected $table = 'indicadores_competencia_especifica';
    protected $primaryKey = 'id_indicadores_competencia_especifica';

    protected $fillable = [
        'descripcion_indicadores_competencia_especifica',
    ];
}
