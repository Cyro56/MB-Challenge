import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './src/components/routes/routes';
import AuthProvider from './src/context/AuthContext';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
        <Toast />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
