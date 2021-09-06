<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\EncryptationId;

class SuspendedUser extends Model
{
    use EncryptationId;

    protected $table = "suspended_users";  
    protected $fillable = ['id','start_date','end_date','ip','user_suspended_id','user_id'];
    protected $connection = "mysql";
    protected $appends = ['crypt_id'];
    public $timestamps = false;
}
