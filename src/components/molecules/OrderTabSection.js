/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, ScrollView, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useSelector} from 'react-redux';
import {MenuPic} from '../../assets';
import ItemListMenu from './ItemListMenu';

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

const InProgress = () => {
  const navigation = useNavigation();
  const {orders} = useSelector((state) => state.orderReducer);

  const inProgress = orders.filter(
    (order) => order.status === 'PENDING' || order.status === 'ON_DELIVERY',
  );
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        {inProgress.map((order) => {
          return (
            <ItemListMenu
              key={order.id}
              rating={order.menu_rate}
              image={MenuPic}
              type={'in-progress'}
              name={order.menu_name}
              items={order.quantity}
              price={order.total}
              status={order.status}
              onPress={() => navigation.navigate('OrderDetail', order)}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();
  const {orders} = useSelector((state) => state.orderReducer);

  const pastOrders = orders.filter(
    (order) => order.status === 'CANCELED' || order.status === 'SUCCESS',
  );
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        {pastOrders.map((order) => {
          return (
            <ItemListMenu
              key={order.id}
              image={MenuPic}
              type={'in-progress'}
              name={order.menu_name}
              items={order.quantity}
              price={order.total}
              status={order.status}
              onPress={() => navigation.navigate('OrderDetail', order)}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const OrderTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
  ]);

  const renderScene = SceneMap({
    1: InProgress,
    2: PastOrders,
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

export default OrderTabSection;
