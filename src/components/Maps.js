/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';

const Maps = () => {
  return (
    <View style={{marginBottom: 5}}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default Maps;

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
