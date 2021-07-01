/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, ScrollView} from 'react-native';
import Router from './router';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
