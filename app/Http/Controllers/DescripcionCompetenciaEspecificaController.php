<?php

namespace App\Http\Controllers;
use App\Models\DescripcionCompetenciaEspecifica;
use Illuminate\Http\Request;

class DescripcionCompetenciaEspecificaController extends Controller{
    public function guardarDescripcionCompetenciaEspecifica(Request $request){
        $request->validate([
            'descripcion_competencia_especifica' => 'required|string',
        ]);

        $descripcion = new DescripcionCompetenciaEspecifica();
        $descripcion->descripcion_competencia_especifica = $request->input('descripcion_competencia_especifica');
        $descripcion->save();

        return response()->json(['success' => true]);
    }

}
