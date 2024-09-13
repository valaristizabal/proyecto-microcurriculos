<?php

namespace App\Http\Controllers;
use App\Models\Facultad;
use Illuminate\Http\Request;

class FacultadController extends Controller
{
    public function guardarFacultad(Request $request){
        // Validar los datos del formulario
        $request->validate([
            'cod_facultad' => 'required|string|max:255',
            'nom_facultad' => 'required|string|max:255',
            'sede' => 'nullable|string|max:255',
        ]);

        // Crear una nueva instancia de Facultad
        $facultad = new Facultad();
        $facultad->cod_facultad = $request->input('cod_facultad');
        $facultad->nom_facultad = strtoupper($request->input('nom_facultad'));
        $facultad->sede = strtoupper($request->input('sede'));
        $facultad->save(); 

        // Devolver una respuesta JSON
        return response()->json(['success' => true]);
    }

    public function showFacultades(){
        $facultades = Facultad::all(); 
        return response()->json($facultades);
    }

    public function getFacultad($codFacultad){
        $facultad = Facultad::where('cod_facultad', $codFacultad)->first();
        return response()->json($facultad);
    }

public function updateFacultad(Request $request){
    $request->validate([
        'cod_facultad' => 'required',
        'nom_facultad' => 'required',
        'sede' => 'nullable',
    ]);

    $facultad = Facultad::where('cod_facultad', $request->cod_facultad)->first();
    if ($facultad) {
        $facultad->nom_facultad = strtoupper($request->nom_facultad);
        $facultad->sede = strtoupper($request->sede);
        $facultad->save();
        return response()->json(['success' => true]);
    }

    return response()->json(['success' => false], 404);
}

    public function eliminarFacultades($cod_facultad){
        $facultad = Facultad::find($cod_facultad);

        if ($facultad) {
            $facultad->delete();
            return response()->json(['success' => true]);
        } else {
            return response()->json(['success' => false], 404);
        }
    }

    public function search(Request $request){
        $query = Facultad::query();

        if ($request->filled('cod_facultad')) {
            $query->where('cod_facultad', 'like', '%' . $request->cod_facultad . '%');
        }

        if ($request->filled('nom_facultad')) {
            $query->where('nom_facultad', 'like', '%' . $request->nom_facultad . '%');
        }

        if ($request->filled('sede')) {
            $query->where('sede', $request->cod_fasedecultad);
        }


        $facultades = $query->get();

        return response()->json($facultades);
    }


}
