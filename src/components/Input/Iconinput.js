import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const Iconinput = ({placeholder, icon}) => {
  return (
    <View style={styles.inputWrapper}>
      {icon}
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default Iconinput;

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#F0F0F0',
    flex: 1,
    paddingBottom: 10,
    paddingHorizontal: 5,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    marginLeft: 10,
    marginTop: 8,
  },
});
