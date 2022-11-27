function validatePassword() {
    var password = document.getElementById("txtPassword");
    var confirmPassword = document.getElementById("txtConfirmPassword");
    
    if(password.value != confirmPassword.value){
        document.getElementById("submit").disabled = true;
        alert("Passwords do not match");
    } else {
        document.getElementById("submit").disabled = false;
        alert("Passwords match");
    }
}