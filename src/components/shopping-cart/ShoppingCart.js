import React from 'react';
import {StyleSheet, Text, View,ScrollView} from 'react-native';
import SwipeUpDown from 'react-native-swipe-up-down';

const ItemMini = () => (
  <View style={{flex:1}} >
    <Text>item mini</Text>
  </View>
);
const ItemFull = () => (
  <ScrollView>
    <Text>item full</Text>
    <Text>item full</Text>
  </ScrollView>
);

const ShoppingCart = () => {
  return (
    <SwipeUpDown
      swipeHeight={100}
      itemMini={<ItemMini />}
      itemFull={<ItemFull />}
      onShowFull={() => console.log('full')}
      onShowMini={() => console.log('mini')}
    />
  );
};
export default ShoppingCart;

const styles = StyleSheet.create({});
