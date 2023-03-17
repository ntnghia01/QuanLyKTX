<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RoomBill;

class RoomBillController extends Controller
{
    public function create_room_bill(Request $request)
    {
        $data = $request->all();
        $post = RoomBill::create([
            'room_bill_name'    => $request->room_bill_name,
            'room_bill_regis' => $request->room_bill_regis,
            'room_bill_semester'=> $request->room_bill_semester,
            'room_bill_money'   => $request->room_bill_money,
            'room_bill_due'     => $request->room_bill_due,
            'room_bill_pay'     => $request->room_bill_pay,
            'room_bill_note'    => $request->room_bill_note,
            'room_bill_status'  => $request->room_bill_status
        ]);

        return response()->json($post, 200);
        
    }
}
