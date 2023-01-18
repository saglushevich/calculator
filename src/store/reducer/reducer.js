const initialState = {
  expression: [],
  inputValue: "0",
  history: [],
  invalidInputFormat: false,
  theme: "LIGHT",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_EXPRESSION":
      return { ...state, expression: action.payload };
    case "SET_INPUT_VALUE":
      return { ...state, inputValue: action.payload };
    case "UPDATE_HISTORY":
      return { ...state, history: action.payload };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_INVALID_INPUT_FORMAT":
      return {
        ...state,
        invalidInputFormat: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
