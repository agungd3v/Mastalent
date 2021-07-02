import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const Titleinput = ({title, placeholder, type}) => {
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.inputTitle}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={type === 'password' ? true : false}
      />
    </View>
  );
};

export default Titleinput;

const styles = StyleSheet.create({
  inputWrapper: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 14,
    marginBottom: 10,
  },
  inputTitle: {
    marginBottom: 5,
    fontSize: 12,
    fontFamily: 'Roboto-Medium',
  },
});
