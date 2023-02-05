import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './app/Layout/Layout';
import ProtectedRoute from './authentication/ProtectedRoute';
import { Path } from './constants/common';
import Dashboard from './pages/Dashboard/Dashboard';
import Friends from './pages/Friends/Friends';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={Path.login} element={<Login />} />
        <Route path={Path.register} element={<Register />} />
        <Route
          path={Path.unauthorized}
          element={<h1>Unauthorized</h1>}
        />
        <Route element={<ProtectedRoute />}>
          <Route path={Path.dashboard} element={(<Dashboard />)} />
          <Route path={Path.profile} element={(<Profile />)} />
          <Route path={Path.friends} element={(<Friends />)} />
        </Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
