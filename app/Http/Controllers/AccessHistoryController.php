<?php

namespace App\Http\Controllers;

use App\Models\AccessHistory;
use Illuminate\Http\Request;
use Exception;

class AccessHistoryController extends Controller
{
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
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function search_history_detail($h_id)
    {   
        if(\Request::ajax()){
        $access_history=AccessHistory::find($h_id);
            try {
                $name_user=$access_history->name_user;
                $date_in=$access_history->date_in;
                $date_out=$access_history->date_out;
                $history=$access_history->getImportantSetting;

                $result['status'] = 1;
                $result['title'] = __('');
                $result['message'] = __(' ');
                $result['data'] = array('name_user'=>$name_user, 'date_in'=>$this->showFullDate($date_in),'date_out'=>$this->showFullDate($date_out),'history'=>$history);
                $result['type_message'] = 'success';
                $result['redirect'] = "";
            } catch (Exception $e) {
                $result['status'] = 0;
                $result['title'] = __('');
                $result['message'] = __('Failed to register customer data, contact the administrator.');
                $result['type_message'] = 'error';
                $result['redirect'] = '';
            }
            return $result;
        }else{
            
            return Redirect::to('home');
        }
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
     * @param  \App\Models\AccessHistory  $accessHistory
     * @return \Illuminate\Http\Response
     */
    public function show(AccessHistory $accessHistory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\AccessHistory  $accessHistory
     * @return \Illuminate\Http\Response
     */
    public function edit(AccessHistory $accessHistory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\AccessHistory  $accessHistory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AccessHistory $accessHistory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AccessHistory  $accessHistory
     * @return \Illuminate\Http\Response
     */
    public function destroy(AccessHistory $accessHistory)
    {
        //
    }
}
