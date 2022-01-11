import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MenuPic} from '../../assets';

const MenuCard = ({onPress, title, price}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={MenuPic} style={styles.image} />
        <View style={{padding: 12}}>
          <Text style={styles.title}>{title}</Text>
          <Text>Rp. {price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    width: 300,
    overflow: 'hidden',
    marginVertical: 10,
  },
  image: {width: 300, height: 200, resizeMode: 'cover'},
  title: {fontSize: 20, fontFamily: 'Poppins-Regular', color: '#020202'},
});
