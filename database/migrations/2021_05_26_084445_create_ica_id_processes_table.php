<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIcaIdProcessesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ica_id_processes', function (Blueprint $table) {
            $table->id();
            $table->string('code', 5);
            $table->string('description_process', 20);
            $table->boolean('status')->default(false);

            $table->unsignedBigInteger('ica_id');

            $table->unsignedBigInteger('user_id');
            $table->timestamp('register_date')->nullable();
            $table->string('ip',20);

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('ica_id')->references('id')->on('icas');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ica_id_processes');
    }
}
