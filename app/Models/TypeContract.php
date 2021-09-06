<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\EncryptationId;

class TypeContract extends Model
{
  use EncryptationId;

  protected $appends = ['crypt_id'];

}
