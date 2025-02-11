import React from "react";
import { AuthProvider } from "./context/user/user.context";
import AppRoutes from "./router";

export const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};
