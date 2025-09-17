import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDocs, query, where, collection, addDoc } from 'firebase/firestore';
import './Login.css';
import './Home.css';
import { db } from './firebaseConfig';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError('');
    try {
      const q = query(
        collection(db, 'Wrestleverse', 'LoginDetails', 'Users'),
        where('username', '==', username),
        where('password', '==', password)
      );
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
          localStorage.setItem('username', username); // save username
          navigate('/home');
      } else {
        setError('Invalid username or password.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Login failed. Please try again.');
    }
  };

  const handleRegister = async () => {
    setError('');
    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }

    try {
      const q = query(
        collection(db, 'Wrestleverse', 'LoginDetails', 'Users'),
        where('username', '==', username)
      );
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        setError('Username already exists.');
        return;
      }

      await addDoc(collection(db, 'Wrestleverse', 'LoginDetails', 'Users'), {
        username,
        password,
      });

      setIsRegistering(false);
      setError('Registration successful. You can now log in.');
    } catch (err) {
      console.error('Registration error:', err);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="login-Background">
      
      <div className="login-box">
        <img className="Logo1" src="/Images/Wrestleverse2K25.png" alt="Logo" />
        <h2 className="login-title">{isRegistering ? 'Register' : 'Login'}</h2>
        {error && <p className="login-error">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button
          onClick={isRegistering ? handleRegister : handleLogin}
          className="login-button"
        >
          {isRegistering ? 'Register' : 'Login'}
        </button>
        <p className="toggle-text" onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Already have an account? Click here to Login' : 'No account? Click here to Register'}
        </p>
      </div>
    </div>
  );
};

export default Login;
