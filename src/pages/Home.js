import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {MenuPic} from '../assets';
import {Gap, Header, HomeTabSection, MenuCard} from '../components';
import {getMenuData} from '../redux/action';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {menus} = useSelector((state) => state.homeReducer);

  useEffect(() => {
    dispatch(getMenuData());
  }, []);

  return (
    <View style={styles.page}>
      <Header title={'FoodMarket'} subtitle={'Lets get some foods'} />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodCardContainer}>
            <Gap width={24} />
            {menus.map((menu) => {
              return (
                <MenuCard
                  key={menu.id}
                  name={menu.name}
                  image={menu.picture ? menu.picture : MenuPic}
                  rating={menu.rate}
                  onPress={() => navigation.navigate('MenuDetail', menu)}
                />
              );
            })}
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
