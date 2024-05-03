import React, { useState } from 'react';
import api from '../../axiosConfig';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    try {
      const response = await api.post('/admin/login', {
        username: username,
        password: password
      });
      localStorage.setItem('token', response.data.token);
      console.log('Login successful:', response.data);
      navigate('/admin'); 
    } catch (error) {
      console.error('Admin login failed:', error.response.data);
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
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

export default AdminLogin;
