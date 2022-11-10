import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { useEffect } from "react";

import { actionCreators, State } from "../state";
import { WeatherData } from "../state/actions";

const DataDisplayer = () => {
  //SUS
  const weatherData: WeatherData = useSelector((state: State) => state.data);
  const search: string = useSelector((state: State) => state.search);

  const dispatch = useDispatch();
  const { fetchData } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    fetchData(search);
  }, [search]);

  const toCelsius = (temp: number): number => {
    return parseInt((temp - 273.15).toFixed(2));
  };

  let d: Date = new Date();
  let date: number = d.getDate();
  let year: number = d.getFullYear();
  let month: string = d.toLocaleString("default", { month: "long" });
  let day: string = d.toLocaleString("default", { weekday: "long" });

  let time: string = d.toLocaleString("default", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  let emoji:string;

  if (weatherData.weather[0].main === "Clouds") {
    emoji = "fa-cloud";
  } else if (weatherData.weather[0].main === "Thunderstorm") {
    emoji = "fa-bolt";
  } else if (weatherData.weather[0].main === "Drizzle") {
    emoji = "fa-cloud rain";
  } else if (weatherData.weather[0].main === "Rain") {
    emoji = "fa-cloud-shower-heavy";
  } else if (weatherData.weather[0].main === "Snow") {
    emoji = "fa-snow-flake";
  } else {
    emoji = "fa-smog";
  }

  return (
    <div className="bg-dark bg-opacity-50 py-3">
      <h2 className="card-title">{weatherData.name}</h2>
      <p className="card-text lead">
        {day}, {month} {date}, {year}
        <br />
        {time}
      </p>
      <hr />
      <i className={`fas ${emoji} fa-4x`}></i>
      <h1 className="fw-bolder mb-5">
        {toCelsius(weatherData.main.temp)}&deg;C
      </h1>
      <p className="lead fw-bolder mb-0">{weatherData.weather[0].main}</p>
      <p className="lead">
        {toCelsius(weatherData.main.temp_min)}&deg;C |{" "}
        {toCelsius(weatherData.main.temp_max)}&deg;C
      </p>
    </div>
  );
};

export default DataDisplayer;
