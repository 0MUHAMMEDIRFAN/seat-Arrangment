
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7RXhFoTD1YsRfuohZndC9MR9Zb3tJ6y8",
  authDomain: "seatarrangment.firebaseapp.com",
  databaseURL: "https://seatarrangment-default-rtdb.firebaseio.com",
  projectId: "seatarrangment",
  storageBucket: "seatarrangment.appspot.com",
  messagingSenderId: "165092401876",
  appId: "1:165092401876:web:5a5fcc0fa0254720f15141",
  measurementId: "G-1GS9F1ZMT3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);