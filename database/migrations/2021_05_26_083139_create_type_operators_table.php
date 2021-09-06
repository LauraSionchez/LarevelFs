<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTypeOperatorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('type_operators', function (Blueprint $table) {
            $table->id();
            $table->string('description', 200);
        });
        DB::table('type_operators')->insert([
            [
            'description' => 'CASA/OFICINA',
            ],
            [
            'description' =>'CELULAR',
            ]

        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('type_operators');
    }
}
