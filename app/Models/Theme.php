<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\EncryptationId;

class Theme extends Model
{
    use EncryptationId;

    protected $table = "themes";  
    protected $fillable = ['id','description','class_name'];
    protected $connection = "mysql";
    protected $appends = ['crypt_id'];
    public $timestamps = false;
}
