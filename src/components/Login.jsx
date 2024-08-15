import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Save the entered username and password in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Registration successful! You can now log in.');
    setIsRegistered(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve stored credentials
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Check if entered credentials match stored credentials
    if (username === storedUsername && password === storedPassword) {
      navigate('/game'); // Redirect to the game page
    } else {
      alert('Incorrect username or password');
    }
  };

  return (
    <div className="login-container">
    <div className="borderline"></div>
      <form onSubmit={isRegistered ? handleLogin : handleRegister}>
      <h2>{isRegistered ? 'Login' : 'Register'}</h2>
        <div className="inputbox">
          <input
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}/>
          <span>UserName</span>
          <i></i>
        </div>

        <div className="inputbox">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Password</span>
          <i></i>
        </div>
        <button type="submit" className='btn'>{isRegistered ? 'Login' : 'Register'}</button>
      </form>
    </div>
  );
}

export default Login;
