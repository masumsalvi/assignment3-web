import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyASpjS5qmSJBE5pNDbFhuZSwoxOvm9OB7s",
  
    authDomain: "assignment3-web.firebaseapp.com",
  
    projectId: "assignment3-web",
  
    storageBucket: "assignment3-web.appspot.com",
  
    messagingSenderId: "93438456590",
  
    appId: "1:93438456590:web:04db4ba87d6953cb5b5d5f",
  
    measurementId: "G-9WQ3SHLDZ3"
  
  };
  

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);
  
  export { auth, firestore };