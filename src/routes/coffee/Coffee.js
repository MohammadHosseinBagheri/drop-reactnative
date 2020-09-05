import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import TitleBar from '../../components/title-bar/TitleBar';
import CoffeeContent from '../../components/coffee-content/CoffeeContent';
import MyHeader from '../../components/header/Haeder';
import {connect} from 'react-redux';
import {
  fetchCollectionsStart,
  fetchCollections,
} from '../../redux/collections/action/collection';

const {width} = Dimensions.get('window');
const ButtonWidth = (width * 20) / 100;

//coffe page title bar

const Slider = [
  {
    title: 'All',
    index: 0,
  },

  {
    title: 'PIZZA',
    index: 1,
  },
  {
    title: 'STEAK',
    index: 2,
  },
];

const Coffee = ({open, fetchCollections, items}) => {
  //x is horizontal scrolling value
  const x = new Animated.Value(0);

  //index of slide
  const [selectedIndex, setSelectedIndex] = useState(0);

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
    },
  );

  //fetching data from api
  const fetchData = async () => {
    const response = await fetch('https://api.punkapi.com/v2/beers');
    const responseJson = await response.json();
    // set into redux state
    fetchCollections(responseJson);
  };

  // coffee slides animation
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
    scrollViewRef.current
      .getNode()
      .scrollTo({x: width * index, y: 0, animated: true});
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.titleBarContainer, {transform: [{translateX}]}]}>
        {Slider.map((item, index) => (
          <TitleBar
            key={index}
            index={index}
            {...item}
            scrollPress={scrollPress}
          />
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
        scrollEventThrottle={1}
        contentContainerStyle={styles.contentContainerStyle}>
        {Slider.map((item, index) => (
          <CoffeeContent open={open} {...item} titleIndex={index} />
        ))}
      </Animated.ScrollView>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchCollectionStart: () => dispatch(fetchCollectionsStart()),
    fetchCollections: (item) => dispatch(fetchCollections(item)),
  };
};
export default connect(null, mapDispatchToProps)(Coffee);

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
