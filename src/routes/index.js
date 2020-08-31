import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Home from './home-screen/Home';
import Coffee from './coffee/Coffee';
import Food from './food/Food';
import Gifts from './gifts/Gifts';
import Search from './search/search';
import SearchTwo from './search/searchtwo';
import Icon from 'react-native-vector-icons/Ionicons';
import MyTabBar from './home-screen/Home';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
const RoutesStack = () => (
  <Stack.Navigator headerMode={'none'}>
    <Stack.Screen component={Home} name={'home'} />
  </Stack.Navigator>
);
const CoffeeTab = () => (
  <Tab.Navigator>
    <Tab.Screen name="search" component={Search} />
    <Tab.Screen name="searchtwo" component={SearchTwo} />
  </Tab.Navigator>
);
const TabbarConfig = ({open}) => (
  <Tab.Navigator
    tabBarOptions={{scrollEnabled: 'true'}}
    tabBar={(props) => <MyTabBar {...props} />}>
    <Tab.Screen
      name="coffee"
      component={(...props) => <Coffee open={open} {...props} />}
    />
    <Tab.Screen name="food" component={Food} />
    <Tab.Screen name="gift" component={Gifts} />
    <Tab.Screen
      // options={{
      //   tabBarIcon: () => <Icon name="search" size={25} />,
      // }}
      name="search"
      component={Search}
    />
  </Tab.Navigator>
);
export default function Routes({open}) {
  return (
    <NavigationContainer>
      <TabbarConfig open={open} />
    </NavigationContainer>
  );
}
