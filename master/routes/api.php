<?php

use Illuminate\Http\Request;

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


Route::get('', function () { return 'GET OUT OF HERE'; });
Route::prefix('v1')->group(function () {

  Route::post('check', function (Request $request) {
    $params = $request->all();

    sleep(1);
    return $params;
  });

  Route::get('logout', function (Request $request) {
    sleep(1);
    return 1;
  });

  Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
  });

  Route::get('i18n/{locale}', 'I18nController@show');
});
Route::group(['middleware' => ['api']], function () {
    Route::post('auth/login', 'api\AuthController@login');
    Route::group(['middleware' => 'auth.jwt'], function () {
      Route::post('user', 'api\AuthController@getAuthUser');
      Route::get('eye', 'api\AuthController@getEye');
    });
});
