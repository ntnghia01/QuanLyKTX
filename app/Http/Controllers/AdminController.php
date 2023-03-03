<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Redirect;

class AdminController extends Controller
{
    public function index() {
        // if(Auth::check()){
            if(Session::get('user_id')){
                return view('admin');
            }
            return redirect('login');
        // } else {
            // return redirect('login');
        // }
        
    }

    public function register(Request $req) {
        $user = User::create([
            'user_name' => $req->user_name,
            'email' => $req->email,
            'user_role' => $req->user_role,
            'password' => bcrypt($req->password)
        ]);
        return $user;
    }

    public function get_session() {
        return response()->json([
            'user_id' => Session::get('user_id'),
            'user_role' => Session::get('user_role')
        ]);
    }
}
