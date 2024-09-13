<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MediosEducativos extends Model
{
    use HasFactory;
    
    protected $table = 'medios_educativos';
    protected $primaryKey = 'id_medios_educativos';
    protected $fillable = [
        'tipo_recurso',
        'ubicacion_convenio',
    ];
}
