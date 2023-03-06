<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRegistrationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('registration', function (Blueprint $table) {
            $table->increments('regis_id');
            $table->unsignedInteger('regis_room');
            $table->unsignedInteger('regis_student');
            $table->timestamps();

            $table->foreign('regis_room')->references('room_id')->on('rooms');
            $table->foreign('regis_student')->references('user_id')->on('users');

            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('registration');
    }
}
