/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {style} from '../../helpers/styles';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, []);

  return (
    <View style={style.container}>
      <Text>Its SplashScreen Page Work</Text>
    </View>
  );
};

export default SplashScreen;
