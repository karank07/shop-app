import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

import ProductListScreen from '../screens/shop/ProductListScreen';
import Color from '../constants/Color';
import { Platform } from 'react-native';
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Color.primary : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Color.primary,
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },

};

const productsNavigator = createStackNavigator({
    productsList: ProductListScreen,
    productDetails: ProductDetailsScreen,
    cart: CartScreen
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => {
            return <Ionicons name='ios-cart'
                size={24}
                color={drawerConfig.tintColor} />;
        }
    },
    defaultNavigationOptions: defaultNavOptions
});
const ordernavigator = createStackNavigator({
    orders: OrdersScreen
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => {
            return <Ionicons name='ios-list'
                size={24}
                color={drawerConfig.tintColor} />;
        }
    },
    defaultNavigationOptions: defaultNavOptions
});

const shopNav = createDrawerNavigator({
    Products: productsNavigator,
    Orders: ordernavigator
}, {
    drawerWidth: 230,
    contentOptions: {
        activeTintColor: Color.primary
    }
})
export default createAppContainer(shopNav);