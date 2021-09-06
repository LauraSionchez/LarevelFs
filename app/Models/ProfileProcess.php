<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\EncryptationId;

class ProfileProcess extends Model
{
    use EncryptationId;

    protected $table = "profile_processes";  
    protected $fillable = ['id','date_register','process_id','profile_id'];
    protected $connection = "mysql";
    protected $appends = ['crypt_id'];
    public $timestamps = false;
}
