<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accounts', function (Blueprint $table) {
            $table->id();
            $table->string('code_account', 20);
            $table->boolean('status')->default(true);
            $table->unsignedBigInteger('type_account_id');
            $table->unsignedBigInteger('client_id');

            $table->unsignedBigInteger('user_id');
            $table->timestamp('date_register');
            $table->string('ip',20);

            $table->foreign('type_account_id')->references('id')->on('type_accounts');
            $table->foreign('client_id')->references('id')->on('clients');
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
        Schema::dropIfExists('accounts');
    }
}
