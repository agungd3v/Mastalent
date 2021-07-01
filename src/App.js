/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, SafeAreaView, ScrollView} from 'react-native';
import {style} from './helpers/styles';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={style.container}>
          <Text>Its Work</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
