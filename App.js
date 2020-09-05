import React from 'react';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reducer from './src/redux/root-reducer';
import AppContent from './src/components/app-content/AppContent';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {PersistGate} from 'redux-persist/integration/react';
import {I18nManager, AsyncStorage} from 'react-native';
import RNRestart from 'react-native-restart';


AsyncStorage.setItem('lang','ar',() => {
    AsyncStorage.getItem('lang', (value) => {
      if(value != null){
        I18nManager.forceRTL(false);
        RNRestart.Restart();
      }
    });
})

var middlewares = [];

if (process.env.NODE_END === 'development') {
  middlewares.push(logger);
}

const config = {
  key: 'root',
  storage: storage,
  whiteList: ['collections', 'cart'],
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
