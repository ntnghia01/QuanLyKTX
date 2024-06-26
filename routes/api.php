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
Route::delete('/delete-area/{area_id}', 'AreaController@delete_area');

// Range (Dãy)
Route::get('/get-range', 'RangeController@ranges');
Route::post('/post-create-range', 'RangeController@create_range');
Route::get('/get-only-range/{range_id}', 'RangeController@get_only_range');
Route::put('/update-range/{range_id}', 'RangeController@update_range');
Route::delete('/delete-range/{range_id}', 'RangeController@delete_range');

// Type Room (Loại phòng)
Route::get('/get-type-room', 'TypeRoomController@type_rooms');
Route::post('/post-create-type-room', 'TypeRoomController@create_type_room');
Route::get('/get-only-type-room/{type_id}', 'TypeRoomController@get_only_type_room');
Route::put('/update-type-room/{type_id}', 'TypeRoomController@update_type_room');
Route::delete('/delete-type-room/{type_id}', 'TypeRoomController@delete_type_room');

// Room (Phòng)
Route::get('/get-room', 'RoomController@rooms');
Route::post('/post-create-room', 'RoomController@create_room');
Route::get('/get-only-room/{room_id}', 'RoomController@get_only_room');
Route::put('/update-room/{room_id}', 'RoomController@update_room');
Route::delete('/delete-room/{room_id}', 'RoomController@delete_room');
Route::get('/student-in-room/{room_id}', 'RoomController@student_in_room');

// Electricity Water Bill (Hóa đơn điện nước)
Route::get('/get-elec-water-bill', 'ElecWaterBillController@elec_water_bills');
Route::post('/post-create-elec-water-bill', 'ElecWaterBillController@create_elec_water_bill');
Route::get('/get-only-elec-water-bill/{elec_water_bill_id}', 'ElecWaterBillController@get_only_elec_water_bill');
Route::put('/update-elec-water-bill/{elec_water_bill_id}', 'ElecWaterBillController@update_elec_water_bill');
Route::delete('/delete-elec-water-bill/{elec_water_bill_id}', 'ElecWaterBillController@delete_elec_water_bill');
Route::put('/pay-elec-water-bill/{elec_water_bill_id}', 'ElecWaterBillController@pay_elec_water_bill');

// Account (Tài khoản)
Route::get('/get-account', 'AdminController@accounts');
Route::post('/register', 'AdminController@register');


// Registration (Đăng ký phòng ở)
Route::get('/get-registration', 'RegisterController@registrations');
Route::post('/post-registration', 'RegisterController@create_registration');
Route::get('/get-only-registration/{regis_id}', 'RegisterController@get_only_registration');
Route::post('/register-room/{item.room_id}', 'RegisterController@register_room');
Route::put('/register-approve/{regis_id}', 'RegisterController@register_approve');
Route::put('/register-deny/{regis_id}', 'RegisterController@register_deny');


// Feedback (Ý kiến phản hồi)
Route::get('/get-feedback', 'FeedBackController@feedbacks');
Route::post('/post-feedback', 'FeedBackController@create_feedback');
Route::put('/approve-feedback/{feedback_id}', 'FeedBackController@approve_feedback');
Route::get('/get-feedback-by-student/{student_id}', 'FeedBackController@feedback_by_student');

// Room Bill (Hóa đơn tiền phòng)
Route::post('/post-room-bill', 'RoomBillController@create_room_bill');
Route::get('/get-room-bill', 'RoomBillController@room_bills');
Route::delete('/delete-room-bill/{room_bill_id}', 'RoomBillController@delete_room_bill');
Route::put('/pay-room-bill/{room_bill_id}', 'RoomBillController@pay_room_bill');

// Room Infomation (Thông tin phòng đăng ký)
Route::get('/get-registration-by-student/{student_id}', 'RegisterController@get_registration_by_student');
Route::get('/yes-no-registration/{student_id}', 'RegisterController@yes_no_registration');
Route::get('/elec-water-bill-by-room/{room_id}', 'ElecWaterBillController@elec_water_bill_by_room');
Route::get('/room-bill-by-regis/{regis_id}', 'RoomBillController@room_bill_by_regis');
Route::get('/personal-infomation/{user_id}', 'StudentController@personal_infomation');
Route::put('/update-personal-infomation/{user_id}', 'StudentController@update_personal_infomation');

// Withdrawal (Rút KTX)
Route::post('/post-withdrawal', 'WithdrawalController@create_withdrawal');
Route::get('/get-withdrawal', 'WithdrawalController@withdrawals');
Route::get('/get-withdrawal-by-student/{student_id}', 'WithdrawalController@withdrawal_by_student');
Route::put('/approve-withdrawal/{withdrawal_id}', 'WithdrawalController@approve_withdrawal');
Route::put('/refuse-withdrawal/{withdrawal_id}', 'WithdrawalController@refuse_withdrawal');




// use Illuminate\Support\Facades\Session;

// Route::get('/get-session', function () {
//     return response()->json([
//         'user_id' => Session::get('user_id')
//     ]);
// });



// Route::get('{post}', 'PostController@show')->name('show') //Chi tiết;
// Route::post('{post}', 'PostController@update')->name('update') //Cập nhập;
// Route::post('delete/{post}', 'PostController@delete')->name('delete') //Xóa;

