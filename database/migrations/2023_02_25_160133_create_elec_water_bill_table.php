<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateElecWaterBillTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('elec_water_bills', function (Blueprint $table) {
            $table->increments('elec_water_bill_id');
            $table->string('elec_water_bill_name');
            $table->unsignedInteger('elec_water_bill_room');
            $table->string('elec_water_bill_month');
            $table->string('elec_water_bill_semester');
            $table->integer('elec_water_bill_elec');
            $table->integer('elec_water_bill_water');
            $table->integer('elec_water_bill_money');
            $table->string('elec_water_bill_due');
            $table->string('elec_water_bill_pay');
            $table->string('elec_water_bill_note');
            $table->string('elec_water_bill_status');
            $table->timestamps();

            $table->foreign('elec_water_bill_room')->references('room_id')->on('rooms');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('elec_water_bills');
    }
}
