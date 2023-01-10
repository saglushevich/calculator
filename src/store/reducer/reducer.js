const initialState =  {
    expression: JSON.parse(sessionStorage.getItem("expression")) || [],
    inputValue: sessionStorage.getItem("inputValue") || "0",
    history: JSON.parse(localStorage.getItem("history")) || [],
    invalidInputFormat: false,
    theme: localStorage.getItem("theme") || "LIGHT"
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_EXPRESSION":
            return {...state, expression: action.payload};
        case "SET_INPUT_VALUE":
            return {...state, inputValue: action.payload};
        case "UPDATE_HISTORY": 
            return {...state, history: action.payload};
        case "SET_THEME":
            return {...state, theme: action.payload};
        case "SET_INVALID_INPUT_FORMAT":
            return {...state, invalidInputFormat: action.payload};
        default: 
            return state;
    }
};

export default reducer