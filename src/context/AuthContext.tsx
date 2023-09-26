import React, {createContext, useState} from 'react';
interface IAuth {
  isAuthenticated: boolean;
  setIsAuthenticated: (params: boolean) => void;
}
export const AuthContext = createContext<IAuth>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

function AuthProvider({children}: {children: React.ReactNode}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const contextObjects = {
    isAuthenticated,
    setIsAuthenticated,
  };

  return (
    <AuthContext.Provider value={contextObjects}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
