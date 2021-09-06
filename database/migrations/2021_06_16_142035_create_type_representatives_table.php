<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTypeRepresentativesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('type_representatives', function (Blueprint $table) {
            $table->id();
            $table->string('name_type_representative', 50);
            $table->boolean('status')->default(true);
            
            $table->unsignedBigInteger('user_id');
            $table->timestamp('date_register')->nullable();
            $table->string('ip',20);

            $table->foreign('user_id')->references('id')->on('users');
        });
        DB::table('type_representatives')->insert([
            [    
                'name_type_representative' => 'Representante Legal',
                'status' => 1,
                'user_id' => 1,
                'date_register' => now(),
                'ip' => \Request::ip(),
            ],
            [
                'name_type_representative' => 'Representante Comercio',
                'status' => 1,
                'user_id' => 1,
                'date_register' => now(),
                'ip' => \Request::ip(),
            ]    
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('type_representatives');
    }
}
