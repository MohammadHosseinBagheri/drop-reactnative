import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'native-base';
const EmptyShoppingCart = () => {
  return (
    <View
      style={{
        height: 30,
        backgroundColor: '#37474F',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
      }}>
      <View
        style={{
          height: 2,
          width: 20,
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: '#fff',
          alignSelf: 'center',
          marginTop: 4,
        }}></View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon
          name="basket"
          style={{color: '#fff', fontSize: 14, marginHorizontal: 5}}
        />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 14,
            color: '#fff',
            fontWeight: '700',
          }}>
          Shopping Cart
        </Text>
      </View>
    </View>
  );
};

export default EmptyShoppingCart;

const styles = StyleSheet.create({});
