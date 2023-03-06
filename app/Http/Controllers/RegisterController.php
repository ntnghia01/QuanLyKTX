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
            'regis_student'=> $request->regis_student
        ]);

        return response()->json($post, 200);
        
    }
}
