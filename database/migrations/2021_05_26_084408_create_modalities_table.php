<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateModalitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('modalities', function (Blueprint $table) {
            $table->id();
            $table->string('name_modality', 50);
            $table->boolean('status')->default(true);
            
            $table->unsignedBigInteger('user_id');
            $table->timestamp('date_register')->nullable();
            $table->string('ip',20);

            $table->foreign('user_id')->references('id')->on('users');
        });
        DB::table('modalities')->insert([
          [
            'name_modality' => 'Persona Natural',
            'status' => 1,
            'user_id' => 1,
            'date_register' => now(),
            'ip' => \Request::ip(),
          ],
          [
            'name_modality' => 'Sociedades',
            'status' => 1,
            'user_id' => 1,
            'date_register' => now(),
            'ip' => \Request::ip(),
          ],
          [
            'name_modality' => 'Compania Anonima',
            'status' => 1,
            'user_id' => 1,
            'date_register' => now(),
            'ip' => \Request::ip(),
          ],
          [
            'name_modality' => 'Empresa en Formación',
            'status' => 1,
            'user_id' => 1,
            'date_register' => now(),
            'ip' => \Request::ip(),
          ],
          [
            'name_modality' => 'Cooperativa',
            'status' => 1,
            'user_id' => 1,
            'date_register' => now(),
            'ip' => \Request::ip(),
          ],
          [
            'name_modality' => 'En Formación',
            'status' => 1,
            'user_id' => 1,
            'date_register' => now(),
            'ip' => \Request::ip(),
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
        Schema::dropIfExists('modalities');
    }
}
