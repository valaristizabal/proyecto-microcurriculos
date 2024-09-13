<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IndicadoresCompetenciaGenerica extends Model
{
    use HasFactory;

    protected $table = 'indicadores_competencia_generica';
    protected $primaryKey = 'id_indicadores_competencia_generica';

    protected $fillable = [
        'descripcion_indicadores_competencia_generica',
    ];
}
