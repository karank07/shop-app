import React from 'react';
import { View, ScrollView, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Color from '../../constants/Color';
import * as cartActions from '../../store/actions/CartAction';
import HeadButton from '../../components/UI/HeadButton';

const productDetailsScreen = props => {
    const selectedProduct = useSelector(state => state.products.products.find(prod => prod.id === props.navigation.getParam('id')));
    const dispatch = useDispatch();
    return (
        <ScrollView style={styles.detailsConatiner}>
            <Image style={styles.img} source={{ uri: selectedProduct.imageUrl }} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => dispatch(cartActions.addToCart(selectedProduct))} >
                    <MaterialCommunityIcons name='cart-arrow-down' size={28} color={Color.primary} />
                </TouchableOpacity>
            </View>
            <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
            <Text style={styles.desc}>{selectedProduct.description}</Text>
        </ScrollView>
    );
};

productDetailsScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('title'),
        headerLeft: () => <HeadButton iconName='menu' onPress={() => navData.navigation.toggleDrawer()} />,
        headerRight: () => <HeadButton iconName='shopping-cart' onPress={() => {navData.navigation.navigate('cart')}} />,
        headerRightContainerStyle:{
            marginHorizontal: 10
        }
    }
}

const styles = StyleSheet.create({
    detailsConatiner: {
        flex: 1,
    },
    buttonContainer: {
        alignItems: 'center',
        marginVertical: 10
    },
    price: {
        fontSize: 20,
        fontFamily: 'open-sans-bold',
        color: '#888',
        textAlign: 'center',
        marginVertical: 20
    },
    desc: {
        fontSize: 14,
        marginHorizontal: 20,
        fontFamily: 'open-sans',
        textAlign: 'center'
    },
    img: {
        height: 250,
        width: '100%'
    }
});

export default productDetailsScreen;
