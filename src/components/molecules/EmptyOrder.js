import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Button} from '../atoms';
import {IlEmptyOrder} from '../../assets';
import {useNavigation} from '@react-navigation/native';

const EmptyOrder = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <IlEmptyOrder />
      <Gap height={30} />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Gap height={6} />
      <Text style={styles.subtitle}>Now you are able to order</Text>
      <Text style={styles.subtitle}>some foods as a self-reward</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          text={'Find foods'}
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default EmptyOrder;

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
