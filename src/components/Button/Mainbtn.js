/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Mainbtn = ({text, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.95} onPress={onPress}>
      <LinearGradient
        colors={['#FE904B', '#FB724C']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.linearGradient}
      >
        <Text style={styles.buttonText}>
          {text ? text : 'Button Title Type Here'}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Mainbtn;

const styles = StyleSheet.create({
  linearGradient: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 14,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
