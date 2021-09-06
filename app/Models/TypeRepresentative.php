<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\EncryptationId;

class TypeRepresentative extends Model
{
    use EncryptationId;

    protected $table = "type_representatives";  
    protected $fillable = ['id','name_type_representative','status','user_id','date_register','ip'];
    protected $connection = "mysql";
    public $timestamps = false;
    protected $appends =['crypt_id'];

    public function getUser()
    {
        return $this->belongsTo('App\Models\User', 'user_id');
    }
}
