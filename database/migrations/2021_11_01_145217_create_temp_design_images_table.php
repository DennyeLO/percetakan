<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTempDesignImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('temp_design_images', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('temp_designs_id');
            $table->foreign('temp_designs_id')->references('id')->on('temp_designs')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->string('position')->nullable();
            $table->string('top')->nullable();
            $table->string('bottom')->nullable();
            $table->string('left')->nullable();
            $table->string('right')->nullable();
            $table->integer('width');
            $table->integer('height');
            $table->string('padding_top')->nullable();
            $table->string('padding_bottom')->nullable();
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
        Schema::dropIfExists('temp_design_images');
    }
}
