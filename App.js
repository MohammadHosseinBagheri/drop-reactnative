import React, {useRef, useState} from 'react';
import {
  ScrollView,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reducer from './src/redux/root-reducer';
import createSagaMiddleware from 'redux-saga';

import MyHeader from './src/components/header/Haeder';
import AddToCartModal from './src/components/add-to-cart-modal/AddToCartModal';
import Home from './src/routes/home-screen/Home';
import rootSaga from './src/redux/sagas/root-saga';
import Routes from './src/routes';
import ShoppingCart from './src/components/shopping-cart/ShoppingCart';
import {Button} from 'native-base';
import AppContent from './src/components/app-content/AppContent';

const sagaMiddleware = createSagaMiddleware();
var middlewares = [logger, sagaMiddleware];
const store = createStore(reducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;
