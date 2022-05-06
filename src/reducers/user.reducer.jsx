import {LOAD_USER} from "../actions/user.action";

const initialState = {
      bank:0,
      money:0
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_USER:
            return {
                bank: action.payload.bank,
                money: action.payload.money
            }
    default:
        return state;
    }
}