import React, {createContext, useState} from 'react';
interface IAuth {
  isAuthenticated: boolean;
  setIsAuthenticated: (params: boolean) => void;
  userEmail: string;
  setUserEmail: (params: string) => void;
}
export const AuthContext = createContext<IAuth>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  userEmail: '',
  setUserEmail: () => {},
});

function AuthProvider({children}: {children: React.ReactNode}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState<string>('');

  const contextObjects = {
    isAuthenticated,
    setIsAuthenticated,
    userEmail,
    setUserEmail,
  };

  return (
    <AuthContext.Provider value={contextObjects}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
