import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from '../redux/auth/authSelectors';

const PublicRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return !isLoggedIn ? <Outlet /> : <Navigate to={`/profile`} />;
};

export default PublicRoute;
