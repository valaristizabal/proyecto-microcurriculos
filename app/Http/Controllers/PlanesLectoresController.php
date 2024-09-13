<?php

namespace App\Http\Controllers;

use App\Models\PlanesLectores;
use Illuminate\Http\Request;

class PlanesLectoresController extends Controller{
    public function guardarPlanesLectores(Request $request){
        $request->validate([
            'texto_lectura_obligatoria' => 'required|string',
            'citacion_normas_APA' => 'required|string|max:255',
            'estrategia_seguimiento' => 'required|string',
        ]);
    
        $plan = new PlanesLectores();
        $plan->texto_lectura_obligatoria = $request->input('texto_lectura_obligatoria');
        $plan->citacion_normas_APA = $request->input('citacion_normas_APA');
        $plan->estrategia_seguimiento = $request->input('estrategia_seguimiento');
        $plan->save();
    
        return response()->json(['success' => true]);
    }
    
}
