<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\EncryptationId; 

class TypeTransaction extends Model
{
    use EncryptationId;
    
    protected $table = "type_transactions";  
    protected $fillable = ['id','name_transaction','obligatory','status','user_id','date_register','ip'];
    protected $connection = "mysql";
    public $timestamps = false;
    protected $appends = ['crypt_id'];
}
