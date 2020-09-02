import React from 'react';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reducer from './src/redux/root-reducer';
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
