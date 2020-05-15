import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import Color from '../../constants/Color';

const cartItem = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.info} >{props.quantity} {props.title}</Text>
            <View style={styles.container}>
                <Text style={styles.price}>${props.price.toFixed(2)}  </Text>
                {props.deletable && <TouchableOpacity activeOpacity={0.5} onPress={props.deleteItem}>
                    <FontAwesome5 name='trash' size={16} color={Color.primary} />
                </TouchableOpacity>}

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        alignItems: 'center',
        
    },
    info: {
        fontFamily: 'open-sans',
        fontSize: 16
    },
    price: {
        fontFamily: 'open-sans-bold',
        color: Color.primary,
        fontSize: 16
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    }

});

export default cartItem;