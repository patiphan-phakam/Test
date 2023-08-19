import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

type AuthContextType = {
  accessToken?: string;
  signin: (accessToken: string) => void;
  signout: (cb: VoidFunction) => void;
};

const AuthContext = React.createContext<AuthContextType>({
  signin: () => {},
  signout: () => {},
});

export const useAuth = () => React.useContext(AuthContext);

export const AuthProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [accessToken, setAccessToken] = useState<string | undefined>();
  useEffect(() => {
    const localToken = localStorage.getItem("accessToken");
    if (localToken) {
      setAccessToken(localToken);
    }
  }, []);
  const setToken = (token: string) => {
    localStorage.setItem("accessToken", token);
    setAccessToken(token);
  };
  const removeToken = () => {
    localStorage.removeItem("accessToken");
    setAccessToken(undefined);
  };
  return (
    <AuthContext.Provider
      value={{
        accessToken,
        signin: setToken,
        signout: () => {
          removeToken();
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const RequireAuth: React.FC<{
  children: JSX.Element;
}> = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  return auth.accessToken ? (
    children
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};
