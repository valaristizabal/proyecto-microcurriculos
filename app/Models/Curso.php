<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Curso extends Model
{
    use HasFactory;

    protected $table = 'cursos';
    protected $primarykey ='cod_curso';
    protected $keyType = 'string';

    protected $fillable = [
        'curso',
        'activa',
        'modalidad',
        'area_conocimiento',
        'tipo_curso',
        'cod_reglamento',
        'creditos',
        'codigo_externo',
        'horas_docente',
        'tipo_nota_gen',
        'idioma_gen',
    ];

}
