<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    public const PER_PAGE           = 10;
    public const DEFAULT_SORT_FIELD = 'created_at';
    public const DEFAULT_SORT_ORDER = 'asc';
    
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected $response;
    protected $code;

    public function __construct()
    {
        $this->code = 200;
        $this->response = new JsonResponse();
    }

    protected function json($data = null, $code = null){
        $data = $data?:$this->response;
        $code = $code?:$this->code;

        return response()->json($data, $code);
    }
}