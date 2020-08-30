import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import TitleBar from '../../components/title-bar/TitleBar';
import CoffeeContent from '../../components/coffee-content/CoffeeContent';

const {width} = Dimensions.get('window');
const ButtonWidth = (width * 20) / 100;

const Slider = [
  {
    title: 'All',
    backgroundColor: 'red',
  },

  {
    title: 'PIZZA',
    backgroundColor: 'yellow',
  },
  {
    title: 'STEAK',
    backgroundColor: 'pink',
  },
];

const Coffee = () => {
  const x = new Animated.Value(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const viewRef = useRef();
  const scrollViewRef = useRef(null);

  const onScroll = Animated.event(
    [{nativeEvent: {contentOffset: {x}}}],
    {
      useNativeDriver: true,
    },
    (event) => {
      const contentOffset = event.nativeEvent.contentOffset.x;
      const viewSize = event.nativeEvent.layoutMeasurement.width;
      const selectedIndex = Math.floor(contentOffset / viewSize);
      setSelectedIndex(selectedIndex);
      console.log(event);
    },
  );
  // const onScroll = (event) => {
  //   Animated.event([{nativeEvent: {contentOffset: {x}}}], {
  //     useNativeDriver: true,
  //   });
  //   const contentOffset = event.nativeEvent.contentOffset.x;
  //   const viewSize = event.nativeEvent.layoutMeasurement.width;
  //   const selectedIndex = Math.floor(contentOffset / viewSize);
  //   setSelectedIndex(selectedIndex);
  //   console.log;
  // };
  const translateX = x.interpolate({
    inputRange: [0, width, 2 * width],
    outputRange: [
      0,
      -ButtonWidth - (width * 4) / 100,
      -2 * ButtonWidth - (width * 8) / 100,
    ],
    extrapolateLeft: 'clamp',
  });
  const scrollPress = (index) => {
    // setSelectedIndex(index);
    scrollViewRef.current
      .getNode()
      .scrollTo({x: width * index, y: 0, animated: true});
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.titleBarContainer, {transform: [{translateX}]}]}>
        {Slider.map((item, index) => (
          <TitleBar index={index} {...item} scrollPress={scrollPress} />
        ))}
      </Animated.View>
      <Animated.ScrollView
        ref={scrollViewRef}
        {...{onScroll}}
        bounces={false}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        pagingEnabled
        scrollEventThrottle={16}
        contentContainerStyle={styles.contentContainerStyle}>
        {Slider.map((item, index) => (
          <CoffeeContent {...item} index={index} />
        ))}
      </Animated.ScrollView>
    </View>
  );
};

export default Coffee;

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'column', backgroundColor: '#37474F'},
  titleBarContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  contentContainerStyle: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * Slider.length,
    backgroundColor: '#fff',
  },
});
