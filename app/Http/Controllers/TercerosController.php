<?php

namespace App\Http\Controllers;

use App\Models\Terceros;
use Illuminate\Http\Request;

class TercerosController extends Controller{
    public function guardarTercero(Request $request){
        $request->validate([
            'primer_nombre' => 'required|string|max:255',
            'segundo_nombre' => 'nullable|string|max:255',
            'primer_apellido' => 'required|string|max:255',
            'segundo_apellido' => 'nullable|string|max:255',
            'cedula' => 'required|string|unique:terceros,cedula',
            'rol' => 'required|string|max:255',
        ]);

        $tercero = new Terceros();
        $tercero->primer_nombre = $request->input('primer_nombre');
        $tercero->segundo_nombre = $request->input('segundo_nombre');
        $tercero->primer_apellido = $request->input('primer_apellido');
        $tercero->segundo_apellido = $request->input('segundo_apellido');
        $tercero->cedula = $request->input('cedula');
        $tercero->rol = $request->input('rol');
        $tercero->save();

        return response()->json(['success' => true]);
    }

}
