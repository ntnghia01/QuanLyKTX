<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TypeRoom extends Model
{
    protected $table = 'type_rooms';
    protected $primaryKey = 'type_id';
    protected $fillable = [
        'type_id',
        'type_name',
        'type_gender',
        'type_cook',
        'type_capacity',
        'type_desc',
        'type_price'
    ];
}
