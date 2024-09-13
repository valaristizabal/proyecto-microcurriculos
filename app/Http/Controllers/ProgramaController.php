<?php

namespace App\Http\Controllers;
use App\Models\Programa;
use Illuminate\Http\Request;

class ProgramaController extends Controller
{
    public function showProgramas(){
        $programas = Programa::all(); 
        return response()->json($programas);
    }
    
    public function getPrograma($codPrograma){
        $programa = Programa::where('cod_programa', $codPrograma)->first();
        return response()->json($programa);
    }

    public function guardarPrograma(Request $request){
        $request->all();
        $request->validate([
            'cod_programa' => 'required|string|unique:programa,cod_programa',
            'nom_programa_academico' => 'required|string',
            'cod_facultad' => 'string|exists:facultad,cod_facultad',
            'estado' => 'string',
            'tipo' => 'string',
        ]);

        $programa = Programa::create([
            'cod_programa' => $request->input('cod_programa'),
            'nom_programa_academico' => strtoupper($request->input('nom_programa_academico')),
            'cod_facultad' => $request->input('cod_facultad'),
            'estado' => strtoupper($request->input('estado')),
            'tipo' => strtoupper($request->input('tipo')),
        ]);

        return response()->json(['success' => true, 'programa' => $programa]);
    }

    public function updatePrograma(Request $request){
        $request->validate([
            'cod_programa' => 'required',
            'nom_programa_academico' => 'required',
            'cod_facultad' => 'required',
            'estado' => 'required',
            'tipo' => 'required',
        ]);
    
        $programa = Programa::where('cod_programa', $request->cod_programa)->first();
        if ($programa) {
            $programa->nom_programa_academico = strtoupper($request->nom_programa_academico);
            $programa->cod_facultad = strtoupper($request->cod_facultad);
            $programa->estado = strtoupper($request->estado);
            $programa->tipo = strtoupper($request->tipo);
            $programa->save();
            return response()->json(['success' => true]);
        }
    
        return response()->json(['success' => false], 404);
    }

    public function eliminarPrograma($cod_programa){
        $programa = Programa::find($cod_programa);

        if ($programa) {
            $programa->delete();
            return response()->json(['success' => true]);
        } else {
            return response()->json(['success' => false], 404);
        }
    }

    public function search(Request $request){
        $query = Programa::query();

        if ($request->filled('cod_programa')) {
            $query->where('cod_programa', 'like', '%' . $request->cod_programa . '%');
        }

        if ($request->filled('nom_programa_academico')) {
            $query->where('nom_programa_academico', 'like', '%' . $request->nom_programa_academico . '%');
        }

        if ($request->filled('cod_facultad')) {
            $query->where('cod_facultad', $request->cod_facultad);
        }

        if ($request->filled('estado')) {
            $query->where('estado', $request->estado);
        }

        if ($request->filled('tipo')) {
            $query->where('tipo', $request->tipo);
        }

        $programas = $query->get();

        return response()->json($programas);
    }

}
