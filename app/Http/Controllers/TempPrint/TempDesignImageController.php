<?php

namespace App\Http\Controllers\TempPrint;

use Illuminate\Http\Request;
use App\Models\TempDesignImage;
use App\Http\Controllers\Controller;

class TempDesignImageController extends Controller
{
    public function store(Request $request, $temp_designs_id){
        $this->validate($request,[
            'width' => 'required',
            'height' => 'required'
		]);

        $temp_design_image = New TempDesignImage;
        $temp_design_image->temp_designs_id = $temp_designs_id;
        $temp_design_image->fill($request->all());
        $temp_design_image->save();
		return $this->json();
    }

    public function detail(Request $request, TempDesignImage $temp_design_image){
        $this->response->data = $temp_design_image;
		return $this->json();
    }

    public function update(Request $request, TempDesignImage $temp_design_image){
        $this->validate($request,[
            'width' => 'required',
            'height' => 'required'
		]);

        $temp_design_image->fill($request->all());
        $temp_design_image->save();

		return $this->json();
    }

    public function delete(Request $request, TempDesignImage $temp_design_image){
        $temp_design_image->delete();
		return $this->json();
    }
}