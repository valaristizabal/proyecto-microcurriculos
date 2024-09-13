<?php

namespace App\Http\Controllers;

use App\Models\EstrategiasArticulacion;
use Illuminate\Http\Request;

class EstrategiasArticulacionController extends Controller{
    public function guardarEstrategiasArticulacion(Request $request){
        $request->validate([
            'descripcion_estrategias_articulacion' => 'required|string',
        ]);

        $estrategia = new EstrategiasArticulacion();
        $estrategia->descripcion_estrategias_articulacion = $request->input('descripcion_estrategias_articulacion');
        $estrategia->save();

        return response()->json(['success' => true]);
    }

}
