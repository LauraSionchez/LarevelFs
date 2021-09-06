<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\EncryptationId;

class Menu extends Model 
{
    use EncryptationId;

    protected $table = "menus";
    protected $fillable = ['id', 'name_menu', 'description', 'icon', 'order'];
    protected $connection = "mysql";
    protected $appends = ['process','crypt_id'];
    public $timestamps = false;

    public function getProcessAttribute() {
        return $this->getProcess;
    }

    public function getProcess() {
        return $this->hasMany(Process::class, 'menu_id')->orderBy('order');
    }

}
