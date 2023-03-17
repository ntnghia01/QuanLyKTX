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

    public function get_only_area($area_id) {
        $area = Area::where(['area_id'=>$area_id])->first();
        return $area;
    }

    public function update_area(Request $request, $area_id) {
        $area = Area::where(['area_id'=>$area_id])->update([
                                                            'area_name'=> $request->area_name,
                                                            'area_desc'=> $request->area_desc
        ]);
        return $area;

    }

    public function delete_area($area_id) {
        $area = Area::where(['area_id'=>$area_id])->delete();
        return $area;
    }

}
