<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Range;

class RangeController extends Controller
{
    public function create_range(Request $request)
    {
        $data = $request->all();
        $post = Range::create([
            'range_name'=> $request->range_name,
            'range_desc'=> $request->range_desc
        ]);

        return response()->json($post, 200);
        // return $post;
        
    }

    public function ranges() {
        $data = Range::all();
        return $data;
    }
}
