import React, { createContext, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  user: string | null;
  login: (data: string) => void;
  logout: () => void;
}


const AuthContext = createContext<AuthContextType>({
  user: null,
  login: (data: any) => { },
  logout: () => { },
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<string>();
  const navigate = useNavigate();

  const login = async (data: string) => {
    setUser(data);
    navigate("/list");
  };

  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
