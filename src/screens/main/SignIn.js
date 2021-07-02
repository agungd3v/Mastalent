import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {style} from '../../helpers/styles';
import {Mainbtn, Titleinput} from '../../components';

const SignIn = ({navigation}) => {
  return (
    <View style={style.container}>
      <View style={style.flexOneCenter}>
        <View style={style.flexCenter}>
          <Image
            style={style.imageSmall}
            source={require('../../assets/logo.png')}
          />
        </View>
        <View style={style.mt20}>
          <Titleinput title={'Username'} placeholder={'Type Username'} />
          <Titleinput
            title={'Password'}
            placeholder={'Type password'}
            type={'password'}
          />
          <View style={style.lineSpacing} />
          <Mainbtn
            text={'Sign In'}
            onPress={() => navigation.replace('Home')}
          />
          <View style={style.mt10}>
            <Text style={styles.tos}>
              By signing in, I agree with
              <Text style={styles.tosHighlight}> Terms of Use</Text>
            </Text>
            <Text style={styles.tos}>
              and <Text style={styles.tosHighlight}>Privacy Policy</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  tos: {
    textAlign: 'center',
    color: '#B0B0B0',
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    marginBottom: 3,
  },
  tosHighlight: {
    color: '#000',
  },
});
