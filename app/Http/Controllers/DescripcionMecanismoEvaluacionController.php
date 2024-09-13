<?php

namespace App\Http\Controllers;

use App\Models\DescripcionMecanismoEvaluacion;
use Illuminate\Http\Request;

class DescripcionMecanismoEvaluacionController extends Controller{
    public function guardarDescripcionMecanismoEvaluacion(Request $request){
        $request->validate([
            'descripcion_mecanismo_evaluacion' => 'required|string',
        ]);

        $descripcion = new DescripcionMecanismoEvaluacion();
        $descripcion->descripcion_mecanismo_evaluacion = $request->input('descripcion_mecanismo_evaluacion');
        $descripcion->save();

        return response()->json(['success' => true]);
}

}
