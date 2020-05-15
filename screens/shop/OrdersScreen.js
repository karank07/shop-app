import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

import HeadButton from '../../components/UI/HeadButton';
import OrderItem from '../../components/shop/OrderItem';

const orderScreen = props => {
    const orders = useSelector(state => state.orders.orders);
    { console.log(orders) }
    return (
        <FlatList
            data={orders}
            keyExtractor={item => item.id}
            renderItem={itemData => {
                return <OrderItem
                    items={itemData.item.items}
                    totalPrice={itemData.item.amount}
                    date={itemData.item.readDate} />;
            }} />
    );
};

orderScreen.navigationOptions = navData => {
    return {
        headerLeft: () => <HeadButton iconName='menu' onPress={() => navData.navigation.toggleDrawer()} />,
        headerTitle: 'Your Orders'
    }
}
export default orderScreen;