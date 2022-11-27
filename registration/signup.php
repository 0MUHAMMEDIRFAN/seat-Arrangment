<?php 

require_once('insert.php');

if(!empty($_POST)){
  $insert->post($_POST);
  header('location: ../dashboard.html');
}

else{
  echo '<p style="font-size: 2em; color: purple; opacity: 0.7;">Please fill all the input fields</p>';
}

?>
