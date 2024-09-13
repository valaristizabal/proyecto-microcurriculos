<?php

namespace App\Http\Controllers;

use App\Models\MaterialApoyo;
use Illuminate\Http\Request;

class MaterialApoyoController extends Controller
{
    public function guardarMaterialApoyo(Request $request){
        $request->validate([
            'bibliografia' => 'required|string',
            'ubicacion' => 'required|string|max:255',
        ]);
    
        $medio = new MaterialApoyo();
        $medio->bibliografia = $request->input('bibliografia');
        $medio->ubicacion = $request->input('ubicacion');
        $medio->save();
    
        return response()->json(['success' => true]);
    }
}
