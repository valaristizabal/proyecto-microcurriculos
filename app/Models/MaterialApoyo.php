<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MaterialApoyo extends Model
{
    use HasFactory;
        
    protected $table = 'material_apoyo';
    protected $primaryKey = 'id_material_apoyo';
    protected $fillable = [
        'bibliografia',
        'ubicacion',
    ];
}
