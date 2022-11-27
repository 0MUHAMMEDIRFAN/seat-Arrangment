<?php

if(!class_exists('DB')){
  class DB{
    public function __construct(){
$host = "localhost";
$user = "root";
$pass = "";
$db = "signup";

      $mysql = new mysqli($host, $user, $pass, $db);
      
      if($mysql->connect_errno){
        printf("cannot establish secure connection: ", $mysql->connect_error);
        exit();
      }
      
      $this->connect = $mysql;
    }
    
    public function insert($query){
      $result = $this->connect->query($query);
      
      return $result;
    }
  }
}

$db = new DB;

?>