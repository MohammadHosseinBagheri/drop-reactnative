import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Animated from 'react-native-reanimated';

const ShoppingCart = () => {
  const translateY = new Animated.Value(0);
  translateY.interpolate(
    {
      inputRange: [0, 450],
      outputRange: [0, 450],
      extrapolate: 'clamp',
    },
    {useNativeDriver: true},
  );
  const onScroll = Animated.event([
    {nativeEvent: {contentOffset: {y: translateY}}},
  ]);
  const position = {
    transform: [
      {
        translateY: translateY.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 450],
          extrapolate: 'clamp',
        }),
      },
    ],
  };
  return (
    <Animated.View
      onLayout={(event) => {}}
      style={{
        backgroundColor: 'red',
        height: 50,
        left: 0,
        bottom: 0,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        bottom: 0,
        transform: [{translateY}],
        width: Dimensions.get('window').width,
        zIndex: 20,
      }}>
      {/* <TouchableOpacity
        style={{
          width: '100%',
          top: 0,
          height: 500,
          zIndex: 40,
        }}>
        <Text>hi</Text>
      </TouchableOpacity> */}
    </Animated.View>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({});
