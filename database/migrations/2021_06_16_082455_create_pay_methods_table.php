<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePayMethodsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pay_methods', function (Blueprint $table) {
            $table->id();
            $table->string('name_pay_method',200);
            $table->boolean('status')->default(true);

            $table->unsignedBigInteger('user_id');
            $table->timestamp('register_date')->nullable();
            $table->string('ip', 20);

            $table->foreign('user_id')->references('id')->on('users');


        });
        DB::table('pay_methods')->insert([
            [
                'name_pay_method' => 'Debito en Cuenta',
                'status' => 1,
                'user_id' => 1,
                'register_date' => now(),
                'ip' => \Request::ip(),
            ],
            [
                'name_pay_method' => 'Deposito',
                'status' => 1,
                'user_id' => 1,
                'register_date' => now(),
                'ip' => \Request::ip(),
            ],
            
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pay_methods');
    }
}
