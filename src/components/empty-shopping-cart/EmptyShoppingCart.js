import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'native-base';

const EmptyShoppingCart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.lineView}></View>
      <View style={styles.titleView}>
        <Icon name="basket" style={styles.icon} />
        <Text style={styles.title}>Shopping Cart</Text>
      </View>
    </View>
  );
};

export default EmptyShoppingCart;

const styles = StyleSheet.create({
  container: {
    height: 30,
    backgroundColor: '#37474F',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  lineView: {
    height: 2,
    width: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#fff',
    alignSelf: 'center',
    marginTop: 4,
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {color: '#fff', fontSize: 14, marginHorizontal: 5},
  title: {
    textAlign: 'center',
    fontSize: 14,
    color: '#fff',
    fontWeight: '700',
  },
});
