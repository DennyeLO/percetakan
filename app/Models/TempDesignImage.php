<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TempDesignImage extends Model
{
    protected $fillable = [
        'temp_designs_id', 'position', 'top', 'bottom', 'left', 'right', 'width', 'height', 'padding_top', 'padding_bottom'
    ];

    
    public function temp_design(){
        return $this->belongsTo('App\Models\TempDesign');
    }
}
