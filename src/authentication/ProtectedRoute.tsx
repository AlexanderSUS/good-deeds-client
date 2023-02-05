import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Path } from '../constants/common';
import { useAppSelector } from '../hooks/typedHooks';
import { authSelector } from '../store/authSlice';
import { notificationSelector } from '../store/notificationSlice';

const ProtectedRoute = () => {
  const location = useLocation();
  const { user } = useAppSelector(authSelector);
  const { isLoading } = useAppSelector(notificationSelector);

  if (isLoading) {
    return null;
  }

  if (user) {
    return <Outlet />;
  }

  return (<Navigate to={`/${Path.login}`} state={{ from: location }} replace />);
};

export default ProtectedRoute;
