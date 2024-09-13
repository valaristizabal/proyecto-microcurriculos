<?php

namespace App\Http\Controllers;
use App\Models\ResultadosAprendizajeGraduadoAsociadosCurso;
use Illuminate\Http\Request;

class ResultadosAprendizajeGraduadoAsociadosCursoController extends Controller{
    public function guardarResultadoAprendizajeGraduadoAsociadoCurso(Request $request){
        $request->validate([
            'descripcion_resultados_aprendizaje_graduado_asociados_curso' => 'required|string',
        ]);
    
        $resultado = new ResultadosAprendizajeGraduadoAsociadosCurso();
        $resultado->descripcion_resultados_aprendizaje_graduado_asociados_curso = $request->input('descripcion_resultados_aprendizaje_graduado_asociados_curso');
        $resultado->save();
    
        return response()->json(['success' => true]);
    }
}
