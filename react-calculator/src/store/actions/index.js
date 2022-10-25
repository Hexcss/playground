export const type = (character) => {
    return (dispatch) => {
        dispatch({
            type: "type",
            payload: character,
        })
    }
}

export const backspace = (character) => {
    return (dispatch) => {
        dispatch({
            type: "backspace",
            payload: character,
        })
    }
}

export const calculate = (result) => {
    return (dispatch) => {
        dispatch({
            type: "calculate",
            payload: result,
        })
    }
}