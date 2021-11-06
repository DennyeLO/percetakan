<?php

namespace App\Http\Controllers\TempPrint;

use Illuminate\Http\Request;
use App\Models\TempDesign;
use App\Http\Controllers\Controller;

class TempDesignController extends Controller
{
    public function index(Request $request){
        $temp_design = TempDesign::leftJoin('temp_design_texts', 'temp_designs.id', 'temp_design_texts.temp_designs_id')
        ->leftJoin('temp_design_images', 'temp_designs.id', 'temp_design_images.temp_designs_id')
        ->select('temp_designs.id', 'temp_designs.title', 'temp_designs.type', 'temp_designs.contents',
            'temp_design_texts.id as texts_id', 
            'temp_design_texts.font_size', 
            'temp_design_texts.font_weight', 
            'temp_design_texts.font_style', 
            'temp_design_texts.text_align',
            'temp_design_texts.border_top',
            'temp_design_texts.border_bottom',
            'temp_design_texts.border_left',
            'temp_design_texts.border_right',
            'temp_design_texts.padding_top',
            'temp_design_texts.width as texts_width',
            'temp_design_texts.height as texts_height',
            'temp_design_images.id as images_id', 
            'temp_design_images.position',
            'temp_design_images.top',
            'temp_design_images.bottom',
            'temp_design_images.left',
            'temp_design_images.right',
            'temp_design_images.width as images_width',
            'temp_design_images.height as height_height',
            'temp_design_images.padding_top',
            'temp_design_images.padding_bottom'
        )
        ->get();

        $this->response->data = $temp_design;
        return $this->json();
    }

    public function store(Request $request){
        $this->validate($request,[
			'type' => 'required',
			'title' => 'required',
			'contents' => 'required'
		]);

        $temp_design = New TempDesign;
        $temp_design->fill($request->all());
        $temp_design->save();
        $this->response->data = $temp_design;
		return $this->json();
    }

    public function detail(Request $request, TempDesign $temp_design){
        $this->response->data = $temp_design;
		return $this->json();
    }

    public function update(Request $request, TempDesign $temp_design){
        $this->validate($request,[
			'type' => 'required',
			'title' => 'required',
			'contents' => 'required'
		]);

        $temp_design->fill($request->all());
        $temp_design->save();

		return $this->json();
    }

    public function delete(Request $request, TempDesign $temp_design){
        $temp_design->delete();
		return $this->json();
    }
}