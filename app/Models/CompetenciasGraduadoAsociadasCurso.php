<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompetenciasGraduadoAsociadasCurso extends Model
{
    use HasFactory;
    
    protected $table = "competencias_graduado_asociadas_curso";   
    protected $primaryKey = 'id_competencias_graduado_asociadas_curso';

    protected $fillable = [
        'descripcion_competencias_graduado_asociadas_curso',
    ];
}
