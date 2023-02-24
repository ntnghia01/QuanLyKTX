<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    protected $table = 'rooms';
    protected $primaryKey = 'room_id';
    protected $fillable = [
        'room_id',
        'room_name',
        'room_range',
        'room_type',
        'room_quantity',
        'room_status',
        'room_desc',
    ];
    
    public function room_range() {
        return $this->belongsTo(Range::class, 'room_range');
    }

    public function room_type() {
        return $this->belongsTo(TypeRoom::class, 'room_type');
    }
}
