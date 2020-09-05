import {View, Text, StyleSheet} from 'react-native';
import React, {useRef, useState} from 'react';
import {Icon, Button} from 'native-base';

function MyTabBar({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  const addToCartModal = useRef(null);

  return (
    <>
      <View style={styles.container}>
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
                  }}></View>
              </View>
              <Button
                accessibilityRole="button"
                accessibilityStates={isFocused ? ['selected'] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={[
                  styles.button,
                  {backgroundColor: isFocused ? '#37474F' : 'red'},
                ]}>
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
              </Button>
            </View>
          );
        })}
      </View>
    </>
  );
}
export default MyTabBar;



const styles = StyleSheet.create({
  button: {
    flex: 1,

    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    zIndex: 1,
    width: '100%',
    elevation: 0,
  },
  container: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#37474F',
  },
});
