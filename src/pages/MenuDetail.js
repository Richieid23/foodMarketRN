import React, { useEffect, useState } from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {MenuPic} from '../assets';
import {Button, Gap} from '../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getData } from '../utills';

const MenuDetail = ({navigation, route}) => {
  const {id, name, description, price} = route.params;
  const [user, setUser] = useState({});

  useEffect(() => {
    getData('user').then((res) => {
      setUser(res.user);
    });
  },[]);

  const onSubmit = async () => {
    try {
      const data = {
        menu_id: id,
        user_id: user.id,
        status: 'On Process'
      };

      const response = await fetch('http://192.168.43.59:5000/api/order/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      });

      const parseRes = await response.json();
      navigation.replace('SuccessOrder');
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <View style={styles.page}>
      <ImageBackground source={MenuPic} style={styles.cover} />
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>{name}</Text>
            </View>
          </View>
          <Gap height={20} />
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Harga</Text>
            <Text style={styles.priceTotal}>{price}</Text>
          </View>
          <View style={styles.button}>
            <Button
              text={'Order now'}
              onPress={onSubmit}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MenuDetail;

const styles = StyleSheet.create({
  page: {flex: 1},
  cover: {height: 330},
  content: {
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -40,
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1,
  },
  mainContent: {flex: 1},
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {fontSize: 20, fontFamily: 'Poppins-Regular', color: '#020202'},
  description: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8092a3',
    marginBottom: 16,
  },
  footer: {flexDirection: 'row', paddingVertical: 16, alignItems: 'center'},
  labelTotal: {fontSize: 13, fontFamily: 'Poppins-Regular', color: '#8092a3'},
  priceTotal: {fontSize: 18, fontFamily: 'Poppins-Regular', color: '#020202'},
  button: {width: 163},
  priceContainer: {flex: 1},
});
