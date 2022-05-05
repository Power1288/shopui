import {ADD_ITEM_CART} from "../actions/cart.action";

const initialState = {
  cart: [],
  total: 0
};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM_CART:
            console.log(state.cart)
            return {

                cart: state.cart.length > 0 ? state.cart.reduce((cartResult,cartItem) => {
                    if(cartItem.name === action.payload.name) {
                        cartResult.push({
                            ...cartItem,
                            quantity: cartItem.quantity + 1
                        })
                    }
                    return cartResult
                }, [...state.cart]) : [...state.cart, action.payload],
                total: state.total + action.payload.price
            }
        default:
            return state;
    }
}