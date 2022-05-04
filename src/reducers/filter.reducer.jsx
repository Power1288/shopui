import {FILTER_ITEM} from "../actions/filter.action";

const initialState = "";

export default function filterReducer(state = initialState, action) {
    switch (action.type) {
        case FILTER_ITEM:
            return action.payload;
        default:
            return state;
    }
}