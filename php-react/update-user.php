<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if(isset($data->id) 
    && isset($data->name) 
    && isset($data->phone) 
    && isset($data->email) 
    && isset($data->password) 
	&& is_numeric($data->id) 
    && !empty(trim($data->name)) 
    && !empty(trim($data->phone))
    && !empty(trim($data->email))
    && !empty(trim($data->password))
	){
        $name = mysqli_real_escape_string($db_conn, trim($data->name));
        $phone = mysqli_real_escape_string($db_conn, trim($data->phone));
        $email = mysqli_real_escape_string($db_conn, trim($data->email));
        $password = mysqli_real_escape_string($db_conn, trim($data->password));
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $updateUser = mysqli_query($db_conn,"UPDATE `users` SET `name`='$name',`phone`='$phone', `email`='$email',`password`='$password' WHERE `id`='$data->id'");
        if($updateUser){
            echo json_encode(["success"=>1,"msg"=>"User Updated."]);
        }
        else{
            echo json_encode(["success"=>0,"msg"=>"User Not Updated!"]);
        }
    }
    else{
        echo json_encode(["success"=>0,"msg"=>"Invalid Email Address!"]);
    }
}
else{
    echo json_encode(["success"=>0,"msg"=>"Please fill all the required fields!"]);
}