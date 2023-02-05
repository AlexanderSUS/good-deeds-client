import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { Path } from '../constants/common';
import { useAppSelector } from '../hooks/typedHooks';
import { authSelector } from '../store/authSlice';

const ProtectedRoute = () => {
  const { user } = useAppSelector(authSelector);

  if (user) {
    return <Outlet />;
  }

  return (<Navigate to={`/${Path.login}`} />);
};

export default ProtectedRoute;
