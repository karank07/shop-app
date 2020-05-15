import React, { useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import productReducer from './store/reducers/productReducer';
import cartReducer from './store/reducers/CartReducer';
import orderReducer from './store/reducers/OrderReducer';
import ShopNavigator from './navigation/ShopNavigator';

const rootReducer = combineReducers(
  {
    products: productReducer,
    cart: cartReducer,
    orders: orderReducer
  });
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/Fonts/OpenSans-Regular.ttf'),

    'open-sans-bold': require('./assets/Fonts/OpenSans-Bold.ttf')
  })
}
const store = createStore(rootReducer);

export default function App() {

  const [loaded, setLoaded] = useState(false);
  if (!loaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setLoaded(true)} />;
  }
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
};
