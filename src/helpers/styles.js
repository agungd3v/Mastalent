import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  flexOneCenter: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  imageLarge: {
    width: 200,
    height: 200,
  },
  imageMedium: {
    width: 100,
    height: 100,
  },
  imageSmall: {
    width: 50,
    height: 50,
  },
  mb10: {
    marginBottom: 10,
  },
  mt10: {
    marginTop: 8,
  },
  mt20: {
    marginTop: 20,
  },
  lineSpacing: {
    borderWidth: 1,
    borderColor: '#F0F0F0',
    marginBottom: 15,
    marginTop: 5,
  },
  secondaryText: {
    color: '#B0B0B0',
    fontFamily: 'Roboto-Regular',
  },
});

export {style};
