import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyASpjS5qmSJBE5pNDbFhuZSwoxOvm9OB7s",
  
    authDomain: "assignment3-web.firebaseapp.com",
  
    projectId: "assignment3-web",
  
    storageBucket: "assignment3-web.appspot.com",
  
    messagingSenderId: "93438456590",
  
    appId: "1:93438456590:web:04db4ba87d6953cb5b5d5f",
  
    measurementId: "G-9WQ3SHLDZ3"
  
  };
  

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();