import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Color from '../../constants/Color';
import CartItem from './CartItem';
const orderItem = props => {
    const [showDetail, setShowDetail] = useState(false);
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Text style={styles.amount}>${props.totalPrice.toFixed(2)}</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
            <Button style={styles.button}  title={showDetail ? 'Hide Details' : 'Show Details'} color={Color.primary} onPress={() => setShowDetail(!showDetail)} />
            {showDetail &&
                <View style={styles.details}>
                    {props.items.map(item =>
                        <CartItem
                            key={item.productId}
                            title={item.productTitle}
                            price={item.sum}
                            quantity={item.productQuantity}
                            deletable={false} />)}
                </View>
            }
        </View>
    );
};
const styles = StyleSheet.create({
    screen: {
        margin: 20,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { height: 2, width: 0 },
        shadowOpacity: 0.26,
        shadowRadius: 10,
        backgroundColor: 'white',
        elevation: 5,
        padding: 8,
        alignItems: 'center'
    },
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    amount: {
        fontFamily: 'open-sans-bold',
        fontSize: 16
    },
    date: {
        fontFamily: 'open-sans',
        color: '#888',
        fontSize: 16
    },
    details: {
        width: '100%'
    },
    

});

export default orderItem;