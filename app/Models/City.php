<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\EncryptationId;

class City extends Model
{
    use EncryptationId;

    protected $table = "cities";  
    protected $fillable = ['id','name_city','capital','state_id','user_id','date_register','ip'];
    protected $connection = "mysql";
    public $timestamps = false;
    protected $appends =['crypt_id'];

    public function getState()
    {
        return $this->belongsTo('App\Models\State', 'state_id');
    }

    public function getUser()
    {
        return $this->belongsTo('App\Models\User', 'user_id');
    }
}
