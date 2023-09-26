import React, {createContext, useState} from 'react';
interface IAuth {
  isAuthenticated: boolean;
  setIsAuthenticated: (params: boolean) => void;
  userEmail: string;
  setUserEmail: (params: string) => void;
  searchText: string;
  setSearchText: (params: string) => void;
}
export const AuthContext = createContext<IAuth>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  userEmail: '',
  setUserEmail: () => {},
  searchText: '',
  setSearchText: () => {},
});

function AuthProvider({children}: {children: React.ReactNode}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');

  const contextObjects = {
    isAuthenticated,
    setIsAuthenticated,
    userEmail,
    setUserEmail,
    searchText,
    setSearchText,
  };

  return (
    <AuthContext.Provider value={contextObjects}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
