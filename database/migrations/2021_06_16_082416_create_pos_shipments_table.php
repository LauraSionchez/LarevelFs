<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePosShipmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pos_shipments', function (Blueprint $table) {
            $table->id();
            $table->boolean('totally_received')->default(false);

            $table->unsignedBigInteger('pos_request_id');
            
            $table->unsignedBigInteger('user_id');
            $table->timestamp('date_register')->nullable();
            $table->string('ip',20);

            $table->foreign('pos_request_id')->references('id')->on('pos_requests');
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
        Schema::dropIfExists('pos_shipments');
    }
}
