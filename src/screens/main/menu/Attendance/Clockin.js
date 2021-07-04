/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BackgroundTimer from 'react-native-background-timer';
import {Maps, Iconinput, CBack, Mainbtn} from '../../../../components';
import {Bookmark, Image2} from '../../../../assets';

const Clockin = ({navigation}) => {
  const [jam, setJam] = useState('00');
  const [mnt, setMnt] = useState('00');
  const [pgm, setPgm] = useState('AM');

  useEffect(() => {
    BackgroundTimer.runBackgroundTimer(() => {
      timeNow();
    }, 1000);
    return () => {
      BackgroundTimer.stopBackgroundTimer();
    };
  }, []);

  const timeNow = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    hours = hours < 10 ? '0' + hours : hours;
    setJam(hours);
    setMnt(minutes);
    setPgm(ampm);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FE904B', '#FB724C']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.topContent}
      >
        <CBack isClockinout={true} text={'Today, ' + jam + ':' + mnt + ' ' + pgm} onPress={() => navigation.goBack()} />
      </LinearGradient>
      <Maps />
      <View style={styles.wrapperInput}>
        <Iconinput placeholder={'Notes'} icon={<Bookmark />} />
        <Iconinput placeholder={'Take a Photo'} icon={<Image2 />} />
      </View>
      <View style={styles.wrapperClockIn}>
        <Mainbtn text={'Clock In'} />
      </View>
    </View>
  );
};

export default Clockin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapperInput: {
    flex: 1,
    padding: 20,
  },
  wrapperClockIn: {
    padding: 20,
  },
  topContent: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
});
