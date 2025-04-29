

//Here i use firebase for using real time database and 
//authentication withlogin details
//ii used here node.js and firebase database backend
 
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
  
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

    const firebaseConfig = {
    apiKey: "AIzaSyCLMHlke_fw1tb5ljZs7j13M8dxxDPQRKw",
    authDomain: "soumo-app.firebaseapp.com",
    databaseURL: "https://soumo-app-default-rtdb.firebaseio.com/",
    projectId: "soumo-app",
    storageBucket: "soumo-app.firebasestorage.app",
    messagingSenderId: "1058650577902",
    appId: "1:1058650577902:web:c6b083be05da2a11e9ccff"
  };

  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    createUserWithEmailAndPassword(auth, username, password)
  .then((userCredential) => {
     
    const user = userCredential.user;
    alert("Submit Done")
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });});
