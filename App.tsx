import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './src/components/routes/routes';
import AuthProvider from './src/context/AuthContext';
import Toast from 'react-native-toast-message';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#4876ee" barStyle="light-content" />
      <AuthProvider>
        <Routes />
        <Toast />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
