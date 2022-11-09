import { WeatherData } from "./../actions/index";
import { ActionType } from "../action-types";
import { Action } from "../actions/index";

const initialState: WeatherData = {
  coord: {
    lon: 0,
    lat: 0,
  },
  weather: [
    {
      id: 0,
      main: "",
      description: "",
      icon: "",
    },
  ],
  base: "",
  main: {
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
  },
  visibility: 0,
  wind: {
    speed: 0,
    deg: 0,
    gust: 0,
  },
  clouds: {
    all: 0,
  },
  dt: 0,
  sys: {
    type: 0,
    id: 0,
    country: "",
    sunrise: 0,
    sunset: 0,
  },
  timezone: 0,
  id: 0,
  name: "",
  cod: 0,
};

const DataReducer = (state: WeatherData = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.FETCHDATA:
      return { state, ...action.payload };
    default:
      return state;
  }
};

export default DataReducer;
