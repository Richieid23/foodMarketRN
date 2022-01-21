import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IlSuccessOrder} from '../assets';
import {Button, Gap} from '../components';

const SuccessOrder = ({navigation}) => {
  return (
    <View style={styles.page}>
      <IlSuccessOrder />
      <Gap height={30} />
      <Text style={styles.title}>You've Made Order</Text>
      <Gap height={6} />
      <Text style={styles.subtitle}>Just stay at home while we are</Text>
      <Text style={styles.subtitle}>preparing your best foods</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          text={'Order Other Foods'}
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
      {/* <Gap height={12} /> */}
      {/* <View style={styles.buttonContainer}>
        <Button
          text={'View My Order'}
          color="#8d92a3"
          textColor="white"
          onPress={() => navigation.replace('MainApp', {Screen: 'Order'})}
        />
      </View> */}
    </View>
  );
};

export default SuccessOrder;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8092a3',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
