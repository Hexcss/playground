import { ActionType } from "../action-types/index";
import { Action } from "./../actions/index";

const SearchReducer = (state: string = "Santander", action: Action) => {
  switch (action.type) {
    case ActionType.SEARCH:
      if (state !== "") {
        state = "";
      }
      return state + action.payload;
    default:
      return state;
  }
};

export default SearchReducer;
