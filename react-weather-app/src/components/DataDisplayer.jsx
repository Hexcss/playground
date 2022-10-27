import React from "react";

const DataDisplayer = ({ data }) => {

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

  if (data.main !== undefined) {
    if (data.weather[0].main === "Clouds") {
      emoji = "fa-cloud";
    } else if (data.weather[0].main === "Thunderstorm") {
      emoji = "fa-bolt";
    } else if (data.weather[0].main === "Drizzle" ) {
      emoji = "fa-cloud rain";
    } else if (data.weather[0].main === "Rain") {
      emoji = "fa-cloud-shower-heavy"
    } else if (data.weather[0].main === "Snow") {
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
      <h2 className="card-title">{data.name}</h2>
      <p className="card-text lead">{day}, {month} {date}, {year}
      <br />
      {time}
      </p>
      <hr />
      <i className={`fas ${emoji} fa-4x`}></i>
      <h1 className="fw-bolder mb-5">{data.main !== undefined ? toCelsius(data.main.temp) : ""} &deg;C</h1>
      <p className="lead fw-bolder mb-0">{data.weather !== undefined ? data.weather[0].main : ""}</p>
      <p className="lead">{data.main !== undefined ? toCelsius(data.main.temp_min) : ""} &deg;C | {data.main !== undefined ? toCelsius(data.main.temp_max) : ""} &deg;C</p>
    </div>
  );
};

export default DataDisplayer;
