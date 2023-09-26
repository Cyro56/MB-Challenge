import React, {useContext} from 'react';
import {Home} from '../../pages/Home/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {optionsHomeStyle} from './header.style';
import {AuthScreen} from '../../pages/AuthScreen/AuthScreen';
import {AuthContext} from '../../context/AuthContext';
import {SignUpScreen} from '../../pages/SignUpScreen/SignUpScreen';

export const Routes = () => {
  const {isAuthenticated} = useContext(AuthContext);
  const Stack = createNativeStackNavigator();

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
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
