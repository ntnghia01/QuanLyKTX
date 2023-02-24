<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Room;

class RoomController extends Controller
{
    public function create_room(Request $request)
    {
        $data = $request->all();
        $post = Room::create([
            'room_name'=> $request->room_name,
            'room_range'=> $request->room_range,
            'room_type'=> $request->room_type,
            'room_quantity'=> $request->room_quantity,
            'room_status'=> $request->room_status,
            'room_desc'=> $request->room_desc
        ]);

        return response()->json($post, 200);
        
    }

    public function rooms() {
        // $data = Range::all();
        $rooms = Room::with('room_range')->with('room_type')->get();
        foreach ($rooms as $room) {
            $room->room_range;
            $room->room_type;
        }
        return $rooms;
    }

    public function get_only_room($room_id) {
        $room = Room::where(['room_id'=>$room_id])->with('room_range')->with('room_type')->first();
        return $room;
    }

    public function update_room(Request $request, $room_id) {
        $room = Room::where(['room_id'=>$room_id])->update([
                                                                'room_name'=> $request->room_name,
                                                                'room_range'=> $request->room_range,
                                                                'room_type'=> $request->room_type,
                                                                'room_quantity'=> $request->room_quantity,
                                                                'room_status'=> $request->room_status,
                                                                'room_desc'=> $request->room_desc
        ]);
        return $room;

    }
}
