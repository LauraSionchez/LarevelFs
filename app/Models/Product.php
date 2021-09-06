<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\EncryptationId;

class Product extends Model
{
    use EncryptationId;
    
    protected $table = "products";  
    protected $fillable = ['id','name_product','status','user_id','date_register','ip'];
    protected $connection = "mysql";
    public $timestamps = false;
    protected $appends =['crypt_id'];

    public function getUser()
    {
        return $this->belongsTo('App\Models\User', 'user_id');
    }
}
