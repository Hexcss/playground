export const fetch = (search) => {
    return (dispatch) => {
        dispatch({
            type: "fetchData",
            payload: search,
        })
    }
}