<?php

namespace App\Http\Controllers;

use App\Models\MediosEducativos;
use App\Models\MediosEducativosMaterialesApoyo;
use Illuminate\Http\Request;

class MediosEducativosController extends Controller{
    public function guardarMediosEducativos(Request $request){
        $request->validate([
            'tipo_recurso' => 'required|string',
            'ubicacion_convenio' => 'required|string|max:255',
        ]);
    
        $medio = new MediosEducativos();
        $medio->tipo_recurso = $request->input('tipo_recurso');
        $medio->ubicacion_convenio = $request->input('ubicacion_convenio');
        $medio->save();
    
        return response()->json(['success' => true]);
    }
        
}
