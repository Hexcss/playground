import { combineReducers } from "redux";

import DataReducer from "./DataReducer";
import SearchReducer from "./SearchReducer";

const reducers = combineReducers({
    data: DataReducer,
    search: SearchReducer,
});

export default reducers;