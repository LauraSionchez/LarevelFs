<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->string('code', 20)->nullable();
            $table->string('name_profile', 50);
            $table->string('description', 200);
            $table->boolean('status')->default(true);
        });
        DB::table('profiles')->insert([
            [
            'code' => '0001',
            'name_profile' => 'Desarrollo',
            'description' => 'Perfil para el area de Desarrollo TI.',
            'status' => 1,
            ],
            [
            'code' => '0002',
            'name_profile' => 'Seguridad de Información',
            'description' => 'Perfil para el area de Seguridad.',
            'status' => 1,
            ],
            [
            'code' => '0003',
            'name_profile' => 'Administración',
            'description' => 'Perfil para el area de administración en Fábrica de POS.',
            'status' => 1,
            ],
            [
            'code' => '0004',
            'name_profile' => 'Draza',
            'description' => 'Perfil para el departamento de Draza.',
            'status' => 1,
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
        Schema::dropIfExists('profiles');
    }
}
