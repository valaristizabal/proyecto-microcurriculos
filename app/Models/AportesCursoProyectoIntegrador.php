<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AportesCursoProyectoIntegrador extends Model
{
    use HasFactory;

    protected $table = 'aportes_curso_proyecto_integrador';
    protected $primaryKey = 'id_aportes_curso_proyecto_integrador';
    protected $fillable = [
        'id_saberes_habilidades',
        'id_estrategias_articulacion',
    ];

    public function saberesHabilidades()
    {
        return $this->belongsTo(SaberesHabilidades::class, 'id_saberes_habilidades');
    }

    public function estrategiasArticulacion()
    {
        return $this->belongsTo(EstrategiasArticulacion::class, 'id_estrategias_articulacion');
    }
}
