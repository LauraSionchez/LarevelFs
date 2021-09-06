<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\EncryptationId;

class BankLiquidation extends Model
{
    use EncryptationId;
    
    protected $appends = ['crypt_id'];
}
