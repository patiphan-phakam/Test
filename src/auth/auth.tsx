import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
type User = {
  token: string;
};

type AuthContextType = {
  user?: User;
  signin: (user: User) => void;
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
  const [user, setUser] = useState<User | undefined>();

  return (
    <AuthContext.Provider
      value={{
        user,
        signin: setUser,
        signout: () => {
          setUser(undefined);
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

  return auth.user ? (
    children
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};
