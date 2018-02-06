<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests;
use JWTAuth;
use JWTAuthException;
use App\User;

class AuthController extends Controller
{
  public function __construct()
   {
       $this->user = new User;
   }

   public function login(Request $request){
       $credentials = $request->only('username', 'password');
       $token = null;
       try {
           if (!$token = JWTAuth::attempt($credentials)) {
               return response()->json([
                   'response' => 'error',
                   'message' => 'Invalid email or password',
               ], 401);
           }
       } catch (JWTAuthException $e) {
           return response()->json([
               'response' => 'error',
               'message' => 'Could not create token!',
           ], 500);
       }
       $user = JWTAuth::user();
       return response()->json([
           'response' => 'success',
           'result' => [
               'token' => $token,
               'user' => $user
           ],
       ], 200);
   }

   public function getAuthUser(Request $request){
       $user = JWTAuth::toUser($request->token);
       return response()->json(['result' => $user]);
   }

   /**
     * Log out
     * Invalidate the token, so user cannot use it anymore
     * They have to relogin to get a new token
     *
     * @param Request $request
     */
    public function logout(Request $request) {
        $this->validate($request, ['token' => 'required']);
        try {
            JWTAuth::invalidate($request->input('token'));
            return response()->json(['success' => true]);
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['success' => false, 'error' => 'Failed to logout, please try again.'], 500);
        }
    }
    
}
