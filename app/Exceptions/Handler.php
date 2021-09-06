<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Auth\AuthenticationException;
use Throwable;
use Auth;

class Handler extends ExceptionHandler {

    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
            //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Throwable  $exception
     * @return void
     *
     * @throws \Throwable
     */
    public function report(Throwable $exception) {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Throwable  $exception
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Throwable
     */
    public function render($request, Throwable $exception) {
		
        if ($exception instanceof \Illuminate\Session\TokenMismatchException) {
			if (Auth::check()==true){
				if (  $request->ajax()==true   ){
					if ($request->expectsJson()) {
						$result['status'] = 0;
						$result['title'] = __('');
						$result['message']      = __('Page Expired');
						$result['type_message'] = 'error';
						$result['redirect'] = ''; 
						$result['call_function'] = "actToken('".csrf_token()."')";
						return  response()->json($result, 200);							
					}
				}
				return redirect('unauthenticated');	
			}else{
				if (  $request->ajax()==true   ){
					if ($request->expectsJson()) {
						$result['status'] = 0;
						$result['title'] = __('');
						$result['message']      = __('Page Expired');
						$result['type_message'] = 'error';
						$result['redirect'] = ''; 
						return  response()->json($result, 200);	
					}else{
					}
				}else{
				}
				return redirect('login')->with('msg', ["type" => "warning", "message" => __("Page Expired")]);		
			}
        }
		
		
		
        return parent::render($request, $exception);
    }
	
	protected function unauthenticated($request, AuthenticationException $exception) 
	{
		//dd(\Request::ajax());
		//dd($request->expectsJson());   
		
		if ($request->expectsJson()) {
			$result['status'] = 0;
			$result['message'] = __("Unauthenticated User");
			$result['data'] = null;
			$result['type_message'] = 'error';
			return response()->json($result, 200);
		}else{
			
			if (\Request::ajax()){
				
				return redirect()->route('errors.unauthenticated');	
			}
			return redirect()->guest('login');
			//return redirect()->guest('403');
			//return abort(403);
			//return view('errors.403');
			
		}

		
	}

}
