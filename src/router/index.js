import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen, SignIn, Home} from '../screens';

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
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </StackNavigator.Navigator>
  );
};

export default Router;
