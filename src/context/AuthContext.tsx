import React, {createContext, useState} from 'react';
interface IAuth {
  isAuthenticated: boolean;
  setIsAuthenticated: (params: boolean) => void;
  userEmail: string;
  setUserEmail: (params: string) => void;
  searchText: string;
  setSearchText: (params: string) => void;
  location: string;
  setLocation: (params: string) => void;
}
export const AuthContext = createContext<IAuth>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  userEmail: '',
  setUserEmail: () => {},
  searchText: '',
  setSearchText: () => {},
  location: '',
  setLocation: () => {},
});

function AuthProvider({children}: {children: React.ReactNode}) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [userEmail, setUserEmail] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');
  const [location, setLocation] = useState<string>('');

  const contextObjects = {
    isAuthenticated,
    setIsAuthenticated,
    userEmail,
    setUserEmail,
    searchText,
    setSearchText,
    location,
    setLocation,
  };

  return (
    <AuthContext.Provider value={contextObjects}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
