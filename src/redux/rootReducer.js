import { combineReducers } from "redux";
import itemsReducer from "../Items/ItemsReducer";

const rootReducer = combineReducers({
    itemsReducer,
})

export default rootReducer