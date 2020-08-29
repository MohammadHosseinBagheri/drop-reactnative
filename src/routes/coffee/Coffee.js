import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

const Slider = [
  {
    title: 'slide 1',
    backgroundColor: 'red',
  },

  {
    title: 'slide 2',
    backgroundColor: 'yellow',
  },
  {
    title: 'slide 3',
    backgroundColor: 'pink',
  },
  {
    title: 'slide 4',
    backgroundColor: 'blue',
  },
];

const Coffee = () => {
  const x = new Animated.Value(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const viewRef = useRef();

  const onScroll = Animated.event([{nativeEvent: {contentOffset: {x}}}],{useNativeDriver:true});
  // (event) => {
  //   const contentOffset = event.nativeEvent.contentOffset.x;
  //   const viewSize = event.nativeEvent.layoutMeasurement.width;
  //   const selectedIndex = Math.floor(contentOffset / viewSize);
  //   setSelectedIndex(selectedIndex);
  // };
  const translateX = x.interpolate({
    inputRange: Slider.map((_, index) => index * width),
    outputRange: Slider.map((_, index) => -index * width),
  });
  const backgroundColor = x.interpolate({
    inputRange: Slider.map((_, index) => index * width),
    outputRange: Slider.map((item, index) => item.backgroundColor),
  });
  useEffect(() => console.log(x), [x]);
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <Animated.ScrollView
        {...{onScroll}}
        bounces={false}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        pagingEnabled
        contentContainerStyle={{height: 20, width: width * Slider.length,backgroundColor:'yellow'}}>
        {Slider.map((item, index) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              flex: 1,
              backgroundColor: 'pink',
              width: '100%',
            }}>
            <Text>{item.title}</Text>
          </View>
        ))}
      </Animated.ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          width: width * Slider.length,
          backgroundColor:'blue',
          alignItems:'flex-start',
          justifyContent:'flex-start'
        }}>
        {Slider.map((item, index) => (
          <Animated.View
            ref={viewRef}
            style={{
              flex: 1,
              width: '100%',
              transform: [{translateX}],
              backgroundColor: item.backgroundColor,
              height:'100%'
            }}>
            <Text>{item.title}</Text>
          </Animated.View>
        ))}
      </View>
    </View>
  );
};

export default Coffee;

const styles = StyleSheet.create({});
