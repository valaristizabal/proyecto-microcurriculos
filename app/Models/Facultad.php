<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Facultad extends Model
{
    use HasFactory;
    protected $table = 'facultad';
    protected $primaryKey = 'cod_facultad';
    protected $keyType = 'string'; 
    protected $fillable = [
        'cod_facultad', 
        'nom_facultad',
        'sede'
    ];
}
