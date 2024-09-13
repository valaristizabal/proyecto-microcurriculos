<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EjesTematicos extends Model
{
    use HasFactory;
    protected $table = 'ejes_tematicos';
    protected $primaryKey = 'id_ejes_tematicos';
    protected $fillable = [
        'actividad_eje_tematico',
    ];
}
