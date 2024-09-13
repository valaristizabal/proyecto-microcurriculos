<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Microcurriculos extends Model
{
    use HasFactory;

    protected $table = 'microcurriculos';

    protected $primaryKey = 'id_microcurriculo';

    protected $fillable = [
        'id_materia',
        'cod_facultad',
        'cod_programa',
        'idioma',
        'nombre_curso',
        'fecha_ultima_actualizacion',
        'fecha_aprobacion',
        'cedula_elaboro',
        'cedula_reviso',
        'tipo_credito',
        'nro_creditos',
        'semestre',
        'prerrequisitos',
        'saberes_competencias_previas',
        'instrumentos_evaluacion',
        'perfil_docente',
        'id_propositos_formativos',
        'id_competencias_especificas',
        'id_competencias_genericas',
        'id_consistencia_curricular',
        'id_aportes_curso_proyecto_integrador',
        'id_plan_tematico',
        'id_medios_educativos',
        'id_material_apoyo',
        'id_plan_lector',
        'id_mecanismo_evaluacion',
    ];

    protected $dates = [
        'fecha_ultima_actualizacion',
        'fecha_aprobacion',
    ];

    public function facultad()
    {
        return $this->belongsTo(Facultad::class, 'cod_facultad');
    }

    public function programa()
    {
        return $this->belongsTo(Programa::class, 'cod_programa');
    }

    public function terceroElaboro()
    {
        return $this->belongsTo(Terceros::class, 'cedula_elaboro', 'cedula');
    }

    public function terceroReviso()
    {
        return $this->belongsTo(Terceros::class, 'cedula_reviso', 'cedula');
    }

    public function propositosFormativos()
    {
        return $this->belongsTo(PropositosFormativos::class, 'id_propositos_formativos');
    }

    //cambia
    public function competenciasEspecificas()
    {
        return $this->belongsTo(CompetenciasEspecificas::class, 'id_competencias_especificas');
    }

    public function competenciasGenericas()
    {
        return $this->belongsTo(CompetenciasGenericas::class, 'id_competencias_genericas');
    }

    public function consistenciaCurricular()
    {
        return $this->belongsTo(ConsistenciaCurricular::class, 'id_consistencia_curricular');
    }

    public function aportesCursoProyectoIntegrador()
    {
        return $this->belongsTo(AportesCursoProyectoIntegrador::class, 'id_aportes_curso_proyecto_integrador');
    }

    public function planTematico()
    {
        return $this->belongsTo(PlanesTematicos::class, 'id_plan_tematico');
    }

    public function mediosEducativo()
    {
        return $this->belongsTo(MediosEducativos::class, 'id_medios_educativos');
    }

    public function materialApoyo()
    {
        return $this->belongsTo(MaterialApoyo::class, 'id_material_apoyo');
    }

    public function planLector()
    {
        return $this->belongsTo(PlanesLectores::class, 'id_plan_lector');
    }

    public function mecanismoEvaluacion()
    {
        return $this->belongsTo(MecanismosEvaluacion::class, 'id_mecanismo_evaluacion');
    }
}
