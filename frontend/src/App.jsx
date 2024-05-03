import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/user/login/Login';
import AdminLogin from './components/admin/AdminLogin';
import Jobs from './components/jobs/Jobs';
import { isLoggedIn } from './axiosConfig';

const App = () => {

  return (
    <div>
      <h1>Jobs</h1>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<Jobs />} />
      </Routes>
    </div>
  );
}

export default App;
