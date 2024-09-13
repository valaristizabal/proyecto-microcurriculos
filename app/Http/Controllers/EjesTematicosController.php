<?php

namespace App\Http\Controllers;

use App\Models\EjesTematicos;
use Illuminate\Http\Request;

class EjesTematicosController extends Controller{
    public function guardarEjesTematicos(Request $request){
        $request->validate([
            'actividad_eje_tematico' => 'required|string',
        ]);
    
        $eje = new EjesTematicos();
        $eje->actividad_eje_tematico = $request->input('actividad_eje_tematico');
        $eje->save();
    
        return response()->json(['success' => true]);
    }
    
}
