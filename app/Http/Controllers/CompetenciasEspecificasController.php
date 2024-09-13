<?php

namespace App\Http\Controllers;

use App\Models\CompetenciasEspecificas;
use Illuminate\Http\Request;

class CompetenciasEspecificasController extends Controller{
    public function guardarCompetenciasEspecificas(Request $request){
        $request->validate([
            'id_descripcion_competencia_especifica' => 'required|exists:descripcion_competencia_especifica,id_descripcion_competencia_especifica',
            'id_indicadores_competencia_especifica' => 'required|exists:indicadores_competencia_especifica,id_indicadores_competencia_especifica',
        ]);

        $competencia = new CompetenciasEspecificas();
        $competencia->id_descripcion_competencia_especifica = $request->input('id_descripcion_competencia_especifica');
        $competencia->id_indicadores_competencia_especifica = $request->input('id_indicadores_competencia_especifica');
        $competencia->save();

        return response()->json(['success' => true]);
    }

}
