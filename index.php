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
    
            $sql = "select * from signup where email= '".$email."' && password = '".$password."' limit 1";
    
            $result = mysqli_query($con, $sql);
            
            if(mysqli_num_rows($result) == 1){
   header('location:dashboard.html');
  }
            
 else{
    echo "<h1 align = 'center' style = ' color : purple;'>Invalid Login credentials</h1>";
                
            }
    
        
        }

?>


