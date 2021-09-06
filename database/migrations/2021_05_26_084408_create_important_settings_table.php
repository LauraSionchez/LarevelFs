<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImportantSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('important_settings', function (Blueprint $table) {
            $table->id();
            $table->timestamp('date_access')->nullable();
            $table->text('processed_data');
            
            $table->unsignedBigInteger('access_history_id');
            $table->unsignedBigInteger('process_id');

            $table->foreign('access_history_id')->references('id')->on('access_histories');
            $table->foreign('process_id')->references('id')->on('processes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('important_settings');
    }
}
