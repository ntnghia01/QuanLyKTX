<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index() {
        if(Session::get('user_id') && Session::get('user_role')==0){
            return view('student');
        }
        return redirect('login');
    }
}
