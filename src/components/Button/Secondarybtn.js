import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Secondarybtn = ({text}) => {
  return (
    <TouchableOpacity activeOpacity={0.95}>
      <LinearGradient
        colors={['#2B2B2B', '#2B2B2B']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>
          {text ? text : 'Button Title Type Here'}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Secondarybtn;

const styles = StyleSheet.create({
  linearGradient: {
    paddingHorizontal: 15,
    borderRadius: 5,
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
