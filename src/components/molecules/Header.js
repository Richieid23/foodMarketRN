import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = ({title, subtitle}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    )
} 

export default Header

const styles = StyleSheet.create({
    container: {backgroundColor: 'white', paddingHorizontal: 24, paddingTop: 30, paddingBottom: 24},
    title: {fontSize: 22, fontFamily: 'Poppins-Medium', color: '#020202'},
    subtitle:{fontSize: 14, fontFamily: 'Poppins-Medium', color: '#8d92a3'},
})
