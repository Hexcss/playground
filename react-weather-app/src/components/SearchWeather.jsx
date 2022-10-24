import React, { useState, useEffect } from "react";

const SearchWeather = () => {
    const [search, setSearch] = useState("london");
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");

    let componentMounted = true;

    useEffect(() => {

        const fetchWeather = async () => {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=880decd5665cf206ffc8c615942b6407`);
            if(componentMounted) {
                setData(await res.json());
            }
            return () => {
                componentMounted = false;
            };
        }

      fetchWeather();
    }, [])

    console.log(data.main.temp)
    
  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card text-white text-center border-0">
              <img
                src="https://source.unsplash.com/600x750/?nature,water"
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay">
                <form action="">
                  <div className="input-group mb-4 w-75 mx-auto">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search City"
                      aria-label="Search City"
                      aria-describedby="basic-addon2"
                    />
                    <button type="submit" className="input-group-text" id="basic-addon2">
                      <i className="fas fa-search" aria-hidden="true"></i>
                    </button>
                  </div>
                </form>
                <div className="bg-dark bg-opacity-50 py-3">     
                    <h2 className="card-title">{data.name}</h2>
                    <p className="card-text lead">
                        Monday, October 24, 2022
                    </p>
                    <hr />
                    <i className="fas fa-cloud fa-4x"></i>
                    <h1 className="fw-bolder mb-5">
                        {data.name} &deg;C
                    </h1>
                    <p className="lead fw-bolder mb-0">Cloud</p>
                    <p className="lead">{data.temp} &deg;C | 35.01 &deg;C</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchWeather;
