<?php

namespace App\Http\Controllers;

use App\Models\IndicadoresCompetenciaEspecifica;
use Illuminate\Http\Request;

class IndicadoresCompetenciaEspecificaController extends Controller{
    public function guardarIndicadoresCompetenciaEspecifica(Request $request){
        $request->validate([
            'descripcion_indicadores_competencia_especifica' => 'required|string',
        ]);

        $indicador = new IndicadoresCompetenciaEspecifica();
        $indicador->descripcion_indicadores_competencia_especifica = $request->input('descripcion_indicadores_competencia_especifica');
        $indicador->save();

        return response()->json(['success' => true]);
    }

}
