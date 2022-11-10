import { ActionType } from "../action-types";
import { Action, WeatherData } from "../actions/index";
import { initialWeatherState } from "./InitialStates";

const DataReducer = (state: WeatherData = initialWeatherState, action: Action) => {
  switch (action.type) {
    case ActionType.FETCHDATA:
      return { state, ...action.payload };
    default:
      return state;
  }
};

export default DataReducer;
