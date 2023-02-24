<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRooms extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rooms', function (Blueprint $table) {

            $table->increments('room_id');
            $table->string('room_name');
            $table->unsignedInteger('room_range');
            $table->unsignedInteger('room_type');
            $table->integer('room_quantity');
            $table->string('room_status');
            $table->string('room_desc');

            $table->foreign('room_range')->references('range_id')->on('ranges');
            $table->foreign('room_type')->references('type_id')->on('type_rooms');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rooms');
    }
}
