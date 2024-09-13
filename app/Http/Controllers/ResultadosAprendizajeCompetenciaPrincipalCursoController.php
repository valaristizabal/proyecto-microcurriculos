<?php

namespace App\Http\Controllers;

use App\Models\ResultadosAprendizajeCompetenciaPrincipalCurso; 
use Illuminate\Http\Request;

class ResultadosAprendizajeCompetenciaPrincipalCursoController extends Controller{
    public function guardarResultadoAprendizajeCompetenciaPrincipalCurso(Request $request){
        $request->validate([
            'descripcion_resultados_aprendizaje_competencia_principal_curso' => 'required|string',
        ]);
    
        $resultado = new ResultadosAprendizajeCompetenciaPrincipalCurso();
        $resultado->descripcion_resultados_aprendizaje_competencia_principal_curso = $request->input('descripcion_resultados_aprendizaje_competencia_principal_curso');
        $resultado->save();
    
        return response()->json(['success' => true]);
    }
}
