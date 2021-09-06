<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use App\Traits\EncryptationId;

class Operative extends Model
{
    use EncryptationId;

    protected $table = "operatives";  
    protected $fillable = ['id','name_operative','owner','date_operative','status','user_id','date_register','ip'];
    protected $connection = "mysql";
    public $timestamps = false;
    protected $appends =['crypt_id'];

    public function getTypeCoin()
    {
        return $this->belongsTo('App\Models\User', 'user_id');
    }
}
