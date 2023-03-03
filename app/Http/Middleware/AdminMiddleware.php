<?php

namespace App\Http\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use Closure;

class AdminMiddleware
{
    const GUARD_ADMIN = 'isAdmin';
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // if (! $request->expectsJson()) {
        //     return route('login');
        // }
        if(Auth::check()){
            echo "Dung";
            if(Auth::user()->user_role==1){
                echo "Dunggggg";
                return $next($request);
            } 
            // else{
            //     return redirect('/login');
            // }
        } else{
            echo "Saiiii";
            return  redirect('/login');
        }
    }
}
