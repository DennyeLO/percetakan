<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Models\Voucher;

class VoucherSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();
        foreach(range(1,50) as $index){
            $voucher = new Voucher;
            $voucher->code_voucher = 'V'.$faker->numberBetween(1000,9999);;
            $voucher->code_client = 'CL'.$faker->numberBetween(1000,9999);;
            $voucher->save();
        }
    }
}
