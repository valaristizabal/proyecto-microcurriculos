<?php

namespace App\Http\Controllers;
use App\Models\Curso;
use Illuminate\Http\Request;

class CursoController extends Controller{


    public function showCursos(){
        $cursos = Curso::all(); 
        return response()->json($cursos);
    }

    public function getCurso($codCurso){
        $curso = Curso::where('cod_curso', $codCurso)->first();
        return response()->json($curso);
    }
    public function guardarCurso(Request $request){
        // Validar los datos del formulario
        $request->validate([
            'cod_curso' => 'required|string|max:50',
            'curso' => 'required|string|max:255',
            'activa' => 'nullable|integer',
            'modalidad' => 'nullable|string|max:100',
            'area_conocimiento' => 'nullable|string|max:255',
            'tipo_curso' => 'nullable|string|max:100',
            'cod_reglamento' => 'nullable|string|max:50',
            'creditos' => 'nullable|integer',
            'codigo_externo' => 'nullable|string|max:50',
            'horas_docente' => 'nullable|integer',
            'tipo_nota_gen' => 'nullable|string|max:50',
            'idioma_gen' => 'nullable|string|max:50',
        ]);
    
        $curso = new Curso();
        $curso->cod_curso = $request->input('cod_curso');
        $curso->curso = strtoupper($request->input('curso'));
        $curso->activa = $request->input('activa');
        $curso->modalidad = strtoupper($request->input('modalidad'));
        $curso->area_conocimiento = strtoupper($request->input('area_conocimiento'));
        $curso->tipo_curso = strtoupper($request->input('tipo_curso'));
        $curso->cod_reglamento = strtoupper($request->input('cod_reglamento'));
        $curso->creditos = $request->input('creditos');
        $curso->codigo_externo = strtoupper($request->input('codigo_externo'));
        $curso->horas_docente = $request->input('horas_docente');
        $curso->tipo_nota_gen = strtoupper($request->input('tipo_nota_gen'));
        $curso->idioma_gen = strtoupper($request->input('idioma_gen'));
        $curso->save();
    
        return response()->json(['success' => true, 'curso' => $curso]);
    }
    
}
