import React from 'react';
import { View, Text, StyleSheet, Image, Button, Platform, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Color from '../../constants/Color';
const ProductItem = props => {

    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={props.viewDetails} activeOpacity={0.3}>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={{ uri: props.imgUrl }} />
                </View>
                <View style={styles.innerDetailConatiner}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.price}>${props.price.toFixed(2)}</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.4} onPress={props.toCart} style={styles.buttonContainer} >
                <MaterialCommunityIcons name='cart-arrow-down' size={28} color={Color.primary} />
            </TouchableOpacity>

        </View>

    );
};

const styles = StyleSheet.create({
    itemContainer: {
        height: 260,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { height: 2, width: 0 },
        shadowOpacity: 0.26,
        elevation: 7,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 15
    },

    imgContainer: {
        height: '70%',
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },

    innerDetailConatiner: {
        alignItems: 'center',
        height: '10%',
        marginTop: 5
    },
    title: {
        fontSize: 18,
        color: 'black',
        fontFamily: 'open-sans',

    },
    price: {
        fontSize: 14,
        color: '#888',
        fontFamily: 'open-sans'
    },
    img: {
        height: '100%',
        width: '100%'
    },
    buttonContainer: {
        alignItems: 'center',
        height: '20%',
        borderTopColor: '#ccc',
        borderTopWidth: 1,
        padding: 8,


    }
});
export default ProductItem;
