<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SaberesHabilidades extends Model
{
    use HasFactory;

    protected $table = 'saberes_habilidades';
    protected $primaryKey = 'id_saberes_habilidades';
    protected $fillable = [
        'descripcion_saberes_habilidades',
    ];
}
