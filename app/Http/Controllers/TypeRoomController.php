<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TypeRoom;

class TypeRoomController extends Controller
{
    public function create_type_room(Request $request)
    {
        $data = $request->all();
        $post = TypeRoom::create([
            'type_name'=> $request->type_name,
            'type_gender'=> $request->type_gender,
            'type_cook'=> $request->type_cook,
            'type_capacity'=> $request->type_capacity,
            'type_desc'=> $request->type_desc,
            'type_price'=> $request->type_price
        ]);

        return response()->json($post, 200);
        // return $post;
        
    }

    public function type_rooms() {
        $data = TypeRoom::all();
        return $data;
    }

    public function get_only_type_room($type_id) {
        $type = TypeRoom::where(['type_id'=>$type_id])->first();
        return $type;
    }

    public function update_type_room(Request $request, $type_id) {
        $type = TypeRoom::where(['type_id'=>$type_id])->update([
                                                            'type_name'=> $request->type_name,
                                                            'type_gender'=> $request->type_gender,
                                                            'type_cook'=> $request->type_cook,
                                                            'type_capacity'=> $request->type_capacity,
                                                            'type_desc'=> $request->type_desc,
                                                            'type_price'=> $request->type_price
        ]);
        return $type;

    }
}
