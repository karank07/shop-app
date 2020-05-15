import { ADD_ORDER } from '../actions/OrderAction';
import Order from '../../models/Order';

const initialState = {
    orders: []
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDER:
            const newOrder = new Order(
                new Date().toString(),
                action.items,
                action.amount,
                new Date()
            )
            return {
                ...state,
                orders: state.orders.concat(newOrder)
            };
        default: return state;
    }
};

export default orderReducer;