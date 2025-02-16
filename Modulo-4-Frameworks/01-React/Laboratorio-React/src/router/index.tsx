import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import PublicRoutes from './public-routes';
import PrivateRoutes from './private-routes';
import { AuthProvider } from '../context/user/user.context';

const AppRouter: React.FC = () => {
  const routes = useRoutes([PublicRoutes, PrivateRoutes]);
  return routes;
};

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;

