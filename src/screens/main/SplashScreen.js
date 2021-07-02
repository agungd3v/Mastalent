/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-sequences */
/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {Text, View, Image, ActivityIndicator} from 'react-native';
import {style} from '../../helpers/styles';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
  }, []);

  return (
    <View style={style.container}>
      <View style={style.centerView}>
        <Animatable.Text
          animation="fadeInDown"
          iterationCount={1}
          direction="alternate"
          style={style.textCenter, style.mb10}
        >
          <Image
            style={style.imageMedium}
            source={require('../../assets/logo.png')}
          />
        </Animatable.Text>
        <ActivityIndicator size="small" color="#FE904B" />
      </View>
      <Text style={style.textCenter}>v1.0.0 (Beta)</Text>
    </View>
  );
};

export default SplashScreen;
