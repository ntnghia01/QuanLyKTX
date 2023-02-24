<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTypeRoomsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('type_rooms', function (Blueprint $table) {
            $table->increments('type_id');
            $table->string('type_name');
            $table->string('type_gender');
            $table->string('type_cook');
            $table->string('type_capacity');
            $table->string('type_desc');
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
        Schema::dropIfExists('type_rooms');
    }
}
