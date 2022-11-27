<?php
    session_start();

    $host = "localhost";
    $user = "root";
    $password = "";
    $db = "signup";

    $con =  mysqli_connect($host,$user,$password);
     mysqli_select_db($con, $db);

    
     if(isset($_POST['email'])){


        $email = $_POST['email'];
        $password = $_POST['password'];     
    
            $sql = "update signup set password='".$password."' where email= '".$email."'";
    
            $result = mysqli_query($con, $sql);
            
            if($result !== false){
   header('location:dashboard.html');
  }
            
 else{
    echo "<h1 align = 'center' style = ' color : purple;'>Invalid Login credentials</h1>";
                
            }
    
        
        }

?>


