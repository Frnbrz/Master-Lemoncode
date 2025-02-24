import { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  user: string | null;
  login: (data: string) => void;
  logout: () => void;
}


const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => { },
  logout: () => { },
});





export const AuthProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
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
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
