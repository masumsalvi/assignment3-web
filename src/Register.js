import React, { useState } from 'react';
import { auth, firestore } from './firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { collection, addDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSignUp = async (event) => {
        event.preventDefault();
        try {
            // Create a new user with the provided email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Add user data (uid, name, email) to the 'user-list' collection in Firestore
            await addDoc(collection(firestore, 'user-list'), {
                uid: user.uid,
                name: name,
                email: user.email,
            });
            // Update the user's display name with the provided name
            await updateProfile(user, { displayName: name });
            // Clear the input fields after successful registration
            setName('');
            setEmail('');
            setPassword('');
            // setError(null);
        } catch (error) {
            // Handle errors if there is an issue during registration
            setError('Error signing up with email and password');
        }
    };

    return (
        <div className="container">
            <h1>Register</h1>
            <form onSubmit={handleSignUp}>
                <input
                    name="name" // Name input field
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button type="submit">Sign Up</button>
            </form>
            {error && <p className="error">{error}</p>}
            <p>
                Already have an account? <Link to="/">Login</Link>
            </p>
        </div>
    );
};

export default Register;