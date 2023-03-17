<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRoomBillTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('room_bills', function (Blueprint $table) {
            $table->increments('room_bill_id');
            $table->string('room_bill_name');
            $table->unsignedInteger('room_bill_regis');
            $table->string('room_bill_semester');
            $table->integer('room_bill_money');
            $table->string('room_bill_due');
            $table->string('room_bill_pay');
            $table->string('room_bill_note');
            $table->string('room_bill_status');
            $table->timestamps();

            $table->foreign('room_bill_regis')->references('regis_id')->on('registration');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('room_bills');
    }
}
