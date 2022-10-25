import React from "react";

const DataDisplayer = ({ data }) => {

  return (
    <div className="bg-dark bg-opacity-50 py-3">
      <h2 className="card-title">{data.name}</h2>
      <p className="card-text lead">Monday, October 24, 2022</p>
      <hr />
      <i className="fas fa-cloud fa-4x"></i>
      <h1 className="fw-bolder mb-5">{data.cod} &deg;C</h1>
      <p className="lead fw-bolder mb-0">Cloud</p>
      <p className="lead">{data.cod} &deg;C | 35.01 &deg;C</p>
    </div>
  );
};

export default DataDisplayer;
