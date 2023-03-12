<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Support\Facades\Session;
// use Session;
// session_start();

use Illuminate\Support\Facades\Auth;
use App\User;

class LoginController extends Controller
{

    public function login_page() {
        return view('login');
    }

    public function login(Request $req){
        // $cred = $req->validate([
        //     'email' => 'required|email|exists:users',
        //     'password'=> 'required|min:6'
        //  ]);
         if(Auth::attempt(['email'=>$req->email,'password'=>$req->password])){
            $user = User::where(['email'=>$req->email])->first();
            Session::put('user_name',$user->user_name);
            Session::put('user_id', $user->id);
            Session::put('email',$user->email);
            Session::put('user_role',$user->user_role);
            // $req->session()->put('user_name', $user->user_name);
            // $req
            // $req->session()->put('email', $user->email);
            return redirect('/');
         } 
         
         return redirect('login')->with('danger','Đăng nhập thất bại vui lòng đăng nhập lại');
    }

    public function logout() {
        Session::put('user_name',null);
        Session::put('user_id', null);
        Session::put('email',null);
        Session::put('user_role',null);
        return redirect('login');
    }

}
