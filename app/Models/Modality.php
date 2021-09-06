<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\EncryptationId;

class Modality extends Model
{
    use EncryptationId;
    
    protected $table = "modalities";  
    protected $fillable = ['id','name_modality','status','user_id','date_register','ip'];
    protected $connection = "mysql";
    public $timestamps = false;
    protected $appends =['crypt_id'];

    public function getUser()
    {
        return $this->belongsTo('App\Models\User', 'user_id');
    }
}
