import React, {useContext} from 'react';
import {Home} from '../../pages/Home/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthScreen} from '../../pages/AuthScreen/AuthScreen';
import {AuthContext} from '../../context/AuthContext';
import {SignUpScreen} from '../../pages/SignUpScreen/SignUpScreen';
import {ExploreScreen} from '../../pages/Explore/Explore';
import {Details} from '../../pages/Details/Details';
import {CreateEvent} from '../../pages/CreateEvent/CreateEvent';

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
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Explore"
            component={ExploreScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CreateEvent"
            component={CreateEvent}
            options={{headerShown: false}}
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
