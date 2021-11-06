<?php

namespace App\Http\Resources;

use App\Models\Voucher;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;


class VoucherResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param $request
     *
     * @return array
     */
    public function toArray($request): array
    {
        /** @var User $this */
        return [
            'id' => $this->id,
            'kode_voucher'       => $this->code_voucher,
            'kode_client'       => $this->code_client,
            'created_at' => Carbon::parse($this->created_at)->toDayDateTimeString(),
        ];
    }
}
