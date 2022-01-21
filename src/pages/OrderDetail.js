import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Gap, Header, ItemListMenu, ItemValue} from '../components';
import {MenuPic} from '../assets';
import {API_HOST} from '../config';
import {getData} from '../utills/Storage';
import {useDispatch} from 'react-redux';
import {setLoading} from '../redux/action';
import {showMessage} from 'react-native-flash-message';

const OrderDetail = ({navigation, route}) => {
  const order = route.params;
  const dispatch = useDispatch();
  const [token, setToken] = useState('');

  useEffect(() => {
    getData('token').then((res) => {
      setToken(res.value);
    });
  }, []);

  const onCancel = async () => {
    const data = {
      status: 'CANCELED',
    };

    dispatch(setLoading(true));
    try {
      const response = await fetch(`${API_HOST.url}/order/${order.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          token,
        },
        body: JSON.stringify(data),
      });

      const parseRes = await response.json();
      console.log(parseRes);
      if (parseRes.status === 'success') {
        dispatch(setLoading(false));
        navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
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
        title={'Order Detail'}
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
          name={order.menu_name}
          price={order.menu_price}
          items={order.quantity}
        />
        <Text style={styles.label}>Detail Order</Text>
        <ItemValue
          label={order.menu_name}
          value={order.menu_price}
          type={'currency'}
        />
        <ItemValue label={'Driver'} value={50000} type={'currency'} />
        <ItemValue
          label={'Tax 10%'}
          value={(10 / 100) * order.total}
          type={'currency'}
        />
        <ItemValue
          label={'Total Harga'}
          value={order.total}
          type={'currency'}
          valueColor="#1abc9c"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Order By:</Text>
        <ItemValue label={'Nama'} value={order.user_name} />
        <ItemValue label={'Email'} value={order.user_email} />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Order Status:</Text>
        <ItemValue
          label={`#${order.id.substr(0, 8)}`}
          value={order.status}
          valueColor={order.status === 'CANCELED' ? '#d9435e' : '#1abc9c'}
        />
      </View>
      <View style={styles.button}>
        {order.status === 'PENDING' && (
          <Button
            text={'Cancel My Order'}
            color="#d9435e"
            textColor="white"
            onPress={() => onCancel()}
          />
        )}
      </View>
      <Gap height={40} />
    </ScrollView>
  );
};

export default OrderDetail;

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
