import axios from "axios";
import { Dispatch } from "redux";

import { Action, WeatherData } from "./../actions/index";
import { ActionType } from "../action-types";

export const fetchData = (search: string) => {
  return async (dispatch: Dispatch<Action>) => {
    const { data } = await axios.get<WeatherData>(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=fdbe408c6ccd5ab984e9bd57361fadb6`
    );
    dispatch({
      type: ActionType.FETCHDATA,
      payload: data,
    });
  };
};

export const search = (city: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH,
      payload: city,
    });
  };
};
