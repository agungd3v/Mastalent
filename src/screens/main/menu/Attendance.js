/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BackgroundTimer from 'react-native-background-timer';
import * as Animatable from 'react-native-animatable';
import {Mainbtn, CBack} from '../../../components';

const Attendance = ({navigation}) => {
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

  const dateNow = () => {
    const date = new Date();
    let tgl = date.getDate();
    const bln = date.getMonth();
    const thn = date.getFullYear();
    tgl.toString().length === 1 ? tgl = `0${tgl}` : tgl = tgl;
    const nmBln = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Okt',
      'Nov',
      'Dec',
    ];
    return `${tgl} ${nmBln[bln]} ${thn}`;
  };

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
        <CBack text={'Live Attendance'} onPress={() => navigation.goBack()} />
        <View style={styles.realTimeWrapper}>
          <Text style={styles.realTime}>
            {jam}
            <Animatable.Text animation="flash" iterationDelay={1000} easing="linear" iterationCount="infinite">
              <Text>:</Text>
            </Animatable.Text>
            {mnt + ' ' + pgm}
          </Text>
        </View>
        <View style={styles.topContentWrapper}>
          <View style={styles.contentTopPdg}>
            <Text style={styles.infoTextTop}>Schedule: {dateNow()}</Text>
            <Text style={styles.infoTimeWork}>09:00 AM - 06:00 PM</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.contentTopPdg}>
            <View style={styles.clockinout}>
              <View style={{flex: 1, marginRight: 5}}>
                <Mainbtn text={'Clock In'} onPress={() => navigation.navigate('Clockin')} />
              </View>
              <View style={{flex: 1, marginLeft: 5}}>
                <Mainbtn text={'Clock Out'} />
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
      {/* <View style={styles.botContent}></View> */}
    </View>
  );
};

export default Attendance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContent: {
    padding: 20,
  },
  botContent: {
    flex: 1,
  },
  topContentWrapper: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  infoTextTop: {
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    fontSize: 15,
    marginTop: 20,
  },
  infoTimeWork: {
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
    fontSize: 25,
    marginTop: 20,
  },
  line: {
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  contentTopPdg: {
    padding: 20,
  },
  clockinout: {
    flexDirection: 'row',
  },
  realTimeWrapper: {
    marginBottom: 20,
  },
  realTime: {
    color: '#fff',
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
    fontSize: 35,
  },
});
