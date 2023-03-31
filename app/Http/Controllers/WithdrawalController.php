<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Withdrawal;
use App\Models\Room;

use Carbon\Carbon;

class WithdrawalController extends Controller
{
    public function create_withdrawal(Request $request)
    {
        $data = $request->all();
        $post = Withdrawal::create([
            'withdrawal_regis'   => $request->withdrawal_regis,
            'withdrawal_reason'  => $request->withdrawal_reason,
            'withdrawal_status'  => $request->withdrawal_status,
            'withdrawal_approve' => $request->withdrawal_approve
        ]);

        return response()->json($post, 200);
    }

    public function withdrawals() {
        $withdrawals = Withdrawal::with('withdrawal_regis')
                                ->join('registration', 'withdrawals.withdrawal_regis', '=', 'registration.regis_id')
                                ->join('users', 'registration.regis_student', '=', 'users.id')
                                ->join('rooms', 'registration.regis_room', '=', 'rooms.room_id')
                                ->get();
        foreach ($withdrawals as $withdrawal) {
            $withdrawal->withdrawal_regis;
        }
        return $withdrawals;
    }

    public function withdrawal_by_student($student_id) {
        $withdrawal = Withdrawal::join('registration', 'withdrawals.withdrawal_regis', '=', 'registration.regis_id')
                                ->join('users', 'registration.regis_student', '=', $student_id)
                                ->first();
        return $withdrawal;
    }

    public function approve_withdrawal($withdrawal_id, Request $request) {

        $withdrawal = Withdrawal::with('withdrawal_regis')
                                ->join('registration', 'withdrawals.withdrawal_regis', '=', 'registration.regis_id')
                                ->join('users', 'registration.regis_student', '=', 'users.id')
                                ->join('rooms', 'registration.regis_room', '=', 'rooms.room_id')
                                ->find($withdrawal_id);
        $withdrawal->withdrawal_status=$request->withdrawal_status;
        $withdrawal->withdrawal_approve = Carbon::now()->toDateString();
        $withdrawal->save();

        $room = Room::find($request->room_id);
        $room->room_quantity=$room->room_quantity-1;
        $room->save();

        return $withdrawal;

    }

    public function refuse_withdrawal($withdrawal_id, Request $request) {

        $withdrawal = Withdrawal::with('withdrawal_regis')
                                ->join('registration', 'withdrawals.withdrawal_regis', '=', 'registration.regis_id')
                                ->join('users', 'registration.regis_student', '=', 'users.id')
                                ->join('rooms', 'registration.regis_room', '=', 'rooms.room_id')
                                ->find($withdrawal_id);
        $withdrawal->withdrawal_status=$request->withdrawal_status;
        $withdrawal->withdrawal_approve = Carbon::now()->toDateString();
        $withdrawal->save();
        
        return $withdrawal;

    }
}
