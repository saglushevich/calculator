export const isOperator = (value) => value.match(/[+\-*/%]/g);

export const getOperatorePriority = (value) => {
  if (value === "+" || value === "-") {
    return 1;
  }
  return 2;
};
