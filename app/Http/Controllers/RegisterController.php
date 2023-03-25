<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Registration;
use App\Models\Room;
use App\Models\TypeRoom;

class RegisterController extends Controller
{
    public function create_registration(Request $request)
    {
        $data = $request->all();
        $post = Registration::create([
            'regis_room'=> $request->regis_room,
            'regis_student'=> $request->regis_student,
            'regis_status'=> $request->regis_status
        ]);
        return response()->json($post, 200);
        
    }

    public function registrations() {
        $registrations = Registration::with('regis_room')->with('regis_student')->get();
        foreach ($registrations as $registration) {
            $registration->regis_room;
            $registration->regis_student;
        }
        return $registrations;
    }

    public function get_only_registration($regis_id) {
        // $regis = Registration::where(['regis_id'=>$regis_id])->with('regis_student')->with('regis_room')->first();
        $regis = Registration::where(['regis_id'=>$regis_id])
                            ->join('users', 'registration.regis_student', '=', 'users.id')
                            ->join('rooms', 'registration.regis_room', '=', 'rooms.room_id')
                            ->join('type_rooms', 'rooms.room_type', '=', 'type_rooms.type_id')
                            ->first();
        return $regis;
    } // dung de tao hoa don tien phong

    public function get_regis_data() {
        $data = Registration::join('rooms', 'registration.regis_room', '=', 'rooms.room_id')
                            ->join('type_rooms', 'rooms.room_type', '=', 'type_rooms.type_id')
                            ->get();
        return $data;
        // $regis = Registration::with('regis_room')->with('rooms',function($query){
        //     $query->with('room_type');
        // })->get();
        // return $regis;
    }

    public function register_approve($regis_id, Request $request) {

        $regis = Registration::with('regis_room')->with('regis_student')->find($regis_id);
        $regis->regis_status=$request->regis_status;
        $regis->save();

        $room = Room::find($request->room_id);
        $room->room_quantity=$room->room_quantity+1;
        $room->save();

        $type_room = TypeRoom::find($room->room_type);
        $room = Room::find($request->room_id);
        if ($room->room_quantity == $type_room->type_capacity) {
            $room->room_status = "Đã đầy";
        }
        $room->save();
        // return response()->json(($room->room_quantity == $type_room->type_capacity), 200);
        // return $room->room_status;
        return $regis;

        // $regis = Registration::find($regis_id)->update(['regis_status'=>$request->regis_status]);
        // return response()->json($regis, 200);
    }

    public function get_student_registration($student_id) {
        // $regis = Registration::where(['regis_id'=>$regis_id])->with('regis_student')->with('regis_room')->first();
        $regis = Registration::where(['regis_student'=>$student_id])
                            ->join('users', 'registration.regis_student', '=', 'users.id')
                            ->join('rooms', 'registration.regis_room', '=', 'rooms.room_id')
                            ->join('ranges', 'rooms.room_range', '=', 'ranges.range_id')//range
                            ->join('area', 'ranges.range_area', '=', 'area.area_id')//area
                            ->join('type_rooms', 'rooms.room_type', '=', 'type_rooms.type_id')
                            ->join('elec_water_bills', 'rooms.room_id', '=', 'elec_water_bills.elec_water_bill_id') // chi lay duoc 1 bill
                            ->first();
        return $regis;
    }

    
}
