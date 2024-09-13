<?php

namespace App\Http\Controllers;

use App\Models\ResultadosAprendizajeMecanismoEvaluacion;
use Illuminate\Http\Request;

class ResultadosAprendizajeMecanimoEvaluacionController extends Controller{
    public function guardarResultadosAprendizajeMecanismoEvaluacion(Request $request){
        $request->validate([
            'descripcion_resultados_aprendizaje_mecanismo_evaluacion' => 'required|string',
        ]);
    
        $resultado = new ResultadosAprendizajeMecanismoEvaluacion();
        $resultado->descripcion_resultados_aprendizaje_mecanismo_evaluacion = $request->input('descripcion_resultados_aprendizaje_mecanismo_evaluacion');
        $resultado->save();
    
        return response()->json(['success' => true]);
    }
    
}
