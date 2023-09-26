import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './src/components/routes/routes';

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
