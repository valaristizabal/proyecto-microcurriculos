<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Programa extends Model
{
    use HasFactory;
    protected $table = 'programa';
    protected $primaryKey = 'cod_programa';
    protected $keyType = 'string';
    protected $fillable = [
        'cod_programa',
        'nom_programa_academico',
        'cod_facultad',
        'estado',
        'tipo',
    ];

    public function facultad(){
        return $this->belongsTo(Facultad::class, 'cod_facultad', 'cod_facultad');
    }

}
