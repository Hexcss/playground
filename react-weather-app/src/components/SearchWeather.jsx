import React from "react";

import Input from "./Input";
import DataDisplayer from "./DataDisplayer";

const SearchWeather = () => {

  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card text-white text-center border-0">
              <img
                src={`https://source.unsplash.com/600x750/?nature,clouds`}
                className="card-img"
                alt="Background"
              />
              <div className="card-img-overlay">
                <Input/>
                <DataDisplayer/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchWeather;
