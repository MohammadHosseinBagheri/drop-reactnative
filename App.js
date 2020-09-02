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
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {PersistGate} from 'redux-persist/integration/react';

var middlewares = [];

if (process.env.NODE_END === 'development') {
  middlewares.push(logger);
}

const config = {
  key: 'root',
  storage,
};

const pReducer = persistReducer(config, reducer);

const store = createStore(pReducer, applyMiddleware(...middlewares));

const pStore = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={pStore}>
        <AppContent />
      </PersistGate>
    </Provider>
  );
};

export default App;
