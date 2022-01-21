import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Gap, Header, ItemListMenu, ItemValue} from '../components';
import {MenuPic} from '../assets';
import {useDispatch} from 'react-redux';
import {setLoading} from '../redux/action';
import {API_HOST} from '../config';
import {getData} from '../utills';
import {showMessage} from 'react-native-flash-message';

const OrderSummary = ({navigation, route}) => {
  const {item, order, user} = route.params;
  const dispatch = useDispatch();
  const [token, setToken] = useState('');

  useEffect(() => {
    getData('token').then((res) => {
      setToken(res.value);
    });
  }, []);

  const onCheckout = async () => {
    const data = {
      menu_id: item.id,
      user_id: user.id,
      quantity: order.totalItem,
      total: order.total,
      status: 'PENDING',
    };

    dispatch(setLoading(true));
    try {
      const response = await fetch(`${API_HOST.url}/order/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          token,
        },
        body: JSON.stringify(data),
      });

      const parseRes = await response.json();

      if (parseRes.status === 'success') {
        dispatch(setLoading(false));
        navigation.reset({index: 0, routes: [{name: 'SuccessOrder'}]});
      } else {
        dispatch(setLoading(false));
        showToast(parseRes.message);
      }
    } catch (err) {
      dispatch(setLoading(false));
      showToast(err.message);
    }
  };

  const showToast = (message, type) => {
    showMessage({
      message,
      type: type === 'success' ? 'success' : 'danger',
      backgroundColor: type === 'success' ? '#1abc9c' : '#d9435e',
    });
  };

  return (
    <ScrollView>
      <Header
        title={'Payment'}
        subtitle={'You deserve better meal'}
        onBack={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListMenu
          image={MenuPic}
          type={'order-summary'}
          name={item.name}
          price={item.price}
          items={order.totalItem}
        />
        <Text style={styles.label}>Detail Order</Text>
        <ItemValue
          label={item.name}
          value={order.totalPrice}
          type={'currency'}
        />
        <ItemValue label={'Driver'} value={order.driver} type={'currency'} />
        <ItemValue label={'Tax 10%'} value={order.tax} type={'currency'} />
        <ItemValue
          label={'Total Harga'}
          value={order.total}
          valueColor="#1abc9c"
          type={'currency'}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Order By:</Text>
        <ItemValue label={'Nama'} value={user.name} />
        <ItemValue label={'Email'} value={user.email} />
      </View>
      <View style={styles.button}>
        <Button text={'Checkout Now'} onPress={onCheckout} />
      </View>
      <Gap height={40} />
    </ScrollView>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 8,
  },
  button: {paddingHorizontal: 24, marginTop: 24},
});
