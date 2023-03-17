<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Registration;

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
    }

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

    
}
