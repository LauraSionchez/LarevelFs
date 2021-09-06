<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIcasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('icas', function (Blueprint $table) {
            $table->id();
            $table->string('code', 5);
            $table->boolean('status')->default(false);

            $table->unsignedBigInteger('bank_id');
            $table->unsignedBigInteger('type_coin_id');

            $table->unsignedBigInteger('user_id');
            $table->timestamp('register_date')->nullable();
            $table->string('ip',20);

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('bank_id')->references('id')->on('banks');
            $table->foreign('type_coin_id')->references('id')->on('type_coins');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('icas');
    }
}
