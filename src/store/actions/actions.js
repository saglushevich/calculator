export const updateExpression = (value) => {
  return {
    type: "UPDATE_EXPRESSION",
    payload: value,
  };
};

export const setInputValue = (value) => {
  return {
    type: "SET_INPUT_VALUE",
    payload: value,
  };
};

export const updateHistory = (value) => {
  return {
    type: "UPDATE_HISTORY",
    payload: value,
  };
};

export const setTheme = (value) => {
  return {
    type: "SET_THEME",
    payload: value,
  };
};

export const setInvalidInputFormat = (value) => {
  return {
    type: "SET_INVALID_INPUT_FORMAT",
    payload: value,
  };
};

export const inputPoint = (value) => {
  return {
    type: "INPUT_POINT",
    payload: value,
  };
};

export const inputNumber = (value) => {
  return {
    type: "INPUT_NUMBER",
    payload: value,
  };
};

export const inputOperator = (value) => {
  return {
    type: "INPUT_OPERATOR",
    payload: value,
  };
};

export const clearCalculations = () => {
  return {
    type: "CLEAR_CALCULATIONS",
  };
};

export const setResult = (value) => {
  return {
    type: "SET_RESULT",
    payload: value,
  };
};
