<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlanesTematicos extends Model
{
    use HasFactory;
    
    protected $table = 'planes_tematicos';
    protected $primaryKey = 'id_plan_tematico';
    protected $fillable = [
        'id_ejes_tematicos',
        'nombre_plan_tematico',
        'observacion',
    ];

    public function ejesTematicos()
    {
        return $this->belongsTo(EjesTematicos::class, 'id_ejes_tematicos');
    }
}
