import {combineReducers} from "redux";
import itemsReducer from "./items.reducer";
import filterReducer from "./filter.reducer";


export default combineReducers({
  itemsReducer,
  filterReducer
});