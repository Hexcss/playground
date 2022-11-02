const SearchReducer = (state = "Santander", action) => {
    switch(action.type) {
        case "search":
            if (state !== "") {
                state = "";
            }
            return state + action.payload;
        default:
            return state;
    }
}

export default SearchReducer;