import * as actions from '../actions/CartAction';
import CartItem from '../../models/CartItem';

const initialState = {
    items: {},
    totalAmt: 0
};

const addToCart = (state, action) => {
    const newProd = action.product;

    let item;
    if (state.items[newProd.id]) {
        item = new CartItem(
            newProd.title,
            state.items[newProd.id].quantity + 1,
            newProd.price,
            state.items[newProd.id].sum + newProd.price
        );

    } else {
        item = new CartItem(newProd.title, 1, newProd.price, newProd.price);
    }
    return {
        ...state,
        items: { ...state.items, [newProd.id]: item },
        totalAmt: state.totalAmt + newProd.price
    };
};

const deleteCartItem = (state, action) => {
    const quant = state.items[action.pId].quantity;
    let cartItems;
    const prod = state.items[action.pId];
    if (quant > 1) {
        
        const cartItem = new CartItem(
            prod.title,
            quant - 1,
            prod.price,
            prod.sum - prod.price

        );
        cartItems = {
            ...state.items,
            [action.pId]: cartItem
        }
    } else {
        cartItems = { ...state.items }
        delete cartItems[action.pId];
    }
    return {
        ...state,
        items: cartItems,
        totalAmt: state.totalAmt - prod.price
    };
};
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_TO_CART: return addToCart(state, action);
        case actions.DELETE_FROM_CART: return deleteCartItem(state, action);
        case actions.ADD_ORDER: return initialState;
        default: return state;
    }
};

export default cartReducer;