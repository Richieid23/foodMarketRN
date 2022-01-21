/* eslint-disable react-native/no-inline-styles */
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ItemListMenu from './ItemListMenu';
import {MenuPic} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getMenuDataByTypes} from '../../redux/action';

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      width: '20%',
      marginLeft: '12%',
    }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#f2f2f2',
      borderBottomWidth: 1,
    }}
    tabStyle={{}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8d92a3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const Makanan = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {makanan} = useSelector((state) => state.homeReducer);

  useEffect(() => {
    dispatch(getMenuDataByTypes('Makanan'));
  }, []);
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        {makanan.map((item) => {
          return (
            <ItemListMenu
              key={item.id}
              rating={item.rate}
              image={item.picture ? item.picture : MenuPic}
              type={'product'}
              name={item.name}
              price={item.price}
              onPress={() => navigation.navigate('MenuDetail', item)}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const Minuman = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {minuman} = useSelector((state) => state.homeReducer);

  useEffect(() => {
    dispatch(getMenuDataByTypes('Minuman'));
  }, []);
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        {minuman.map((item) => {
          return (
            <ItemListMenu
              key={item.id}
              rating={item.rate}
              image={item.picture ? item.picture : MenuPic}
              type={'product'}
              name={item.name}
              price={item.price}
              onPress={() => navigation.navigate('MenuDetail', item)}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const HomeTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Makanan'},
    {key: '2', title: 'Minuman'},
  ]);

  const renderScene = SceneMap({
    1: Makanan,
    2: Minuman,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
