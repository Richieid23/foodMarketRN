import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Gap, Header, TextInput } from '../components';

const SignUp = () => {
    return (
        <View style={styles.page}>
            <Header title={'Sign Up'} subtitle={'Register and eat'} onBack={() => {}}/>
            <View style={styles.container}>
                <TextInput label={'Username'} placeholder={'Type your username'}/>
                <Gap height={16}/>
                <TextInput label={'Email Address'} placeholder={'Type your email address'}/>
                <Gap height={16}/>
                <TextInput label={'Password'} placeholder={'Type your password'}/>
                <Gap height={24}/>
                <Button text={'Sign Up Now'}/>
            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    page: {flex: 1},
    container: {backgroundColor: 'white', paddingHorizontal: 24, paddingVertical: 26, marginTop: 18, flex: 1}
})
