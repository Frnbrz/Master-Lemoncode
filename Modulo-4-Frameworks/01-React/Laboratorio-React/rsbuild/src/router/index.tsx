import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { AuthProvider } from '../context/user/user.context';
import PrivateRoutes from './private-routes';
import PublicRoutes from './public-routes';

const AppRouter = () => {
  const routes = useRoutes([PublicRoutes, PrivateRoutes]);
  return routes;
};

const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;

