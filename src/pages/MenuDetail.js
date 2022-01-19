import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IcBackWhite, MenuPic} from '../assets';
import {Button, Counter, Number, Rating} from '../components';
import {getData} from '../utills';

const MenuDetail = ({navigation, route}) => {
  // const {id, name, description, price} = route.params;
  // const [user, setUser] = useState({});
  const [totalItem, setTotalItem] = useState(1);

  // useEffect(() => {
  //   getData('user').then((res) => {
  //     setUser(res.user);
  //   });
  // },[]);

  // const onSubmit = async () => {
  //   try {
  //     const data = {
  //       menu_id: id,
  //       user_id: user.id,
  //       status: 'On Process'
  //     };

  //     const response = await fetch('http://192.168.43.59:5000/api/order/', {
  //       method: 'POST',
  //       headers: {'Content-Type': 'application/json'},
  //       body: JSON.stringify(data),
  //     });

  //     const parseRes = await response.json();
  //     navigation.replace('SuccessOrder');
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  const onCounterChange = (value) => {
    setTotalItem(value);
  };

  const onOrder = () => {
    const totalPrice = totalItem * 12000;
    const driver = 50000;
    const tax = (10 / 100) * totalPrice;
    const total = totalPrice + driver + tax;

    const data = {
      transaction: {
        totalItem,
        totalPrice,
        driver,
        tax,
        total,
      },
    };

    navigation.navigate('OrderSummary');
  };

  return (
    <View style={styles.page}>
      <ImageBackground source={MenuPic} style={styles.cover}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>Nama Menu</Text>
              <Rating number={4} />
            </View>
            <Counter onValueChange={onCounterChange} />
          </View>
          <Text style={styles.desc}>Deskripsi</Text>
          <Text style={styles.label}>Ingredients:</Text>
          <Text style={styles.desc}>Bahan-Bahan</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Price:</Text>
            {/* <Number number={totalItem * 1200} style={styles.priceTotal} /> */}
          </View>
          <View style={styles.button}>
            <Button text="Order Now" onPress={onOrder} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MenuDetail;

const styles = StyleSheet.create({
  page: {flex: 1},
  cover: {height: 330, paddingTop: 26, paddingLeft: 22},
  back: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
    marginBottom: 14,
  },
  title: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 4,
  },
  footer: {flexDirection: 'row', paddingVertical: 16, alignItems: 'center'},
  priceContainer: {flex: 1},
  button: {width: 163},
  labelTotal: {fontSize: 13, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
  priceTotal: {fontSize: 18, fontFamily: 'Poppins-Regular', color: '#020202'},
});
