import React from "react";
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from "../context/user/user.context";
import LoginPage from "../pages/login/login";

interface Props {
  privateValidation: boolean
}

export const AuthGuard = ({ privateValidation }: Props) => {
  const userState = useAuth();
  return userState.user ? (
    privateValidation ? (
      <Outlet />
    ) : (
      <Navigate replace to="/list" />
    )
  ) : (
    <LoginPage />
  );
}

export default AuthGuard
