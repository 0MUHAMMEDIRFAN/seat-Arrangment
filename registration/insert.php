<?php

require_once('db.php');

if(!class_exists('INSERT')){
  class INSERT{
    public function post($postdata){
    
    global $db;
    
      $query = "INSERT INTO signup (firstname,lastname,email, phone, password) VALUES ('$postdata[fname]','$postdata[lname]','$postdata[email]','$postdata[contact]', '$postdata[password]')";
      
      return $db->insert($query);
    }
  }
}

$insert = new INSERT;

?>