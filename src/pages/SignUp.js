import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storeData, useForm } from '../utills';

const SignUp = ({navigation}) => {
  const [form, setForm] = useForm({
    username: '',
    email: '',
    password: ''
  });

  const onSubmit = async () => {
    try {
      const response = await fetch('http://192.168.43.59:5000/api/auth/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form),
      });

      const parseRes = await response.json();
      
      if (parseRes.status === 'success') {
        storeData('user', parseRes.data);
        storeData('token', {value: parseRes.token});
        navigation.replace('SuccessSignUp');
      } else {
        alert('Sign Up gagal')
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <View style={styles.page}>
      <Header
        title={'Sign Up'}
        subtitle={'Register and eat'}
        onBack={() => {}}
      />
      <View style={styles.container}>
        <TextInput
          label={'Username'}
          placeholder={'Type your username'}
          value={form.username}
          onChangeText={(value) => setForm('username', value)}
        />
        <Gap height={16} />
        <TextInput
          label={'Email Address'}
          placeholder={'Type your email address'}
          value={form.email}
          onChangeText={(value) => setForm('email', value)}
        />
        <Gap height={16} />
        <TextInput
          label={'Password'}
          placeholder={'Type your password'}
          value={form.password}
          onChangeText={(value) => setForm('password',value)}
          secureTextEntry
        />
        <Gap height={24} />
        <Button text={'Sign Up Now'} onPress={onSubmit} />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 18,
    flex: 1,
  },
});
