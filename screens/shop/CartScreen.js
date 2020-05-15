import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Color from '../../constants/Color';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import CartItem from '../../components/shop/CartItem';
import * as cartActions from '../../store/actions/CartAction';
import { addOrder } from '../../store/actions/OrderAction';


const cartScreen = props => {
    const dispatch = useDispatch();
    const totalAmt = useSelector(state => state.cart.totalAmt);
    const cartItems = useSelector(state => {
        const items = [];
        for (const key in state.cart.items) {
            items.push({
                productId: key,
                productTitle: state.cart.items[key].title,
                productPrice: state.cart.items[key].price,
                productQuantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum
            })
        }
        return items.sort((a, b) => a.productId > b.productId ? 1 : -1);
    })
    return (
        <View style={styles.screen}>
            <View style={styles.orderContainer}>
                <Text style={styles.info}>Total:<Text style={styles.price}> ${totalAmt.toFixed(2)}</Text></Text>
                <Button
                    title='OrderNow'
                    color={Color.accent}
                    disabled={cartItems.length === 0}
                    onPress={() => dispatch(addOrder(cartItems, totalAmt))} />
            </View>
            <FlatList
                data={cartItems}
                keyExtractor={item => item.productId}
                renderItem={itemData =>
                    <CartItem
                        title={itemData.item.productTitle}
                        price={itemData.item.sum}
                        quantity={itemData.item.productQuantity}
                        deletable={true}
                        deleteItem={() => dispatch(cartActions.deleteFromCart(itemData.item.productId))} />} />
        </View>
    );
};
cartScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Cart'
    }
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,

    },
    orderContainer: {
        flexDirection: 'row',
        height: 60,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { height: 2, width: 0 },
        shadowOpacity: 0.26,
        elevation: 7,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    info: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    },
    price: {
        color: Color.primary
    }
});

export default cartScreen;