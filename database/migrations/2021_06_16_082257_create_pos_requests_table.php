<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePosRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pos_requests', function (Blueprint $table) {
            $table->id();

            $table->boolean('totally_delivered')->default(false);
            $table->unsignedBigInteger('storage_id');
            $table->unsignedBigInteger('storage_request_id');

            $table->unsignedBigInteger('user_id');
            $table->timestamp('date_register')->nullable();
            $table->string('ip',20);

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('storage_id')->references('id')->on('storages');
            $table->foreign('storage_request_id')->references('id')->on('storages');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pos_requests');
    }
}
