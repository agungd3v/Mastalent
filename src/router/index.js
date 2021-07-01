import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen, Home, Profile} from '../screens';

const StackNavigator = createStackNavigator();

const Router = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </StackNavigator.Navigator>
  );
};

export default Router;
