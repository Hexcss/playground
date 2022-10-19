import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers/index";

const store = createStore(
    reducers,
    {},  //default state
    applyMiddleware(thunk)
);

export default store;