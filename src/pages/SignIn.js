import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, TextInput, Button, Gap } from '../components'

const SignIn = () => {
    return (
        <View style={styles.page}>
            <Header title={'Sign In'} subtitle={'Find your best ever meal'}/>
            <View style={styles.container}>
                <TextInput label={'Email Address'} placeholder={'Type your email address'}/>
                <Gap height={16}/>
                <TextInput label={'Password'} placeholder={'Type your password'}/>
                <Gap height={24}/>
                <Button text={'Sign In'}/>
                <Gap height={12}/>
                <Button text={'Create new account'} color={'#8092a3'} textColor={'white'}/>
            </View>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    page: {flex: 1},
    container: {backgroundColor: 'white', paddingHorizontal: 24, paddingVertical: 26, marginTop: 18, flex: 1}
})
