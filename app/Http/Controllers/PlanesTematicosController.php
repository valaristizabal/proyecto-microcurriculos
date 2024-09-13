<?php

namespace App\Http\Controllers;

use App\Models\PlanesTematicos;
use Illuminate\Http\Request;

class PlanesTematicosController extends Controller{
    public function guardarPlanesTematicos(Request $request){
        $request->validate([
            'id_ejes_tematicos' => 'required|exists:ejes_tematicos,id_ejes_tematicos',
            'nombre_plan_tematico' => 'required|string|max:255',
            'observacion' => 'nullable|string',
        ]);
    
        $plan = new PlanesTematicos();
        $plan->id_ejes_tematicos = $request->input('id_ejes_tematicos');
        $plan->nombre_plan_tematico = $request->input('nombre_plan_tematico');
        $plan->observacion = $request->input('observacion');
        $plan->save();
    
        return response()->json(['success' => true]);
    }
        
}
