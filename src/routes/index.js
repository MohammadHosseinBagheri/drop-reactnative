import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './home-screen/Home';

const Stack = createStackNavigator();

const RoutesStack = () => (
  <Stack.Navigator headerMode={'none'}>
    <Stack.Screen component={Home} name={'home'} />
  </Stack.Navigator>
);

export default function Routes() {
  return (
    <NavigationContainer>
      <RoutesStack />
    </NavigationContainer>
  );
}
