import React from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/CartAction';
import HeadButton from '../../components/UI/HeadButton';

const productListScreen = props => {
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();
    return (<FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={itemData =>
            <ProductItem
                title={itemData.item.title}
                imgUrl={itemData.item.imageUrl}
                price={itemData.item.price}
                viewDetails={() => props.navigation.navigate('productDetails',
                    {
                        id: itemData.item.id,
                        title: itemData.item.title,

                    })}
                toCart={() => {
                    dispatch(cartActions.addToCart(itemData.item))
                }}
            />

        } />);
};

productListScreen.navigationOptions = navData => {
    return {
        headerRight: () => <HeadButton iconName='shopping-cart' onPress={() => { navData.navigation.navigate('cart') }} />,
        headerLeft: () => <HeadButton iconName='menu' onPress={() => navData.navigation.toggleDrawer()} />,
        headerRightContainerStyle: {
            marginHorizontal: 10
        },
        headerTitle: 'All Products'
    }
}

export default productListScreen;