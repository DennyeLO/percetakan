<?php

namespace App\Http\Controllers\TempPrint;

use Illuminate\Http\Request;
use App\Models\TempDesignText;
use App\Http\Controllers\Controller;

class TempDesignTextController extends Controller
{
    public function store(Request $request, $temp_designs_id){
        $this->validate($request,[
            'width' => 'required',
            'height' => 'required'
		]);

        $temp_design_text = New TempDesignText;
        $temp_design_text->temp_designs_id = $temp_designs_id;
        $temp_design_text->fill($request->all());
        $temp_design_text->save();
		return $this->json();
    }

    public function detail(Request $request, TempDesignText $temp_design_text){
        $this->response->data = $temp_design_text;
		return $this->json();
    }

    public function update(Request $request, TempDesignText $temp_design_text){
        // $this->validate($request,[
        //     'width' => 'required',
        //     'height' => 'required'
		// ]);

        $temp_design_text->fill($request->all());
        $temp_design_text->save();

		return $this->json();
    }

    public function delete(Request $request, TempDesignText $temp_design_text){
        $temp_design_text->delete();
		return $this->json();
    }
}
