<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Identificacion extends Model
{
    use HasFactory;

    protected $table = "identificacion";

    protected $fillable = [
        'facultad',
        'programa',
        'nombre_del_curso',
        'elaborado_por',
        'fecha_ultima_actualizacion',
        'fecha_aprobacion_comite_curricular',
        'idioma',
        'codigo',
    ];

    // Define los campos que deben ser tratados como fechas
    protected $dates = [
        'fecha_ultima_actualizacion',
        'fecha_aprobacion_comite_curricular',
    ];
}