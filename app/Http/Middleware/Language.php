<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App;
class Language
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
		if (config('locale.status')) {
			if (session()->get('language')!= null){
				if (in_array(session()->get('language'), array_keys(config('locale.languages')))) {
					
					/*
					 * Establece el locale de Laravel
					 */
					 App::setLocale(session()->get('language'));
					

					setlocale(LC_TIME, config('locale.languages')[session()->get('language')][1]);

					Carbon::setLocale(config('locale.languages')[session()->get('language')][0]);
				}
			}
        }
		return $next($request);
    }
}
