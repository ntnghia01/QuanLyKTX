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
}
