<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Range extends Model
{
    protected $table = 'ranges';
    protected $primaryKey = 'range_id';
    protected $fillable = [
        'range_id',
        'range_name',
        'range_desc',
    ];
}
