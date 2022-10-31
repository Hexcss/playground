import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from "axios";

import Input from "./Input";
import DataDisplayer from "./DataDisplayer";
import { actions } from "../store/index";

const SearchWeather = () => {
    const [search, setSearch] = useState("Santander");
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=fdbe408c6ccd5ab984e9bd57361fadb6`).then(res => setData(res.data)).catch(err => console.error(err));
    }, [search])
    
  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card text-white text-center border-0">
              <img
                src={`https://source.unsplash.com/600x750/?nature,clouds`}
                className="card-img"
                alt="Weather Image"
              />
              <div className="card-img-overlay">
                <Input setSearch={setSearch}/>
                <DataDisplayer data={data}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchWeather;
