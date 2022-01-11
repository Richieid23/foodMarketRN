import React, { useEffect, useState } from 'react';
import {ScrollView, View} from 'react-native';
import {Gap, Header, MenuCard} from '../components';

const Home = ({navigation}) => {
  const [menus, setMenus] = useState([]);

  const getMenus = async() => {
      try {
          const response = await fetch("http://192.168.43.59:5000/api/menu");
          const jsonData = await response.json();
          setMenus(jsonData.data.menus);
      } catch (err) {
          console.error(err.message);
      }
  }

  useEffect(() => {
      getMenus();
  }, []);

  return (
    <View>
      <Header title={'FoodMarket'} subtitle={'Lets get some foods'} />
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Gap height={10} />
          {menus.map((menu) => {
            return (
              <MenuCard key={menu.id} title={menu.name} price={menu.price} onPress={() => navigation.navigate('MenuDetail', menu)} />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
