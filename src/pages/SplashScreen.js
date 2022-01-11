import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Logo} from '../assets';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getData } from '../utills';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getData('token').then((res) => {
        if (res) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('SignIn');
        }
      });
    }, 5000);
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#ffc700',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Logo />
      <View style={{height: 38}} />
      <Text
        style={{fontSize: 32, color: '#020202', fontFamily: 'Poppins-Medium'}}>
        FoodMarket
      </Text>
    </View>
  );
};

export default SplashScreen;
