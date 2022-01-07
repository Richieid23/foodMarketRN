import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Gap, Header, MenuCard } from '../components'

const Home = ({navigation}) => {
    return (
        <View>
            <Header title={'FoodMarket'} subtitle={'Lets get some foods'}/>
            <ScrollView>
                <View style={{alignItems: 'center' }}>
                    <Gap height={10}/>
                    <MenuCard onPress={() => navigation.navigate('MenuDetail')}/>
                    <MenuCard onPress={() => navigation.navigate('MenuDetail')}/>
                    <MenuCard onPress={() => navigation.navigate('MenuDetail')}/>
                    <MenuCard onPress={() => navigation.navigate('MenuDetail')}/>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
