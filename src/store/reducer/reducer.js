/* eslint-disable no-else-return */
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
    case "INPUT_NUMBER":
      if (state.inputValue === "0") {
        return { ...state, inputValue: action.payload };
      } else if (isNaN(state.inputValue)) {
        return {
          ...state,
          inputValue: action.payload,
          expression: state.expression.concat(state.inputValue),
        };
      } else {
        return {
          ...state,
          inputValue: state.inputValue.concat(action.payload),
        };
      }
    case "INPUT_OPERATOR":
      if (
        state.inputValue === "0" &&
        (action.payload.match(/[()]/) || !action.payload.match(/[+\-*/%]/))
      ) {
        return { ...state, inputValue: action.payload };
      } else {
        return {
          ...state,
          inputValue: action.payload,
          expression: state.expression.concat(state.inputValue),
        };
      }
    case "INPUT_POINT":
      if (isNaN(state.inputValue)) {
        return {
          ...state,
          inputValue: `0${action.payload}`,
          expression: state.expression.concat(state.inputValue),
        };
      } else if (!state.inputValue.includes(action.payload)) {
        return {
          ...state,
          inputValue: state.inputValue.concat(action.payload),
        };
      }
      return state;
    case "SET_INPUT_VALUE":
      return { ...state, inputValue: action.payload };
    case "UPDATE_HISTORY":
      return { ...state, history: action.payload };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_INVALID_INPUT_FORMAT":
      return { ...state, invalidInputFormat: action.payload };
    case "CLEAR_CALCULATIONS":
      return {
        ...state,
        inputValue: "0",
        expression: [],
        invalidInputFormat: false,
      };
    case "SET_RESULT":
      return {
        ...state,
        history: [
          ...state.history,
          {
            expression: [...state.expression, state.inputValue].join(""),
            result: action.payload,
          },
        ],
        inputValue: action.payload,
        expression: [],
      };
    default:
      return state;
  }
};

export default reducer;
