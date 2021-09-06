<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\EncryptationId;

class Profile extends Model
{
    use EncryptationId;

    protected $table = "profiles";  
    protected $fillable = ['id','code','name_profile','description','status'];
    protected $connection = "mysql";
    protected $appends = ['crypt_id'];
    public $timestamps = false;
	
	public function getProcesses() {
		return $this->belongsToMany(Process::class, 'profile_processes')
                        ->withPivot('process_id', 'profile_id');
    }
}
