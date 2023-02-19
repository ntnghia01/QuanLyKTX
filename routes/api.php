<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Area (Khu)
Route::get('/get-area', 'AreaController@areas');
Route::post('/post-create-area', 'AreaController@create_area');

// Range (Dãy)
Route::get('/get-range', 'RangeController@ranges');
Route::post('/post-create-range', 'RangeController@create_range');




// Route::get('{post}', 'PostController@show')->name('show') //Chi tiết;
// Route::post('{post}', 'PostController@update')->name('update') //Cập nhập;
// Route::post('delete/{post}', 'PostController@delete')->name('delete') //Xóa;

