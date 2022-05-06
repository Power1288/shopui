import {LOAD_CART} from "../actions/item.action";

const initialState = [];

export default function itemsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_CART:
            return action.payload;
        default:
            return state;
    }
}