<?php

namespace App\Http\Controllers;

use App\Models\State;
use App\Models\Municipality;
use App\Models\City;
use App\Models\PostalCode;
use Illuminate\Http\Request;

class StateController extends Controller
{
    
	
	function getAllDependent($state_id){
        if(\Request::ajax()){
    		$municipalities = Municipality::where('state_id', $state_id)->pluck('name_municipality', 'id');
    		$cities = City::where('state_id', $state_id)->pluck('name_city', 'id');
    		$codes = PostalCode::where('state_id', $state_id)->pluck('code', 'id');
    		return array('municipality'=>$municipalities, 'city'=>$cities, 'postal_code'=>$codes);
        }else{
            
            return Redirect::to('home');
        }
	} 
	
	
	
	
	/**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\State  $state
     * @return \Illuminate\Http\Response
     */
    public function show(State $state)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\State  $state
     * @return \Illuminate\Http\Response
     */
    public function edit(State $state)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\State  $state
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, State $state)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\State  $state
     * @return \Illuminate\Http\Response
     */
    public function destroy(State $state)
    {
        //
    }
}
