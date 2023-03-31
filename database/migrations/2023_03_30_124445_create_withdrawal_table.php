<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWithdrawalTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('withdrawals', function (Blueprint $table) {
            $table->increments('withdrawal_id');
            $table->unsignedInteger('withdrawal_regis');
            $table->string('withdrawal_reason');
            $table->string('withdrawal_status');
            $table->string('withdrawal_approve');
            $table->timestamps();

            $table->foreign('withdrawal_regis')->references('regis_id')->on('registration');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('withdrawals');
    }
}
