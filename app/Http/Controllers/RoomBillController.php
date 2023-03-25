<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RoomBill;
use Carbon\Carbon;

class RoomBillController extends Controller
{
    public function create_room_bill(Request $request)
    {
        $data = $request->all();
        $post = RoomBill::create([
            'room_bill_name'    => $request->room_bill_name,
            'room_bill_regis'   => $request->room_bill_regis,
            'room_bill_semester'=> $request->room_bill_semester,
            'room_bill_money'   => $request->room_bill_money,
            'room_bill_due'     => $request->room_bill_due,
            'room_bill_pay'     => $request->room_bill_pay,
            'room_bill_note'    => $request->room_bill_note,
            'room_bill_status'  => $request->room_bill_status
        ]);

        return response()->json($post, 200);
    }

    public function room_bills() {
        // $data = Range::all();
        $room_bills = RoomBill::with('room_bill_regis')
                            ->join('registration', 'room_bills.room_bill_regis', '=', 'registration.regis_id')
                            ->join('users', 'registration.regis_student', '=', 'users.id')
                            ->join('rooms', 'registration.regis_room', '=', 'rooms.room_id')
                            ->get();
        foreach ($room_bills as $room_bill) {
            $room_bill->room_bill_regis;
        }
        return $room_bills;
    }

    public function delete_room_bill($room_bill_id) {
        $room_bill = RoomBill::where(['room_bill_id'=>$room_bill_id])->delete();
        return $room_bill;
    }

    public function pay_room_bill($room_bill_id, Request $request) {

        $room_bill = RoomBill::with('room_bill_regis')
                            ->join('registration', 'room_bills.room_bill_regis', '=', 'registration.regis_id')
                            ->join('users', 'registration.regis_student', '=', 'users.id')
                            ->join('rooms', 'registration.regis_room', '=', 'rooms.room_id')
                            ->find($room_bill_id);
        $room_bill->room_bill_status=$request->room_bill_status;
        $room_bill->room_bill_pay = Carbon::now()->toDateString();
        $room_bill->save();

        return $room_bill;

    }

    public function room_bill_by_regis($regis_id) {
        $room_bill_by_regis = RoomBill::where(['room_bill_regis'=>$regis_id])->get();
        return $room_bill_by_regis;
    }

}
