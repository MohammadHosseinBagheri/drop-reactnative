import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Icon, Button} from 'native-base';

import MyHeader from '../../components/header/Haeder';
import ShoppingCart from '../../components/shopping-cart/ShoppingCart';
import AddToCartModal from '../../components/add-to-cart-modal/AddToCartModal';
import Coffee from '../coffee/Coffee';
import Food from '../food/Food';
import Gifts from '../gifts/Gifts';
import Search from '../search/search';
import Animated from 'react-native-reanimated';

const {width} = Dimensions.get('window');

// function MyTabBar({state, descriptors, navigation}) {
//   const focusedOptions = descriptors[state.routes[state.index].key].options;

//   if (focusedOptions.tabBarVisible === false) {
//     return null;
//   }
// const addToCartModal = useRef(null);

// return (
//   <>
//     <MyHeader
//       backgroundColor={'red'}
//       body={<Text style={{fontSize: 20, fontWeight: 'bold'}}>Demo App</Text>}
//     />
//     <View
//       style={{
//         flexDirection: 'row',
//         height: 60,
//         justifyContent: 'center',
//         alignItems: 'center',
//         // backgroundColor: '#37474F',
//       }}>
//       {state.routes.map((route, index) => {
//         const {options} = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//             canPreventDefault: true,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name);
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };

//         return (
//           <View style={{height: '100%', flex: 1, borderRadius: 10}}>
//             <View
//               style={{
//                 ...StyleSheet.absoluteFillObject,
//                 flex: 1,
//                 height: '100%',
//                 width: '100%',
//               }}>
//               <View
//                 style={{
//                   width: '100%',
//                   height: '50%',
//                   backgroundColor: 'red',
//                 }}>
//                 <Text>{label}</Text>
//               </View>
//               <View
//                 style={{
//                   width: '100%',
//                   height: '50%',
//                   backgroundColor: isFocused ? '#37474F' : 'red',
//                 }}></View>
//             </View>
//             <TouchableOpacity
//               accessibilityRole="button"
//               accessibilityStates={isFocused ? ['selected'] : []}
//               accessibilityLabel={options.tabBarAccessibilityLabel}
//               testID={options.tabBarTestID}
//               onPress={onPress}
//               onLongPress={onLongPress}
//               style={{
//                 flex: 1,
//                 backgroundColor: isFocused ? '#37474F' : 'red',
//                 height: '100%',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 borderRadius: 10,
//                 zIndex: 1,
//                 width: '100%',
//               }}>
//               <Icon
//                 style={{color: 'white'}}
//                 name={
//                   index == 0
//                     ? 'cafe'
//                     : index == '1'
//                     ? 'fast-food'
//                     : index == 2
//                     ? 'gift'
//                     : 'search'
//                 }
//               />
//             </TouchableOpacity>
//           </View>
//         );
//       })}
//     </View>
//     <AddToCartModal ref={addToCartModal} />
//     {/* <ShoppingCart /> */}
//   </>
// );

// }
// export default MyTabBar;

const title = [
  {
    title: 'cafe',
  },
  {
    title: 'fast-food',
  },
  {
    title: 'gift',
  },
  {
    title: 'search',
  },
];

const Home = ({open}) => {
  const [index, selectedIndex] = useState(0);
  const translateY = new Animated.Value(0);
  translateY.interpolate({
    inputRange: [0, width, 2 * width, 3 * width],
    outputRange: [0, width, 2 * width, 3 * width],
  });
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          width: 4 * width,
        }}>
        <View>
          <ScrollView
            contentContainerStyle={styles.contentContainerStyleScrollView}
            pagingEnabled
            horizontal
            snapToInterval={width}>
            {title.map((item, index) => (
              <TouchableOpacity
                onPress={() => selectedIndex(index)}
                style={[
                  styles.tabbarButton,
                  {backgroundColor: index == 0 ? '#37474F' : 'red'},
                ]}>
                <Icon style={{color: 'white'}} name={item.title} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        {/* <ScrollView pagingEnabled horizontal> */}
          <View style={{width: 4 * width, flexDirection: 'row', flex: 1}}>
            <View style={{flex: 1, width: width}}>
              <Coffee open={open} />
            </View>
            <View style={{flex: 1, width: 2 * width}}>
              <Food open={open} />
            </View>
            <View style={{flex: 1, width: 3 * width}}>
              <Gifts open={open} />
            </View>
            <View style={{flex: 1, width: 4 * width}}>
              <Search open={open} />
            </View>
          </View>
        {/* </ScrollView> */}
        {/* {index == 0 ? (
          <Coffee open={open} />
        ) : index == 1 ? (
          <Food />
        ) : index == 2 ? (
          <Gifts />
        ) : (
          <Search />
        )} */}
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  contentContainerStyleScrollView: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'red',
  },
  tabbarButton: {
    width: 100,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
  },
});
