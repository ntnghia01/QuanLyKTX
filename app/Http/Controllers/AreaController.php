<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Area;

class AreaController extends Controller
{
    public function create_area(Request $request)
    {
        $data = $request->all();
        $post = Area::create([
            'area_name'=> $request->area_name,
            'area_desc'=> $request->area_desc

        ]);

        return response()->json($post, 200);
        // return $post;
        
    }

    public function areas() {
        $data = Area::all();
        return $data;
    }
}
