import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {MenuPic} from '../assets';
import {Gap, Header, HomeTabSection, MenuCard} from '../components';

const Home = ({navigation}) => {
  // const layout = useWindowDimensions();

  // const getMenus = async() => {
  //     try {
  //         const response = await fetch("http://192.168.43.59:5000/api/menu");
  //         const jsonData = await response.json();
  //         setMenus(jsonData.data.menus);
  //     } catch (err) {
  //         console.error(err.message);
  //     }
  // }

  // useEffect(() => {
  //     getMenus();
  // }, []);

  return (
    <View style={styles.page}>
      <Header title={'FoodMarket'} subtitle={'Lets get some foods'} />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodCardContainer}>
            <Gap width={24} />
            <MenuCard
              name={'Nama Menu'}
              image={MenuPic}
              rating={4.0}
              onPress={() => navigation.navigate('MenuDetail')}
            />
          </View>
        </ScrollView>
      </View>
      <View style={styles.tabContainer}>
        <HomeTabSection />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1},
  foodCardContainer: {flexDirection: 'row', marginVertical: 24},
  tabContainer: {flex: 1},
});
