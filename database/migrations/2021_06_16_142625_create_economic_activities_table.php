<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEconomicActivitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('economic_activities', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('economic_sector_id');
            $table->unsignedBigInteger('activity_id');
            $table->unsignedBigInteger('product_id');
            $table->unsignedBigInteger('modality_id');
            $table->unsignedBigInteger('client_id');

            $table->foreign('economic_sector_id')->references('id')->on('economic_sectors');
            $table->foreign('activity_id')->references('id')->on('activities');
            $table->foreign('product_id')->references('id')->on('products');
            $table->foreign('modality_id')->references('id')->on('modalities');
            $table->foreign('client_id')->references('id')->on('clients');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('economic_activities');
    }
}
