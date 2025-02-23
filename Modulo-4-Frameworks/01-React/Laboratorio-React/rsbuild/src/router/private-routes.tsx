import React, { lazy, Suspense } from "react";
import { AuthGuard } from "./router.guard";
import { PrivateRoutesTypes } from "./router.types";
import { useAuth } from "src/context/user/user.context";
import { useLocation } from "react-router-dom";

const ListPage = lazy(() => import("../pages/list/list"));
const DetailPage = lazy(() => import("../pages/detail/detail"));
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { logout, user } = useAuth()
  const { pathname } = useLocation()
  const getUrlFistParam = pathname.split('/')[1]
  const handleLogout = () => {
    logout()
  }

  return (
    <div>
      <header>
        <h2>Hello {user} from {getUrlFistParam} page</h2>
        <button className="btn btn-sm" onClick={() => handleLogout()}>logout</button>
      </header>
      {children}
    </div>
  )
}

const PrivateRoutes = {
  path: "/",
  element: (
    <Layout>
      <AuthGuard />
    </Layout>
  ),
  children: [
    {
      path: PrivateRoutesTypes.LIST,
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <ListPage />
        </Suspense>
      ),
    },
    {
      path: PrivateRoutesTypes.LIST_DETAILS,
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <DetailPage />
        </Suspense>
      ),
    },
    {
      path: "*",
      element: <div>Not found</div>,
    }
  ],
};

export default PrivateRoutes;
