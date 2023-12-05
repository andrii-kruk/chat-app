import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { selectIsLoggedIn } from '../redux/auth/authSelectors';

const PrivateRoutes = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to={'/'} />;
};

export default PrivateRoutes;
