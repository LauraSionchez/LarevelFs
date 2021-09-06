<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\EncryptationId;

class PasswordHistory extends Model
{
  use EncryptationId;

  protected $table = "password_histories";
  protected $fillable = ['id','user_id','password','start_date','end_date'];
  protected $connection = "mysql";
  protected $appends = ['crypt_id']; 
  public $timestamps = false;
}
