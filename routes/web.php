<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use App\User;
session_start();
Route::get('login', 'LoginController@login_page');
Route::post('login/user', 'LoginController@login');
Route::get('logout/user', 'LoginController@logout');

// Route::middleware('isAdmin')->group(function(){ 
    Route::get('/', 'AdminController@index');
// });

// Route::middleware('isStudent')->group(function(){ 
    Route::get('/student', 'StudentController@index');
// });
Route::get('/get-session', 'AdminController@get_session');

// Route::post('/post-create-area', 'AreaController@create_area');

