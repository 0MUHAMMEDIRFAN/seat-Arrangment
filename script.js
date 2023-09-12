import * as firebase from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js'
import { app } from "./firebase.js";
import { analytics } from "./firebase.js";

const regno = document.querySelector("#regno");
const password = document.querySelector("#password");
const loginForm = document.querySelector("#login");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit() {
  console.log("hi");
  firebase
    .database()
    .ref("users")
    .set({
      regno: regno,
      password: password,
    });

}

// function validatePassword() {
//     var password = document.getElementById("txtPassword");
//     var confirmPassword = document.getElementById("txtConfirmPassword");

//     if(password.value != confirmPassword.value){
//         document.getElementById("submit").disabled = true;
//         alert("Passwords do not match");
//     } else {
//         document.getElementById("submit").disabled = false;
//         alert("Passwords match");
//     }
// }
