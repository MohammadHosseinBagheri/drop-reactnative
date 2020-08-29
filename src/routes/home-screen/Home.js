import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Icon, Button} from 'native-base';
import MyHeader from '../../components/header/Haeder';
function MyTabBar({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <>
      <MyHeader
        backgroundColor={'red'}
        body={<Text style={{fontSize: 20, fontWeight: 'bold'}}>Demo App</Text>}
      />
      <View
        style={{
          flexDirection: 'row',
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: '#37474F',
        }}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <View style={{height: '100%', flex: 1, borderRadius: 10}}>
              <View
                style={{
                  ...StyleSheet.absoluteFillObject,
                  flex: 1,
                  height: '100%',
                  width: '100%',
                }}>
                <View
                  style={{
                    width: '100%',
                    height: '50%',
                    backgroundColor: 'red',
                  }}>
                  <Text>{label}</Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: '50%',
                    backgroundColor: isFocused ? '#37474F' : 'red',
                    // borderBottomLeftRadius: !isFocused ? 10 : 0,
                    // borderBottomRightRadius: !isFocused ? 10 : 0,
                  }}></View>
              </View>
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityStates={isFocused ? ['selected'] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{
                  flex: 1,
                  backgroundColor: isFocused ? '#37474F' : 'red',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  zIndex: 1,
                  width: '100%',
                  // borderWidth:0,
                  // borderColor:'red',
                  // borderTopWidth:0,
                  // borderRightWidth:0,
                  // borderLeftColor:'red',
                  // borderLeftWidth:0,
                  // borderRightColor:'red',
                  // borderTopColor:'red'
                }}>
                <Icon
                  style={{color: 'white'}}
                  name={
                    index == 0
                      ? 'cafe'
                      : index == '1'
                      ? 'fast-food'
                      : index == 2
                      ? 'gift'
                      : 'search'
                  }
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </>
  );
}
export default MyTabBar;
