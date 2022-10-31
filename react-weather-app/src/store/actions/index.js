import axios from "axios"

export const fetchData = (search) => {
    return async (dispatch) => {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=fdbe408c6ccd5ab984e9bd57361fadb6`)
        dispatch({
            type: "fetchData",
            payload: data,
        })
    }
}