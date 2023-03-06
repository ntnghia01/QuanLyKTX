<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Registration extends Model
{
    protected $table = 'registration';
    protected $primaryKey = 'regis_id';
    protected $fillable = [
        'regis_id',
        'regis_room',
        'regis_student',
        'created_at',
        'updated_at',
    ];
    
    public function regis_room() {
        return $this->belongsTo(Room::class, 'regis_room');
    }

    public function regis_student() {
        return $this->belongsTo(User::class, 'regis_student');
    }
}
