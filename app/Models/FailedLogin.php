<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\EncryptationId;

class FailedLogin extends Model
{
  use EncryptationId;

  protected $table = "failed_logins";
  protected $fillable = ['id','user_id','date_in','ip'];
  protected $connection = "mysql";
  protected $appends = ['crypt_id'];
  public $timestamps = false;
}
