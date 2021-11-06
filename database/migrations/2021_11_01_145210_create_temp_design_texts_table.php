<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTempDesignTextsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('temp_design_texts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('temp_designs_id');
            $table->foreign('temp_designs_id')->references('id')->on('temp_designs')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->string('font_size')->default('12');
            $table->string('font_weight')->nullable();
            $table->string('font_style')->nullable();
            $table->string('text_align')->default('left');
            $table->boolean('border_top')->default(0);
            $table->boolean('border_bottom')->default(0);
            $table->boolean('border_left')->default(0);
            $table->boolean('border_right')->default(0);
            $table->string('padding_top')->nullable();
            $table->integer('width');
            $table->integer('height');
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
        Schema::dropIfExists('temp_design_texts');
    }
}
