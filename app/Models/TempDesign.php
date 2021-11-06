<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TempDesign extends Model
{
    protected $fillable = [
        'type', 'title', 'contents'
    ];

    public function temp_design_text(){
        return $this->hasOne('App\Models\TempDesignText');
    }

    
    public function temp_design_image(){
        return $this->hasOne('App\Models\TempDesignImage');
    }
}
