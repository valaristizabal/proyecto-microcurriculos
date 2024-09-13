<?php

namespace App\Http\Controllers;

use App\Models\ConsistenciaCurricular;
use Illuminate\Http\Request;

class ConsistenciaCurricularController extends Controller{
    public function guardarConsistenciaCurricular(Request $request){
        $request->validate([
            'horizontal' => 'required|string',
            'vertical' => 'required|string',
            'transversal' => 'required|string',
        ]);
    
        $consistencia = new ConsistenciaCurricular();
        $consistencia->horizontal = $request->input('horizontal');
        $consistencia->vertical = $request->input('vertical');
        $consistencia->transversal = $request->input('transversal');
        $consistencia->save();
    
        return response()->json(['success' => true]);
    }
    
}
