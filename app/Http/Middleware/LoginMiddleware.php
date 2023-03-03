<?php

namespace App\Http\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use Closure;

class LoginMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    // public function handle($request, Closure $next)
    // {
    //     return $next($request);
    // }
    public function handle(Request $request, Closure $next)
    {
        if(Auth::check()){
            if(Auth::user()->role=='0'){
                return $next($request);
            } else if(Auth::user()->user_role=='1'){
                return 
            }
            
            else{
                return redirect('/login-admin');
            }
        } else{
            return  redirect('/login-admin');
        }
        // return $next($request);
    }
}
