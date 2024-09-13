<?php

namespace App\Http\Controllers;

use App\Models\MecanismosEvaluacion;
use Illuminate\Http\Request;

class MecanismosEvaluacionController extends Controller{
    public function guardarMecanismosEvaluacion(Request $request){
        $request->validate([
            'id_resultados_aprendizaje_mecanismo_evaluacion' => 'required|exists:resultados_aprendizaje_mecanismo_evaluacion,id_resultados_aprendizaje_mecanismo_evaluacion',
            'id_descripcion_mecanismo_evaluacion' => 'required|exists:descripcion_mecanismo_evaluacion,id_descripcion_mecanismo_evaluacion',
        ]);
    
        $mecanismo = new MecanismosEvaluacion();
        $mecanismo->id_resultados_aprendizaje_mecanismo_evaluacion = $request->input('id_resultados_aprendizaje_mecanismo_evaluacion');
        $mecanismo->id_descripcion_mecanismo_evaluacion = $request->input('id_descripcion_mecanismo_evaluacion');
        $mecanismo->save();
    
        return response()->json(['success' => true]);
    }
        
}
