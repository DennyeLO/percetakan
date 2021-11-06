<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TempDesignText extends Model
{
    protected $fillable = [
        'temp_designs_id', 'font_size', 'font_weight', 'text_align', 'width', 'height', 'border_top', 'border_bottom', 'border_left', 'border_right', 'padding_top'
    ];

    public function temp_design(){
        return $this->belongsTo('App\Models\TempDesign');
    }
}
