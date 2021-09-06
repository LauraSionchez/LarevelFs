<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePosRegistersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pos_registers', function (Blueprint $table) {
            $table->id();
            $table->string('number_control',20);

            $table->unsignedBigInteger('provider_id');

            $table->unsignedBigInteger('user_id');
            $table->timestamp('date_register')->nullable();
            $table->string('ip',20);

            $table->foreign('provider_id')->references('id')->on('providers');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pos_registers');
    }
}
