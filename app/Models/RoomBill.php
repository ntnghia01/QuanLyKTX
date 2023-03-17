<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Registration;

class RoomBill extends Model
{
    protected $table = 'room_bills';
    protected $primaryKey = 'room_bill_id';
    protected $fillable = [
        'room_bill_id',
        'room_bill_name',
        'room_bill_regis',
        'room_bill_semester',
        'room_bill_money',
        'room_bill_due',
        'room_bill_pay',
        'room_bill_note',
        'room_bill_status',
        'created_at',
        'updated_at',
    ];
    
    public function room_bill_regis() {
        return $this->belongsTo(Registrattion::class, 'room_bill_regis');
    }

}
