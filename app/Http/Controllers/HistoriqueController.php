<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class HistoriqueController extends Controller
{
 


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($calcul)
    {
       $file = 'historique.txt';
        if(!file_exists($file)){
            file_put_contents($file, $calcul);
        }
        else{
            file_put_contents($file, ",\n", FILE_APPEND);
            file_put_contents($file, $calcul, FILE_APPEND);
        }
        $current = file_get_contents($file);
        return Response::json($current);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $file = 'historique.txt';
        if(!file_exists($file)){
            file_put_contents($file, "");
        }
        $current = file_get_contents($file);
        return Response::json($current);
    }

}
