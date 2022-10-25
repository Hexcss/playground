import React, { useState, useEffect } from "react";

import Input from "./Input";
import DataDisplayer from "./DataDisplayer";

const SearchWeather = () => {
    const [search, setSearch] = useState("london");
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");

    let componentMounted = true;

    useEffect(() => {
        const fetchWeather = async () => {
          const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=fdbe408c6ccd5ab984e9bd57361fadb6`);
          if(componentMounted) {
            setData(await res.json());
            console.log("Res:", await res.json());
          }
          return () => {
            componentMounted = false;
          };
        }
      fetchWeather();
    }, [])

    console.log("Data.main:", data.main);
    //console.log("data.main.temp:", data.main.temp); Explota
    
  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card text-white text-center border-0">
              <img
                src="https://source.unsplash.com/600x750/?nature,water"
                className="card-img"
                alt="Weather Image"
              />
              <div className="card-img-overlay">
                <Input />
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
