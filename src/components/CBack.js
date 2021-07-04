import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ArrowLeft} from '../assets';

const CBack = ({text, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
        <ArrowLeft />
      </TouchableOpacity>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{text ? text : 'Text title here'}</Text>
      </View>
    </View>
  );
};

export default CBack;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  titleWrapper: {
    flex: 1,
  },
  title: {
    color: '#fff',
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    textAlign: 'center',
    paddingRight: 30,
  },
});
