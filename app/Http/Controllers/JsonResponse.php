<?php
/**
 * Created by PhpStorm.
 * User: januar
 * Date: 4/22/19
 * Time: 7:48 PM
 */

namespace App\Http\Controllers;


class JsonResponse
{
    /**
     * @var boolean
    */
    public $status;

    /**
     * @var string
     */
    public $message;

    /**
     * @var \stdClass
     */
    public $data ;

    /**
     * @var array
    */
    public $errors;

    public function __construct()
    {
        $this->status = true;
        $this->message = '';
        $this->data = new \stdClass();
        $this->errors = [];
    }
}