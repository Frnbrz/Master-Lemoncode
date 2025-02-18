import { lazy, Suspense } from 'react';
import { PublicRoutesTypes } from './router.types';

const LoginPage = lazy(() => import('../pages/login/login'));

const PublicRoutes = {
  path: "/",
  children: [
    {
      path: PublicRoutesTypes.LOGIN,
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <LoginPage />
        </Suspense>
      ),
    },
  ],
};

export default PublicRoutes;
