<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\EncryptationId;

class Connection extends Model
{
    use EncryptationId;
    
    protected $table = "connections";  
    protected $fillable = ['id','model_id','connection_mechanisms_id'];
    protected $connection = "mysql";
    public $timestamps = false;
    protected $appends =['crypt_id'];
}
