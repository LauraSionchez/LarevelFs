<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\EncryptationId;

class Parameter extends Model
{
     use EncryptationId;
    
    protected $table = "parameters";  
    protected $fillable = ['id','name_parameters','value_parameters','description'];
    protected $connection = "mysql";
    public $timestamps = false;
    protected $appends = ['crypt_id'];
}
