import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCWKoB_uhFLh7hQc0A9fHYA9XCyd7NwLCA",
    authDomain: "e-ride-a7cc0.firebaseapp.com",
    projectId: "e-ride-a7cc0",
    storageBucket: "e-ride-a7cc0.appspot.com",
    messagingSenderId: "959918553370",
    appId: "1:959918553370:web:cd131d58172673638cd4a3"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
