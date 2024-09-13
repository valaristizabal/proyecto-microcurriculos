<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EstrategiasArticulacion extends Model
{
    use HasFactory;

    protected $table = 'estrategias_articulacion';
    protected $primaryKey = 'id_estrategias_articulacion';
    protected $fillable = [
        'descripcion_estrategias_articulacion',
    ];
}
