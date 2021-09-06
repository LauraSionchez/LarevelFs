<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\EncryptationId;

class TypeClient extends Model
{
    use EncryptationId;

    protected $table = "type_clients";  
    protected $fillable = ['id','name_types'];
    protected $connection = "mysql";
    protected $appends = ['crypt_id'];
    public $timestamps = false;
}
