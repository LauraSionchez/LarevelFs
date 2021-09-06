<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\EncryptationId;

class TypeStorage extends Model
{
    use EncryptationId;

    protected $table = "type_storages";  
    protected $fillable = ['id','description','status','bank_id'];
    protected $connection = "mysql";
    protected $appends = ['crypt_id','bank_name'];
    public $timestamps = false;

    public function getBanks()
    {
        return $this->belongsTo(Bank::class, 'bank_id');
    }

    public function getBankNameAttribute()
    {
        return $this->getBanks->name_bank;
    }
}
