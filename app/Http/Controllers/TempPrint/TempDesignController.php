<?php

namespace App\Http\Controllers\TempPrint;

use Illuminate\Http\Request;
use App\Models\TempDesign;
use App\Http\Controllers\Controller;

class TempDesignController extends Controller
{
    public function index(Request $request){
        $temp_design = TempDesign::join('temp_design_texts', 'temp_designs.id', 'temp_design_texts.temp_designs_id')
        ->get();

        $temp_design_2 = TempDesign::join('temp_design_images', 'temp_designs.id', 'temp_design_images.temp_designs_id')
        ->get();
        $output = $temp_design + $temp_design_2;


        dd($output);    
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