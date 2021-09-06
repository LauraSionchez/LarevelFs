<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePosShipmentDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pos_shipment_details', function (Blueprint $table) {
            $table->id();

            $table->boolean('recived')->nullable();
            $table->unsignedBigInteger('pos_shipments_id');
            $table->unsignedBigInteger('pos_boxes_id');

            $table->foreign('pos_shipments_id')->references('id')->on('pos_shipments');
            $table->foreign('pos_boxes_id')->references('id')->on('pos_boxes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pos_shipment_details');
    }
}
