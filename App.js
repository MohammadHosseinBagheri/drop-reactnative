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

const sagaMiddleware = createSagaMiddleware();
var middlewares = [logger, sagaMiddleware];
const store = createStore(reducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

const App = () => {
  const addTocartModal = useRef(null);

  const open = (item) => {
    addTocartModal.current.open(item);
  };
  return (
    <Provider store={store}>
      <MyHeader
        backgroundColor={'red'}
        body={<Text style={{fontSize: 20, fontWeight: 'bold'}}>Demo App</Text>}
      />
      {/* <Home open={open} /> */}
      <Routes />
      <ShoppingCart />
      <AddToCartModal ref={addTocartModal} />
    </Provider>
  );
};

export default App;
``;
