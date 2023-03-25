<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ElecWaterBill;
use Carbon\Carbon;

class ElecWaterBillController extends Controller
{
    public function create_elec_water_bill(Request $request)
    {
        $data = $request->all();
        $post = ElecWaterBill::create([
            'elec_water_bill_id'=> $request->elec_water_bill_id,
            'elec_water_bill_name'=> $request->elec_water_bill_name,
            'elec_water_bill_room'=> $request->elec_water_bill_room,
            'elec_water_bill_month'=> $request->elec_water_bill_month,
            'elec_water_bill_semester'=> $request->elec_water_bill_semester,
            'elec_water_bill_elec'=> $request->elec_water_bill_elec,
            'elec_water_bill_water'=> $request->elec_water_bill_water,
            'elec_water_bill_money'=> $request->elec_water_bill_money,
            'elec_water_bill_due'=> $request->elec_water_bill_due,
            'elec_water_bill_pay'=> $request->elec_water_bill_pay,
            'elec_water_bill_note'=> $request->elec_water_bill_note,
            'elec_water_bill_status'=> $request->elec_water_bill_status
        ]);

        return response()->json($post, 200);
        
    }

    public function elec_water_bills() {
        // $data = Range::all();
        $elec_water_bills = ElecWaterBill::with('elec_water_bill_room')->get();
        foreach ($elec_water_bills as $elec_water_bill) {
            $elec_water_bill->elec_water_bill_room;
        }
        return $elec_water_bills;
    }

    public function get_only_elec_water_bill($elec_water_bill_id) {
        $elec_water_bill = ElecWaterBill::where(['elec_water_bill_id'=>$elec_water_bill_id])->with('elec_water_bill_room')->first();
        return $elec_water_bill;
    }

    public function update_elec_water_bill(Request $request, $elec_water_bill_id) {
        $elec_water_bill = ElecWaterBill::where(['elec_water_bill_id'=>$elec_water_bill_id])->update([
                                                                                            'elec_water_bill_name'      => $request->elec_water_bill_name,
                                                                                            'elec_water_bill_room'      => $request->elec_water_bill_room,
                                                                                            'elec_water_bill_month'     => $request->elec_water_bill_month,
                                                                                            'elec_water_bill_semester'  => $request->elec_water_bill_semester,
                                                                                            'elec_water_bill_elec'      => $request->elec_water_bill_elec,
                                                                                            'elec_water_bill_water'     => $request->elec_water_bill_water,
                                                                                            'elec_water_bill_money'     => $request->elec_water_bill_money,
                                                                                            'elec_water_bill_due'       => $request->elec_water_bill_due,
                                                                                            'elec_water_bill_pay'       => $request->elec_water_bill_pay,
                                                                                            'elec_water_bill_note'      => $request->elec_water_bill_note,
                                                                                            'elec_water_bill_status'    => $request->elec_water_bill_status
        ]);
        return $elec_water_bill;
    }

    public function delete_elec_water_bill($elec_water_bill_id) {
        $elec_water_bill = ElecWaterBill::where(['elec_water_bill_id'=>$elec_water_bill_id])->delete();
        // $elec_water_bill->save();
        return $elec_water_bill;
    }

    public function pay_elec_water_bill($elec_water_bill_id, Request $request) {

        $elec_water_bill = ElecWaterBill::with('elec_water_bill_room')->find($elec_water_bill_id);
        $elec_water_bill->elec_water_bill_status=$request->elec_water_bill_status;
        $elec_water_bill->elec_water_bill_pay = Carbon::now()->toDateString();
        $elec_water_bill->save();

        return $elec_water_bill;

    }

    public function elec_water_bill_by_room($room_id) {
        $elec_water_bill_by_room = ElecWaterBill::where(['elec_water_bill_room'=>$room_id])->get();
        return $elec_water_bill_by_room;
    }

}
