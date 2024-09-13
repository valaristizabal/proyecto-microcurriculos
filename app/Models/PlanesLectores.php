<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlanesLectores extends Model
{
    use HasFactory;

    protected $table = 'planes_lectores';
    protected $primaryKey = 'id_plan_lector';
    protected $fillable = [
        'texto_lectura_obligatoria',
        'citacion_normas_APA',
        'estrategia_seguimiento',
    ];
}
