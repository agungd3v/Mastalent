/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {style} from '../../helpers/styles';
import LinearGradient from 'react-native-linear-gradient';
import {Document, Profile, Discovery, Calendar, Activity, Ticket} from '../../assets';

const Home = ({navigation}) => {
  const [announcment, setAnnouncment] = useState([]);
  const [task, setTask] = useState([]);
  const [timesheet, setTimesheet] = useState([]);

  return (
    <View style={style.container}>
      <View>
        <LinearGradient
          colors={['#FE904B', '#FB724C']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={styles.boxWrapper}
        >
          <View style={styles.accountWrapper}>
            <View style={{flex: 1}}>
              <Text style={styles.accountName}>Agung Ardiyanto</Text>
              <Text style={styles.accountJob}>IT Programmer</Text>
            </View>
            <View style={styles.accountFoto}>
              <Profile />
            </View>
          </View>
          <View style={styles.iconWrapper}>
            <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('Attendance')}>
              <View style={styles.iconClick}>
                <Document />
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9}>
              <View style={styles.iconClick}>
                <Discovery />
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9}>
              <View style={styles.iconClick}>
                <Calendar />
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9}>
              <View style={styles.iconClick}>
                <Activity />
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9}>
              <View style={styles.iconClick}>
                <Ticket />
              </View>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
      <View style={{flex: 1}}>
        <View>
          <View style={styles.titleInfo}>
            <Text style={styles.subTitleInfo}>Announcment</Text>
          </View>
          {announcment.length < 1 ?
            <View>
              <Text style={style.textCenter}>No announcment</Text>
              <Text style={style.textCenter}>You don't have any announcment</Text>
            </View>
            :
            <View>
              <Text>test any announcment</Text>
            </View>
          }
        </View>
        <View>
          <View style={styles.titleInfo}>
            <Text style={styles.subTitleInfo}>Task</Text>
          </View>
          {task.length < 1 ?
            <View>
              <Text style={style.textCenter}>No task</Text>
              <Text style={style.textCenter}>You don't have any Task</Text>
            </View>
            :
            <View>
              <Text>test any task</Text>
            </View>
          }
        </View>
        <View>
          <View style={styles.titleInfo}>
            <Text style={styles.subTitleInfo}>Timesheet</Text>
          </View>
          {timesheet.length < 1 ?
            <View>
              <Text style={style.textCenter}>No timesheet</Text>
              <Text style={style.textCenter}>You don't have any timesheet</Text>
            </View>
            :
            <View>
              <Text>test any timesheet</Text>
            </View>
          }
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  boxWrapper: {
    padding: 20,
    borderRadius: 14,
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  iconClick: {
    margin: 5,
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  accountWrapper: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  accountName: {
    fontFamily: 'Roboto-Bold',
    color: '#fff',
    fontSize: 20,
  },
  accountJob: {
    color: '#fff',
    fontFamily: 'Roboto-Regular',
    marginTop: 3,
  },
  accountFoto: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  titleInfo: {
    marginTop: 30,
    marginBottom: 20,
  },
  subTitleInfo: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
  },
});
