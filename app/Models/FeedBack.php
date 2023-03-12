<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use App\User;

class FeedBack extends Model
{
    protected $table = 'feedback';
    protected $primaryKey = 'feedback_id';
    protected $fillable = [
        'feedback_id',
        'feedback_user',
        'feedback_type',
        'feedback_title',
        'feedback_content',
        'feedback_status',
        'created_at',
        'updated_at',
    ];
    
    public function feedback_user() {
        return $this->belongsTo(User::class, 'feedback_user');
    }

}
