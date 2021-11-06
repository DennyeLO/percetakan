<?php

namespace App\Http\Controllers\Master;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use App\Http\Controllers\Controller;
use App\Models\Voucher;
use App\Http\Resources\VoucherResource;

class MasterVoucherController extends Controller
{
    protected $sortFields = ['name'];

    public function index(Request $request): AnonymousResourceCollection{
        $sortFieldInput = $request->input('sort_field', self::DEFAULT_SORT_FIELD);
        $sortField      = in_array($sortFieldInput, $this->sortFields) ? $sortFieldInput : self::DEFAULT_SORT_FIELD;
        $sortOrder      = $request->input('sort_order', self::DEFAULT_SORT_ORDER);
        $searchInput    = $request->input('search');
        $query          = Voucher::orderBy($sortField, $sortOrder);
        $perPage        = $request->input('per_page') ?? self::PER_PAGE;
        if (!is_null($searchInput)) {
            $searchQuery = "%$searchInput%";
            $query       = $query->where('name', 'like', $searchQuery);
        }
        $vouchers = $query->paginate((int)$perPage);

        return VoucherResource::collection($vouchers);
    }

    public function store(Request $request){
        $this->validate($request,[
			'code_voucher' => 'required',
			'code_client' => 'required'
		]);

        $voucher = New Voucher;
        $voucher->fill($request->all());
        $voucher->save();
		return $this->json();
    }

    public function detail(Request $request, Voucher $voucher){
        $this->response->data = $voucher;
		return $this->json();
    }

    public function update(Request $request, Voucher $voucher){
        $this->validate($request,[
			'code_voucher' => 'required',
			'code_client' => 'required'
		]);

        $voucher->fill($request->all());
        $voucher->save();

		return $this->json();
    }

    public function delete(Request $request, Voucher $voucher){
        $voucher->delete();
		return $this->json();
    }
}