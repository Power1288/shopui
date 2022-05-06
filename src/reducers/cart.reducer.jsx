import {ADD_ITEM_CART, CLEAR_CART} from "../actions/cart.action";

const initialState = {
  cart: [],
  total: 0
};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM_CART:
            const find = state.cart.find((item) => item.name === action.payload.name);

            let newCart = state.cart;
            if (!find) {
                newCart = [...state.cart,action.payload]
            }else {
                find.qtty = find.qtty + action.payload.qtty;
            }

            const priceCart = document.getElementById("cart-price");
            priceCart.innerHTML = state.total + action.payload.price + "<span>$</span>";


            return {
                cart:newCart,
                total: state.total + action.payload.price
            }
        case CLEAR_CART:
            return {
                cart: action.payload,
                total: 0
            }
        default:
            return state;
    }
}