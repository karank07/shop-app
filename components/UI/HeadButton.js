import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Color from '../../constants/Color';

const headButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress} >
            <Feather name={props.iconName} size={28} color={Platform.OS === 'android' ? 'white' : Color.primary} />
        </TouchableOpacity>
    );
};
export default headButton;