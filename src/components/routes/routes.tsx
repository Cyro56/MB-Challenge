import React from 'react';
import {Home} from '../../pages/Home/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {optionsHomeStyle} from './header.style';
import {AuthScreen} from '../../pages/AuthScreen/AuthScreen';

export const Routes = () => {
  const Stack = createNativeStackNavigator();
  const isAuthenticated = false;

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={optionsHomeStyle}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="AuthScreen"
            component={AuthScreen}
            options={optionsHomeStyle}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
