<?php

namespace App\Http\Controllers;

use App\Models\SaberesHabilidades;
use Illuminate\Http\Request;

class SaberesHabilidadesController extends Controller{
    public function guardarSaberesHabilidades(Request $request){
        $request->validate([
            'descripcion_saberes_habilidades' => 'required|string',
        ]);
    
        $saberes = new SaberesHabilidades();
        $saberes->descripcion_saberes_habilidades = $request->input('descripcion_saberes_habilidades');
        $saberes->save();
    
        return response()->json(['success' => true]);
    }
}
