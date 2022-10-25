const calculatorReducer = (state = "", action) => {
    switch (action.type) {
        case "type":
            if (state === "Error") {
                state = ""
            }
            return state + action.payload;
        case "backspace":
            try {
                return state.slice(0, -1);
            } catch (error) {
                return(state = "");
            }
        case "calculate":
            try {
                return eval(state);
            } catch (error) {
                return(state = "Error");
            }

        default:
            return state;
    }
}

export default calculatorReducer;