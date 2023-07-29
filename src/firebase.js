import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration with API keys and other settings
const firebaseConfig = {
    apiKey: "AIzaSyASpjS5qmSJBE5pNDbFhuZSwoxOvm9OB7s",
    authDomain: "assignment3-web.firebaseapp.com",
    projectId: "assignment3-web",
    storageBucket: "assignment3-web.appspot.com",
    messagingSenderId: "93438456590",
    appId: "1:93438456590:web:04db4ba87d6953cb5b5d5f",
    measurementId: "G-9WQ3SHLDZ3"
};


// Initialize the Firebase app with the provided configuration
const app = initializeApp(firebaseConfig);

// Get the authentication object for Firebase authentication
const auth = getAuth(app);

// Get the Firestore database object for interacting with the database
const firestore = getFirestore(app);

// Export the authentication and Firestore objects for use in other parts of the application
export { auth, firestore };