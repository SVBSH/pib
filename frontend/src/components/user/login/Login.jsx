import React, { useState } from 'react';
import api from '../../../axiosConfig'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await api.post('/admin/login', {
        username: username,
        password: password
      });
      console.log(response);
      localStorage.setItem('token', response.data.token);
      console.log('Login successful:', response.data);

    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <h2>User Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
