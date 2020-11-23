import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCDU6OO-hCwFhEuD0UyOYxk6kV9Jy_nfMk",
    authDomain: "facebook-app-clone-c8a40.firebaseapp.com",
    databaseURL: "https://facebook-app-clone-c8a40.firebaseio.com",
    projectId: "facebook-app-clone-c8a40",
    storageBucket: "facebook-app-clone-c8a40.appspot.com",
    messagingSenderId: "231423644619",
    appId: "1:231423644619:web:0d01df17476a20ed745c4e",
    measurementId: "G-RT4L2NFSL3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth, provider };
  export default db;