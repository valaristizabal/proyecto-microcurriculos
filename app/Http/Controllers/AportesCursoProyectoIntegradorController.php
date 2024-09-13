<?php

namespace App\Http\Controllers;

use App\Models\AportesCursoProyectoIntegrador;
use Illuminate\Http\Request;

class AportesCursoProyectoIntegradorController extends Controller{
    public function guardarAportesCursoProyectoIntegrador(Request $request){
        $request->validate([
            'id_saberes_habilidades' => 'required|exists:saberes_habilidades,id_saberes_habilidades',
            'id_estrategias_articulacion' => 'required|exists:estrategias_articulacion,id_estrategias_articulacion',
        ]);
    
        $aporte = new AportesCursoProyectoIntegrador();
        $aporte->id_saberes_habilidades = $request->input('id_saberes_habilidades');
        $aporte->id_estrategias_articulacion = $request->input('id_estrategias_articulacion');
        $aporte->save();
    
        return response()->json(['success' => true]);
    }
    
}
