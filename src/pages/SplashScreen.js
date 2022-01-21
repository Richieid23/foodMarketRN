/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Logo} from '../assets';
import {API_HOST} from '../config';
import {getData} from '../utills';

const SplashScreen = ({navigation}) => {
  const isAuth = async (token) => {
    try {
      const response = await fetch(`${API_HOST.url}/auth/is-verify`, {
        method: 'GET',
        headers: {token: token.value},
      });

      const parseRes = await response.json();

      parseRes === true
        ? navigation.reset({index: 0, routes: [{name: 'MainApp'}]})
        : navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getData('token').then((res) => {
        if (res) {
          isAuth(res);
        } else {
          navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
        }
      });
    }, 3000);
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
