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
            'range_area'=> $request->range_area,
            'range_desc'=> $request->range_desc
        ]);

        return response()->json($post, 200);
        // return $post;
        
    }

    public function ranges() {
        // $data = Range::all();
        $ranges = Range::with('range_area')->get();
        foreach ($ranges as $range) {
            $range->range_area;
        }
        return $ranges;
    }

    public function get_only_range($range_id) {
        $range = Range::where(['range_id'=>$range_id])->with('range_area')->first();
        return $range;
    }

    public function update_range(Request $request, $range_id) {
        $range = Range::where(['range_id'=>$range_id])->update([
                                                                'range_name'=> $request->range_name,
                                                                'range_area'=> $request->range_area,
                                                                'range_desc'=> $request->range_desc
        ]);
        return $range;

    }

    public function delete_range($range_id) {
        $range = Range::where(['range_id'=>$range_id])->delete();
        return $range;
    }
}
