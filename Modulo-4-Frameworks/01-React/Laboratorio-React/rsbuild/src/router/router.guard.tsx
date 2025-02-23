import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from "../context/user/user.context";



export const AuthGuard = () => {
  const userState = useAuth();
  console.log(userState)
  return userState.user === null ?
    <Navigate to="/" replace />
    : <Outlet />;
}

export default AuthGuard
