import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions } from "../store/index";

const DataDisplayer = () => {

  const weatherData = useSelector((state) => state.data);
  const search = useSelector((state) => state.search);

  const dispatch = useDispatch();
  const { fetchData } = bindActionCreators(actions, dispatch);

  useEffect(() => {
    fetchData(search);
  }, [search]);

  const toCelsius = (temp) => {
    return (temp - 273.15).toFixed(2);
  }

  let d = new Date();
  let date = d.getDate();
  let year = d.getFullYear();
  let month = d.toLocaleString("default", {month: "long"});
  let day = d.toLocaleString("default", {weekday: "long"});

  let time = d.toLocaleString("default", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  let emoji = "";

  if (weatherData.main !== undefined) {
    if (weatherData.weather[0].main === "Clouds") {
      emoji = "fa-cloud";
    } else if (weatherData.weather[0].main === "Thunderstorm") {
      emoji = "fa-bolt";
    } else if (weatherData.weather[0].main === "Drizzle" ) {
      emoji = "fa-cloud rain";
    } else if (weatherData.weather[0].main === "Rain") {
      emoji = "fa-cloud-shower-heavy"
    } else if (weatherData.weather[0].main === "Snow") {
      emoji = "fa-snow-flake";
    } else {
      emoji = "fa-smog";
    }
  } else {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className="bg-dark bg-opacity-50 py-3">
      <h2 className="card-title">{weatherData.name}</h2>
      <p className="card-text lead">{day}, {month} {date}, {year}
      <br />
      {time}
      </p>
      <hr />
      <i className={`fas ${emoji} fa-4x`}></i>
      <h1 className="fw-bolder mb-5">{weatherData.main !== undefined ? toCelsius(weatherData.main.temp) : ""} &deg;C</h1>
      <p className="lead fw-bolder mb-0">{weatherData.weather !== undefined ? weatherData.weather[0].main : ""}</p>
      <p className="lead">{weatherData.main !== undefined ? toCelsius(weatherData.main.temp_min) : ""} &deg;C | {weatherData.main !== undefined ? toCelsius(weatherData.main.temp_max) : ""} &deg;C</p>
    </div>
  );
};

export default DataDisplayer;
