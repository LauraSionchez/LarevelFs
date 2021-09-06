<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientRepresentativesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('client_representatives', function (Blueprint $table) {
            $table->id();
            $table->string('position',80);
            
            $table->unsignedBigInteger('representative_id');
            $table->unsignedBigInteger('type_representative_id');
            $table->unsignedBigInteger('client_id');

            $table->foreign('representative_id')->references('id')->on('representatives');
            $table->foreign('type_representative_id')->references('id')->on('type_representatives');
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
        Schema::dropIfExists('client_representatives');
    }
}
