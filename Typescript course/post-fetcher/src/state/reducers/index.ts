import { combineReducers } from "redux";
import DataReducer from "./DataReducer";

const reducers = combineReducers({
    data: DataReducer,
});

export default reducers;
export type State = ReturnType<typeof reducers>;