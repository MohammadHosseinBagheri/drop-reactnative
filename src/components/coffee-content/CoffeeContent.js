import React from 'react';
import {StyleSheet, Text, View, Animated, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const CoffeeContent = ({title}) => {
  return (
    <Animated.View
      style={{
        height: '100%',
        width: width,
      }}>
      <Text>{title}</Text>
    </Animated.View>
  );
};

export default CoffeeContent;

const styles = StyleSheet.create({});
