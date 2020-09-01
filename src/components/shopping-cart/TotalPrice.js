import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TotalPrice = ({title, totalPrice, mt, mb, color, size}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: mt,
        marginBottom: mb || 0,
      }}>
      <Text style={{color: color || 'white', fontSize: size || 12}}>
        {title}
      </Text>
      <Text style={{color: color || 'white', fontSize: size || 12}}>
        {' '}
        {'\u00A3'}
        {totalPrice}
      </Text>
    </View>
  );
};

export default TotalPrice;

const styles = StyleSheet.create({});
