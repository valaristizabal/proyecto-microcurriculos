<?php

namespace App\Http\Controllers;

use App\Models\PropositosFormativos;
use Illuminate\Http\Request;

class PropisitosFormativosController extends Controller{
    public function guardarPropositosFormativos(Request $request){
        $request->validate([
            'id_competencias_graduado_asociadas_curso' => 'required|exists:competencias_graduado_asociadas_curso,id_competencias_graduado_asociadas_curso',
            'id_resultados_aprendizaje_graduado_asociados_curso' => 'required|exists:resultados_aprendizaje_graduado_asociados_curso,id_resultados_aprendizaje_graduado_asociados_curso',
            'id_resultados_aprendizaje_competencia_principal_curso' => 'required|exists:resultados_aprendizaje_competencia_principal_curso,id_resultados_aprendizaje_competencia_principal_curso',
            'aporte_perfil_graduado' => 'required|string',
            'competencia_principal_curso' => 'required|string',
        ]);
    
        $proposito = new PropositosFormativos();
        $proposito->id_competencias_graduado_asociadas_curso = $request->input('id_competencias_graduado_asociadas_curso');
        $proposito->id_resultados_aprendizaje_graduado_asociados_curso = $request->input('id_resultados_aprendizaje_graduado_asociados_curso');
        $proposito->id_resultados_aprendizaje_competencia_principal_curso = $request->input('id_resultados_aprendizaje_competencia_principal_curso');
        $proposito->aporte_perfil_graduado = $request->input('aporte_perfil_graduado');
        $proposito->competencia_principal_curso = $request->input('competencia_principal_curso');
        $proposito->save();
    
        return response()->json(['success' => true]);
    }
        
}
