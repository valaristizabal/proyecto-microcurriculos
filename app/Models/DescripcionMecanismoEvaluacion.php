<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DescripcionMecanismoEvaluacion extends Model
{
    use HasFactory;

    protected $table = 'descripcion_mecanismo_evaluacion';
    protected $primaryKey = 'id_descripcion_mecanismo_evaluacion';
    protected $fillable = [
        'descripcion_mecanismo_evaluacion',
    ];
}
