import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import Input from "./Input";
import DataDisplayer from "./DataDisplayer";
import { actions } from "../store/index";

const SearchWeather = () => {
    const [search, setSearch] = useState("Santander");
    const [data, setData] = useState([]);

    const newData = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const { fetchData } = bindActionCreators(actions, dispatch);

    useEffect(() => {
      fetchData(search);
    }, [search])

    console.log(newData);

    let componentMounted = true;

    useEffect(() => {
        const fetchWeather = async () => {
          const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=fdbe408c6ccd5ab984e9bd57361fadb6`);
          if(componentMounted) {
            setData(await res.json());
          }
            componentMounted = false;
        }
      fetchWeather();
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
