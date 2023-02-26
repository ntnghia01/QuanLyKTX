<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ElecWaterBill extends Model
{
    protected $table = 'elec_water_bills';
    protected $primaryKey = 'elec_water_bill_id';
    protected $fillable = [
        'elec_water_bill_id',
        'elec_water_bill_name',
        'elec_water_bill_room',
        'elec_water_bill_month',
        'elec_water_bill_semester',
        'elec_water_bill_elec',
        'elec_water_bill_water',
        'elec_water_bill_money',
        'elec_water_bill_due',
        'elec_water_bill_pay',
        'elec_water_bill_note',
        'elec_water_bill_status',
    ];
    
    public function elec_water_bill_room() {
        return $this->belongsTo(Room::class, 'elec_water_bill_room');
    }

}
