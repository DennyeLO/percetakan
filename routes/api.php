<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Master\MasterVoucherController;
use App\Http\Controllers\TempPrint\TempDesignController;
use App\Http\Controllers\TempPrint\TempDesignTextController;
use App\Http\Controllers\TempPrint\TempDesignImageController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Master Voucher
Route::get('/voucher', [MasterVoucherController::class, 'index'])->name('api.voucher.index');
Route::get('/voucher/detail/{voucher}', [MasterVoucherController::class, 'detail'])->name('api.voucher.detail');
Route::post('/voucher/store', [MasterVoucherController::class, 'store'])->name('api.voucher.create');
Route::put('/voucher/update/{voucher}', [MasterVoucherController::class, 'update'])->name('api.voucher.update');
Route::delete('/voucher/delete/{voucher}', [MasterVoucherController::class, 'delete'])->name('api.voucher.delete');

Route::get('/print/temp_design', [TempDesignController::class, 'index'])->name('api.temp_design.index');
Route::post('/print/temp_design', [TempDesignController::class, 'store'])->name('api.temp_design.store');

Route::post('/print/temp_design_text/{temp_designs_id}', [TempDesignTextController::class, 'store'])->name('api.temp_design_text.store');
Route::post('/print/temp_design_image/{temp_designs_id}', [TempDesignImageController::class, 'store'])->name('api.temp_design_image.store');

Route::put('/print/temp_design/{temp_design}', [TempDesignController::class, 'update'])->name('api.temp_design.update');
Route::put('/print/temp_design_text/{temp_design_text}', [TempDesignTextController::class, 'update'])->name('api.temp_design_text.update');
Route::put('/print/temp_design_image/{temp_design_image}', [TempDesignImageController::class, 'update'])->name('api.temp_design_image.update');