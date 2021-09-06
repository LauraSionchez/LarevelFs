<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePosInventoryKardexesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pos_inventory_kardexes', function (Blueprint $table) {
            $table->id();
            $table->string('actions',255);
            $table->unsignedBigInteger('pos_inventory_id');
            $table->timestamp('date_from')->nullable();
            $table->timestamp('date_until')->nullable();
            
            $table->foreign('pos_inventory_id')->references('id')->on('pos_inventories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pos_inventory_kardexes');
    }
}
