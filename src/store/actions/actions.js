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
