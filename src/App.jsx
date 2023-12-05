import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage/ProfilePage'));
const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));

import SharedLayout from 'components/SharedLayout/SharedLayout';
import { PublicRoutes, PrivateRoutes } from 'components/';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<SharedLayout />}>
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
};
export default App;
