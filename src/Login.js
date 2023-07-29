import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Function to handle the login process when the form is submitted
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      // Attempt to sign in the user with the provided email and password
      await signInWithEmailAndPassword(auth, email, password);
      // Clear the email and password fields and reset the error state on successful login
      setEmail('');
      setPassword('');
      setError(null);
      // Navigate to the dashboard page after successful login
      navigate('/dashboard');
    } catch (error) {
      // Set the error state if there is an error during login
      setError('Error signing in with email and password');
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        {/* Email input field */}
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {/* Password input field */}
        <input
          name="password"
          type="password" 
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {/* Submit button for the login form */}
        <button type="submit">Log In</button>
      </form>
      {/* Display the error message if there is an error during login */}
      {error && <p className="error">{error}</p>}
      {/* Link to the registration page */}
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;