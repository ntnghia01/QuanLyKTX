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

// Route::get()

// Dashboard


// Area (Khu)
Route::get('/get-area', 'AreaController@areas');
Route::post('/post-create-area', 'AreaController@create_area');
Route::get('/get-only-area/{area_id}', 'AreaController@get_only_area');
Route::put('/update-area/{area_id}', 'AreaController@update_area');

// Range (Dãy)
Route::get('/get-range', 'RangeController@ranges');
Route::post('/post-create-range', 'RangeController@create_range');
Route::get('/get-only-range/{range_id}', 'RangeController@get_only_range');
Route::put('/update-range/{range_id}', 'RangeController@update_range');

// Type Room (Loại phòng)
Route::get('/get-type-room', 'TypeRoomController@type_rooms');
Route::post('/post-create-type-room', 'TypeRoomController@create_type_room');
Route::get('/get-only-type-room/{type_id}', 'TypeRoomController@get_only_type_room');
Route::put('/update-type-room/{type_id}', 'TypeRoomController@update_type_room');

// Room (Phòng)
Route::get('/get-room', 'RoomController@rooms');
Route::post('/post-create-room', 'RoomController@create_room');
Route::get('/get-only-room/{room_id}', 'RoomController@get_only_room');
Route::put('/update-room/{room_id}', 'RoomController@update_room');



// Route::get('{post}', 'PostController@show')->name('show') //Chi tiết;
// Route::post('{post}', 'PostController@update')->name('update') //Cập nhập;
// Route::post('delete/{post}', 'PostController@delete')->name('delete') //Xóa;

