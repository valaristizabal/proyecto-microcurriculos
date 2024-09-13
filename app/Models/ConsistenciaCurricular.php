<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConsistenciaCurricular extends Model
{
    use HasFactory;
    
    protected $table = 'consistencia_curricular';
    protected $primaryKey = 'id_consistencia_curricular';
    protected $fillable = [
        'horizontal',
        'vertical',
        'transversal',
    ];
}
