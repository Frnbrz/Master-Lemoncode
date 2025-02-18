import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from "../context/user/user.context";



export const AuthGuard = () => {
  const userState = useAuth();
  return userState.user === undefined ?
    <Navigate to="/" replace />
    : <Outlet />;
}

export default AuthGuard
