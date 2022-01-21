import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {Fragment} from 'react';
import Rating from './Rating';
import Number from './Number';

const ItemListMenu = ({
  image,
  onPress,
  rating,
  items,
  price,
  type,
  name,
  status,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        // item product
        return (
          <Fragment>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Number number={price} />
            </View>
            <Rating number={rating} />
          </Fragment>
        );
      case 'order-summary':
        // item order summary
        return (
          <Fragment>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Number number={price} />
            </View>
            <Text style={styles.items}>{items} items</Text>
          </Fragment>
        );
      case 'in-progress':
        //
        return (
          <Fragment>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <View style={styles.row}>
                <Text style={styles.price}>{items} items</Text>
                <View style={styles.dot} />
                <Number number={price} style={styles.price} />
              </View>
            </View>
            <View>
              <Text style={styles.status(status)}>{status}</Text>
            </View>
          </Fragment>
        );
      case 'past-orders':
        //
        return (
          <Fragment>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <View style={styles.row}>
                <Text style={styles.price}>
                  {items} items {price}
                </Text>
                <View style={styles.dot} />
                <Number number={price} style={styles.price} />
              </View>
            </View>
            <View>
              <Text style={styles.status(status)}>{status}</Text>
            </View>
          </Fragment>
        );
      default:
        return (
          <Fragment>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Rating number={rating} />
          </Fragment>
        );
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        {renderContent()}
      </View>
    </TouchableOpacity>
  );
};

export default ItemListMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 8,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  content: {flex: 1},
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },
  price: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#8d92a3',
  },
  items: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#8d92a3',
  },
  status: (status) => ({
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: status === 'CANCELED' ? '#d9435e' : '#1abc9c',
  }),
  row: {flexDirection: 'row', alignItems: 'center'},
  dot: {
    width: 3,
    height: 3,
    borderRadius: 3,
    backgroundColor: '#8d92a3',
    marginHorizontal: 4,
  },
});
