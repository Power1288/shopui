import {combineReducers} from "redux";
import itemsReducer from "./items.reducer";
import filterReducer from "./filter.reducer";
import cartReducer from "./cart.reducer";


export default combineReducers({
  itemsReducer,
  filterReducer,
  cartReducer
});