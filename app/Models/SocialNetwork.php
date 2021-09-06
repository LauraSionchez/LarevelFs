<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\EncryptationId;

class SocialNetwork extends Model
{
    use EncryptationId;
    
    protected $table = "social_networks";  
    protected $fillable = ['id','name_social','status','user_id','date_register','ip'];
    protected $connection = "mysql";
    public $timestamps = false;
    protected $appends =['crypt_id'];

    public function getUser()
    {
        return $this->belongsTo('App\Models\User', 'user_id');
    }
}
