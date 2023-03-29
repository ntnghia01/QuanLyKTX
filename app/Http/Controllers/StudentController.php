<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;

class StudentController extends Controller
{
    public function index() {
        if(Session::get('user_id') && Session::get('user_role')==0){
            return view('student');
        }
        return redirect('login');
    }

    public function personal_infomation($user_id) {
        $user = User::where(['id'=>$user_id])->first();
        return $user;
    }

    public function update_personal_infomation(Request $request, $user_id) {
        $info = User::where(['id'=>$user_id])->update([
            'user_name'=> $request->personal_mssv,
            'user_fullname'=> $request->personal_name,
            'email'=> $request->personal_email,
            'user_major'=> $request->personal_major,
            'user_address'=> $request->personal_address,
            'user_phone'=> $request->personal_phone,
            'user_birthday'=> $request->personal_birthday,
            'user_class'=> $request->personal_class,
            'user_course'=> $request->personal_course
        ]);
        return $info;
    }
}
