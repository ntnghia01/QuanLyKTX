<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Withdrawal extends Model
{
    protected $table = 'withdrawals';
    protected $primaryKey = 'withdrawal_id';
    protected $fillable = [
        'withdrawal_id',
        'withdrawal_regis',
        'withdrawal_reason',
        'withdrawal_status',
        'withdrawal_approve',
        'created_at',
        'updated_at',
    ];
    
    public function withdrawal_regis() {
        return $this->belongsTo(Registration::class, 'withdrawal_regis');
    }
}
