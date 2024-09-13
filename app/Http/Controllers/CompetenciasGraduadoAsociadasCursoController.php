<?php

namespace App\Http\Controllers;
use App\Models\CompetenciasGraduadoAsociadasCurso;
use Illuminate\Http\Request;

class CompetenciasGraduadoAsociadasCursoController extends Controller{
    public function guardarCompetenciaGraduadoAsociadaCurso(Request $request){
        $request->validate([
            'descripcion_competencias_graduado_asociadas_curso' => 'required|string',
        ]);

        $competencia = new CompetenciasGraduadoAsociadasCurso();
        $competencia->descripcion_competencias_graduado_asociadas_curso = $request->input('descripcion_competencias_graduado_asociadas_curso');
        $competencia->save();

        return response()->json(['success' => true]);
    }

}
