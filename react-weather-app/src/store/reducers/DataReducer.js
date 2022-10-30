const dataReducer = (state = [], action) => {
    switch(action.type) {
        case "fetchData":
            const fetchWeather = async (action) => {
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&appid=fdbe408c6ccd5ab984e9bd57361fadb6`);
                const data = await res.json();
                return data;
            }
            return {...state, fetchWeather};
        default:
            return state;
    }
}