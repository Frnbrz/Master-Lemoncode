import React, { lazy, Suspense } from "react";
import { AuthGuard } from "./router.guard";
import { PrivateRoutesTypes } from "./router.types";

const ListPage = lazy(() => import("../pages/list/list"));
const DetailPage = lazy(() => import("../pages/detail/detail"));

const PrivateRoutes = {
  path: "/",
  element: <AuthGuard />,
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
